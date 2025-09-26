import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import TermDetail from "./pages/TermDetail";
import BlogDetail from "./pages/BlogDetail";
import LearningPathDetail from "./pages/LearningPathDetail";
import CategoryPage from "./pages/CategoryPage";
import GlossaryHome from "./pages/GlossaryHome";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";

// ScrollToTop component to handle automatic scroll restoration
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Scroll to top whenever the route changes
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/glossary" component={GlossaryHome} />
      <Route path="/glossary/:category" component={CategoryPage} />
      <Route path="/term/:id" component={TermDetail} />
      <Route path="/blog/:id" component={BlogDetail} />
      <Route path="/learning-path/:id" component={LearningPathDetail} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/about" component={About} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;