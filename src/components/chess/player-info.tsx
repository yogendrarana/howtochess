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
		<div className={cn("flex gap-2", className)}>
			<Avatar className="w-10 h-10 rounded shrink-0 border">
				{imageUrl ? (
					<AvatarImage src={imageUrl} alt={`${name} avatar`} />
				) : (
					<AvatarFallback className="bg-transparent text-2xl rounded">
						{UNICODE_PIECES[`${color[0]}k`]}
					</AvatarFallback>
				)}
			</Avatar>

			{/* Allow captured pieces to wrap to new lines */}
			<div className="flex-1">{children}</div>
		</div>
	);
}
