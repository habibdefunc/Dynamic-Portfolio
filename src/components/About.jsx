import profileImage from '../assets/pp5.jpg';

const About = () => {
  return (
    <div className="reveal-section" style={{ animationDelay: '0.12s' }}>
      <div
        id="about"
        className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]"
      >
        Let me tell you a little more about myself
      </div>
      <div className="flex flex-col items-center xl:items-stretch xl:flex-row gap-9 mt-[40px]">
        <img
          className="object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[20px]"
          src={profileImage}
          alt=""
        />
        <div className="bg-[#323443] p-[20px] text-slate-400 rounded-[20px] md:mr-20 leading-relaxed text-justify">
          <p>
            Hi, I'm Habib Ritonga, a web developer who enjoys turning ideas into
            clear, functional, and user-focused digital experiences. I started
            learning web development out of curiosity and grew into building
            products that solve real problems.
          </p>
          <br />
          <p>
            My journey has included freelance work over the past year, where I
            helped individuals and businesses with website needs, UI execution,
            and product improvements. That experience taught me to work with
            speed, responsibility, and a strong sense of ownership.
          </p>
          <br />
          <p>
            My tech stack includes HTML, CSS, JavaScript, TypeScript, React.js,
            Node.js, Express.js, and other modern web tools, with a focus on
            building clean, scalable, and maintainable solutions.
          </p>
          <br />
          <p>
            I'm a web dev eager to showcase my projects and find exciting
            opportunities or connect with like-minded individuals for
            collaboration. If you're interested in working together or exploring
            ideas, feel free to reach out through my social links above. Check out
            my projects below, and don't hesitate to leave a star or a like if
            you find something inspiring or useful. Looking forward to building
            something amazing with you! ❤️
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
