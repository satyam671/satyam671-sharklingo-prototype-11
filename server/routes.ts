import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Server is running" });
  });

  // Simple static data endpoints for terms and quiz
  app.get("/api/terms", (req, res) => {
    // This would normally fetch from database
    // For now, return empty array since we removed database integration
    res.json([]);
  });

  app.get("/api/quiz/questions", (req, res) => {
    // This would normally fetch from database
    // For now, return empty array since we removed database integration
    res.json([]);
  });

  const httpServer = createServer(app);

  return httpServer;
}