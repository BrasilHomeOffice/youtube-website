const express = require("express");
const next = require("next");
const AWSXRay = require("aws-xray-sdk");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // server.get("/", (req, res) => {
    //   return app.render(req, res, "/", req.params);
    // });

    // server.get("/about", (req, res) => {
    //   return app.render(req, res, "/about", req.params);
    // });
    
    server.use(AWSXRay.express.openSegment("BrasilHomeOfficeYt"));
    server.use('/_next', express.static('_next'));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });

    server.use(AWSXRay.express.closeSegment());
  })
  .catch((ex) => {
    console.log(ex);
    process.exit(1);
  });
