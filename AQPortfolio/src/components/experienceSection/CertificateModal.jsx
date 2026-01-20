import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import propTypes from "prop-types";
import { IoClose } from "react-icons/io5";

const CertificateModal = ({ certificate, onClose }) => {
    // Close modal on ESC key press
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);

        // Prevent body scroll when modal is open
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [onClose]);

    if (!certificate) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                onClick={onClose}
            >
                {/* Modal Content */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative max-w-6xl w-full max-h-[90vh] overflow-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute -top-12 right-0 md:top-4 md:right-4 z-10 
                       bg-orange hover:bg-darkOrange text-white rounded-full p-2 
                       transition-all duration-300 hover:scale-110 shadow-lg"
                        aria-label="Cerrar modal"
                    >
                        <IoClose className="text-3xl" />
                    </button>

                    {/* Certificate Image */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                        <img
                            src={certificate.image}
                            alt={certificate.title}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* Certificate Info (visible on mobile) */}
                    <div className="mt-4 bg-darkBrown/90 backdrop-blur-sm rounded-lg p-4 md:hidden">
                        <h2 className="text-cyan text-xl font-bold mb-2">
                            {certificate.title}
                        </h2>
                        <p className="text-orange font-semibold mb-1">
                            {certificate.institution}
                        </p>
                        <p className="text-lightGrey">{certificate.date}</p>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

CertificateModal.propTypes = {
    certificate: propTypes.shape({
        id: propTypes.number.isRequired,
        title: propTypes.string.isRequired,
        institution: propTypes.string.isRequired,
        date: propTypes.string.isRequired,
        image: propTypes.string.isRequired,
    }),
    onClose: propTypes.func.isRequired,
};

export default CertificateModal;
