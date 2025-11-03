import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-16">
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-sm text-muted-foreground mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Self-paced chess mastery
          </div>
          
          <p className="text-4xl md:text-5xl font-bold tracking-tight">
            Learn chess through patterns,
            <br />
            not pressure
          </p>
          
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Explore openings, master tactics, and build your chess intuition in a practice playground—no timers, no opponents, just pure learning.
          </p>
          
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" className="gap-2">
              Start Practicing
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Openings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
