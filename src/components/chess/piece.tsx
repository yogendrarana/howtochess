import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { UNICODE_PIECES } from "@/constants/chess";

interface PieceProps {
	id: string;
	symbol: string;
}

export function Piece({ id, symbol }: PieceProps) {
	const { attributes, listeners, setNodeRef, transform, isDragging } =
		useDraggable({
			id,
		});

	const style = {
		transform: transform
			? `translate3d(${transform.x}px, ${transform.y}px, 0)`
			: undefined,
		opacity: isDragging ? 0.5 : 1,
	};

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			className="w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
			style={style}
		>
			<div
				className={`text-4xl font-bold ${symbol[0] === "w" ? "text-white" : "text-black"}`}
			>
				{UNICODE_PIECES[symbol]}
			</div>
		</div>
	);
}
