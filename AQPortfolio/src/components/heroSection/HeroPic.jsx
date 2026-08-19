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
      <div className="relative z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full p-2 bg-gradient-to-tr from-[#00A797] via-[#00C8C8] to-slate-200 shadow-xl">
        <div className="w-full h-full rounded-full overflow-hidden bg-white">
          <img
            src="/images/stivenfelix.png"
            alt="Stiven Felix"
            width={380}
            height={380}
            className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroPic;
