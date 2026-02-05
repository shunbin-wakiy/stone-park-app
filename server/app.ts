import express, { type Request, type Response } from "express";
import path from "path";

const staticPath = path.resolve(process.cwd(), "dist", "public");

export function createApp() {
  const app = express();

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req: Request, res: Response) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  return app;
}
