import type { SVGProps } from "react";
import { useDraggable } from "@dnd-kit/core";

import { UNICODE_PIECES } from "@/constants/chess";
import { cn } from "@/lib/utils";
import { WhitePawn } from "./icons/wp";
import { BlackPawn } from "./icons/bp";
import { WhiteKnight } from "./icons/wn";
import { BlackKnight } from "./icons/bn";
import { WhiteRook } from "./icons/wr";
import { BlackRook } from "./icons/br";
import { WhiteBishop } from "./icons/wb";
import { WhiteKing } from "./icons/wk";
import { WhiteQueen } from "./icons/wq";
import { BlackBishop } from "./icons/bb";
import { BlackKing } from "./icons/bk";
import { BlackQueen } from "./icons/bq";
import { useIsMobile } from "@/hooks/use-mobile";

// Map piece keys to SVG React components
const PieceComponents: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
	wp: WhitePawn,
	wr: WhiteRook,
	wn: WhiteKnight,
	wb: WhiteBishop,
	wk: WhiteKing,
	wq: WhiteQueen,
	bp: BlackPawn,
	br: BlackRook,
	bn: BlackKnight,
	bb: BlackBishop,
	bk: BlackKing,
	bq: BlackQueen,
};

export function Piece({ id, symbol }: { id: string; symbol: string }) {
	const isMobile = useIsMobile();

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

	const SvgPiece = PieceComponents[symbol];

	return (
		<div
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			style={style}
			className="w-full h-full flex items-center justify-center select-none cursor-grab active:cursor-grabbing"
		>
			{SvgPiece ? (
				<SvgPiece
					width={isMobile ? 30 : 60}
					height={isMobile ? 30 : 60}
				/>
			) : (
				<div
					className={cn(
						"text-xl md:text-4xl font-bold",
						symbol[0] === "w" ? "text-white" : "text-black",
					)}
				>
					{UNICODE_PIECES[symbol]}
				</div>
			)}
		</div>
	);
}
