/** @format */

import React from "react";

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
            Hello! My name is Habib Ritonga, a web developer with a deep passion
            for coding. My interest in web development started from my curiosity
            about how websites work and how technology can be used to create
            impactful digital solutions.
          </p>
          <br />
          <p>
            I began my journey by learning the basics of HTML and CSS, then
            progressed to technologies like JavaScript, PHP, CodeIgniter,
            Laravel, Node.js, Express.js, TypeScript, and React.js. The more I
            explored, the more I realized that coding is not just about writing
            lines of code but also about problem-solving and creativity.
          </p>
          <br />
          <p>
            In addition to self-learning, I have honed my skills by working on
            various projects, from academic assignments to freelance projects. I
            have collaborated with a range of clients, from classmates to
            companies, and these experiences have enriched my knowledge in web
            development.
          </p>
          <br />
          <p>
            Currently, my main focus is on backend development, specifically
            using Express.js with TypeScript. I enjoy building scalable,
            efficient, and well-structured APIs while ensuring robust system
            architecture. However, I also explore frontend development to keep a
            well-rounded skill set. I am always eager to learn new technologies
            and develop innovative solutions. If you're interested in
            collaborating, feel free to reach out. Thank you for visiting my
            portfolio!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
