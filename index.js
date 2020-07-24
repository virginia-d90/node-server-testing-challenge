const server = require('./api/server.js');

PORT = process.env.PORT || 5010;

server.listen(PORT, () => console.log(`\n Listening on port: ${PORT}\n`))