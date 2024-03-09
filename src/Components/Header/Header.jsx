import React from "react"
import "./Header.scss"
import Menu from "../Img/Header/Menu.svg"
import Black from '../Img/Header/Black.svg'
import Home from '../Img/Header/home.svg'
import Trend from '../Img/Header/trend.svg'
import Subscribe from '../Img/Header/subscribe.svg'
import Library from '../Img/Header/library.svg'
import History from '../Img/Header/history.svg'
import Watch from '../Img/Header/watch.svg'
import Favourite from '../Img/Header/favourite.svg'
import Like from '../Img/Header/like.svg'
import Music from '../Img/Header/music.svg'
import Game from '../Img/Header/game.svg'
import Show from '../Img/Header/down.svg'
import Gussie from '../Img/Header/Gussie.png'
import Nora from '../Img/Header/Nora.png'
import Belle from '../Img/Header/Belle.png'
import Eunice from '../Img/Header/Eunice.png'
import Emma from '../Img/Header/Emma.png'
import Leah from '../Img/Header/Leah.png'
import Setting from '../Img/Header/Setting.svg'
import { Link } from "react-router-dom"
import Language from "../Localization/Localization"
import { Context } from "../Context/Localization"

function Header() {
    const xRef = React.useRef()
    const { lang } = React.useContext(Context)
    return (
        <>
            <header className="header">
                <div className="container">
                    <button className="header__btn" onClick={() => {
                        xRef.current.classList.add('info')
                    }}>
                        <img src={Menu} alt="Menu" width="20" height="17" />
                    </button>
                    <Link className="header__link" to=" ">
                        <img src={Black} alt="Black" width="116" height="25" />
                    </Link>

                    <nav className="nav" ref={xRef}>
                        <ul className="nav__list">

                            <li className="nav__item">
                                <img className="nav__img" src={Home} alt="Home" width="20" height="19" />
                                <Link className="nav__linkk" to=" ">
                                    {Language[lang].header.link1}
                                </Link>
                                <button className="nav__exit" onClick={() => {
                                    xRef.current.classList.remove('info')
                                }}>X</button>
                            </li>

                            <li className="nav__item">
                                <img className="nav__img" src={Trend} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link2}
                                </a>
                            </li>

                            <li className="nav__itemms">
                                <img className="nav__img" src={Subscribe} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link3}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Library} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link4}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={History} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link5}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Watch} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link6}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Favourite} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link7}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Like} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link8}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Music} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link9}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Game} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link10}
                                </a>
                            </li>

                            <li className="nav__items">
                                <img className="nav__img" src={Show} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link11}
                                </a>
                            </li>

                            <li className="nav__itemm">
                                <h1 className="nav__heading">
                                    {Language[lang].header.heading}
                                </h1>
                            </li>

                            <li className="nav__itemm">
                                <img className="nav__img" src={Gussie} alt="Gussie" width="20" height="19" />
                                <Link className="nav__link" to="channel">
                                    {Language[lang].header.link12}
                                </Link>
                            </li>

                            <li className="nav__itemm">
                                <img className="nav__img" src={Nora} alt="Home" width="20" height="19" />
                                <Link className="nav__link" to="channel">
                                    {Language[lang].header.link13}
                                </Link>
                            </li>

                            <li className="nav__itemm">
                                <img className="nav__img" src={Belle} alt="Home" width="20" height="19" />
                                <Link className="nav__link" to="channel">
                                    {Language[lang].header.link14}
                                </Link>
                            </li>

                            <li className="nav__itemm">
                                <img className="nav__img" src={Eunice} alt="Home" width="20" height="19" />
                                <Link className="nav__link" to="channel">
                                    {Language[lang].header.link15}
                                </Link>
                            </li>

                            <li className="nav__itemm">
                                <img className="nav__img" src={Emma} alt="Home" width="20" height="19" />
                                <Link className="nav__link" to="channel">
                                    {Language[lang].header.link16}
                                </Link>
                            </li>

                            <li className="nav__itemm">
                                <img className="nav__img" src={Leah} alt="Home" width="20" height="19" />
                                <Link className="nav__link" to="channel">
                                    {Language[lang].header.link17}
                                </Link>
                            </li>

                            <li className="nav__iteme">
                                <img className="nav__img" src={Setting} alt="Home" width="20" height="19" />
                                <a className="nav__link" href="#link">
                                    {Language[lang].header.link18}
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;