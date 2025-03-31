'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Code2,
  Laptop,
  Rocket,
  Shield,
  Smartphone,
  Star,
  CheckCircle2,
} from 'lucide-react';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Rocket className="h-5 w-5" />,
      title: 'High Performance',
      description: 'Optimized performance and response time to ensure your website loads instantly.',
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security measures to protect your data and privacy.',
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: 'Responsive Design',
      description: 'Perfect viewing experience across all devices and screen sizes.',
    },
  ];

  const services = [
    {
      icon: <Code2 className="h-6 w-6" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies.',
    },
    {
      icon: <Laptop className="h-6 w-6" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications.',
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/95 to-primary/90 py-24 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Build Your Digital Future
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto">
              Transform your ideas into reality with cutting-edge technology
            </p>
            <div className="flex justify-center gap-4 pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="text-primary hover:text-primary/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground">
              Discover what makes our solutions stand out
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`p-6 transition-all duration-300 hover:shadow-md ${
                  activeFeature === index ? 'border-primary' : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground">
              Comprehensive solutions for your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-background hover:shadow-md transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of satisfied customers who trust us with their digital needs
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">
              Contact Us
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}