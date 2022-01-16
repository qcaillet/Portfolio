import React from "react";
import Typewriter from "typewriter-effect";

function TypeComming() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bienvenue et bonne chance !",        
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeComming;
