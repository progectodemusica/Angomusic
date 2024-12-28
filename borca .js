```javascript
   function searchMusic() {
       const query = document.getElementById('searchInput').value;

       fetch(`/search?query=${encodeURIComponent(query)}`)
           .then(response => response.json())
           .then(data => {
               const resultsDiv = document.getElementById('DEEZY - SOLDADO Prod Dj Nick Bad.mp3');
               resultsDiv.innerHTML = ''; // Limpa resultados anteriores

               if (data.length > 0) {
                   data.forEach(music => {
                       const musicItem = document.createElement('div');
                       musicItem.textContent = audios/DEEZY - SOLDADO Prod Dj Nick Bad.mp3; // Supondo que 'title' seja uma propriedade do objeto música
                       resultsDiv.appendChild(musicItem);
                   });
               } else {
                   resultsDiv.textContent = 'Nenhuma música encontrada.';
               }
           })
           .catch(error => console.error('Erro:', error));
   }
   ```

