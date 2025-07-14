import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Award,
  TrendingUp,
  Users,
  Clock,
  Star,
  ChevronRight
} from "lucide-react";

const certifications = [
  {
    name: "CompTIA A+",
    provider: "CompTIA",
    level: "Entry Level",
    duration: "3-6 months",
    popularity: 95,
    description: "Foundation IT certification covering hardware, software, and troubleshooting",
    topics: ["Hardware", "Operating Systems", "Security", "Networking"],
    color: "from-blue-500 to-blue-600"
  },
  {
    name: "Cisco CCNA",
    provider: "Cisco",
    level: "Associate",
    duration: "4-8 months",
    popularity: 88,
    description: "Networking fundamentals, IP connectivity, and network security",
    topics: ["Routing", "Switching", "Network Security", "IP Services"],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    name: "Microsoft AZ-104",
    provider: "Microsoft",
    level: "Associate",
    duration: "3-5 months",
    popularity: 92,
    description: "Azure Administrator certification for cloud infrastructure management",
    topics: ["Azure VMs", "Storage", "Networking", "Identity"],
    color: "from-purple-500 to-purple-600"
  },
  {
    name: "AWS Solutions Architect",
    provider: "Amazon",
    level: "Associate",
    duration: "4-7 months",
    popularity: 90,
    description: "Design and deploy scalable systems on AWS platform",
    topics: ["EC2", "S3", "VPC", "CloudFormation"],
    color: "from-orange-500 to-orange-600"
  }
];

const CertificationsSection = () => {
  return (
    <section className="py-20 px-4 bg-card/20">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Popular IT{" "}
            <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Master in-demand skills with our comprehensive certification training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {certifications.map((cert, index) => (
            <Card key={index} className="group p-8 bg-gradient-to-br from-card via-card/90 to-secondary/10 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  {cert.level}
                </Badge>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {cert.description}
              </p>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-tech-blue" />
                    <span className="text-muted-foreground">Study Time: {cert.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-success" />
                    <span className="text-success font-semibold">{cert.popularity}% Popular</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} variant="outline" className="text-xs border-primary/30 text-primary">
                      {topic}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Button className="flex-1 bg-gradient-to-r from-tech-blue to-tech-cyan hover:from-tech-blue/90 hover:to-tech-cyan/90">
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
                  <Star className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary hover:bg-primary/10">
            <Users className="mr-2 h-5 w-5" />
            View All Certifications
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;