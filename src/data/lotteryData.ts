import { LotteryResult } from "@/types/lottery";

// Mock data - En producción, esto vendría de una API real
export const getLotteryResults = (): LotteryResult[] => {
  const currentDate = new Date().toLocaleDateString('es-DO', { day: '2-digit', month: '2-digit', year: 'numeric' });
  
  return [
    // Verdes: Juega Pega, Lotería Nacional, Gana Más
    {
      id: "gana-mas",
      name: "Gana Más",
      color: "verde",
      numbers: ["95", "31", "57"],
      date: currentDate,
      time: "12:30 PM",
    },
    {
      id: "nacional-noche",
      name: "Lotería Nacional Noche",
      color: "verde",
      numbers: ["97", "79", "36"],
      date: currentDate,
      time: "09:00 PM",
    },
    {
      id: "juega-pega",
      name: "Juega + Pega +",
      color: "verde",
      numbers: ["45", "87", "22"],
      date: currentDate,
      time: "07:30 PM",
    },
    
    // Amarillo: Leidsa y derivados
    {
      id: "leidsa",
      name: "Leidsa",
      color: "amarillo",
      numbers: ["23", "56", "89"],
      date: currentDate,
      time: "12:55 PM",
    },
    {
      id: "quiniela-leidsa",
      name: "Quiniela Leidsa",
      color: "amarillo",
      numbers: ["12", "45", "78"],
      date: currentDate,
      time: "06:00 PM",
    },
    {
      id: "loto-leidsa",
      name: "Loto Leidsa",
      color: "amarillo",
      numbers: ["03", "15", "28", "34", "42", "48"],
      date: currentDate,
      time: "08:55 PM",
    },
    
    // Azul Oscuro: Lotería Real y derivados
    {
      id: "real-tarde",
      name: "Quiniela Real Tarde",
      color: "azul-oscuro",
      numbers: ["34", "67", "12"],
      date: currentDate,
      time: "12:30 PM",
    },
    {
      id: "real-noche",
      name: "Quiniela Real Noche",
      color: "azul-oscuro",
      numbers: ["56", "89", "23"],
      date: currentDate,
      time: "07:30 PM",
    },
    {
      id: "loto-real",
      name: "Loto Real",
      color: "azul-oscuro",
      numbers: ["07", "19", "24", "31", "38", "45"],
      date: currentDate,
      time: "09:00 PM",
    },
    
    // Azul Claro: Loteka y derivados
    {
      id: "loteka",
      name: "Loteka",
      color: "azul-claro",
      numbers: ["45", "23", "67"],
      date: currentDate,
      time: "12:55 PM",
    },
    {
      id: "loteka-noche",
      name: "Loteka Noche",
      color: "azul-claro",
      numbers: ["89", "34", "12"],
      date: currentDate,
      time: "07:55 PM",
    },
    {
      id: "loto-pool",
      name: "Loto Pool",
      color: "azul-claro",
      numbers: ["07", "11", "21", "27", "33", "42"],
      date: currentDate,
      time: "08:30 PM",
    },
    
    // Lila: Lotería Americana y derivados
    {
      id: "florida-dia",
      name: "Florida Día",
      color: "lila",
      numbers: ["123", "456"],
      date: currentDate,
      time: "01:30 PM",
    },
    {
      id: "florida-tarde",
      name: "Florida Tarde",
      color: "lila",
      numbers: ["789", "234"],
      date: currentDate,
      time: "06:30 PM",
    },
    {
      id: "florida-noche",
      name: "Florida Noche",
      color: "lila",
      numbers: ["567", "890"],
      date: currentDate,
      time: "11:30 PM",
    },
    {
      id: "new-york",
      name: "New York",
      color: "lila",
      numbers: ["345", "678"],
      date: currentDate,
      time: "10:30 PM",
    },
    
    // Rojo: La Primera y derivados
    {
      id: "la-primera",
      name: "La Primera",
      color: "rojo",
      numbers: ["23", "45", "67"],
      date: currentDate,
      time: "12:30 PM",
    },
    {
      id: "primera-noche",
      name: "La Primera Noche",
      color: "rojo",
      numbers: ["89", "12", "34"],
      date: currentDate,
      time: "06:30 PM",
    },
    {
      id: "quinielon-dia",
      name: "El Quinielón Día",
      color: "rojo",
      numbers: ["56", "78", "90"],
      date: currentDate,
      time: "01:00 PM",
    },
    {
      id: "quinielon-noche",
      name: "El Quinielón Noche",
      color: "rojo",
      numbers: ["12", "34", "56"],
      date: currentDate,
      time: "07:00 PM",
    },
    
    // Naranja: La Suerte
    {
      id: "la-suerte",
      name: "La Suerte",
      color: "naranja",
      numbers: ["34", "56", "78"],
      date: currentDate,
      time: "01:00 PM",
    },
    {
      id: "suerte-noche",
      name: "La Suerte Noche",
      color: "naranja",
      numbers: ["90", "12", "34"],
      date: currentDate,
      time: "08:00 PM",
    },
    
    // Celeste: Lotedom
    {
      id: "lotedom",
      name: "Lotedom",
      color: "celeste",
      numbers: ["45", "67", "89"],
      date: currentDate,
      time: "12:30 PM",
    },
    {
      id: "lotedom-noche",
      name: "Lotedom Noche",
      color: "celeste",
      numbers: ["23", "45", "67"],
      date: currentDate,
      time: "07:30 PM",
    },
    
    // Zapote: Lotería Águila y derivados
    {
      id: "aguila",
      name: "Lotería Águila",
      color: "zapote",
      numbers: ["12", "34", "56"],
      date: currentDate,
      time: "01:00 PM",
    },
    {
      id: "aguila-noche",
      name: "Águila Noche",
      color: "zapote",
      numbers: ["78", "90", "12"],
      date: currentDate,
      time: "08:00 PM",
    },
    
    // Zanahoria: King Lottery y derivados
    {
      id: "king-lottery",
      name: "King Lottery",
      color: "zanahoria",
      numbers: ["34", "56", "78"],
      date: currentDate,
      time: "12:00 PM",
    },
    {
      id: "king-noche",
      name: "King Lottery Noche",
      color: "zanahoria",
      numbers: ["90", "23", "45"],
      date: currentDate,
      time: "09:00 PM",
    },
  ];
};
