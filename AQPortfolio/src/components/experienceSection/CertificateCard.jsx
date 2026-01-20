import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";
import propTypes from "prop-types";

const CertificateCard = ({ certificate, onClick, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            onClick={onClick}
            className="relative group cursor-pointer overflow-hidden rounded-2xl border-2 border-orange border-dashed p-4 
                 transition-all duration-300 hover:scale-105 hover:shadow-cyanShadow
                 bg-darkBrown/50 backdrop-blur-sm"
        >
            {/* Certificate Image */}
            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 
                        transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-lg font-bold">Ver Certificado</p>
                </div>
            </div>

            {/* Certificate Info */}
            <div className="space-y-2">
                <h3 className="font-bold text-cyan text-lg line-clamp-2">
                    {certificate.title}
                </h3>
                <p className="text-orange font-semibold">{certificate.institution}</p>
                <p className="text-lightGrey text-sm">{certificate.date}</p>
            </div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 pointer-events-none
                      bg-gradient-to-br from-cyan/10 via-transparent to-orange/10">
            </div>
        </motion.div>
    );
};

CertificateCard.propTypes = {
    certificate: propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        institution: propTypes.string.isRequired,
        date: propTypes.string.isRequired,
        image: propTypes.string.isRequired,
    }).isRequired,
    onClick: propTypes.func.isRequired,
    index: propTypes.number.isRequired,
};

export default CertificateCard;
