import requests
import time

def ping_url():
    url = 'https://opportunity-api-ybe0.onrender.com/api'
    try:
        response = requests.get(url)
        if response.status_code == 200:
            print('Ping bem-sucedido em', time.strftime('%Y-%m-%d %H:%M:%S'))
        else:
            print('Erro no ping:', response.status_code, response.reason)
    except requests.RequestException as e:
        print('Erro ao fazer ping:', e)

# Realiza o ping a cada 5 minutos (300 segundos)
while True:
    ping_url()
    time.sleep(240)
