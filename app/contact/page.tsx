"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Section } from "@/components/ui/section";
import { Textarea } from "@/components/ui/textarea";
import { contactData } from "@/data/contact";
import * as Icons from "lucide-react";
import { Check, Clock, Copy, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1000);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about technology
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">
                Contact <span className="gradient-text">Information</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 bg-electric-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-electric-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">{contactData.email}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={copyEmail}
                      className="p-0 h-auto text-electric-600 hover:text-electric-700"
                    >
                      {emailCopied ? (
                        <>
                          <Check className="w-3 h-3 mr-1" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 mr-1" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 bg-electric-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-electric-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      {contactData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-card border border-border rounded-lg">
                  <div className="w-12 h-12 bg-electric-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-electric-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Availability</h3>
                    <p className="text-muted-foreground">
                      {contactData.availability}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 ">Connect With Me</h3>
              <div className="flex gap-4 flex-wrap">
                {contactData.socialLinks.map((link) => {
                  const Icon = Icons[
                    link.icon as keyof typeof Icons
                  ] as React.ComponentType<{ className?: string }>;
                  return (
                    <Button key={link.name} variant="outline" size="sm" asChild>
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-4 h-4 mr-2" />
                        {link.name}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">
                Send Me A <span className="gradient-text">Message</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out the form below and I will get back to you as soon as
                possible.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">{contactData.formFields.name}</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="transition-colors focus:border-electric-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{contactData.formFields.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="transition-colors focus:border-electric-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">
                  {contactData.formFields.message}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="transition-colors focus:border-electric-600 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <Button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                className="w-full btn-electric"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Thank you for your message! I will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Something went wrong. Please try again or contact me
                    directly via email.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
