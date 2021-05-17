
const express = require('express');
const app = express();
app.use(express.static('./dist/pokedex'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/pokedex/'}
);
});
app.listen(process.env.PORT || 8090);
console.log('server listening on port 8090')

