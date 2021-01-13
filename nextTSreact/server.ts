import { NextApiRequest, NextApiResponse } from "next";

const express = require("express");
const next = require("next");

const env = process.env.PORT || "";
const port = parseInt(env, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
  const server = express();

  server.get("/book/:id", (req: NextApiRequest, res: NextApiResponse) => {
    return app.render(req, res, "/book/:id", req.query);
  });

  server.all("*", (req: NextApiRequest, res: NextApiResponse) => {
    return handle(req, res);
  });

  server.listen(port, (err: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
