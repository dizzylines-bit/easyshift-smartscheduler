const Footer = () => {
  return (
    <footer className="bg-sage text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-cream rounded-lg flex items-center justify-center">
                <span className="text-sage font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-bold">EasyShift</span>
            </div>
            <p className="text-primary-foreground/80 max-w-md">
              AI-powered employee scheduling that makes running your small business easier. 
              Spend less time on schedules, more time on what matters.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-cream transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Mobile App</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-cream transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-cream transition-colors">API Docs</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/70 text-sm">
            © 2024 EasyShift. All rights reserved.
          </p>
          <p className="text-cream font-medium text-sm mt-2 md:mt-0">
            Pricing starts at $50/month after free trial
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;