const https = require('https');

// Função para fazer a requisição GET à URL
const pingURL = () => {
  const options = {
    method: 'GET',
    hostname: 'opportunity-api-ybe0.onrender.com',
    path: '/api'
  };

  const req = https.request(options, (res) => {
    if (res.statusCode === 200) {
      console.log('Ping bem-sucedido em', new Date().toLocaleString());
    } else {
      console.error('Erro no ping:', res.statusCode, res.statusMessage);
    }
  });

  req.on('error', (error) => {
    console.error('Erro ao fazer ping:', error.message);
  });

  req.end();
};

// Realiza o ping a cada 5 minutos (300.000 milissegundos)
setInterval(pingURL, 300000);
