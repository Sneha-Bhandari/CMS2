import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const navitems = [
    { title: "Home",path:'/' },
    { title: "Recipies",path:'/Recipies' },
    { title: "Services", path:'/Services' },
    { title: "About", path:'/About' },
    { title: "News",path:'/News' },
    { title: "Contact",path:'/Contact' },
  ];
  return (
      <div className="h-full  bg-gray-100">
        <div className="flex flex-col gap-10 px-12  space-x-4 p-4">
          <div className="font-semibold text-orange-400 text-xl ">Pages</div>
          {navitems.map((val, i) => (
            <div key={i} className="text-black text-xl font-medium hover:underline">
            <Link to={val.path} >{val.title}
            </Link>  
            </div>
          ))}
        </div>
      </div>
  );
};

export default SideBar;
