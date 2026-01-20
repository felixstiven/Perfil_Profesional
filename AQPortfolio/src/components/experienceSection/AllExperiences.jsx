import React, { useState } from "react";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";

const certificates = [
  {
    id: 0,
    title: "Tecnologo en Analisis y Desarollo de Software",
    institution: "Sena ",
    date: "En formacion",
    image: "/images/certificates/sena.jpeg",

  },
  {
    id: 1,
    title: "Curso en Desarrollo Web Front-End con HTML, CSS y JavaScript",
    institution: "Universidad de los Andes",
    date: "2025-10-20 - 2025-12-09",
    image: "/images/certificates/full-stack-andes.png",
  },
  {
    id: 2,
    title: "Desarrollo Web Full Stack",
    institution: "Talento Tech Bogotá",
    date: "Octubre 2024",
    image: "/images/certificates/full-stack-talento.png",
  },
  {
    id: 3,
    title: "Curso en JavaScript ",
    institution: "Cisco Netwrok Academy",
    date: "2024-11-09",
    image: "/images/certificates/javascript-cisco.png",
  },
  {
    id: 4,
    title: "Curso en Python (1) ",
    institution: "Cisco Netwrok Academy",
    date: "2024-09-19",
    image: "/images/certificates/python-1.png",
  },
  {
    id: 5,
    title: "Curso en Python (2) ",
    institution: "Cisco Netwrok Academy",
    date: "2024-10-23",
    image: "/images/certificates/python-2.png",
  },
  {
    id: 6,
    title: "Introduccion al desarollo de bak-end",
    institution: "Coursera",
    date: "2024-08-02",
    image: "/images/certificates/backend-coursera.png",
  },
  {
    id: 7,
    title: "Masterclass en ciberseguridad",
    institution: "avanzatec",
    date: "2024-10-23",
    image: "/images/certificates/ciberseguridad.png",
  },
  {
    id: 8,
    title: "Power BI Microsoft ",
    institution: "Intelligent Training",
    date: "2024-10-23",
    image: "/images/certificates/powerbi.png",
  },
];

const AllExperiences = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const handleOpenModal = (certificate) => {
    setSelectedCertificate(certificate);
  };

  const handleCloseModal = () => {
    setSelectedCertificate(null);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-[100px]">
        <motion.h2
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="text-6xl text-cyan mb-10 font-bold"
        >
          Certifications
        </motion.h2>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto px-4">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            index={index}
            onClick={() => handleOpenModal(certificate)}
          />
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default AllExperiences;
