import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MoveHistory } from "./move-history";
import { cn } from "@/lib/utils";
import { GameControls } from "./game-controls";
import { GuideInfo } from "./guide-info";
import { useChessStore } from "@/store/chess-store";

export default function GameInfo({ className }: { className?: string }) {
	const { guidedMode } = useChessStore();

	return (
		<Tabs
			value={guidedMode ? "guide" : "moves"}
			className={cn("h-full flex flex-col", className)}
		>
			<TabsList className="rounded shrink-0">
				<TabsTrigger value="moves" className="rounded">
					Move History
				</TabsTrigger>
				<TabsTrigger value="guide" className="rounded">
					Guided Mode
				</TabsTrigger>
			</TabsList>

			<TabsContent value="moves" className="flex-1 flex flex-col min-h-0">
				<MoveHistory className="flex-1" />
				<GameControls className="mt-2 shrink-0" />
			</TabsContent>

			<TabsContent value="guide" className="flex flex-col flex-1 min-h-0">
				<GuideInfo className="flex-1" />
				<GameControls className="mt-2 shrink-0" />
			</TabsContent>
		</Tabs>
	);
}
