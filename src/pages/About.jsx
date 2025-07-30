import Reveal from "../components/Reveal";

const About = () => {
  return (
    <div className="p-8">
      <Reveal>
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
      </Reveal>
      <Reveal>
        <p className="text-lg">
          We are passionate about building high-quality modern websites. This
          about section uses scroll animation to keep things dynamic.
        </p>
      </Reveal>
    </div>
  );
};

export default About;