import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { UNICODE_PIECES } from "@/constants/chess";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
	color,
}: PlayerInfoProps) {
	return (
		<div className={cn("flex gap-2 items-center", className)}>
			{/* Avatar (fixed square height) */}
			<Avatar className="w-12 h-12 rounded-md shrink-0 border">
				{imageUrl ? (
					<AvatarImage src={imageUrl} alt={`${name} avatar`} />
				) : (
					<AvatarFallback className="bg-transparent text-2xl rounded">
						{UNICODE_PIECES[`${color[0]}k`]}
					</AvatarFallback>
				)}
			</Avatar>

			{/* Right side */}
			<div className="h-12 flex-1 flex flex-col justify-between">
				{children}
			</div>
		</div>
	);
}
