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
}

export const QuoteButton = ({ artworkTitle, className, variant = "default" }: QuoteButtonProps) => {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpen(false);
    toast({
      title: "Solicitação enviada!",
      description: "Entraremos em contato em breve para seu orçamento personalizado.",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} className={className}>
          Solicitar orçamento
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-playfair text-xl text-center">
            Solicitar Orçamento
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
              placeholder="Conte-nos sobre seu projeto..."
              rows={3}
            />
          </div>
          <Button type="submit" className="w-full">
            Enviar solicitação
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};