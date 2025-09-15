import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface QuoteButtonProps {
  artworkTitle?: string;
  className?: string;
  variant?: "default" | "outline" | "secondary";
  children?: string;
  useWhatsApp?: boolean;
}

export const QuoteButton = ({ artworkTitle, className, variant = "default", children = "Solicitar orçamento", useWhatsApp = false }: QuoteButtonProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleWhatsAppSubmit = (formData: { name: string; email: string; phone: string; message: string }) => {
    const phoneNumber = "554830254994";
    
    let message = artworkTitle 
      ? `Olá! Gostaria de mais informações sobre a obra "${artworkTitle}"\n\n`
      : `Olá! Gostaria de consultar a curadoria da MAG para meu projeto\n\n`;
    
    message += `*Dados do cliente:*\n`;
    message += `Nome: ${formData.name}\n`;
    message += `E-mail: ${formData.email}\n`;
    if (formData.phone) {
      message += `Telefone: ${formData.phone}\n`;
    }
    if (formData.message) {
      message += `\n*Mensagem adicional:*\n${formData.message}`;
    }
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = {
      name: (form.querySelector('#name') as HTMLInputElement).value,
      email: (form.querySelector('#email') as HTMLInputElement).value,
      phone: (form.querySelector('#phone') as HTMLInputElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value,
    };

    setOpen(false);

    if (useWhatsApp) {
      handleWhatsAppSubmit(formData);
      toast({
        title: "Redirecionando para WhatsApp!",
        description: "Você será direcionado para enviar sua solicitação.",
      });
    } else {
      toast({
        title: "Solicitação enviada!",
        description: "Entraremos em contato em breve para seu orçamento personalizado.",
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl text-center">
            {useWhatsApp ? "Pedir Mais Informações" : "Solicitar Orçamento"}
          </DialogTitle>
          {artworkTitle && (
            <p className="text-muted-foreground text-center">
              Para: {artworkTitle}
            </p>
          )}
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome</Label>
            <Input id="name" required />
          </div>
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" required />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" />
          </div>
          <div>
            <Label htmlFor="message">Mensagem</Label>
            <Textarea 
              id="message" 
              placeholder={useWhatsApp && !artworkTitle ? "Conte-nos sobre seu espaço e preferências artísticas..." : "Conte-nos sobre seu projeto..."}
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full">
            {useWhatsApp ? "Enviar via WhatsApp" : "Enviar solicitação"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};