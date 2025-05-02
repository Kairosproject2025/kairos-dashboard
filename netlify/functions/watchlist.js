export default async (req, res) => {
  return res.json({
    attivi: ["QCOM", "COP", "NXT", "META", "MSCI", "NVIDIA"],
    segnali: "Monitoraggio breakout, supporti e radar Sigma"
  });
};

Add watchlist.js function
