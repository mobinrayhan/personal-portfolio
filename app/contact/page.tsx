"use client"

import * as React from "react"
import { Copy, Mail, MapPin, Github, Linkedin, Twitter, Youtube } from "lucide-react"
import { Container } from "@/components/container"
import { Section } from "@/components/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { contactData } from "@/data/contact"

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
}

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  })

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactData.email)
      toast({
        title: "Email copied!",
        description: "Email address has been copied to your clipboard.",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email address manually.",
        variant: "destructive",
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Client-side validation only (no backend)
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive",
      })
      return
    }

    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    })

    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <Section className="gradient-bg">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="text-gradient">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{contactData.availabilityNote}</p>
          </div>
        </Container>
      </Section>

      {/* Contact Section */}
      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Let's Connect</h2>
                <p className="text-muted-foreground">
                  I'm always interested in discussing new opportunities, interesting projects, or just having a chat
                  about technology and development.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{contactData.email}</p>
                    <div className="flex gap-2">
                      <Button asChild>
                        <a href={`mailto:${contactData.email}`}>Send Email</a>
                      </Button>
                      <Button variant="outline" onClick={copyEmail}>
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Location */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{contactData.location}</p>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Social Media</CardTitle>
                    <CardDescription>Connect with me on social platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {Object.entries(contactData.links).map(([platform, url]) => {
                        if (!url) return null
                        const Icon = socialIcons[platform as keyof typeof socialIcons]
                        return (
                          <Button key={platform} variant="outline" size="icon" asChild>
                            <a href={url} target="_blank" rel="noopener noreferrer">
                              <Icon className="h-4 w-4" />
                              <span className="sr-only">{platform}</span>
                            </a>
                          </Button>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full glow-accent">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </div>
  )
}
