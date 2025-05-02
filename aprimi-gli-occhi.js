
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({ message: "APRIMI-GLI-OCCHI attivato da Kairos" })
  };
};
