import { motion } from "framer-motion";
import bonusChecklist from "@/assets/bonus-checklist.webp";
import bonusEnxoval from "@/assets/bonus-enxoval.webp";
import bonusCivil from "@/assets/bonus-civil.png";
import bonusPaleta from "@/assets/bonus-paleta.png";
import bonusData from "@/assets/bonus-data.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } },
};

const bonuses = [
  {
    number: 1,
    title: "Checklist + Planner Completo!",
    subtitle: "Tudo sob controle do pedido ao grande dia",
    image: bonusChecklist,
    description:
      'Você terá acesso a uma super "lista de tarefas" + Planner, com tudo que você precisa fazer desde o pedido de casamento, até o Grande dia.',
    highlight: "Com espaços para anotações, lista de convidados, playlist etc.",
    quote: "Esse bônus é perfeito para manter tudo sob controle e não depender de ninguém na organização.",
    value: "R$97",
  },
  {
    number: 2,
    title: "Enxoval de Casa Nova",
    subtitle: "Tudo que seu lar precisa!",
    image: bonusEnxoval,
    description:
      "Você vai ter acesso à lista completa de enxoval de casa nova, com tudo que seu lar precisa!",
    highlight: "",
    quote: "Perfeito para quem quer ter uma casa completa sem se esquecer de nada.",
    value: "R$27",
  },
  {
    number: 3,
    title: "Tudo Sobre Casamento Civil",
    subtitle: "Chega de burocracia!",
    image: bonusCivil,
    description:
      "Vou te explicar tudo sobre regime de bens, documentos necessários, antecedência, e até como conseguir se casar DE GRAÇA no civil!",
    highlight: "",
    quote: "Tudo de bom né?!",
    value: "R$67",
  },
  {
    number: 4,
    title: "Paleta de Cores em Minutos!",
    subtitle: "Acabou a confusão com as cores!",
    image: bonusPaleta,
    description:
      "Sabe aquela dúvida de: que cor para as madrinhas? Que cor para as mães? etc… Vamos resolver isso em minutos!",
    highlight: "",
    quote: "Um casamento econômico e com cores combinando é o melhor dos dois mundos!",
    value: "R$79",
  },
  {
    number: 5,
    title: "A Data Perfeita Para Você!",
    subtitle: "Existe a data perfeita para cada casal",
    image: bonusData,
    description:
      "Com base nas flores de cada época, na concorrência de cada mês e no clima da sua região, iremos te ajudar a escolher a data perfeita para o seu casamento!",
    highlight: "",
    quote: "Seu grande dia deve ser escolhido com carinho.",
    value: "R$59",
  },
];

const BonusSection = () => {
  return (
    <section className="bg-gradient-section py-20 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={fadeUp} className="text-center mb-6">
          <p className="text-sm uppercase tracking-widest text-gold font-bold mb-2">
            Oferta por tempo limitado
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
            Bônus Exclusivos
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Comprando hoje você ganha todos estes bônus extras gratuitamente!
          </p>
        </motion.div>

        <div className="space-y-10 mt-14">
          {bonuses.map((bonus, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative rounded-3xl overflow-hidden border-2 border-gold/20 bg-card shadow-xl hover:shadow-2xl transition-all duration-300 ${
                i % 2 === 0 ? "" : ""
              }`}
            >
              {/* Badge */}
              <div className="absolute top-0 left-0 bg-primary text-primary-foreground px-6 py-2 rounded-br-2xl text-sm font-bold uppercase tracking-wider z-10">
                Bônus #{bonus.number}
              </div>

              {/* Value badge */}
              <div className="absolute top-0 right-0 bg-gold text-primary-foreground px-5 py-2 rounded-bl-2xl text-sm font-bold z-10">
                Valor: {bonus.value}
              </div>

              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-2/5 p-6 pt-14 md:pt-6 flex items-center justify-center">
                  <div className="relative w-full max-w-[280px] aspect-square rounded-2xl overflow-hidden bg-muted/30 shadow-lg">
                    <img
                      src={bonus.image}
                      alt={bonus.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                    {bonus.title}
                  </h3>
                  <p className="text-primary font-semibold text-lg mb-4 italic">
                    {bonus.subtitle}
                  </p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4">
                    {bonus.description}
                  </p>
                  {bonus.highlight && (
                    <p className="text-foreground font-semibold text-sm mb-4">
                      {bonus.highlight}
                    </p>
                  )}
                  <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl px-5 py-4">
                    <p className="text-foreground italic font-display text-base">
                      "{bonus.quote}"
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BonusSection;
