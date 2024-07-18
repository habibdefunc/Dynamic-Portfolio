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
            Welcome to my portfolio! My name is Habib Ritonga, a Computer
            Science student at the State Islamic University of North Sumatra and
            a freelance web programmer. I started delving into this field four
            years ago during the COVID-19 era. At that time, I spent most of my
            days playing games since school was conducted online. However, I
            eventually grew bored of gaming and began searching on Google for
            something cool and productive to do. That’s when I discovered
            coding!
          </p>
          <br />
          <p>
            I immediately dove into coding and started with web programming,
            which I found the easiest to grasp. I began with HTML and CSS, and
            then moved on to PHP, CodeIgniter, Laravel, Node.js, Express.js, and
            React.js. I applied the knowledge I gained to complete my final
            school project, which I successfully passed.
          </p>
          <br />
          <p>
            After that, I started my freelance business, working with clients
            ranging from classmates to companies. I continue to do this as a
            side job to this day. Currently, my focus is on web development,
            primarily backend, but lately, I have been working on frontend
            development as well.
          </p>
          <br />
          <p>
            If you're interested in my portfolio or want to collaborate, I’d be
            delighted to connect! Thank you for visiting my portfolio, and I
            look forward to the opportunity to collaborate on exciting projects!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
