import "dotenv/config";
import { createServer as createViteServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import compression from "compression";
import { fileURLToPath } from "node:url";
import express from "express";
import apiRoutes from "./routes/apiRoutes.cjs";
import userRoutes from "./routes/userRoutes.cjs";

const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: "custom",
  });

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression({ level: 3 }));
  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  // When the server restarts (for example after the user modifies
  // vite.config.js), `vite.middlewares` is still going to be the same
  // reference (with a new internal stack of Vite and plugin-injected
  // middlewares). The following is valid even after restarts.
  app.use(vite.middlewares);

  app.use("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.listen(process.env.PORT);
}

createServer();

// app.use("/api/", apiRoutes);

app.use("*", async (req, res, next) => {
  const url = req.originalUrl;

  try {
    // 1. Read index.html
    let template = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf-8"
    );

    // 2. Apply Vite HTML transforms. This injects the Vite HMR client,
    //    and also applies HTML transforms from Vite plugins, e.g. global
    //    preambles from @vitejs/plugin-react
    template = await vite.transformIndexHtml(url, template);

    // 3. Load the server entry. ssrLoadModule automatically transforms
    //    ESM source code to be usable in Node.js! There is no bundling
    //    required, and provides efficient invalidation similar to HMR.
    const { render } = await vite.ssrLoadModule("/src/entry-server.js");

    // 4. render the app HTML. This assumes entry-server.js's exported
    //     `render` function calls appropriate framework SSR APIs,
    //    e.g. ReactDOMServer.renderToString()
    const appHtml = await render(url);

    // 5. Inject the app-rendered HTML into the template.
    const html = template.replace(`<!--ssr-outlet-->`, () => appHtml);

    // 6. Send the rendered HTML back.
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (e) {
    // If an error is caught, let Vite fix the stack trace so it maps back
    // to your actual source code.
    vite.ssrFixStacktrace(e);
    next(e);
  }
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression({ level: 3 }));

app.use("/api/", apiRoutes);

// app.use("/*", userRoutes);

// app.get("/", async (req, res, next) => {
//   try {
//     let html = fs.readFileSync(path.resolve(root, "index.html"), "utf-8");

//     // Transform HTML using Vite plugins.
//     html = await viteServer.transformIndexHtml(req.url, html);

//     res.send(html);
//   } catch (e) {
//     return next(e);
//   }
// });

// app.listen(PORT, () => console.log(`App is live on port ${PORT}!`));
