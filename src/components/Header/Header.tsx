import React from "react";
import icon from "../../assets/icon.png";
import ProfileImg from "../../assets/testProfile.jpg";
function Header() {
  return (
    <div className="flex items-center w-full">
      <div className="flex items-center justify-between w-4/5 m-auto py-4">
        <div className="flex items-center justify-start">
          <img src={icon} alt="" className="w-6 h-6 rounded-full" />

          <p className="text-base relative top-1 px-2">Pomodoro.</p>
        </div>
        <img src={ProfileImg} alt="" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
}

export default Header;
