import React from 'react'


export default function About() {
    const [isClicked, setIsClicked] = React.useState(false);
    function handleClick() {
        setIsClicked(!isClicked);
        console.log(isClicked);
    }
    return (
        <section id="about">
            <div className="about-us">
                <div className="left-container">
                    <img src="src/images/restaurant.jpg" alt="about-img"></img>
                </div>
                <div className="right-container">
                    <h2>Our mission.</h2>
                    <p>LastBite aims to address the goal of achieving responsible consumption and production and helps us strive forward to achieve said goal. According to the UN nearly 17% of total food that is available to consumers is wasted at household, food service and retail levels. These unsustainable patterns of purchase and consumption can have many adverse affects as we are essentially wasting many of the resources involved in the production of food resources.
                    </p>
                    <p className={`hidden-text ${!isClicked ? "hidden": "show"}`}>These large levels of consumption also require us to have increased levels of food production which can have unwanted effects on the environment and pose a challenge to future production quantities as we possess limited resources.LastBite is a service which essentially acts as an online food marketplace. It addresses the problem of achieving responsible consumption and production by giving a platform through which users can give away unwanted food or leftover food and others can choose to collect it. This helps reduce the amount of food waste created by household and restaurants as more often than not they have food that is still fit for consumption but they don’t make use of it. This is especially apparent in restaurants where they often buy ingredients in bulk or have leftover dishes which they do not plan to sell. Through LastBite a user can register as a Seller or a Customer.</p>
                    <button onClick={() => handleClick()}>Learn More</button>
                </div>
            </div>
            <div className="get-started">
                <h1 className="title">GET <span>STARTED</span></h1>
                <div className="users">
                    <div className="users-container">
                        <div className="user-card">
                            <img src="src/images/user.png" alt="user"></img>
                            <h3>I'M A USER</h3>
                            <p>Look for a good deal? Look no further than our website, where you can get started in just a few clicks. </p>
                            <button>Read More</button>
                        </div>
                        <div className="user-card">
                            <img src="src/images/business.png" alt="business"></img>
                            <h3>WE'RE A BUSINESS</h3>
                            <p>Are you a company? Minimize food waste and maximize impact by
                            sharing your surplus food. </p>
                            <button>Get in touch</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}