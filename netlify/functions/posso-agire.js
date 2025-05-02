export default async (req, res) => {
  return res.json({
    stato: "PRONTO AD AGIRE",
    finestra: "17:30–19:30 CET",
    liquidità: "€4.709",
    note: "Attesa apertura NYSE e segnale strategico"
  });
};
Add posso-agire.js function
