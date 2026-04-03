import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Phone, Shield } from "lucide-react";
import { toast } from "sonner";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = (data: ContactFormValues) => {
    toast.success("Message sent successfully!", {
      description: `Thanks ${data.name}, we'll get back to you soon.`,
    });
    form.reset();
  };

  return (
    <div>
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl font-extrabold mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in <span className="text-gradient-cyber">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-lg text-muted-foreground max-w-xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have a question or want to partner with us? We'd love to hear from you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "circOut" }}
            >
              <div>
                <h2 className="text-2xl font-bold mb-6 text-foreground tracking-tight">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Whether you're a cybersecurity professional looking for opportunities or a company seeking top talent, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@cykruit.com", color: "text-primary" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-accent" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA", color: "text-cyber-purple" },
                ].map(({ icon: Icon, label, value, color }) => (
                  <motion.div 
                    key={label} 
                    className="flex items-start gap-5 p-4 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer"
                    whileHover={{ x: 10 }}
                  >
                    <div className={`h-12 w-12 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 ${color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">{label}</p>
                      <p className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="relative relative group overflow-hidden"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
              <div className="relative glass rounded-2xl p-8 sm:p-10 border border-white/5 space-y-8 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Submit a Request</h3>
                  <p className="text-muted-foreground text-sm">Send us a message and we'll respond within 24 hours.</p>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-bold">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} className="h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-bold">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="you@example.com" type="email" {...field} className="h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-bold">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can we help?" {...field} className="h-12 bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs uppercase tracking-widest font-bold">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Tell us more about your inquiry..." rows={5} {...field} className="bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 resize-none px-4 py-3" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-14 glow-primary text-lg font-bold group/submit relative overflow-hidden" size="lg">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Secure Message
                        <Shield className="h-5 w-5" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary animate-background-shine bg-[length:200%_100%] opacity-0 group-hover/submit:opacity-50 transition-opacity" />
                    </Button>
                  </form>
                </Form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

const Contact = () => (
  <PageWrapper>
    <ContactForm />
  </PageWrapper>
);

export default Contact;
