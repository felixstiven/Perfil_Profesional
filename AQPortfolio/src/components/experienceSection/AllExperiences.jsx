import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variantsSwipe";


const experiences = [
  {
    job: "Full-Stack Developer",
    company: "Sena",
    date: "2025- Present",
    responsibilities: [
      "Implementing reusable components.",
      "Building and maintaining APIs.",
      "Collaborating with designers and developers.",
      "Implementing responsive design.",
      "Participating in large scale application.",
      "Generating new ideas for better user experience.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Freelance",
    date: "2024 - 2025",
    responsibilities: [
      "Learning new technologies and frameworks.",
      "Developing in the creativity of small applications including front-end and back-end.",
      "Learning and gaining experience in applications web development.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-around">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
