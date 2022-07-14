import React,{useState} from "react";
import "./header.scss";

const Header = (handleChange) => {
  const [text, setText] = useState("");

  const handleInput = (e) => {
    const input = e.target.value;
    setText(input);
    handleChange(input);

  }
  return (
    <section className="header">
      <div className="header__top">
        <div className="header__logo">Helli-Careers</div>
        <input
          className="search__input"
          type="text"
          value={text}
          onChange={(e) => handleInput(e)}
          placeholder="Search jobs by role, company , skills "
        />
      </div>
      <div className="header__bottom">
        <div className="header__bottom--title">Filters :</div>
        <ul className="header__bottom--filters">
          <li className="filter">Remote</li>
          <li className="filter">Frontend</li>
          <li className="filter">Backend</li>
          <li className="filter">Javascript</li>
          <li className="filter">React</li>
          <li className="filter">Nodejs</li>
          <li className="filter">Typescript</li>
          <li className="filter">SQL</li>
          <li className="filter">AWS</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
