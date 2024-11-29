import arrow from "../assets/arrow.svg";
import security from "../assets/icon-1.png";
import health from "../assets/icon-2.png";
import care from "../assets/icon-3.png";
import doc from "../assets/icon-4.png";
import phone from "../assets/services-1.png";
import provide from "../assets/banner-11.png";
import banner from "../assets/banner_right.png";
import patient from "../assets/banner-six-2.png";


import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="flex w-full flex-col items-center gap-6 border-t border-[#e2e4e9] px-6 py-16 md:px-10 xl:px-[159px]"
    >
      {/* Premier Conteneur : Texte et Bouton */}
      <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-16 3xl:max-w-[1200px]">
        {/* Texte à gauche */}
        <div className="flex flex-col lg:w-2/3">
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
          
          className="text-gradient text-sm font-bold leading-6 md:text-base uppercase">
            Qui sommes - nous ?
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.44, 0, 0, 1],
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
          className="mt-3 text-3xl font-bold leading-tight tracking-[-0.72px] text-[#0e1829] md:text-[36px] md:leading-[44px]">
            The great place of Eyecare Hospital center
          </motion.h3>
          <motion.p
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
          className="mt-5 text-base font-medium leading-6 text-[#445469] md:text-lg md:leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea autem
            accusamus quasi a aut impedit maiores temporibus deserunt aperiam
            perspiciatis quasi a aut impedit maiores temporibus deserunt aperiam
            perspiciatis.
          </motion.p>
        </div>

        {/* Bouton à droite */}
        <div className="flex lg:w-1/3 lg:justify-end">
          <motion.button
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
          className="flex  mt-12 h-[56px] w-[180px] items-center group relative overflow-hidden justify-center gap-3 rounded-full border-2 border-[#131316] text-base font-medium leading-[28px] text-[#445568] shadow-[0_1px_2px_0_rgba(14,24,41,0.05)] md:h-[60px] md:w-[202px] md:text-[18px]">
            <div className="absolute -left-1 bottom-0 right-0 -z-10 !mx-auto h-[0px] w-[207px] rounded-full bg-black transition-all duration-300 group-hover:h-[59px]" />
            <span className="group-hover:text-white">Reserver</span>
            <img src={arrow} className="group-hover:invert" />
          </motion.button>
        </div>
      </div>

      <div className="relative mt-5 flex w-full flex-col items-center justify-between gap-8 md:mt-0 md:flex-row xl:gap-0 3xl:max-[1200px]:">
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
        className="card-gradient-one flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[486px]">
          <div className="w-full px-12 pb-8 pt-12">
            <img src={security} alt="moi" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Unique Approach
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel
              at suscipit eum qui voluptatum ducimus voluptate incidunt. Sit,
              quam soluta tempore cupiditate sapiente quo!
            </p>
          </div>
          <img src={phone} alt="phone" className="w-[400px]"/>
        </motion.div>

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
        className="card-gradient-two flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[690px] ">
        <div className="w-full px-12 pb-8 pt-12">
            <img src={health} alt="moi" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              The Heartbeat of Healthcare
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel
              at suscipit eum qui voluptatum ducimus voluptate incidunt. Sit,
              quam soluta tempore cupiditate sapiente quo!
            </p>
          </div>
          <img src={patient} alt="phone" className=" lg:w-[32%] w-[62%] -mt-28 absolute right-0 bottom-0"/>
        </motion.div>
      </div>

      {/* second  */}

      <div className="relative mt-5 flex w-full flex-col items-center justify-between gap-8 md:mt-0 md:flex-row xl:gap-0 3xl:max-[1200px]:">
       

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
        className="card-gradient-three flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[690px] ">
        <div className="w-full px-12 pb-8 pt-12">
            <img src={care} alt="moi" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
              Destination for Dental Excellence
            </h4>
            <p className="mt-4 text-base w-[75%] font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel
              at suscipit eum qui voluptatum ducimus voluptate incidunt. Sit,
              quam soluta tempore cupiditate sapiente quo!
            </p>
          </div>
          <img src={banner} alt="phone" className="-mt-28 relative w-[65%] left-36"/>
        </motion.div>
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
        className="card-gradient-four flex h-[600px] w-full flex-col items-center justify-between overflow-hidden rounded-[40px] border border-[#ced5de] lg:w-[486px]">
          <div className="w-full px-12 pb-8 pt-12">
            <img src={doc} alt="moi" />
            <h4 className="mt-6 text-[24px] font-bold leading-8 tracking-[-0.384px] text-[#302b45]">
             Cosmetic
            </h4>
            <p className="mt-4 text-base font-medium leading-6 tracking-[-0.16px] text-[#2f2b43]/60">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex vel
              at suscipit eum qui voluptatum ducimus voluptate incidunt. Sit,
              quam soluta tempore cupiditate sapiente quo!
            </p>
          </div>
          <img src={provide} alt="phone" className="w-[400px]"/>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
