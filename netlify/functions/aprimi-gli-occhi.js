export default async (req, res) => {
  return res.json({
    messaggio: "Sistema Kairos sincronizzato. Radar attivo. Geopolitica USA–Ucraina in primo piano. Operatività guidata da Sigma e Alpha.",
    ora: new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" })
  });
};

Add aprimi-gli-occhi.js function
