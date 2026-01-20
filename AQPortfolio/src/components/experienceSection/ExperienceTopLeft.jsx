import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="6" text="Months" />
        <p className="font-bold text-6xl text-lightBrown">-</p>
        <ExperienceInfo number="2" text="Projects" />
      </div>
      <p className="text-center">
        With 6 months of experience building dynamic and easy-to-use web applications, the Gosyt platform under development (Order, request and job management) and my web portfolio.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
