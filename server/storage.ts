import { users, type User, type InsertUser, type InsertContactForm, type ContactForm } from "@shared/schema";

// Expand the interface with the new CRUD methods for contact form submissions
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contactForm: InsertContactForm): Promise<ContactForm>;
  getContactSubmissions(): Promise<ContactForm[]>;
  getContactSubmission(id: number): Promise<ContactForm | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactForms: Map<number, ContactForm>;
  private userCurrentId: number;
  private contactFormCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactForms = new Map();
    this.userCurrentId = 1;
    this.contactFormCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact form methods
  async createContactSubmission(insertContactForm: InsertContactForm): Promise<ContactForm> {
    const id = this.contactFormCurrentId++;
    const contactForm: ContactForm = { ...insertContactForm, id };
    this.contactForms.set(id, contactForm);
    return contactForm;
  }
  
  async getContactSubmissions(): Promise<ContactForm[]> {
    return Array.from(this.contactForms.values());
  }
  
  async getContactSubmission(id: number): Promise<ContactForm | undefined> {
    return this.contactForms.get(id);
  }
}

export const storage = new MemStorage();
