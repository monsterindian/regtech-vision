import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GartnerBanner from "./components/GartnerBanner";
import Header from "./components/Header";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import Platform from "./pages/Platform";
import Resources from "./pages/Resources";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import KYCAutomation from "./pages/solutions/KYCAutomation";
import LendingCompliance from "./pages/solutions/LendingCompliance";
import TransactionMonitoring from "./pages/solutions/TransactionMonitoring";
import RiskManagement from "./pages/solutions/RiskManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GartnerBanner />
  <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/kyc-automation" element={<KYCAutomation />} />
          <Route path="/solutions/lending-compliance" element={<LendingCompliance />} />
          <Route path="/solutions/transaction-monitoring" element={<TransactionMonitoring />} />
          <Route path="/solutions/risk-management" element={<RiskManagement />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
