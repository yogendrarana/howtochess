import { DndContext, useDraggable, useDroppable, DragEndEvent } from "@dnd-kit/core";
import { Chess } from "chess.js";
import { useState, useEffect } from "react";

const ranks = [8, 7, 6, 5, 4, 3, 2, 1];
const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

interface PieceType {
  color: 'w' | 'b';
  type: 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
}

interface SquareProps {
  id: string;
  children?: React.ReactNode;
  isHighlighted: boolean;
  isLastMove: boolean;
  isSelected: boolean;
}

interface MoveHistory {
  fen: string;
  move: string;
  san: string;
  captured?: string;
}

interface CapturedPieces {
  w: string[];
  b: string[];
}

function squareId(file: string, rank: number) {
  return `${file}${rank}`;
}

export function ChessBoard() {
  const [game, setGame] = useState(new Chess());
  const [selectedSquare, setSelectedSquare] = useState<string | null>(null);
  const [validMoves, setValidMoves] = useState<string[]>([]);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);
  const [moveHistory, setMoveHistory] = useState<MoveHistory[]>([{ fen: game.fen(), move: '', san: 'Start' }]);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [isBoardFlipped, setIsBoardFlipped] = useState(false);
  const [playerColor, setPlayerColor] = useState<'both' | 'white' | 'black'>('both');
  const [capturedPieces, setCapturedPieces] = useState<CapturedPieces>({ w: [], b: [] });

  const position = game.board();

  // Get display ranks and files based on board orientation
  const displayRanks = isBoardFlipped ? [...ranks].reverse() : ranks;
  const displayFiles = isBoardFlipped ? [...files].reverse() : files;

  // Update valid moves when a square is selected
  useEffect(() => {
    if (selectedSquare) {
      const moves = game.moves({ square: selectedSquare, verbose: true });
      setValidMoves(moves.map(move => move.to));
    } else {
      setValidMoves([]);
    }
  }, [selectedSquare, game]);

  // Update captured pieces from move history
  useEffect(() => {
    const captured: CapturedPieces = { w: [], b: [] };
    
    moveHistory.forEach(history => {
      if (history.captured) {
        const color = history.captured === history.captured.toLowerCase() ? 'b' : 'w';
        captured[color].push(history.captured);
      }
    });
    
    setCapturedPieces(captured);
  }, [moveHistory]);

  const makeMove = (from: string, to: string, promotion: string = 'q') => {
    try {
      const copy = new Chess(game.fen());
      const piece = copy.get(from);
      
      // Check if move is a capture
      const targetPiece = copy.get(to);
      let capturedPiece: string | undefined;
      
      if (targetPiece) {
        capturedPiece = targetPiece.type;
        // Convert to symbol notation
        const pieceSymbols: { [key: string]: string } = {
          'p': 'p', 'n': 'n', 'b': 'b', 'r': 'r', 'q': 'q', 'k': 'k'
        };
        capturedPiece = targetPiece.color === 'w' 
          ? pieceSymbols[targetPiece.type].toUpperCase()
          : pieceSymbols[targetPiece.type];
      }

      const move = copy.move({
        from,
        to,
        promotion
      });

      if (move) {
        setGame(copy);
        setLastMove({ from, to });
        setSelectedSquare(null);
        
        // Update move history - remove any future moves if we're not at the end
        const newHistory = moveHistory.slice(0, currentMoveIndex + 1);
        newHistory.push({
          fen: copy.fen(),
          move: `${from}-${to}`,
          san: move.san,
          captured: capturedPiece
        });
        setMoveHistory(newHistory);
        setCurrentMoveIndex(newHistory.length - 1);
        
        // Check for game end
        if (copy.isGameOver()) {
          if (copy.isCheckmate()) {
            setTimeout(() => alert(`Checkmate! ${copy.turn() === 'w' ? 'Black' : 'White'} wins!`), 100);
          } else if (copy.isDraw()) {
            setTimeout(() => alert("Game drawn!"), 100);
          }
        }
        return true;
      }
    } catch (e) {
      console.error("Invalid move:", e);
    }
    return false;
  };

  const handleSquareClick = (square: string) => {
    // If we're viewing history, return to current position first
    if (currentMoveIndex < moveHistory.length - 1) {
      goToMove(moveHistory.length - 1);
      return;
    }

    // Check if player can move this piece based on playerColor setting
    const piece = game.get(square);
    if (playerColor !== 'both' && piece) {
      if (playerColor === 'white' && piece.color !== 'w') return;
      if (playerColor === 'black' && piece.color !== 'b') return;
    }

    // If no square is selected and there's a piece on the clicked square
    if (!selectedSquare) {
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
      }
      return;
    }

    // If clicking the same square, deselect
    if (selectedSquare === square) {
      setSelectedSquare(null);
      return;
    }

    // If clicking a different square, try to move
    const moveMade = makeMove(selectedSquare, square);
    
    if (!moveMade) {
      // If invalid move, select the new square if it has a piece of current turn
      if (piece && piece.color === game.turn()) {
        setSelectedSquare(square);
      } else {
        setSelectedSquare(null);
      }
    }
  };

  const handleDragEnd = (e: DragEndEvent) => {
    // If we're viewing history, return to current position first
    if (currentMoveIndex < moveHistory.length - 1) {
      goToMove(moveHistory.length - 1);
      return;
    }

    const from = e.active.id as string;
    const to = e.over?.id as string;

    if (to && from !== to) {
      makeMove(from, to);
    }
  };

  const goToMove = (index: number) => {
    const historyEntry = moveHistory[index];
    const tempGame = new Chess(historyEntry.fen);
    setGame(tempGame);
    setCurrentMoveIndex(index);
    setSelectedSquare(null);
    setValidMoves([]);
    
    // Set last move if it's not the first position
    if (index > 0) {
      const prevEntry = moveHistory[index - 1];
      const currentEntry = moveHistory[index];
      // Extract from/to from the move string (format: "e2-e4")
      const [from, to] = currentEntry.move.split('-');
      if (from && to) {
        setLastMove({ from, to });
      } else {
        setLastMove(null);
      }
    } else {
      setLastMove(null);
    }
  };

  // Navigation through moves (forward/backward)
  const goBackward = () => {
    if (currentMoveIndex > 0) {
      goToMove(currentMoveIndex - 1);
    }
  };

  const goForward = () => {
    if (currentMoveIndex < moveHistory.length - 1) {
      goToMove(currentMoveIndex + 1);
    }
  };

  // Remove moves (undo from current position)
  const removeLastMove = () => {
    if (currentMoveIndex > 0) {
      // Remove all moves after the current position
      const newHistory = moveHistory.slice(0, currentMoveIndex);
      setMoveHistory(newHistory);
      setCurrentMoveIndex(newHistory.length - 1);
      
      // Update game state to the new current position
      const tempGame = new Chess(newHistory[newHistory.length - 1].fen);
      setGame(tempGame);
      setSelectedSquare(null);
      setValidMoves([]);
      
      // Update last move
      if (newHistory.length > 1) {
        const lastMoveEntry = newHistory[newHistory.length - 1];
        const [from, to] = lastMoveEntry.move.split('-');
        if (from && to) {
          setLastMove({ from, to });
        } else {
          setLastMove(null);
        }
      } else {
        setLastMove(null);
      }
    }
  };

  const removeMultipleMoves = (count: number) => {
    if (currentMoveIndex >= count) {
      const newHistory = moveHistory.slice(0, moveHistory.length - count);
      setMoveHistory(newHistory);
      setCurrentMoveIndex(newHistory.length - 1);
      
      const tempGame = new Chess(newHistory[newHistory.length - 1].fen);
      setGame(tempGame);
      setSelectedSquare(null);
      setValidMoves([]);
      
      if (newHistory.length > 1) {
        const lastMoveEntry = newHistory[newHistory.length - 1];
        const [from, to] = lastMoveEntry.move.split('-');
        if (from && to) {
          setLastMove({ from, to });
        } else {
          setLastMove(null);
        }
      } else {
        setLastMove(null);
      }
    }
  };

  const resetGame = () => {
    setGame(new Chess());
    setSelectedSquare(null);
    setValidMoves([]);
    setLastMove(null);
    setMoveHistory([{ fen: (new Chess()).fen(), move: '', san: 'Start' }]);
    setCurrentMoveIndex(0);
    setCapturedPieces({ w: [], b: [] });
  };

  const toggleBoardOrientation = () => {
    setIsBoardFlipped(!isBoardFlipped);
  };

  const handlePlayerColorChange = (color: 'both' | 'white' | 'black') => {
    setPlayerColor(color);
    // Auto-flip board when choosing to play as black
    if (color === 'black') {
      setIsBoardFlipped(true);
    } else if (color === 'white') {
      setIsBoardFlipped(false);
    }
  };

  const getGameStatus = () => {
    if (game.isCheckmate()) return `Checkmate! ${game.turn() === 'w' ? 'Black' : 'White'} wins!`;
    if (game.isDraw()) {
      if (game.isStalemate()) return "Stalemate! Game drawn!";
      if (game.isThreefoldRepetition()) return "Threefold repetition! Game drawn!";
      if (game.isInsufficientMaterial()) return "Insufficient material! Game drawn!";
      return "Game drawn!";
    }
    if (game.isCheck()) return `Check! ${game.turn() === 'w' ? 'White' : 'Black'} to move.`;
    return `${game.turn() === 'w' ? 'White' : 'Black'} to move`;
  };

  const canGoBackward = currentMoveIndex > 0;
  const canGoForward = currentMoveIndex < moveHistory.length - 1;
  const canRemoveMove = currentMoveIndex > 0;
  const isViewingHistory = currentMoveIndex < moveHistory.length - 1;

  // Function to render captured pieces
  const renderCapturedPieces = (color: 'w' | 'b') => {
    const pieceSymbols: { [key: string]: string } = {
      'p': '♙', 'n': '♘', 'b': '♗', 'r': '♖', 'q': '♕', 'k': '♔',
      'P': '♟', 'N': '♞', 'B': '♝', 'R': '♜', 'Q': '♛', 'K': '♚'
    };

    return capturedPieces[color].map((piece, index) => (
      <span key={index} className="text-2xl mx-1">
        {pieceSymbols[piece] || piece}
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <div className="flex items-center justify-between w-full max-w-6xl">
        <div className="text-xl font-semibold">
          {getGameStatus()}
          {isViewingHistory && <span className="ml-2 text-orange-500 text-base">(Viewing History)</span>}
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg">
            <span className="font-semibold">Play as:</span>
            <select 
              value={playerColor}
              onChange={(e) => handlePlayerColorChange(e.target.value as 'both' | 'white' | 'black')}
              className="px-3 py-1 border rounded-md"
            >
              <option value="both">Both Colors</option>
              <option value="white">White Only</option>
              <option value="black">Black Only</option>
            </select>
          </div>
          <button
            onClick={toggleBoardOrientation}
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors text-lg"
          >
            {isBoardFlipped ? '↑ White View' : '↓ Black View'}
          </button>
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg"
          >
            New Game
          </button>
        </div>
      </div>
      
      {/* Main content area with board and move history */}
      <div className="flex gap-8 w-full max-w-6xl">
        {/* Left side - Board and controls */}
        <div className="flex flex-col gap-4">
          {/* Move Navigation Controls */}
          <div className="flex flex-col gap-4 w-[640px]">
            {/* Navigation through moves */}
            <div className="flex gap-3 items-center justify-center">
              <div className="text-lg font-semibold mr-4">Navigate Moves:</div>
              <button
                onClick={() => goToMove(0)}
                disabled={!canGoBackward}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
              >
                ↞ Start
              </button>
              <button
                onClick={goBackward}
                disabled={!canGoBackward}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
              >
                ← Previous
              </button>
              
              <div className="mx-3 text-lg font-mono bg-gray-100 px-4 py-2 rounded-lg min-w-[100px] text-center border">
                {currentMoveIndex === 0 ? 'Start' : `Move ${Math.ceil(currentMoveIndex / 2)}`}
              </div>
              
              <button
                onClick={goForward}
                disabled={!canGoForward}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
              >
                Next →
              </button>
              <button
                onClick={() => goToMove(moveHistory.length - 1)}
                disabled={!canGoForward}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors text-lg"
              >
                Current ↠
              </button>
            </div>

            {/* Remove moves (undo) */}
            <div className="flex gap-3 items-center justify-center">
              <div className="text-lg font-semibold mr-4">Remove Moves:</div>
              <button
                onClick={removeLastMove}
                disabled={!canRemoveMove}
                className="px-4 py-2 bg-red-500 text-white rounded-lg disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-600 transition-colors text-lg"
              >
                Undo Last Move
              </button>
              <button
                onClick={() => removeMultipleMoves(2)}
                disabled={currentMoveIndex < 2}
                className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-700 transition-colors text-lg"
              >
                Undo 2 Moves
              </button>
              <button
                onClick={() => removeMultipleMoves(5)}
                disabled={currentMoveIndex < 5}
                className="px-4 py-2 bg-red-700 text-white rounded-lg disabled:bg-red-300 disabled:cursor-not-allowed hover:bg-red-800 transition-colors text-lg"
              >
                Undo 5 Moves
              </button>
            </div>
          </div>

          {/* Chess Board */}
          <DndContext onDragEnd={handleDragEnd}>
            <div className={`relative ${isBoardFlipped ? 'rotate-180' : ''}`}>
              {/* File labels (a-h) */}
              <div className="flex ml-14 mb-2">
                {displayFiles.map(file => (
                  <div key={file} className="w-16 h-8 flex items-center justify-center text-lg font-semibold">
                    {file}
                  </div>
                ))}
              </div>
              
              <div className="flex">
                {/* Rank labels (1-8) */}
                <div className="flex flex-col justify-around mr-2 w-8">
                  {displayRanks.map(rank => (
                    <div key={rank} className="h-16 flex items-center justify-center text-lg font-semibold">
                      {rank}
                    </div>
                  ))}
                </div>
                
                {/* Chess board */}
                <div className="grid grid-cols-8 w-[512px] h-[512px] border-4 border-gray-800 rounded-sm">
                  {displayRanks.map(rank =>
                    displayFiles.map(file => {
                      const id = squareId(file, rank);
                      return (
                        <Square
                          key={id}
                          id={id}
                          isHighlighted={validMoves.includes(id)}
                          isLastMove={lastMove?.from === id || lastMove?.to === id}
                          isSelected={selectedSquare === id}
                          onClick={() => handleSquareClick(id)}
                          isBoardFlipped={isBoardFlipped}
                        >
                          {renderPiece(file, rank, position, isBoardFlipped)}
                        </Square>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          </DndContext>
          
          <div className="text-base text-gray-600 w-[640px] break-all bg-gray-100 p-3 rounded-lg">
            <strong>FEN:</strong> {game.fen()}
          </div>
        </div>

        {/* Right side - Vertical move history and captured pieces */}
        <div className="flex flex-col gap-6 w-80">
          {/* Captured Pieces */}
          <div className="bg-white border-2 rounded-lg p-4 shadow-sm">
            <div className="text-lg font-semibold mb-3 text-center">Captured Pieces</div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-gray-700">White Captured:</div>
                <div className="min-h-8 p-2 bg-gray-100 rounded border flex flex-wrap items-center">
                  {capturedPieces.b.length > 0 ? renderCapturedPieces('b') : 
                   <span className="text-gray-400">None</span>}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-semibold text-gray-700">Black Captured:</div>
                <div className="min-h-8 p-2 bg-gray-100 rounded border flex flex-wrap items-center">
                  {capturedPieces.w.length > 0 ? renderCapturedPieces('w') : 
                   <span className="text-gray-400">None</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Vertical Move History */}
          <div className="bg-white border-2 rounded-lg p-4 shadow-sm flex-1">
            <div className="text-lg font-semibold mb-3 text-center">Move History</div>
            <div className="max-h-96 overflow-y-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left py-2 px-3">#</th>
                    <th className="text-left py-2 px-3">White</th>
                    <th className="text-left py-2 px-3">Black</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: Math.ceil((moveHistory.length - 1) / 2) }).map((_, index) => {
                    const whiteMove = moveHistory[index * 2 + 1];
                    const blackMove = moveHistory[index * 2 + 2];
                    
                    return (
                      <tr 
                        key={index}
                        className={`border-b hover:bg-gray-50 cursor-pointer ${
                          currentMoveIndex >= index * 2 + 1 && currentMoveIndex <= (blackMove ? index * 2 + 2 : index * 2 + 1) 
                            ? 'bg-blue-50' 
                            : ''
                        }`}
                        onClick={() => goToMove(blackMove ? index * 2 + 2 : index * 2 + 1)}
                      >
                        <td className="py-2 px-3 font-mono font-semibold">{index + 1}.</td>
                        <td className="py-2 px-3">
                          {whiteMove && (
                            <span className={whiteMove.captured ? 'text-red-600 font-semibold' : ''}>
                              {whiteMove.san}
                              {whiteMove.captured && ' †'}
                            </span>
                          )}
                        </td>
                        <td className="py-2 px-3">
                          {blackMove && (
                            <span className={blackMove.captured ? 'text-red-600 font-semibold' : ''}>
                              {blackMove.san}
                              {blackMove.captured && ' †'}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {moveHistory.length === 1 && (
                <div className="text-center text-gray-500 py-4">No moves yet</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Square({ id, children, isHighlighted, isLastMove, isSelected, onClick, isBoardFlipped }: SquareProps & { onClick: () => void; isBoardFlipped: boolean }) {
  const { setNodeRef, isOver } = useDroppable({ id });

  const isDark = (id.charCodeAt(0) + parseInt(id[1])) % 2 === 0;
  const baseColor = isDark ? "bg-green-700" : "bg-green-200";

  let highlightColor = "";
  if (isSelected) {
    highlightColor = "bg-blue-400 bg-opacity-70";
  } else if (isLastMove) {
    highlightColor = "bg-yellow-400 bg-opacity-50";
  } else if (isHighlighted) {
    highlightColor = children ? "bg-red-400 bg-opacity-50" : "bg-blue-300 bg-opacity-40";
  }

  return (
    <div
      ref={setNodeRef}
      className={`relative flex items-center justify-center w-16 h-16 cursor-pointer
        ${baseColor} 
        ${highlightColor}
        ${isOver ? "outline-4 outline-yellow-400 outline" : ""}
        transition-colors duration-150
        ${isBoardFlipped ? 'rotate-180' : ''}
      `}
      onClick={onClick}
    >
      {isHighlighted && !children && (
        <div className="w-4 h-4 bg-black bg-opacity-30 rounded-full" />
      )}
      {children}
    </div>
  );
}

function Piece({ id, symbol }: { id: string; symbol: string }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ 
    id,
    disabled: !id.startsWith(symbol[0]) // Disable dragging if not current player's turn
  });

  const style = {
    transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  const pieceNames: { [key: string]: string } = {
    'wp': 'white-pawn', 'wn': 'white-knight', 'wb': 'white-bishop', 'wr': 'white-rook', 'wq': 'white-queen', 'wk': 'white-king',
    'bp': 'black-pawn', 'bn': 'black-knight', 'bb': 'black-bishop', 'br': 'black-rook', 'bq': 'black-queen', 'bk': 'black-king'
  };

  // Using Unicode chess symbols as fallback
  const unicodePieces: { [key: string]: string } = {
    'wp': '♙', 'wn': '♘', 'wb': '♗', 'wr': '♖', 'wq': '♕', 'wk': '♔',
    'bp': '♟', 'bn': '♞', 'bb': '♝', 'br': '♜', 'bq': '♛', 'bk': '♚'
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
      style={style}
    >
      {/* If you have piece images */}
      {/* <img
        src={`/pieces/${pieceNames[symbol]}.png`}
        alt={symbol}
        className="w-14 h-14"
      /> */}
      
      {/* Fallback to Unicode characters */}
      <div className={`text-4xl font-bold ${symbol[0] === 'w' ? 'text-white' : 'text-black'}`}>
        {unicodePieces[symbol]}
      </div>
    </div>
  );
}

function renderPiece(file: string, rank: number, board: any[][], isBoardFlipped: boolean) {
  const row = 8 - rank;
  const col = files.indexOf(file);
  const piece = board[row]?.[col] as PieceType | null;
  
  if (!piece) return null;
  
  const id = squareId(file, rank);
  const symbol = `${piece.color}${piece.type}`;
  return <Piece id={id} symbol={symbol} />;
}