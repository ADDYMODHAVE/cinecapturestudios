import Link from "next/link";
import React from "react";
import { AboutLogo } from "@/common/contexttype";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark">
      <div className="container-fluid fw-bolder ">
        <Link className="navbar-brand fs-3 text-light" href="/">
          <img src={AboutLogo.logourl} width={130} />
        </Link>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
            <li className="nav-item mx-auto">
              <Link
                className="nav-link text-light"
                aria-current="page"
                href="/"
              >
                <i className="fa-solid fa-house me-2"></i>
                HOME
              </Link>
            </li>

            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/gallery">
                <i className="fa-solid fa-photo-film me-2"></i>
                GALLERY
              </Link>
            </li>

            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/videogallery">
                <i className="fa-solid fa-video me-2"></i>
                VIDEO GALLERY
              </Link>
            </li>
            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/book">
                <i className="fa-solid fa-address-card me-2"></i>
                BOOK ORDER
              </Link>
            </li>
            <li className="nav-item ms-lg-5 mx-auto">
              <Link className="nav-link text-light" href="/about">
                <i className="fa-solid fa-address-card me-2"></i>
                ABOUT US
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
