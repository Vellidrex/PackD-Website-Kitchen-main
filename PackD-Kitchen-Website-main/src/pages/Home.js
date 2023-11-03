import Slider from "./Slider"
import background from "./Background.png"
import bar from "./bar.png"
import shake from "./shake.png"
import chef from "./chef.png"
import prep from "./prep.png"
import "./home.css"
import CinBall from "./CinBall"
import PBBall from "./PBBall"
import PBall from "./PBall"
import OatsPB from "./OatsPB"
import OatsP from "./OatsP"
import SubScreen from "./SubScreen"
import logomono from "./logomono.png"
import React, { useState } from 'react';

export default function Home() {
    const [showSubScreen, setShowSubScreen] = useState(false); // react hook to manage state

    const handleClick = () => { // event handler called 'handleClick' opens subscreen
        setShowSubScreen(true); // updates the value of showSubScreen to true -> triggering a re-rendering of the component
    };

    const handleCloseSubScreen = () => { // event handler called 'handleCloseSubScreen' closes subscreen
        setShowSubScreen(false); 
    };


    return <div>
        <section class="frontpage" style={{
            backgroundImage: 'url(' + background + ')',
        }}>
            <section class="top">
                <Slider />
            </section>
            <section class="middle">
                <section class="leftbox">
                    <section class="head">
                        <h1>Personal Chef<br></br>Service</h1>
                        <img src={chef} width="150" height="150" />
                    </section>
                    <p>Looking for a stress free evening? Look no further than Chef David Pack, whose culinary experience and style will excite your taste buds with styles from American, French, Japanese cuisine, and more! While creating an unforgettable experience, enjoy every course of the meal personalized for YOU.</p>
                    <button><a href="mailto: packdkitchenllc@gmail.com?subject= Looking For a Personal Chef &Body= Hey David, I am looking to book some personal chef services. Could you get back to me about your avalibilty.">Book Now</a></button>
                </section>
                <section class="rightbox">
                    <section class="head">
                        <h1>Meal Prep<br></br> Service</h1>
                        <img src={prep} width="150" height="150" />
                    </section>
                    <p>Scheduling days and times to prepare your meals for the next week can be a hassle in the average household. Let Chef David Pack take care of it. Accommodating most dietary preferences, weighed meals for weight management, and creating meals to stay within YOUR macros on a daily basis! All of this also comes with a customizable and personalized menu. Eat what you want while meeting your goals.</p>
                    <button><a href="mailto: packdkitchenllc@gmail.com?subject= Looking For Meal Prep Services &Body= Hey David, I am looking to start a meal prep with you. Could you get back to me about what the process looks like.">Email Me</a></button>
                </section>
            </section>
            <section class="middle">
                <section class="bottom">
                    <h1><b>Our Products (Ready to Order)</b></h1>
                    <section class="products">
                        <section class="item">
                            <img src={bar} width="200" height="200" />
                            <h3>Chocolate<br></br>Protein Ball</h3>
                            <section>
                                <button onClick={handleClick}><b>$8 per 3</b></button>
                                {showSubScreen && <PBBall onClose={handleCloseSubScreen} />}
                            </section>
                        </section>
                        <section class="item">
                            <img src={bar} width="200" height="200" />
                            <h3>Cinnamon<br></br>Protein Ball</h3>
                            <section>
                                <button onClick={handleClick}><b>$8 per 3</b></button>
                                {showSubScreen && <CinBall onClose={handleCloseSubScreen} />}
                            </section>
                        </section>
                        <section class="item">
                            <img src={bar} width="200" height="200" />
                            <h3>Peanut Butter<br></br>Protein Ball</h3>
                            <section>
                                <button onClick={handleClick}><b>$8 per 3</b></button>
                                {showSubScreen && <PBall onClose={handleCloseSubScreen} />}
                            </section>
                        </section>
                        <section class="item">
                            <img src={shake} width="200" height="200" />
                            <h3>P.B. & Oats<br></br>Protein Shake</h3>
                            <section>
                                <button onClick={handleClick}><b>$8 per 1</b></button>
                                {showSubScreen && <OatsPB onClose={handleCloseSubScreen} />}
                            </section>
                        </section>
                        <section class="item">
                            <img src={shake} width="200" height="200" />
                            <h3>Chocolate & Oats<br></br>Protein Shake</h3>
                            <section>
                                <button onClick={handleClick}><b>$8 per 1</b></button>
                                {showSubScreen && <OatsP onClose={handleCloseSubScreen} />}
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <section class="foot">
                <section class="eclectic">
                    <img src={logomono} width="200" height="160" />
                <section class="eclecticinfo">
                    <h2>Pack'D Kitchen</h2>
                    <h2>443-244-2095</h2>
                    <h2>packdkitchenllc@gmail.com</h2>
                </section>
                </section>
                <section class="footdesc">
                    <section class="center">
                        <h1><b>Contact</b></h1>
                        <h2><b>Scheduler</b> username</h2>
                        <h2><a href="mailto: packdkitchenllc@gmail.com?">Email Me</a></h2>
                    </section>
                    <section class="center">
                        <h1><b>Social</b></h1>
                        <h2><b>Facebook</b> username</h2>
                        <h2><b>Instagram</b> username</h2>
                    </section>
                    <section class="center">
                        <h1><b>Associates Links</b></h1>
                        <h2>Dani K <a href="danikgymandwellness.com">Dani K Gym</a></h2>
                        <h2>Site created by <a href="hbindustry.co">HBIndustry</a></h2>
                    </section>
                    <section class="center">
                        <h1><b>Resources</b></h1>
                        <h2>Images by PACKDKITCHEN</h2>
                        <h2>Graphics Created by <a href="hbindustry.co">HBIndustry</a></h2>
                    </section>
                </section>
            </section>
        </section>
    </div>
}

