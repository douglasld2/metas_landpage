
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from './emailService';

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body against the schema
      const validatedData = contactFormSchema.parse(req.body);
      
      // Create a contact form submission in storage
      const result = await storage.createContactSubmission({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        message: validatedData.message || "",
        createdAt: new Date().toISOString(),
      });

      // Send email notification
      await sendContactEmail(validatedData);
      
      res.status(201).json({
        message: "Formulário de contato enviado com sucesso",
        id: result.id
      });
    } catch (error) {
      if (error instanceof Error) {
        // Handle validation errors
        if (error.name === "ZodError") {
          const validationError = fromZodError(error);
          return res.status(400).json({ 
            message: "Erro de validação", 
            errors: validationError.details
          });
        }
        
        // Handle other errors
        return res.status(500).json({ 
          message: "Erro ao processar solicitação",
          error: error.message 
        });
      }
      
      // Fallback error response
      res.status(500).json({ 
        message: "Erro interno do servidor" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
