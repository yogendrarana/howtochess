import { ChevronRight } from "lucide-react";

import { Card } from "@/components/ui/card";

const openings = [
  {
    name: "Sicilian Defense",
    moves: "1.e4 c5",
    description: "The most popular and combative response to 1.e4",
    difficulty: "Intermediate",
  },
  {
    name: "Italian Game",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bc4",
    description: "Classical opening focusing on quick development",
    difficulty: "Beginner",
  },
  {
    name: "French Defense",
    moves: "1.e4 e6",
    description: "Solid defensive structure with counterattacking potential",
    difficulty: "Intermediate",
  },
  {
    name: "Queen's Gambit",
    moves: "1.d4 d5 2.c4",
    description: "Ancient opening offering a pawn for central control",
    difficulty: "Beginner",
  },
  {
    name: "King's Indian Defense",
    moves: "1.d4 Nf6 2.c4 g6",
    description: "Hypermodern defense allowing White's center",
    difficulty: "Advanced",
  },
  {
    name: "Ruy Lopez",
    moves: "1.e4 e5 2.Nf3 Nc6 3.Bb5",
    description: "One of the oldest and most classical openings",
    difficulty: "Intermediate",
  },
];

const difficultyColors = {
  Beginner: "text-accent",
  Intermediate: "text-blue-500",
  Advanced: "text-amber-500",
};

export const Openings = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Chess Opening Library</h2>
          <p className="text-muted-foreground">
            Master the fundamentals with our curated collection of essential openings
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {openings.map((opening) => (
            <Card
              key={opening.name}
              className="p-6 hover:border-accent/50 transition-all duration-200 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-accent transition-colors">
                    {opening.name}
                  </h3>
                  <code className="text-sm text-muted-foreground font-mono">
                    {opening.moves}
                  </code>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {opening.description}
              </p>
              
              <div className="flex items-center justify-between pt-3 border-t border-border">
                <span
                  className={`text-xs font-medium ${
                    difficultyColors[opening.difficulty as keyof typeof difficultyColors]
                  }`}
                >
                  {opening.difficulty}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
