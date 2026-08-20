import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center my-6 md:my-0"
    >
      <div className="relative z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full p-2 bg-gradient-to-tr from-[#040404] via-[#626565] to-slate-100  border-2 border-slate-600/60 shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.15)] ">
        <div className="w-full h-full rounded-full overflow-hidden ">
          <img
            src="/torre.png"
            alt="Stiven Felix"
            className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
