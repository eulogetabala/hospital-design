import herobg from "../assets/hero-bg.webp";
import heroImg from "../assets/hero_img.webp";
import arrow from "../assets/arrow.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${herobg})` }}
      className="relative flex min-h-[810px] w-full flex-col items-center justify-center overflow-hidden bg-cover px-6 pt-[0px] md:flex-row md:items-start md:px-10 md:pt-[200px] lg:justify-start lg:pt-[237px] xl:px-[159px] 3xl:justify-center"
    >
      {/* Hero left */}
      <div className="z-10 flex w-full flex-col items-center text-[#0e0e0e] lg:items-start 3xl:max-w-[1200px]">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.8,
              ease: [0.44, 1, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="h-auto w-full text-center text-[60px] font-semibold leading-[60px] tracking-[3px] opacity-[0.8704] md:h-[160px] md:w-[749px] md:text-[80px] md:leading-[80px] lg:text-left"
        >
          Votre partenaire Santé & Bien être
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.6,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-[25.5px] w-full text-center text-base font-medium leading-6 md:w-[523px] md:text-[20px] md:leading-[30px] lg:text-left"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          perferendis dolores ex, quis eius
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: [0.44, 0, 0, 1],
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="mt-[56px] flex w-full flex-col items-center justify-center gap-6 md:flex-row lg:justify-start"
        >
          <button className="group relative h-[56px] w-[180px] overflow-hidden rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
            <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
            <span className="group-hover:text-white">Nos méthodes</span>
          </button>

          <button className="flex h-[56px] w-[180px] items-center justify-center gap-3 rounded-full text-base font-medium leading-[28px] text-[#445568] underline-offset-8 transition-all hover:underline md:h-[60px] md:w-[202px] md:text-[18px]">
            <span>En savoir plus</span>
            <img src={arrow} alt="image" />
          </button>
        </motion.div>
      </div>

      {/* Hero right */}
      <motion.img
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            delay: 0.4,
            ease: [0.44, 0, 0, 1],
          },
        }}
        viewport={{
          amount: "some",
          once: true,
        }}
        src={heroImg}
        alt="right"
        className="absolute top-[140px] right-0 mx-auto hidden w-[800px] lg:block 3xl:right-[150px]"
      />
    </section>
  );
};

export default Hero;
