const express = require("express");
const next = require("next");

const env = process.env.PORT || "";
const port = parseInt(env, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const router = express.Router();

router.get("/:id", (req, res) => {
  return app.render(req, res, "/book", {
    id: req.params.id,
  });
});

app.prepare().then(() => {
  const server = express();

  server.use("/book", router);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
