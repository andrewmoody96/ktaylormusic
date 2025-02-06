const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res, next) => {
  try {
    let html = fs.readFileSync(path.resolve(root, "index.html"), "utf-8");

    // Transform HTML using Vite plugins.
    html = await viteServer.transformIndexHtml(req.url, html);

    res.send(html);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;
