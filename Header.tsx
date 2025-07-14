import { Button } from "@/components/ui/button";
import { Search, Menu, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-tech-cyan rounded-lg flex items-center justify-center">
              <span className="text-xs font-bold text-white">ICT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent">
                ALL ABOUT ICT
              </h1>
              <p className="text-xs text-muted-foreground">24/7 IT Support & Certification</p>
            </div>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground hover:text-primary">
            IT Support
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Certifications
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Practice Tests
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Study Guides
          </Button>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;