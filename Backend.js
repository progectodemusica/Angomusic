```
meu-backend/
├── server.js
└── public/
    ├── seu-arquivo.html
    └── script.js
```


```javascript
// Função para buscar dados da API
async function buscarDados() {
    try {
        const response = await fetch('/api/dados');
        const data = await response.json();
        console.log(data); // Aqui você pode manipular os dados como precisar
        document.getElementById('resultado').innerText = data.mensagem; // Exibe a mensagem na página
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

// Chama a função quando a página carrega
window.onload = buscarDados;
```



```bash
npm install mongoose
```


```javascript
const mongoose = require('mongoose');

// Conexão com o MongoDB
mongoose.connect('sua_string_de_conexão_aqui', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));
```



```javascript
const mongoose = require('mongoose');

// Conexão com o MongoDB
mongoose.connect('sua_string_de_conexão_aqui', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Conectado ao MongoDB'))
.catch(err => console.error('Erro ao conectar ao MongoDB:', err));
```


```json
{
    "nome": "Exemplo",
    "descricao": "Descrição do exemplo"
}
```