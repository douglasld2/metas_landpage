
import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import { sendContactEmail } from './emailService';
import net from 'net';


export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint

  app.get('/api/ping', async (req: Request, res: Response) => {
    export const testSMTPConnection = () => {
      const socket = net.createConnection({ host: 'smtp.seudominio.com', port: 26 }, () => {
        console.log('✅ Conectado com sucesso à porta 26');
        socket.end();
      });

      socket.on('error', (err) => {
        console.error('❌ Erro na conexão:', err.message);
      });
    };
  });

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
      console.log(error)
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
          message: error.message,
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
