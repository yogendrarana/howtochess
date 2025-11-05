import { PIECE_SYMBOLS } from "@/constants/chess";
import { useChessStore } from "@/store/chess-store";
import React from "react";

export function CapturedPieces() {
	const { capturedPieces } = useChessStore();

	const renderCapturedPieces = (color: "w" | "b") => {
		return capturedPieces[color].map((piece, index) => (
			<span key={index} className="text-2xl mx-1">
				{PIECE_SYMBOLS[piece] || piece}
			</span>
		));
	};

	return (
		<div className="bg-white border-2 rounded-lg p-4 shadow-sm">
			<div className="text-lg font-semibold mb-3 text-center">
				Captured Pieces
			</div>
			<div className="flex flex-col gap-3">
				<div className="flex flex-col gap-2">
					<div className="font-semibold text-gray-700">
						White Captured:
					</div>
					<div className="min-h-8 p-2 bg-gray-100 rounded border flex flex-wrap items-center">
						{capturedPieces.b.length > 0 ? (
							renderCapturedPieces("b")
						) : (
							<span className="text-gray-400">None</span>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div className="font-semibold text-gray-700">
						Black Captured:
					</div>
					<div className="min-h-8 p-2 bg-gray-100 rounded border flex flex-wrap items-center">
						{capturedPieces.w.length > 0 ? (
							renderCapturedPieces("w")
						) : (
							<span className="text-gray-400">None</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
