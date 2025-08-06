import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-playfair text-3xl font-bold mb-4 block">
              MAG
            </Link>
            <p className="text-primary-foreground/80 font-inter leading-relaxed mb-4">
              Moldura Arte e Galeria. 25 anos transformando espaços através da arte, 
              curadoria personalizada e molduras artesanais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.219 0 .359.179.359.399 0 .419-.219 1.142-.359 1.781-.199.958.478 1.738 1.406 1.738 1.687 0 2.987-1.781 2.987-4.364 0-2.283-1.642-3.879-3.988-3.879-2.717 0-4.313 2.043-4.313 4.164 0 .823.318 1.706.718 2.187.08.099.09.188.068.289-.075.317-.24 1.004-.272 1.144-.041.179-.139.219-.32.132-1.189-.558-1.93-2.303-1.93-3.706 0-3.016 2.187-5.781 6.301-5.781 3.308 0 5.881 2.357 5.881 5.518 0 3.287-2.074 5.93-4.951 5.93-.967 0-1.876-.503-2.188-1.103 0 0-.478 1.821-.595 2.267-.215.828-.8 1.864-1.188 2.498.896.276 1.838.427 2.817.427 6.621 0 11.988-5.367 11.988-11.987C24.005 5.367 18.638.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Navegação */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Navegação</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-inter">
                Início
              </Link>
              <Link to="/obras" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-inter">
                Obras
              </Link>
              <Link to="/artistas" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-inter">
                Artistas
              </Link>
              <Link to="/molduras" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-inter">
                Molduras
              </Link>
              <Link to="/sobre" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors font-inter">
                Sobre
              </Link>
            </nav>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-primary-foreground/80 font-inter">
              <p>+55 (11) 99999-9999</p>
              <p>contato@mag.com.br</p>
              <p>São Paulo, SP</p>
              <a href="#" className="block text-accent hover:text-accent/80 transition-colors mt-4">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 font-inter text-sm">
            © 2024 MAG - Moldura Arte e Galeria. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};