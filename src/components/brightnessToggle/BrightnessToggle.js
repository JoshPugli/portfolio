import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { blueTheme, materialDarkTheme } from "../../theme"; // Import the themes you want to use

const TransitionIcon = () => {
  const [isSun, setIsSun] = useState(true);

  const handleClick = () => {
    setIsSun(!isSun);
  };

  const sunTheme = blueTheme;
  const moonTheme = materialDarkTheme;

  // Select the active theme based on the isSun state
  const activeTheme = isSun ? sunTheme : moonTheme;

  return (
    <div onClick={handleClick}>
      {isSun ? (
        <FaSun size={32} color="black" />
      ) : (
        <FaMoon size={32} color="black" />
      )}
      <style>
        {`
          body {
            background-color: ${activeTheme.body};
            color: ${activeTheme.text};
          }
          /* Add any other styles you want to change based on the theme */
        `}
      </style>
    </div>
  );
};

export default TransitionIcon;
