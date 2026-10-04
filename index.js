const http = require("http");
const server = http.createServer((req, res) => {
  res.end(
    "Hello Prathyusha!glad to see your first server creation on your own",
  );
});
server.listen(3001, () => {
  console.log("Server running on port 3001");
});
