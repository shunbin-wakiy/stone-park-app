import express, { type Request, type Response } from "express";
import fs from "node:fs";
import path from "node:path";

const staticPath = path.resolve(process.cwd(), "dist", "public");
const indexHtmlPath = path.join(staticPath, "index.html");

export function createApp() {
  const app = express();

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res: Response) => {
    const html = fs.readFileSync(indexHtmlPath, "utf-8");
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  });

  return app;
}
