import hero from "../../../assets/hero.png";
const Hero = () => {
  return (
    <>
      <section className="flex justify-center bg-cover bg-center bg-gray-300 sm:flex sm:justify-center sm:items-center">
        <img src={hero} alt="hero" className="my-18 sm:my-18" />
      </section>
    </>
  );
};

export default Hero;
