import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import LaunchPage from "./pages/LaunchPage";
import Ventures from "./pages/Ventures";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BookSiteVisit from "./pages/BookSiteVisit";
import VentureDetails from "./pages/VentureDetails";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <audio id="launch-audio" preload="auto">
          <source src="/party-popper.mp3" type="audio/mpeg" />
          <source src="https://assets.mixkit.co/sfx/preview/mixkit-party-popper-1329.mp3" type="audio/mpeg" />
        </audio>
        <Routes>
          <Route path="/" element={<LaunchPage />} />
          <Route path="/home" element={<Index />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-site-visit" element={<BookSiteVisit />} />
          <Route path="/venture-details/:id" element={<VentureDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
