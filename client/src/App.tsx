import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";

// Páginas
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import Suporte from "@/pages/Suporte";
import Ajuda from "@/pages/Ajuda";
import FAQ from "@/pages/FAQ";
import Contato from "@/pages/Contato";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import EstudoMercado from './pages/EstudoMercado';

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/suporte" component={Suporte} />
        <Route path="/ajuda" component={Ajuda} />
        <Route path="/faq" component={FAQ} />
        <Route path="/contato" component={Contato} />
        <Route path="/politica-de-privacidade" component={PrivacyPolicy} />
        <Route path="/termos-de-servico" component={TermsOfService} />
        <Route path="/estudo-mercado" element={<EstudoMercado />} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;