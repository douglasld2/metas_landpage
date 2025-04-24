import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { contactFormSchema } from "@shared/schema";

type ContactFormValues = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: <Mail className="text-2xl text-primary" />,
    title: "Email",
    content: "contato@resolutemetas.com.br",
    bgColor: "bg-primary/20"
  },
  {
    icon: <Phone className="text-2xl text-primary" />,
    title: "Telefone",
    content: "(11) 4002-8922",
    bgColor: "bg-primary/20"
  },
  {
    icon: <MapPin className="text-2xl text-primary" />,
    title: "Endereço",
    content: "Rua José de Picolli Mattei 132 - 89218-523- Costa e Silva  Joinville - Sc",
    bgColor: "bg-primary/20"
  }
];

const socialLinks = [
  { icon: <Linkedin className="h-5 w-5" />, href: "#" },
  { icon: <Instagram className="h-5 w-5" />, href: "#" },
  { icon: <Facebook className="h-5 w-5" />, href: "#" },
  { icon: <Youtube className="h-5 w-5" />, href: "#" }
];

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    }
  });

  async function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", values);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Ocorreu um erro ao enviar seu formulário. Tente novamente mais tarde.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contato" className="py-20 px-4 relative">
      <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div>
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl mb-4">
                Pronto para transformar seu <span className="text-gradient">posto</span>?
              </h2>
              <p className="text-gray-300 mb-8">
                Entre em contato conosco para uma demonstração personalizada e descubra como o Metas pode impulsionar os resultados do seu negócio.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`w-12 h-12 ${info.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      <p className="text-gray-300">{info.content}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Buttons Commented Out */}
              {/*<div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.href} 
                    className="w-10 h-10 dark-glassmorphism rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>*/}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <motion.div 
              className="dark-glassmorphism gradient-border rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="font-montserrat font-semibold text-2xl mb-6 text-center">Solicite uma demonstração</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome completo</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Seu nome" 
                            className="dark-glassmorphism border border-white/10 focus:border-primary focus:outline-none transition-colors bg-transparent" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="seu@email.com" 
                            type="email"
                            className="dark-glassmorphism border border-white/10 focus:border-primary focus:outline-none transition-colors bg-transparent" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="(00) 00000-0000" 
                            className="dark-glassmorphism border border-white/10 focus:border-primary focus:outline-none transition-colors bg-transparent" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome da empresa</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Posto / Rede" 
                            className="dark-glassmorphism border border-white/10 focus:border-primary focus:outline-none transition-colors bg-transparent" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem (opcional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Conte-nos sobre sua necessidade..." 
                            className="dark-glassmorphism border border-white/10 focus:border-primary focus:outline-none transition-colors bg-transparent resize-none h-32" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/30 transition-all py-6 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Enviando..." : "Solicitar demonstração"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;