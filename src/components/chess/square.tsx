import type React from "react";
import { useDroppable } from "@dnd-kit/core";
import { cn } from "@/lib/utils";

interface SquareProps {
	id: string;
	children?: React.ReactNode;
	isHighlighted: boolean;
	isLastMove: boolean;
	isSelected: boolean;
	onClick: () => void;
	isBoardFlipped: boolean;
	className?: string;
	rank: number;
	file: string;
}

export function Square({
	id,
	children,
	isHighlighted,
	isLastMove,
	isSelected,
	onClick,
	isBoardFlipped,
	className,
	rank,
	file,
}: SquareProps) {
	const { setNodeRef, isOver } = useDroppable({ id });

	const isDark = (id.charCodeAt(0) + parseInt(id[1], 10)) % 2 === 0;
	const baseColor = isDark ? "bg-green-700" : "bg-green-200";

	return (
		<div
			ref={setNodeRef}
			onClick={onClick}
			onKeyDown={(event) => {
				if (event.key === "Enter" || event.key === " ") {
					onClick();
				}
			}}
			className={cn(
				"relative flex items-center justify-center cursor-pointer transition-colors duration-150",
				baseColor,
				{
					"outline-4 outline-yellow-500": isOver,
					"rotate-180": isBoardFlipped,
				},
				className,
			)}
		>
			{isHighlighted && !children && (
				<div className="w-4 h-4 bg-black bg-opacity-30 rounded-full" />
			)}

			{isSelected && (
				<div className="absolute inset-0 pointer-events-none">
					<div
						className={cn(
							"absolute top-5 left-5 w-3 h-3 border-t-3 border-l-3 rounded-tl-lg border-primary",
						)}
					/>
					<div
						className={cn(
							"absolute top-5 right-5 w-3 h-3 border-t-3 border-r-3 rounded-tr-lg border-primary",
						)}
					/>
					<div
						className={cn(
							"absolute bottom-5 left-5 w-3 h-3 border-b-3 border-l-3 rounded-bl-lg border-primary",
						)}
					/>
					<div
						className={cn(
							"absolute bottom-5 right-5 w-3 h-3 border-b-3 border-r-3 rounded-br-lg border-primary",
						)}
					/>
				</div>
			)}

			{rank === 1 && (
				<div className="absolute bottom-1 right-2 text-xs md:text-sm">
					{file}
				</div>
			)}

			{file === "a" && (
				<div className="absolute top-1 left-2 text-xs md:text-sm">
					{rank}
				</div>
			)}

			<div className="flex justify-center items-center">{children}</div>
		</div>
	);
}
