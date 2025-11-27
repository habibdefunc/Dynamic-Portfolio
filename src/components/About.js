const About = () => {
  return (
    <div>
      <div
        id="about"
        className="text-[20px] md:text-[40px] font-sora text-[#FBFBFB] md:leading-[72px]"
      >
        Let me tell you a little more about myself
      </div>
      <div className="flex flex-col items-center xl:items-stretch xl:flex-row gap-9 mt-[40px]">
        <img
          className="object-cover w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-[20px]"
          src={require("../assets/pp5.jpg")}
          alt=""
        />
        <div className="bg-[#323443] p-[20px] text-slate-400 rounded-[20px] md:mr-20">
          <p>
            Hi, I'm Habib Ritonga, a web developer with a strong passion for
            building digital solutions. I started learning web development from
            curiosity about how websites work.
          </p>
          <br />
          <p>
            My journey began with HTML and CSS, and grew into JavaScript, PHP,
            CodeIgniter, Laravel, Node.js, Express.js, TypeScript, React.js, and
            Go.
          </p>
          <br />
          <p>
            I've strengthened my skills through academic and freelance projects,
            collaborating with individuals and companies.
          </p>
          <br />
          <p>
            Currently, I focus on backend development with Go Lang, while still
            exploring frontend to stay well-rounded. Open to
            collaboration—thanks for visiting!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
