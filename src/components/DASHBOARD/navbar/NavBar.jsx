import React from "react";
import { navLinks } from "./utils/NavDB";
import { useRecoilState } from "recoil";
import { NavLink } from "react-router-dom";
// import { activeNavItemState } from "../../atoms/ActiveNavBarAtom";
import { activeNavItemState } from "../../DASHBOARD/atoms/ActiveNavBarAtom";
import authService from "../../../firebase/auth";
function NavBar() {
  return (
    <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
      <div className="space-y-8 w-full ">
        {navLinks.slice(0, 4).map((link) => (
          // <NavLink>
          <NavItem link={link} key={link.id} />
          // </NavLink>
        ))}
        <div className="w-full border-t border-gray-200" />
        {navLinks.slice(4, 6).map((link) => (
          <NavItem link={link} key={link.id} />
        ))}
      </div>
      <div className="xl:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
        <h1 className="text-xl w-full font-medium">
          Saving Lives <br /> One Click at a time
        </h1>
        <p>
          {" "}
          Donate Now. Save now
          <br /> Join our Raktjharna mission{" "}
        </p>
        <button className=" w-full py-2 px-3 bg-black text-white">
          Volunteer with us
        </button>
      </div>
    </nav>
  );
}
function NavItem({ link }) {
  const [activeNav, setActiveNav] = useRecoilState(activeNavItemState);
  return (
    <div
      onClick={() => setActiveNav(link.id)}
      key={link.id}
      className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
       group hover:border-gray-900 border-l-4 border-transparent ${
         activeNav === link.id && "border-gray-900 "
       } `}
    >
      {link.title === "LogOut" ? (
        <div className="flex gap-8" onClick={() => authService.userSignOut()}>
          <span> {link.icon}</span>
          <h1
            className={`text-gray-600 group-hover:text-black xl:flex hidden ${
              activeNav === link.id && "text-black"
            }} `}
          >
            {link.title}
          </h1>
        </div>
      ) : link.title === "Dashboard" ? (
        <>
          <NavLink className="flex gap-8" to="/Login">
            {console.log(link.redirect)}
            <span> {link.icon}</span>
            <h1
              className={`text-gray-600 group-hover:text-black xl:flex hidden ${
                activeNav === link.id && "text-black "
              }} `}
            >
              {link.title}
            </h1>
          </NavLink>
        </>
      ) : (
        <NavLink className="flex gap-8" to={`dashboard${link.redirect}`}>
          {console.log(link.redirect)}
          <span> {link.icon}</span>
          <h1
            className={`text-gray-600 group-hover:text-black xl:flex hidden ${
              activeNav === link.id && "text-black "
            }} `}
          >
            {link.title}
          </h1>
        </NavLink>
      )}
    </div>
  );
}

export default NavBar;
