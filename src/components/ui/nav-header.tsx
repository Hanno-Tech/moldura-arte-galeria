import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Obras', href: '/obras' },
  { name: 'Artistas', href: '/artistas' },
  { name: 'Molduras', href: '/molduras' },
  { name: 'Consultoria', href: '/consultoria' },
  { name: 'Sobre', href: '/sobre' },
];

export const NavHeader = () => {
  const location = useLocation();

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group flex items-center font-playfair text-3xl font-bold text-primary hover:text-accent transition-colors">
            <span>MAG</span>
            <span className="ml-3 hidden lg:inline-block overflow-hidden whitespace-nowrap max-w-0 opacity-0 transition-all duration-300 ease-out lg:group-hover:max-w-[220px] lg:group-hover:opacity-100">Moldura &amp; Arte</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "text-sm font-inter font-medium transition-colors hover:text-accent",
                  location.pathname === item.href 
                    ? "text-primary" 
                    : "text-foreground/70"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};