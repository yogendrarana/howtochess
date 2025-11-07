import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MoveHistory } from "./move-history";
import { cn } from "@/lib/utils";
import { GameControls } from "./game-controls";

export default function GameInfo({ className }: { className?: string }) {
	return (
		<Tabs defaultValue="moves" className={cn("h-full flex flex-col", className)}>
			<TabsList className="rounded shrink-0">
				<TabsTrigger value="moves" className="rounded">
					Move History
				</TabsTrigger>
				<TabsTrigger value="analysis" className="rounded">
					Analysis
				</TabsTrigger>
			</TabsList>

			<TabsContent value="moves" className="flex-1 flex flex-col min-h-0 mt-2">
				<MoveHistory className="flex-1 min-h-0" />
				<GameControls className="mt-2 shrink-0" />
			</TabsContent>

			<TabsContent value="analysis" className="flex-1 min-h-0 mt-2">
				Analysis
			</TabsContent>
		</Tabs>
	);
}
