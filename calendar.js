// Calendario ufficiale dei Gran Premi F1
const f1Calendar = [
  { name: "Grand Prix Bahrain 🇧🇭", circuit: "Bahrain International Circuit", date: "2026-03-08T16:00:00Z", laps: 57 },
  { name: "Grand Prix Saudi Arabia 🇸🇦", circuit: "Jeddah Corniche Circuit", date: "2026-03-22T18:00:00Z", laps: 50 },
  { name: "Grand Prix Australia 🇦🇺", circuit: "Albert Park Circuit", date: "2026-04-05T07:00:00Z", laps: 58 },
  { name: "Grand Prix Japan 🇯🇵", circuit: "Suzuka International Racing Course", date: "2026-04-19T06:00:00Z", laps: 53 },
  { name: "Grand Prix Miami 🇺🇸", circuit: "Miami International Autodrome", date: "2026-05-03T21:30:00Z", laps: 57 },
  { name: "Grand Prix Emilia Romagna 🇮🇹", circuit: "Autodromo Enzo e Dino Ferrari (Imola)", date: "2026-05-17T15:00:00Z", laps: 63 },
  { name: "Grand Prix Monaco 🇲🇨", circuit: "Circuit de Monaco", date: "2026-05-24T15:00:00Z", laps: 78 },
  { name: "Grand Prix Spain 🇪🇸", circuit: "Circuit de Barcelona-Catalunya", date: "2026-06-07T15:00:00Z", laps: 66 },
  { name: "Grand Prix Canada 🇨🇦", circuit: "Circuit Gilles-Villeneuve", date: "2026-06-14T20:00:00Z", laps: 70 },
  { name: "Grand Prix Austria 🇦🇹", circuit: "Red Bull Ring", date: "2026-06-28T15:00:00Z", laps: 71 },
  { name: "Grand Prix United Kingdom 🇬🇧", circuit: "Silverstone Circuit", date: "2026-07-05T16:00:00Z", laps: 52 },
  { name: "Grand Prix Belgium 🇧🇪", circuit: "Circuit de Spa-Francorchamps", date: "2026-07-26T15:00:00Z", laps: 44 },
  { name: "Grand Prix Hungary 🇭🇺", circuit: "Hungaroring", date: "2026-08-02T15:00:00Z", laps: 70 },
  { name: "Grand Prix Netherlands 🇳🇱", circuit: "Circuit Zandvoort", date: "2026-08-30T15:00:00Z", laps: 72 },
  { name: "Grand Prix Italy 🇮🇹", circuit: "Autodromo Nazionale Monza", date: "2026-09-06T15:00:00Z", laps: 53 },
  { name: "Grand Prix Azerbaijan 🇦🇿", circuit: "Baku City Circuit", date: "2026-09-20T13:00:00Z", laps: 51 },
  { name: "Grand Prix Singapore 🇸🇬", circuit: "Marina Bay Street Circuit", date: "2026-10-04T14:00:00Z", laps: 62 },
  { name: "Grand Prix United States 🇺🇸", circuit: "Circuit of the Americas", date: "2026-10-18T21:00:00Z", laps: 56 },
  { name: "Grand Prix Mexico 🇲🇽", circuit: "Autódromo Hermanos Rodríguez", date: "2026-10-25T20:00:00Z", laps: 71 },
  { name: "Grand Prix Brazil 🇧🇷", circuit: "Autódromo José Carlos Pace (Interlagos)", date: "2026-11-08T17:00:00Z", laps: 71 },
  { name: "Grand Prix Las Vegas 🇺🇸", circuit: "Las Vegas Strip Circuit", date: "2026-11-22T06:00:00Z", laps: 50 },
  { name: "Grand Prix Qatar 🇶🇦", circuit: "Lusail International Circuit", date: "2026-11-29T17:00:00Z", laps: 57 },
  { name: "Grand Prix Abu Dhabi 🇦🇪", circuit: "Yas Marina Circuit", date: "2026-12-06T13:00:00Z", laps: 58 }
];

// Trova la prossima gara basandosi sull'ora attuale
function getNextRace() {
  const now = new Date();
  return f1Calendar.find(race => new Date(race.date) > now) || f1Calendar[f1Calendar.length - 1];
}
