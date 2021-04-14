import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { LanguageContext } from "../../context/LanguageContext";
import headerImage from '../../assets/wall-with-plants.jpg';
import { ReactComponent as FlagNL } from '../../assets/netherlands.svg';
import { ReactComponent as FlagES } from '../../assets/spain.svg';
import content from '../../data/content.json';
import './Header.css';


function Header() {
  const {activeLanguage, setNlFunction, setEsFunction} = useContext(LanguageContext);
  console.log("hallo ik ben header");
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/about-us">
                {content[activeLanguage].header.menuItems.aboutUs}
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/all-plants">
                {content[activeLanguage].header.menuItems.allPlants}
              </NavLink>
              </li>
            <li className="language-switch">
              <p>{content[activeLanguage].header.changeTo}</p>
            </li>>
            <li className="language-switch svg">
                <button id="buttonNL"  onClick={setNlFunction}><FlagNL /></button>
                <button id="buttonES"  onClick={setEsFunction}><FlagES /></button>
            </li>
          </ul>
        </nav>
        <div className="image-container">
          <img src={headerImage} alt="Header image plants" className="header-image" />
          <h1>{content[activeLanguage].header.title}</h1>
        </div>

      </header>
    </>
  );
}

export default Header;
