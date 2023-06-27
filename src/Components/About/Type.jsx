import React from "react";
import Typewriter from "typewriter-effect";

export const Type = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "A Full Stack Web Developer",
            "MERN Stack Developer",
            "Frontend Developer"
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </>
  );
};
