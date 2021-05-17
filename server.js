
const express = require('express');
const app = express();
app.use(express.static('./dist/pokedex'));
app.get('*', (req, res) => {
  res.sendFile(path.join('dist/pokedex/index.html'));
});
app.listen(process.env.PORT || 8090);
console.log('server listening on port 8090')

