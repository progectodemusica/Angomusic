```javascript
   const express = require('express');
   const app = express();
   const mysql = require('mysql');

   const db = mysql.createConnection({
       host: 'localhost',
       user: 'seu_usuario',
       password: 'sua_senha',
       database: 'seu_banco_de_dados'
   });

   app.get('/search', (req, res) => {
       const query = req.query.query;
       db.query(`SELECT * FROM musicas WHERE title LIKE ?`, [`%${query}%`], (error, results) => {
           if (error) throw error;
           res.json(results);
       });
   });

   app.listen(3000, () => {
       console.log('Servidor rodando na porta 3000');
   });
   ```

