import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Wrench, 
  GraduationCap, 
  Search,
  Zap,
  Clock,
  Shield
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Main Hero Content */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-tech-blue via-tech-cyan to-tech-purple bg-clip-text text-transparent">
              ALL ABOUT ICT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your 24/7 IT Support & Certification Companion!
          </p>
          <p className="text-lg text-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
            I am your intelligent assistant, here to help you master IT and troubleshoot any tech-related issue.
          </p>

          {/* Command Input */}
          <Card className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-card/50 to-card/30 backdrop-blur-sm border-primary/20">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Describe your IT issue or ask for certification help..."
                  className="pl-10 pr-4 py-3 text-lg bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              <Button className="bg-gradient-to-r from-tech-blue to-tech-cyan hover:from-tech-blue/90 hover:to-tech-cyan/90 text-white font-semibold py-3">
                <Zap className="mr-2 h-4 w-4" />
                Get Help Now
              </Button>
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-to-br from-card via-card/80 to-secondary/20 border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-tech-blue/20 to-tech-cyan/20 rounded-lg">
                <Wrench className="h-8 w-8 text-tech-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">🔧 Need Help?</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Describe your IT issue clearly and I'll guide you step-by-step with expert solutions.
                </p>
                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">• "Outlook not syncing on Windows 11"</p>
                  <p className="mb-2">• "Can't connect to SQL Server"</p>
                  <p>• "Azure VM stuck in provisioning"</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-card via-card/80 to-secondary/20 border-border/50 hover:border-primary/50 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-tech-purple/20 to-tech-blue/20 rounded-lg">
                <GraduationCap className="h-8 w-8 text-tech-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 text-foreground">🎓 IT Certifications</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Master any IT certification with practice questions, explanations, and study roadmaps.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <p>• Practice questions</p>
                  <p>• Topic explanations</p>
                  <p>• Exam simulations</p>
                  <p>• Study roadmaps</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">🧠 Try These Commands</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button variant="outline" className="p-4 h-auto text-left border-primary/30 hover:border-primary hover:bg-primary/10">
              <div className="w-full">
                <p className="font-semibold text-primary mb-1">AZ-104 Simulation</p>
                <p className="text-xs text-muted-foreground">"Help me simulate the AZ-104 exam"</p>
              </div>
            </Button>
            <Button variant="outline" className="p-4 h-auto text-left border-primary/30 hover:border-primary hover:bg-primary/10">
              <div className="w-full">
                <p className="font-semibold text-primary mb-1">Security+ Practice</p>
                <p className="text-xs text-muted-foreground">"20 practice questions for CompTIA Security+"</p>
              </div>
            </Button>
            <Button variant="outline" className="p-4 h-auto text-left border-primary/30 hover:border-primary hover:bg-primary/10">
              <div className="w-full">
                <p className="font-semibold text-primary mb-1">Windows Fix</p>
                <p className="text-xs text-muted-foreground">"Fix error 0x80072EE7 Windows Update"</p>
              </div>
            </Button>
            <Button variant="outline" className="p-4 h-auto text-left border-primary/30 hover:border-primary hover:bg-primary/10">
              <div className="w-full">
                <p className="font-semibold text-primary mb-1">Learn Subnetting</p>
                <p className="text-xs text-muted-foreground">"Explain subnetting in simple terms"</p>
              </div>
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="flex justify-center items-center space-x-8 mt-16 text-muted-foreground">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-success" />
            <span className="text-sm">24/7 Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-success" />
            <span className="text-sm">Expert Solutions</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="h-5 w-5 text-success" />
            <span className="text-sm">Instant Help</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;