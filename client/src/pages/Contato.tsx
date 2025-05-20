import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const extendedContactSchema = contactFormSchema.extend({
  name: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().min(10, { message: "Telefone inválido" }),
  company: z.string().min(2, { message: "Nome da empresa é obrigatório" }),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }).max(500, { message: "Mensagem não pode exceder 500 caracteres" })
});

type ContactFormValues = z.infer<typeof extendedContactSchema>;

const contactInfo = [
  {
    icon: <MapPin className="h-5 w-5 text-primary" />,
    title: "Endereço",
    details: [
      "Rua José de Picolli Mattei, 132",
      "Costa e Silva - Joinville/SC",
      "CEP: 89218-523"
    ]
  },
  {
    icon: <Phone className="h-5 w-5 text-primary" />,
    title: "Telefone",
    details: [
      "+55 (47) 9 8870-7685",
    ]
  },
  {
    icon: <Mail className="h-5 w-5 text-primary" />,
    title: "E-mail",
    details: [
      "contato@resolutemetas.com.br",
    ]
  },
  {
    icon: <Clock className="h-5 w-5 text-primary" />,
    title: "Horário de Atendimento",
    details: [
      "Segunda a Sexta: 08h às 18h",
      "Suporte Emergencial: 24/7"
    ]
  }
];

export default function Contato() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(extendedContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Mensagem enviada",
        description: "Entraremos em contato em breve!",
        variant: "default"
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Erro",
        description: "Não foi possível enviar sua mensagem. Tente novamente.",
        variant: "destructive"
      });
      console.error("Erro ao enviar formulário:", error);
    }
  });

  function onSubmit(values: ContactFormValues) {
    contactMutation.mutate(values);
  }

  return (
    <PageLayout 
      title="Entre em Contato" 
      subtitle="Nossa equipe está pronta para atender você"
    >
      <div className="grid md:grid-cols-5 gap-8">
        {/* Informações de contato */}
        <div className="md:col-span-2">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-3">
                  <div className="mt-1">{info.icon}</div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-base mb-1">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm">{detail}</p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          
        </div>
        
        {/* Formulário de contato */}
        <div className="md:col-span-3">
          <ScrollReveal>
            <div className="dark-glassmorphism p-6 rounded-lg">
              <h3 className="font-montserrat font-semibold text-lg mb-4">Envie sua mensagem</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Seu nome completo" 
                              {...field} 
                              className="bg-background/60 border-gray-700"
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
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="seu-email@exemplo.com" 
                              {...field} 
                              className="bg-background/60 border-gray-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="(00) 00000-0000" 
                              {...field} 
                              className="bg-background/60 border-gray-700"
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
                          <FormLabel>Empresa</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nome da sua empresa" 
                              {...field} 
                              className="bg-background/60 border-gray-700"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Como podemos ajudar?" 
                            className="min-h-[120px] bg-background/60 border-gray-700"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-secondary"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Enviando..." : "Enviar Mensagem"}
                  </Button>
                </form>
              </Form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </PageLayout>
  );
}