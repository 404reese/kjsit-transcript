"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  FileCheck2,
  Clock,
  Shield,
  Bell,
  UserPlus,
  Upload,
  Search,
  Download,
  CheckCircle2,
  Clock4,
  Users,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <FileCheck2 className="h-6 w-6" />,
      title: "Quick and Easy Application",
      description: "Submit transcript requests in minutes with our streamlined process",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Real-Time Tracking",
      description: "Monitor your application status at every step of the process",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure and Reliable",
      description: "Your personal and academic data is protected with enterprise-grade security",
    },
    {
      icon: <Bell className="h-6 w-6" />,
      title: "Automated Notifications",
      description: "Receive instant updates about your application progress",
    },
  ];

  const steps = [
    {
      icon: <UserPlus className="h-6 w-6" />,
      title: "Create an Account",
      description: "Register and log in securely with your college credentials",
    },
    {
      icon: <Upload className="h-6 w-6" />,
      title: "Upload Documents",
      description: "Submit required mark sheets and fee receipts",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Track Your Application",
      description: "Monitor the status of your request in real-time",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Receive Your Transcript",
      description: "Get your verified transcript digitally or physically",
    },
  ];

  const verificationSteps = [
    {
      icon: <CheckCircle2 className="h-6 w-6" />,
      title: "Administrative Office",
      description: "Initial verification of documents and fee payment",
    },
    {
      icon: <Clock4 className="h-6 w-6" />,
      title: "Examination Cell",
      description: "Validation of academic records and grade compilation",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "HOD Approval",
      description: "Final verification and authorization",
    },
  ];

  const faqs = [
    {
      question: "How long does the process take?",
      answer: "Typically, the entire process takes 5-7 working days from submission to delivery, depending on the verification process and workload.",
    },
    {
      question: "What documents are required?",
      answer: "You'll need your college ID, all semester mark sheets, and proof of fee payment. Additional documents may be required based on the purpose of the transcript.",
    },
    {
      question: "Who should I contact for support?",
      answer: "For technical support, reach out to support@kjsit.edu.in. For academic queries, contact your department coordinator.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/90 to-primary text-white">
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Effortless Transcript Applications for KJSIT Students
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Streamline your academic transcript requests with our centralized and transparent system
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90">
            Get Started
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="rounded-full bg-primary/10 p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Multi-Level Verification Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {verificationSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefits for Students</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="text-lg py-2 px-4">Faster Processing Times</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">Transparent Status Updates</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">Reduced Manual Workload</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">24/7 Application Access</Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">Secure Document Handling</Badge>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}