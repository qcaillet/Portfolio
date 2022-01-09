import React from "react";
import Typewriter from "typewriter-effect";

function TypeComming() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bientôt disponible !",
          "Coming soon !",
          "próximamente !",
          "kommt bald !",
          "Вскоре !",
          "近日公開 !"
          
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeComming;
