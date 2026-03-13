import { Link } from "react-router-dom";

export function Footer() {
  const footerLinks = {
    Products: [
      { name: "For Android", href: "#" },
      { name: "For iPhone", href: "#" },
      { name: "For Chrome", href: "#" },
      { name: "For Firefox", href: "#" },
      { name: "For Brave", href: "#" },
      { name: "For Edge", href: "#" },
    ],
    Company: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Press", href: "#" },
    ],
    Social: [
      { name: "Twitter", href: "#" },
      { name: "Telegram Group", href: "#" },
      { name: "Discord", href: "#" },
      { name: "Youtube", href: "#" },
      { name: "Linkedin", href: "#" },
      { name: "Github", href: "#" },
    ],
  };

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm" />
              </div>
              <span className="font-bold text-xl tracking-tight">Jorny</span>
            </Link>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              Join our community of productive users and get tips, tricks and updates delivered straight to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent text-sm"
              />
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-3">
              {footerLinks.Products.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.Company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Social</h3>
            <ul className="space-y-3">
              {footerLinks.Social.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm text-gray-500 hover:text-black transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Jorny. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/features" className="text-sm text-gray-500 hover:text-black transition-colors">Features</Link>
            <Link to="/updates" className="text-sm text-gray-500 hover:text-black transition-colors">Updates</Link>
            <Link to="/pricing" className="text-sm text-gray-500 hover:text-black transition-colors">Pricing</Link>
            <Link to="/about" className="text-sm text-gray-500 hover:text-black transition-colors">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
