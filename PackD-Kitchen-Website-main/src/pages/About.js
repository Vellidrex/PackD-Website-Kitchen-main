import "./home.css"
import background from "./Background.png" 
import head from "./head.png"
import work1 from "./work1.png"
import work2 from "./work2.png"
import logomono from "./logomono.png"

export default function About() {
    return  <div>
        <section class="frontpage" style={{
                        backgroundImage: 'url('+background+')',
                        }}>
                <section class="outside">
                </section>
                <section class="outside">
                <section class="box">
                    <section class="fill">
                        <h1>David Pack<br></br>Owner and CEO</h1>
                        <img src={head} width="300" height="300" />
                        <section class="content">
                            <h2><b>Accolades</b></h2>
                            <p>Hello and welcome to my Pack'd Kitchen! I have been a chef for 7 years now, with a mix of professional and personal experiences. My goal is to bring the restaurant experience to your home, your meal prep, or at your next event! I have helped numerous clients since the opening of Pack'd Kitchen and I hope I can help you too!</p>
                        </section>
                    </section>
                </section>
                </section>
                <section class="outside">
                <section class="title">
                    <h1>We Do Events</h1>
                    <p>As well as our other services I am always here to do events. Please reach out tome with a text or email to book me for one of these!</p>
                </section>
                </section>
                <section class="middle">
                    <section class="leftbox">
                        <section class="mpic">
                            <img src={work1} width="750" height="300" />
                        </section>
                        <h2>Khabab and Hummus Plater</h2>
                    </section>
                    <section class="rightbox">
                        <section class="mpic">
                            <img src={work2} width="750" height="300" />
                        </section>
                        <h2>Taco Salad Spread</h2>
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
                    <h2>Images Provided by PACKDKITCHEN</h2>
                    <h2>Graphics Created by <a href="hbindustry.co">HBIndustry</a></h2>   
                </section>
                </section>
                </section>
                </section>
            </div>
}