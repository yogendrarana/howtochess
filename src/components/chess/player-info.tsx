import type { ReactNode } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

type PlayerInfoProps = {
	name: string;
	imageUrl?: string;
	children?: ReactNode;
	className?: string;
};

export function PlayerInfo({
	name,
	imageUrl,
	children,
	className,
}: PlayerInfoProps) {
	return (
		<div className={cn("flex gap-2 items-center", className)}>
			{/* Avatar (fixed square height) */}
			<Avatar className="w-16 h-16 rounded-md shrink-0 border">
				{imageUrl ? (
					<AvatarImage src={imageUrl} alt={`${name} avatar`} />
				) : (
					<AvatarFallback>{name[0]}</AvatarFallback>
				)}
			</Avatar>

			{/* Right side (same height as avatar) */}
			<div className="h-16 flex-1 flex flex-col justify-between">
				<span className="text-sm text-card-foreground">{name}</span>
				<div className="text-sm">{children}</div>
			</div>
		</div>
	);
}
