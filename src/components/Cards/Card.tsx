import React from "react";
import { BsFillPlayFill, BsArrowRight } from "react-icons/bs";
function Card() {
  return (
    <div className="rounded-3xl flex m-auto flex-col items-start px-8 py-4 justify-between w-[250px] h-[350px] bg-[#5b39a8] text-white">
      <div className="flex items-center justify-center flex-col mx-auto p-8 border-white border-[1px] rounded-full bg-[#6849afb0]">
        <BsFillPlayFill />
      </div>
      <div className="flex flex-col items-start justify-center">
        <p className="text-4xl">Task 1</p>
        <p className="text-sm ">Deadline: 14 March, 2023</p>
      </div>
      <div>
        <p className="text-sm flex items-center">
          Click to Start
          <BsArrowRight className="mx-4" />
        </p>
      </div>
    </div>
  );
}

export default Card;
