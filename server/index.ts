import express, { type Request } from "express";
import { createServer } from "http";
import fs from "node:fs";
import path from "node:path";
import { type ServerResponse } from "node:http";

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath = path.resolve(process.cwd(), "dist", "public");
  const indexHtmlPath = path.join(staticPath, "index.html");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res) => {
    const html = fs.readFileSync(indexHtmlPath, "utf-8");
    const nodeRes = res as unknown as ServerResponse;
    nodeRes.setHeader("Content-Type", "text/html; charset=utf-8");
    nodeRes.statusCode = 200;
    res.send(html);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
