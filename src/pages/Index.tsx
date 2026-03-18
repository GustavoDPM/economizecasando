import { motion } from "framer-motion";
import { Heart, Check, Gift, Calendar, Palette, Home, FileText, Clock, Star, Mail, Shield, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import BonusSection from "@/components/BonusSection";
import heartImg from "@/assets/heart.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const Index = () => {
  const hotmartLink = "https://pay.hotmart.com/H91556864J?off=r91nvnqm&checkoutMode=10";

  return (
    <div className="min-h-screen bg-background font-body overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero min-h-screen flex flex-col items-center justify-center px-4 py-20 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl mx-auto"
        >
          <motion.img
            src={heartImg}
            alt="Coração"
            className="w-28 h-28 mx-auto mb-8 drop-shadow-lg"
            variants={fadeUp}
          />
          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Seu Casamento com{" "}
            <span className="text-gradient-gold">Menos de 7 Mil Reais</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
          >
            O Guia Secreto Para Um Casamento{" "}
            <strong className="text-foreground">Perfeito & Econômico!</strong>{" "}
            Mesmo com <strong className="text-foreground">pouco tempo</strong> e{" "}
            <strong className="text-foreground">muitos convidados!</strong>
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 space-y-3">
            <p className="text-muted-foreground line-through text-lg">DE R$97,00</p>
            <p className="text-sm uppercase tracking-widest text-muted-foreground font-bold">Por apenas</p>
            <p className="font-display text-6xl md:text-8xl font-bold text-primary">R$10</p>
            <div className="inline-block bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse-glow">
              🔥 Último Dia!
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10">
            <a href="#oferta">
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground animate-bounce" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Pain Points */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
            Você já se perguntou...
          </motion.h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Como ter o casamento dos meus sonhos economizando?",
              "Quais são os elementos essenciais de um casamento?",
              "Como organizar tudo sem assessoria?",
              "Como preparar tudo em pouco tempo?",
            ].map((q, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-card">
                  <CardContent className="p-6">
                    <p className="font-display text-lg italic text-foreground">{q}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solution */}
      <section className="bg-gradient-section py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-6 leading-relaxed">
            E se eu te falar que é possível ter um casamento completo por menos de 7 mil reais{" "}
            <strong className="text-foreground">sem perder a qualidade</strong>?
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg mb-8 leading-relaxed">
            Você não precisa abrir mão do lindo vestido, do cardápio delicioso ou da fotografia dos sonhos. Tudo o que você precisa é{" "}
            <em className="text-primary font-semibold">seguir o método de quem realmente entende os segredos desse mercado!</em>
          </motion.p>
          <motion.div variants={fadeUp} className="inline-block bg-primary/10 border border-primary/20 rounded-2xl px-8 py-5">
            <p className="font-display text-2xl md:text-3xl font-bold text-primary">
              Economizar & Organizar <br />Tudo do Zero!
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
            O Que Você Irá Aprender
          </motion.h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: FileText, title: "Lista de Convidados", desc: "A forma certa de fazer a lista sem drama." },
              { icon: Star, title: "Segredos do Mercado", desc: "O que o mercado esconde de você, te fazendo pagar a mais." },
              { icon: Calendar, title: "Data Estratégica", desc: "Economize ainda mais escolhendo o dia, mês e horário certos." },
              { icon: Home, title: "Buffet Econômico", desc: "Menu delicioso e econômico que agrada a todos." },
              { icon: Clock, title: "Pouco Tempo?", desc: "Casamento incrível mesmo com poucos meses de preparo." },
              { icon: Heart, title: "E Muito Mais!", desc: "Sem ser especialista, sem saber por onde começar." },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 bg-card">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bonuses */}
      <BonusSection />

      {/* Pricing */}
      <section id="oferta" className="py-24 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-5xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Escolha a Melhor Oferta
          </motion.h2>
          <motion.p variants={fadeUp} className="text-center text-muted-foreground mb-14">
            Pagamento único, sem pegadinhas e 7 dias de garantia.
          </motion.p>

          <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
            {/* Basic Plan */}
            <motion.div variants={fadeUp}>
              <Card className="h-full border shadow-lg bg-card">
                <CardContent className="p-8 text-center flex flex-col h-full">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Plano Básico</h3>
                  <ul className="text-left space-y-3 my-8 flex-1">
                    <li className="flex gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>Ebook: Segredos do Casamento Econômico 1.0</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>1 ano de acesso</span>
                    </li>
                  </ul>
                  <div className="mb-6">
                    <p className="font-display text-5xl font-bold text-foreground">R$10</p>
                    <p className="text-muted-foreground text-sm mt-1">à vista</p>
                  </div>
                  <Button variant="outline" size="lg" className="w-full text-base font-bold" asChild>
                    <a href={hotmartLink}>Quero Essa Opção</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Complete Plan */}
            <motion.div variants={fadeUp}>
              <Card className="h-full border-2 border-primary shadow-2xl bg-card relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-bold uppercase tracking-wider">
                  ⭐ Mais Vendido
                </div>
                <CardContent className="p-8 pt-14 text-center flex flex-col h-full">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Plano Completo</h3>
                  <ul className="text-left space-y-3 my-8 flex-1">
                    {[
                      "Ebook Completo: Segredos 3.0",
                      "Checklist + Planner Completo",
                      "Enxoval de Casa Nova",
                      "Paleta de Cores em Minutos",
                      "Guia da Data Perfeita",
                      "Tudo Sobre Casamento Civil",
                      "Bônus Surpresa",
                      "Acesso Vitalício + Atualizações",
                      "7 Dias de Garantia",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6">
                    <p className="font-display text-5xl font-bold text-primary">R$37</p>
                    <p className="text-muted-foreground text-sm mt-1">ou 5x de R$8,19</p>
                  </div>
                  <Button size="lg" className="w-full text-base font-bold animate-pulse-glow" asChild>
                    <a href={hotmartLink}>Sim! Quero o Plano Completo</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Summary */}
      <section className="bg-gradient-section py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Não Leu Tudo? Resumo Para Você
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
            Estou te apresentando uma oportunidade de poupar um valor expressivo no seu sonho, aplicando estratégias e conhecimento real em eventos.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-6">
            Adquirindo hoje, você garante <strong className="text-primary">91% de desconto</strong> + 5 bônus exclusivos.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button size="lg" className="text-lg font-bold px-12 py-6 h-auto animate-pulse-glow" asChild>
              <a href={hotmartLink}>Eu Quero! 💍</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-2xl mx-auto"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-14">
            Perguntas Frequentes
          </motion.h2>
          <div className="space-y-6">
            {[
              {
                q: "Por que está tão barato?",
                a: "Queremos que o valor não seja um obstáculo, e o fato de cobrar já afasta curiosos. Sem pegadinhas, sem letras miúdas.",
              },
              {
                q: "Em quanto tempo recebo meu acesso?",
                a: "Logo após a aprovação do pagamento, você recebe no seu e-mail de compra os dados de acesso.",
              },
              {
                q: "O pagamento é único? E se eu não gostar?",
                a: "Sim, é pagamento único (NÃO é mensal). E se não gostar, tem reembolso em até 7 dias. Você não corre nenhum risco.",
              },
            ].map((faq, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="border-none shadow-md bg-card">
                  <CardContent className="p-6">
                    <div className="flex gap-3 items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        {i === 0 && <Star className="w-4 h-4 text-primary" />}
                        {i === 1 && <Mail className="w-4 h-4 text-primary" />}
                        {i === 2 && <Shield className="w-4 h-4 text-primary" />}
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                        <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="bg-gradient-section py-20 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Prazer, Sou a Aline! 💐
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-4">
            Em 2022 eu me casei gastando exatamente <strong className="text-foreground">R$6.697,70</strong>, com 150 convidados!
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-4">
            Já ajudei mais de 30 pessoas a realizarem casamentos por menos de 6 mil reais. Descobri segredos que o mercado de eventos esconde, te fazendo gastar 10x mais do que deveria.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
            Hoje ensino milhares de noivinhas a fazerem o próprio casamento gastando pouco.
            <br />
            Me siga no Instagram: <strong className="text-primary">@casamentoeconomico_</strong>
          </motion.p>
          <motion.div variants={fadeUp}>
            <Button size="lg" className="text-base font-bold px-10 animate-pulse-glow" asChild>
              <a href={hotmartLink}>Vamos Lá! 🎉</a>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto text-center text-sm text-muted-foreground">
          <p>Suporte: casamentoeconomico2000@gmail.com</p>
          <p className="mt-2">© {new Date().getFullYear()} Casamento Econômico. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
