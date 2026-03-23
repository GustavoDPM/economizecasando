import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const getEndOfDay = () => {
  const now = new Date();
  const end = new Date(now);
  end.setHours(23, 59, 59, 999);
  return end.getTime();
};

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, getEndOfDay() - Date.now());
      setTimeLeft({
        hours: Math.floor(diff / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const units = [
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-6">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <span className="font-display text-3xl md:text-5xl font-bold text-primary tabular-nums bg-card/60 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-primary/20">
              {pad(unit.value)}
            </span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{unit.label}</span>
          </div>
          {i < units.length - 1 && (
            <span className="font-display text-3xl md:text-5xl font-bold text-primary/50 -mt-5">:</span>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default CountdownTimer;
