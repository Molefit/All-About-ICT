import { Button } from "@/components/ui/button";
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  Globe,
  Zap
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border/50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-tech-blue to-tech-cyan rounded-lg flex items-center justify-center">
                <span className="text-xs font-bold text-white">ICT</span>
              </div>
              <div>
                <h3 className="font-bold bg-gradient-to-r from-tech-blue to-tech-cyan bg-clip-text text-transparent">
                  ALL ABOUT ICT
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your intelligent 24/7 IT support and certification companion. Master technology with confidence.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Github className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* IT Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">IT Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Windows Troubleshooting</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Network Issues</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cloud Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Security Problems</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Software Installation</a></li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Certifications</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">CompTIA Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Microsoft Azure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">AWS Certifications</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cisco CCNA</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Practice Tests</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Study Guides</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Video Tutorials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Exam Simulators</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community Forum</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Knowledge Base</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 ALL ABOUT ICT. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <div className="flex items-center space-x-1">
                <Zap className="h-3 w-3 text-success" />
                <span className="text-success">Online</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;