import type { ReactNode } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { UNICODE_PIECES } from "@/constants/chess";

type PlayerInfoProps = {
	name: string;
	imageUrl?: string;
	children?: ReactNode;
	className?: string;
	color: "white" | "black";
};

export function PlayerInfo({
	name,
	imageUrl,
	children,
	className,
	color
}: PlayerInfoProps) {
	return (
		<div className={cn("flex gap-2 items-center", className)}>
			{/* Avatar (fixed square height) */}
			<Avatar className="w-14 h-14 rounded-md shrink-0 border">
				{imageUrl ? (
					<AvatarImage src={imageUrl} alt={`${name} avatar`} />
				) : (
					<AvatarFallback className="bg-transparent">{UNICODE_PIECES[`${color[0]}k`]}</AvatarFallback>
				)}
			</Avatar>

			{/* Right side */}
			<div className="h-14 flex-1 flex flex-col justify-between">
				{children}
			</div>
		</div>
	);
}
