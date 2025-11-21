export type LotteryColor = 
  | "verde"
  | "amarillo"
  | "azul-oscuro"
  | "azul-claro"
  | "lila"
  | "rojo"
  | "naranja"
  | "celeste"
  | "zapote"
  | "zanahoria";

export interface LotteryResult {
  id: string;
  name: string;
  color: LotteryColor;
  numbers: string[];
  date: string;
  time: string;
  logo?: string;
}

export interface LotteryGroup {
  name: string;
  color: LotteryColor;
  lotteries: LotteryResult[];
}
