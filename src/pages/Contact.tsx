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
    <div className="bg-muted/30 pb-20">
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Get in <span className="text-gradient-primary">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Have a question or want to partner with us? Our team is here to assist you.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div>
                <h2 className="text-3xl font-extrabold mb-6 text-foreground tracking-tight">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                  Whether you're a cybersecurity professional looking for opportunities or a company seeking top talent, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@cykruit.com", color: "text-primary" },
                  { icon: Phone, label: "Phone", value: "+1 (555) 123-4567", color: "text-blue-500" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA", color: "text-indigo-500" },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div 
                    key={label} 
                    className="flex items-center gap-6 p-6 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-premium transition-all duration-300 group"
                  >
                    <div className={`h-14 w-14 rounded-2xl bg-muted flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-sm`}>
                      <Icon className={`h-6 w-6 ${color} group-hover:text-primary-foreground transition-colors`} />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-widest mb-1">{label}</p>
                      <p className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <div className="bg-card rounded-[3rem] p-8 sm:p-12 border border-border/50 shadow-premium">
                <div className="mb-10 text-center sm:text-left">
                  <h3 className="text-3xl font-extrabold text-foreground mb-3">Send a Message</h3>
                  <p className="text-muted-foreground font-medium">We typically respond within 24 hours.</p>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs uppercase tracking-widest font-bold text-foreground">Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="h-14 bg-muted/20 border-border rounded-2xl focus:ring-primary/10 transition-all text-base" />
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
                            <FormLabel className="text-xs uppercase tracking-widest font-bold text-foreground">Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" type="email" {...field} className="h-14 bg-muted/20 border-border rounded-2xl focus:ring-primary/10 transition-all text-base" />
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
                          <FormLabel className="text-xs uppercase tracking-widest font-bold text-foreground">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="General Inquiry" {...field} className="h-14 bg-muted/20 border-border rounded-2xl focus:ring-primary/10 transition-all text-base" />
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
                          <FormLabel className="text-xs uppercase tracking-widest font-bold text-foreground">Message</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Share your details with us..." rows={6} {...field} className="bg-muted/20 border-border rounded-3xl focus:ring-primary/10 transition-all text-base resize-none p-6" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full h-16 text-lg font-bold shadow-premium rounded-2xl group transition-all active:scale-[0.98]" size="lg">
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Shield className="h-5 w-5" />
                      </span>
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
