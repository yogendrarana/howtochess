import React from "react";
import { useDroppable } from "@dnd-kit/core";

interface SquareProps {
	id: string;
	children?: React.ReactNode;
	isHighlighted: boolean;
	isLastMove: boolean;
	isSelected: boolean;
	onClick: () => void;
	isBoardFlipped: boolean;
}

export function Square({
	id,
	children,
	isHighlighted,
	isLastMove,
	isSelected,
	onClick,
	isBoardFlipped,
}: SquareProps) {
	const { setNodeRef, isOver } = useDroppable({ id });

	const isDark = (id.charCodeAt(0) + parseInt(id[1], 10)) % 2 === 0;
	const baseColor = isDark ? "bg-green-700" : "bg-green-200";

	let highlightColor = "";
	if (isSelected) {
		highlightColor = "bg-blue-400 bg-opacity-70";
	} else if (isLastMove) {
		highlightColor = "bg-yellow-400 bg-opacity-50";
	} else if (isHighlighted) {
		highlightColor = children
			? "bg-red-400 bg-opacity-50"
			: "bg-blue-300 bg-opacity-40";
	}

	return (
		<div
			ref={setNodeRef}
			className={`relative flex items-center justify-center w-16 h-16 cursor-pointer
        ${baseColor} 
        ${highlightColor}
        ${isOver ? "outline-4 outline-yellow-400" : ""}
        transition-colors duration-150
        ${isBoardFlipped ? "rotate-180" : ""}
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
