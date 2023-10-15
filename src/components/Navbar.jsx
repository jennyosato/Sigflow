import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import evts from "../assets/event.svg";
import help from "../assets/help.svg";
import account from "../assets/account.svg";
import pipeline from "../assets/pipeline.svg";
import settings from "../assets/settings.svg";
import source from "../assets/source.svg";
import transform from "../assets/transform.svg";

 const menu = [
  { title: "Event", icon: evts },
  { title: "Pipeline", icon: pipeline },
  { title: "Source", icon: source },
  { title: "Destination", icon: source },
  { title: "Transformation", icon: transform, color: true, marginb: true },
  { title: "Account", icon: account, margint: true },
  { title: "Settings", icon: settings },
  { title: "Help", icon: help, color: true, space: true },
  { title: "Documentation", icon: help, color: true },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(false)
  const nav = menu.map((i) => {
    return (
      <li
      key={i.title}
        className={`flex items-center px-1 gap-3 ${
          i.margint ? "border-t mt-4" : null
        } ${i.space ? "mt-12" : null}`}
        //onClick={() => setShowNav(!showNav)}
      >
        <img src={i.icon} />
        <a
          href="#"
          className={`text-sm leading-10 font-medium ${
            i.color ? " text-[#32D583]" : "text-[#828282]"
          }`}
        >
          {i.title}
        </a>
      </li>
    );
  });
  return (
    <div className="relative" >
       <div onClick={() => setShowNav(!showNav)} className={`cursor-pointer md:hidden flex flex-col gap-1 h-4 w-4 absolute top-2 ${showNav ? 'left-1' : 'right-1'}`}>
        <div className="border border-gray-500" />
        <div className="border border-gray-500" />
        <div className="border border-gray-500" />
      </div>
    <nav className={!showNav ? "w-[284px] min-h-screen shrink-0 px-[45px] py-[45px] hidden md:flex flex-col justify-around relative duration-300": 'hidden duration-300'}>
      
      <ul className="">
        <div className="sig px-[10px] rounded-md shrink-0 h-[35px] w-[188px]">
          <h2 className="font-semibold text-sm text-[#101828] leading-10 flex justify-between items-center rounded-md">
            Sigflow
            <img src={arrow} />
          </h2>
        </div>
        {nav}
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
