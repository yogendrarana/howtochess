import { cn } from "@/lib/utils";
import LogoImage from "@/assets/howtochess.png";

export function Logo({
	showName = false,
	className,
}: {
	showName?: boolean;
	className?: string;
}) {
	return (
		<div className={cn("flex items-center gap-2 select-none", className)}>
			<img
				src={LogoImage}
				alt="How to Chess logo"
				className="w-10 h-10 rounded-md object-cover border"
			/>

			{showName && <span className="font-semibold">How to Chess</span>}
		</div>
	);
}
