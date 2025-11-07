import { PIECE_SYMBOLS } from "@/constants/chess";
import { useChessStore } from "@/store/chess-store";

function useCapturedPiecesRenderer() {
	const { capturedPieces } = useChessStore();

	const renderCapturedPieces = (color: "w" | "b") => {
		const counts = new Map<string, number>();

		return capturedPieces[color].map((piece) => {
			const current = counts.get(piece) ?? 0;
			counts.set(piece, current + 1);
			const key = `${color}-${piece}-${current}`;
			return (
				<span key={key} className="text-2xl mx-1">
					{PIECE_SYMBOLS[piece] || piece}
				</span>
			);
		});
	};

	return { capturedPieces, renderCapturedPieces };
}

export function WhiteCaptured() {
	const { capturedPieces, renderCapturedPieces } =
		useCapturedPiecesRenderer();
	return (
		<div className="px-3 py-2 rounded border bg-muted flex flex-wrap items-center">
			{capturedPieces.b.length > 0 ? (
				renderCapturedPieces("b")
			) : (
				<span className="text-sm text-muted-foreground">None</span>
			)}
		</div>
	);
}

export function BlackCaptured() {
	const { capturedPieces, renderCapturedPieces } =
		useCapturedPiecesRenderer();

	return (
		<div className="px-3 py-2 rounded border bg-muted flex flex-wrap items-center">
			{capturedPieces.w.length > 0 ? (
				renderCapturedPieces("w")
			) : (
				<span className="text-sm text-muted-foreground">None</span>
			)}
		</div>
	);
}
