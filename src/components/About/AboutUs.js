import React from 'react';

import './AboutUs.css';
import profilepic from '../About/dp-pastel-clipped.png';

const aboutUs = () => (

    <body className="wrapper">
        <div className="row">
            <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="/">Twitter</a></h2>
            </div>
            </div> 
            <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="/">Twitter</a></h2>
            </div>
            </div>
             <div className="columns">
            <div className="card">
                <img src = {profilepic} className="profile" alt="profile"></img>
                <h1 className="nameheading">Mohammed Abraz</h1>
                <h2 className="infoheading">UI/UX Designer</h2>
                <h2 className="infoheading"><a href="/">Twitter</a></h2>
            </div>
            </div>
        </div>
    </body>
);

export default aboutUs;