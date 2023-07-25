import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
    <div
      className="tw-p-3 tw-flex tw-justify-around tw-items-center tw-w-full"
      style={{
        position: "fixed",
        top: "0",
        background: "rgb(14 14 24)",
        zIndex: "1000",
      }}
    >
      <div className="tw-hidden md:tw-block tw-font-bold tw-text-2xl tw-text-sky-40 hover:tw-text-blue-900">
        <Link to={"/"}>Syed Muaaz Ali</Link>
      </div>
      <div className="tw-w-full md:tw-w-1/2 lg:tw-w-1/3 tw-flex tw-text-center tw-justify-around tw-font-light tw-uppercase">
        <span className="hover:tw-text-sky-400">
          <Link to={"/projects"}>Projects</Link>
        </span>
        <span className="hover:tw-text-sky-400">
          <Link to={"/about"}>About</Link>
        </span>
        <span className="hover:tw-text-sky-400">
          <Link to={"/contacts"}>Contacts</Link>
        </span>
      </div>
    </div>
  );
}
