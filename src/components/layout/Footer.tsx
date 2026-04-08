import { Link } from "react-router-dom";
import { Shield, Github, Twitter, Linkedin, Mail } from "lucide-react";
import { NAV_ITEMS } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card relative z-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="h-7 w-7 text-primary" />
              <span className="text-xl font-extrabold tracking-tight text-gradient-primary">Cykruit</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-medium">
              The premier cybersecurity talent platform. Connecting top security professionals with world-class companies.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Github, label: "GitHub" },
                { icon: Mail, label: "Email" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-9 w-9 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-sm mb-6 text-foreground">Navigation</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-sm mb-6 text-foreground">Resources</h3>
            <ul className="space-y-3">
              {["Blog", "Documentation", "Pricing", "Changelog", "Support"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-sm mb-6 text-foreground">Stay Updated</h3>
            <p className="text-sm text-muted-foreground mb-6 font-medium">
              Get the latest cybersecurity job opportunities delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input placeholder="your@email.com" className="text-sm h-11 bg-muted/30 border-border rounded-xl" />
              <Button className="shrink-0 h-11 px-5 rounded-xl font-bold shadow-sm">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-muted-foreground font-medium">
            © {new Date().getFullYear()} Cykruit. All rights reserved.
          </p>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>

  );
}
