const fetch = require('node-fetch');

// Função para fazer a requisição GET à URL
const pingURL = async () => {
  try {
    const response = await fetch('https://opportunity-api-ybe0.onrender.com/api');
    
    if (response.ok) {
      console.log('Ping bem-sucedido em', new Date().toLocaleString());
    } else {
      console.error('Erro no ping:', response.statusText);
    }
  } catch (error) {
    console.error('Erro ao fazer ping:', error.message);
  }
};

// Realiza o ping a cada 5 minutos (300.000 milissegundos)
setInterval(pingURL, 300000);
