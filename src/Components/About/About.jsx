import React from "react";
import "./About.scss"
import Dolli from '../Img/About/Dolli.png'
import Arrows from '../Img/About/Arrows.svg'
import Drink from '../Img/About/drink.png'
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Language from "../Localization/Localization";
import { Context } from "../Context/Localization";

function About() {
    const [data, setData] = React.useState([]);
    const { lang } = React.useContext(Context)

    React.useEffect(() => {
        const fetdata = async () => {
            try {
                const res = await axios.get(
                    "https://jsonplaceholder.typicode.com/photos"
                );

                setData(res?.data.splice(0, 10));
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };

        fetdata()
    }, [])
    return (
        <>
            <section className="about">
                <div className="container">
                    <div className="about__info">
                        <div className="about__div">
                            <img className="about__img" src={Dolli} alt="Dolli" width={50} height={50} />
                            <h2 className="about__heading">
                                {Language[lang].about.heading}
                            </h2>
                            <img className="about__icon" src={Arrows} alt="Arrows" width="66" height="28" />
                        </div>

                        <ul className="about__list">
                            {data.map((data) => (
                                <Link key={data.id} to={'/video/' + data.id}>
                                    <li className="about__itemm" key={data.id}>
                                        <div className="about__divv">
                                            <img className="about__image" src={data.thumbnailUrl} alt="img" width={250} height={150} />
                                        </div>

                                        <h3 className="about__title">{data.title}</h3>
                                    </li>
                                </Link>
                            ))}
                        </ul>

                        <div className="about__div">
                            <h2 className="about__heading2">
                                {Language[lang].about.heading1}
                            </h2>
                            <img className="about__icon2" src={Arrows} alt="Arrows" width="66" height="28" />
                        </div>

                        <ul className="about__list">
                            {data.map((data) => (
                                <Link key={data.id} to={'/video/' + data.id}>
                                    <li className="about__itemm" key={data.id}>
                                        <div className="about__divvv">
                                            <img className="about__images" src={data.url} alt="img" width={540} height={250} />
                                        </div>

                                        <h3 className="about__title">{data.title}</h3>
                                    </li>
                                </Link>
                            ))}
                        </ul>

                        <div className="about__div">
                            <img className="about__img" src={Drink} alt="Drink" width={50} height={50} />
                            <h2 className="about__heading">
                                {Language[lang].about.heading2}
                            </h2>
                            <p className="about__text">
                                {Language[lang].about.text}
                            </p>
                            <div className="about__infoos">
                                <Button sx={{ borderRadius: '50px' }} variant="contained" color="error">
                                    {Language[lang].about.btn}
                                </Button>
                                <img className="about__icon3" src={Arrows} alt="Arrows" width="66" height="28" />
                            </div>
                        </div>

                        <ul className="about__list">
                            {data.map((data) => (
                                <Link key={data.id} to={'/video/' + data.id}>
                                    <li className="about__itemm" key={data.id}>
                                        <div className="about__divv">
                                            <img className="about__image" src={data.url} alt="img" width={250} height={150} />
                                        </div>

                                        <h3 className="about__title">{data.title}</h3>
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </div>
                </div>
            </section >
        </>
    )
}

export default About;