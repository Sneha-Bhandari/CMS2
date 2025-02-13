import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiFoodMenu } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
import { GiTempleGate } from "react-icons/gi";
import { MdOutlineNewspaper } from "react-icons/md";
import { IoIosContact } from "react-icons/io";

const SideBar = () => {
  const navitems = [
    { title: "Home", path: "/", icons: <FaHome /> },
    { title: "Recipies", path: "/Recipies", icons: <BiFoodMenu /> },
    { title: "Services", path: "/Services", icons: <GrServices /> },
    { title: "About", path: "/About", icons: <GiTempleGate /> },
    { title: "News", path: "/News", icons: <MdOutlineNewspaper /> },
    { title: "Contact", path: "/Contact", icons: <IoIosContact /> },
  ];
  return (
    <div className="h-full  bg-gray-200">
      <div className="flex flex-col gap-5 px-12  space-x-4 p-4">
        <div className="font-medium text-orange-400 text-xl underline ">Pages</div>
        {navitems.map((val, i) => (
          <div
            key={i}
            className="text-black text-xl font-medium hover:underline"
          >
            <div className="flex gap-3  ">

            <div className="py-1">{val.icons}</div>
            <div>
            <Link to={val.path}>{val.title}</Link>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
