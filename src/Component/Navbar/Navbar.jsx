import React from "react";
import { Link, Links } from "react-router";
import logoImg from '/src/assets/logo.png'
import { FaSquareGithub } from "react-icons/fa6";


const Navbar = () => {
  const links = <>
  <Link className="mr-3" to={'/'}>Home</Link>
  <Link className="mr-3" to={'/allapps'}>Apps</Link>
  <Link to={'/installedapps'}>Installation</Link>
  
  </>;
  const contribution = <><Link to={'https://github.com/tahajid36'}>
  <button className="btn text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2]"><FaSquareGithub />
  Contribution</button>
  </Link></>
  const logoLink = <><Link to={'/'}>HERO.IO</Link></>
  return (
    <div>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             {links}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-10" src={logoImg} alt="" />
            <p className="text-purple-500">{logoLink}</p>

          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {contribution}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
// https://github.com/tahajid36