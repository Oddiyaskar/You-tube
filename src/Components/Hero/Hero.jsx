import "./Hero.scss"
import Video from '../Img/Hero/Combined.svg'
import Shape from '../Img/Hero/Shape.svg'
import Qongiroq from '../Img/Hero/qongiroq.svg'
import Brat from '../Img/Hero/Userpic.png'
import { Button } from "@mui/material";
import Izla from '../Img/Hero/search.svg'
import useToken from "../Hooks/useToken";
import { Link } from "react-router-dom"
import Language from "../Localization/Localization"
import { Context as LangContext } from "../Context/Localization"
import { useContext } from "react"

function Hero() {
    const [setIsLoggedIn] = useToken(true);
    const { lang, setLang } = useContext(LangContext)

    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="hero__info">
                        <input className="hero__input" type="search" placeholder={Language[lang].hero.input} />
                        <img className="hero__search" src={Izla} alt="Izla" width="19" height="19" />

                        <select className="hero__select" value={lang} onChange={(evt) => setLang(evt.target.value)}>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                            <option value="en">EN</option>
                        </select>

                        <select className="hero__select1" >
                            <option value="light">Light</option>
                            <option value="dark">Dark</option>
                        </select>

                        <Button sx={{ borderRadius: '50px', }} variant="contained" color="info" onClick={() => setIsLoggedIn(false)}>
                            {Language[lang].hero.btn}
                        </Button>

                        <div className="hero__div">
                            <img className="hero__video" src={Video} alt="Video" width="27" height="20" />
                            <img className="hero__shape" src={Shape} alt="Video" width="21" height="21" />
                            <img className="hero__qongiroq" src={Qongiroq} alt="Video" width="22" height="26" />
                            <div className="hero__divv">3</div>
                        </div>

                        <Link to="channel">
                            <img className="hero__brat" src={Brat} alt="Video" width="22" height="26" />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;