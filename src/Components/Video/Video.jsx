import React from "react"
import "./Video.scss"
import { useParams } from "react-router-dom"
import Cover from '../Img/Video/Cover.png'
import Like from '../Img/Video/Like.svg'
import Dislike from '../Img/Video/Dislike.svg'
import Share from '../Img/Video/Share.svg'
import More from '../Img/Video/More.svg'
import Drink from '../Img/About/drink.png'
import { Button } from "@mui/material";
import Group from '../Img/Video/Group.svg'
import Language from "../Localization/Localization"
import { Context } from "../Context/Localization"

function Video() {
    const { user_id } = useParams()
    const [user, setUser] = React.useState(false)
    const { lang } = React.useContext(Context)

    React.useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${user_id}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data)
            })
    }, [user_id])

    return (
        <>
            <section className="video">
                <div className="container">
                    <div className="video__info">
                        <div className="video__info1">
                            <img className="video__img" src={user.url} alt="Cover" width={1000} height={700} />
                            <h6 className="video__heading">
                                {Language[lang].video.heading}
                            </h6>

                            <div className="video__info2">
                                <p className="video__text">
                                    {Language[lang].video.text}
                                </p>
                                <img className="video__like" src={Like} alt="Like" width="100" height="40" />
                                <img className="video__dislike" src={Dislike} alt="Dislike" width="100" height="40" />
                                <img className="video__share" src={Share} alt="Share" width="100" height="40" />
                                <img className="video__more" src={More} alt="More" width="28" height="6" />
                            </div>
                            <hr className="video__line" />
                        </div>

                        <div className="video__info3">
                            <img className="video__icon" src={Drink} alt="Drink" width={80} height={80} />
                            <div className="video__info4">
                                <h6 className="video__title">
                                    {Language[lang].video.heading1}
                                </h6>
                                <p className="video__text1">
                                    {Language[lang].video.text1}
                                </p>
                                <p className="video__text2">
                                    {Language[lang].video.text2}
                                </p>
                                <a className="video__link" href="#link">
                                    {Language[lang].video.link}
                                </a>
                            </div>
                            <Button className="video__btn" sx={{ borderRadius: '50px', ml: '-30px' }} variant="contained" color="error">
                                {Language[lang].video.btn}
                            </Button>
                        </div>
                    </div>

                    <div className="video__div">
                        <h1 className="video__headline">
                            {Language[lang].video.heading2}
                        </h1>
                        <h2 className="video__headline2">
                            {Language[lang].video.heading3}
                        </h2>
                        <img className="video__icons" src={Group} alt="Group" width={44} height={28} />
                    </div>

                    <ul className="video__list">
                        {user && (
                            <li className="video__item">
                                <img className="video__image" src={user.url} alt="img" width={367} height={213} />

                                <h3 className="video__heading2">{user.title}</h3>
                            </li>
                        )}
                        <li className="video__item">
                            <img className="video__image" src={user.url} alt="img" width={367} height={213} />

                            <h3 className="video__heading2">{user.title}</h3>
                        </li>
                        <li className="video__item">
                            <img className="video__image" src={user.url} alt="img" width={367} height={213} />

                            <h3 className="video__heading2">{user.title}</h3>
                        </li>
                        <li className="video__item">
                            <img className="video__image" src={user.url} alt="img" width={367} height={213} />

                            <h3 className="video__heading2">{user.title}</h3>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Video;