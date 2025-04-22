import { pgTable, text, serial, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users schema (from original file)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Contact form schema (new schema)
export const contactForm = pgTable("contact_forms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  company: text("company").notNull(),
  message: text("message"),
  createdAt: text("created_at").notNull(),
});

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Número de telefone inválido" }),
  company: z.string().min(2, { message: "O nome da empresa é obrigatório" }),
  message: z.string().optional(),
});

export const insertContactFormSchema = createInsertSchema(contactForm).pick({
  name: true,
  email: true,
  phone: true,
  company: true,
  message: true,
});

// Export types
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactForm = z.infer<typeof insertContactFormSchema>;
export type ContactForm = typeof contactForm.$inferSelect;
