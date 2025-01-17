import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import image from "../assets/hero-image.jpg";

const Hero = () => {
  const [delayOrder, setDelayOrder] = useState([]);

  useEffect(() => {
    // Genera un array con retrasos aleatorios para cada cuadro
    const order = Array.from({ length: 100 }, () => Math.random() * 2);
    setDelayOrder(order);
  }, []);

  const blockVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center overflow-hidden">
      {/* Fondo dividido en cuadros */}
      {delayOrder.length > 0 && ( // Solo renderiza cuando delayOrder esté listo
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="w-full h-full bg-cover"
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: `${(i % 10) * 10}% ${
                  Math.floor(i / 10) * 10
                }%`,
                backgroundSize: "1100% 1100%", // Ajustar el tamaño para una vista uniforme
              }}
              variants={blockVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: delayOrder[i], duration: 0.6 }}
            />
          ))}
        </div>
      )}

      {/* Superposición de color */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-wrap text-4xl md:text-6xl font-bold"
        >
          Lideramos tu Cadena de Suministro con Excelencia
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-lg md:text-2xl"
        >
          Confianza, fidelidad y resultados en cada envío
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8"
        >
          <CTAButton text="Solicita tu Presupuesto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
