import { LotteryResult } from "@/types/lottery";
import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface LotteryCardProps {
  lottery: LotteryResult;
}

export const LotteryCard = ({ lottery }: LotteryCardProps) => {
  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      verde: { bg: "bg-lottery-verde", text: "text-lottery-verde-foreground", border: "border-lottery-verde" },
      amarillo: { bg: "bg-lottery-amarillo", text: "text-lottery-amarillo-foreground", border: "border-lottery-amarillo" },
      "azul-oscuro": { bg: "bg-lottery-azul-oscuro", text: "text-lottery-azul-oscuro-foreground", border: "border-lottery-azul-oscuro" },
      "azul-claro": { bg: "bg-lottery-azul-claro", text: "text-lottery-azul-claro-foreground", border: "border-lottery-azul-claro" },
      lila: { bg: "bg-lottery-lila", text: "text-lottery-lila-foreground", border: "border-lottery-lila" },
      rojo: { bg: "bg-lottery-rojo", text: "text-lottery-rojo-foreground", border: "border-lottery-rojo" },
      naranja: { bg: "bg-lottery-naranja", text: "text-lottery-naranja-foreground", border: "border-lottery-naranja" },
      celeste: { bg: "bg-lottery-celeste", text: "text-lottery-celeste-foreground", border: "border-lottery-celeste" },
      zapote: { bg: "bg-lottery-zapote", text: "text-lottery-zapote-foreground", border: "border-lottery-zapote" },
      zanahoria: { bg: "bg-lottery-zanahoria", text: "text-lottery-zanahoria-foreground", border: "border-lottery-zanahoria" },
    };
    return colorMap[color] || colorMap.verde;
  };

  const colors = getColorClasses(lottery.color);

  return (
    <Card className={cn("overflow-hidden border-2 transition-all hover:shadow-lg", colors.border)}>
      <div className={cn("p-4", colors.bg, colors.text)}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">{lottery.name}</h3>
          {lottery.logo && (
            <img src={lottery.logo} alt={lottery.name} className="h-10 w-auto object-contain" />
          )}
        </div>
        <div className="flex items-center gap-4 text-sm opacity-90">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{lottery.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{lottery.time}</span>
          </div>
        </div>
      </div>
      <div className="p-6 bg-card">
        <div className="flex justify-center gap-3 flex-wrap">
          {lottery.numbers.map((number, index) => (
            <div
              key={index}
              className={cn(
                "h-16 w-16 rounded-full flex items-center justify-center text-xl font-bold shadow-md transition-transform hover:scale-110",
                colors.bg,
                colors.text
              )}
            >
              {number}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
