```
/projeto
│
├── /public
│   ├── /imagens
│   │   ├── Bandeira de Angola.jpeg
│   │   └── imagem2.png
│   └── index.html
└── server.js
```

```javascript
const express = require('express');
const app = express();
const path = require('path');

// Configurando a pasta pública para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Resto do código...
```