import React from 'react';
import axios from 'axios';
import './Channel.scss'
import Margaret from '../Img/Channel/Margaret.png'
import Qongiroq from '../Img/Hero/qongiroq.svg'
import { Button } from "@mui/material";
import Search from '../Img/Hero/search.svg'
import Video from '../Img/Channel/Video.png'
import Flora from '../Img/Channel/Flora.png'
import Violet from '../Img/Channel/Violet.png'
import Philip from '../Img/Channel/Philip.png'
import Arrows from '../Img/About/Arrows.svg'
import Language from "../Localization/Localization";
import { Context } from "../Context/Localization";

function Channel() {
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
            <section className='channel'>
                <div className="container">
                    <div className="channel__info"></div>
                    <div className="channel__div">
                        <img className='channel__img' src={Margaret} alt="Margaret" width={80} height={80} />
                        <div className="channel__divv">
                            <h3 className='channel__heading'>
                                {Language[lang].channel.heading}
                            </h3>
                            <p className='channel__text'>
                                {Language[lang].channel.text}
                            </p>
                        </div>
                        <img className='channel__icon' src={Qongiroq} alt="Qongiroq" width={22} height={26} />
                        <Button sx={{ borderRadius: '50px' }} variant="contained" color="error">
                            {Language[lang].channel.btn}
                        </Button>
                    </div>

                    <ul className='channel__list1'>
                        <li className='channel__item1'>
                            <a className='channel__linkk' href="#link">
                                {Language[lang].channel.link}
                            </a>
                        </li>

                        <li className='channel__item1'>
                            <a className='channel__link' href="#link">
                                {Language[lang].channel.link1}
                            </a>
                        </li>

                        <li className='channel__item1'>
                            <a className='channel__link' href="#link">
                                {Language[lang].channel.link2}
                            </a>
                        </li>

                        <li className='channel__item1'>
                            <a className='channel__link' href="#link">
                                {Language[lang].channel.link3}
                            </a>
                        </li>

                        <li className='channel__item1'>
                            <a className='channel__link' href="#link">
                                {Language[lang].channel.link4}
                            </a>
                        </li>

                        <li className='channel__item1'>
                            <a className='channel__link' href="#link">
                                {Language[lang].channel.link5}
                            </a>
                        </li>

                        <li className='channel__item1'>
                            <img className='channel__icons' src={Search} alt="Search" width={19} height={19} />
                        </li>
                    </ul>

                    <div className="channel__div1">
                        <img className='channel__image' src={Video} alt="Video" width={440} height={250} />
                        <div className="channel__div2">
                            <h4 className='channel__title'>
                                {Language[lang].channel.heading1}
                            </h4>
                            <p className='channel__text1'>
                                {Language[lang].channel.text1}
                            </p>
                            <p className='channel__text2'>
                                {Language[lang].channel.text2}
                            </p>
                        </div>
                    </div>

                    <ul className='channel__list2'>
                        <li className='channel__item2'>
                            <p className='channel__text3'>
                                {Language[lang].channel.text3}
                            </p>
                        </li>

                        <li className='channel__item2'>
                            <img className='channel__images' src={Flora} alt="Flora" width={50} height={50} />
                            <span className='channel__span'>
                                {Language[lang].channel.span}
                            </span>
                        </li>

                        <li className='channel__item2'>
                            <img className='channel__images' src={Violet} alt="Violet" width={50} height={50} />
                            <span className='channel__span'>
                                {Language[lang].channel.span1}
                            </span>
                        </li>

                        <li className='channel__item2'>
                            <img className='channel__images' src={Philip} alt="Philip" width={50} height={50} />
                            <span className='channel__span'>
                                {Language[lang].channel.span2}
                            </span>
                        </li>
                    </ul>

                    <div className="channel__div3">
                        <h5 className='channel__headline'>
                            {Language[lang].channel.heading2}
                        </h5>
                        <img className='channel__icons' src={Arrows} alt="Arrows" width={66} height={28} />
                    </div>

                    <ul className="channel__list3">
                        {data.map((data) => (
                            <li className="channel__item3" key={data.id}>
                                <div className="about__divv">
                                    <img className="channel__rasm" src={data.thumbnailUrl} alt="img" width={250} height={150} />
                                </div>

                                <h3 className="channel__title2">{data.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    )

}

export default Channel;