import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { MoveHistory } from "./move-history";
import { cn } from "@/lib/utils";
import { GameControls } from "./game-controls";

export default function GameInfo({ className }: { className?: string }) {
	return (
		<Tabs defaultValue="moves" className={cn("h-full", className)}>
			<TabsList className="rounded">
				<TabsTrigger value="moves" className="rounded">
					Move History
				</TabsTrigger>
				<TabsTrigger value="analysis" className="rounded">
					Analysis
				</TabsTrigger>
			</TabsList>

			<TabsContent value="moves" className="flex flex-col">
				<MoveHistory className="p-2" />
				<GameControls className="mt-2 " />
			</TabsContent>

			<TabsContent value="analysis" className="w-full flex-1">
				Analysis
			</TabsContent>
		</Tabs>
	);
}
