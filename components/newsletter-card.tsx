import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Send } from "lucide-react"

export function NewsletterCard() {
  return (
    <Card className="border-0 shadow-lg bg-card flex flex-col h-full">
      <CardHeader className="space-y-3 pb-4">
        <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center shadow-sm transition-colors hover:bg-accent/80">
          <Send className="h-5 w-5 text-primary" />
        </div>
        <h3 className="text-2xl font-semibold text-card-foreground">Щотижнева розсилка</h3>
        <p className="text-muted-foreground text-base leading-relaxed">
          Щотижня отримуйте у свою поштову скриньку останні релізи, корисні поради, ексклюзивні інтерв'ю та добірку найцікавіших статей. Тільки найактуальніша інформація, яку ви точно не захочете пропустити!
        </p>
      </CardHeader>
      <CardContent className="space-y-4 mt-auto">
        <div className="space-y-4">
          <Input 
            type="email" 
            placeholder="Введіть вашу електронну пошту" 
            className="bg-accent border-input hover:border-primary focus:border-primary transition-colors"
          />
          <div className="text-sm text-muted-foreground">
            Ознайомтеся з нашою{" "}
            <a href="#" className="text-primary hover:text-primary/80 underline-offset-4 hover:underline transition-colors">
              політикою конфіденційності
            </a>
            .
          </div>
        </div>
        <Button className="w-full bg-primary hover:bg-primary/90 h-11 text-base font-medium transition-colors">
          Підписатися
        </Button>
      </CardContent>
    </Card>
  )
}

