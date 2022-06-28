import React from "react";

export default function Header() {
  return (
    <>
      <header id="header" className="section-header scroll">
        <a href="./">
          <img
            alt=""
            className="icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCV0h3AamnD8UvIduUSoHsEccpRBCtFzm_qg&usqp=CAU"
          />
        </a>
        <a href="https://www.meetup.com/Learning-to-Code-Amsterdam/">
          <img
            alt=""
            className="meetup-icon"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCV0h3AamnD8UvIduUSoHsEccpRBCtFzm_qg&usqp=CAU"
          />
        </a>
        <nav>
          <a href="/courses.html">Our Courses</a>
        </nav>
      </header>
      <div className="section-header-spacer"></div>
    </>
  );
}
