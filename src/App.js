import React from 'react';
import {render} from 'react-dom'
import Pet from './Pet';

const app = () => {
    return React.createElement(
        "div",
        {},
        [React.createElement("h1", {}, "Adopt Me"),
        React.createElement(Pet, { name: " Leo", animal: "Dog", breed: "Pug" }),
        React.createElement(Pet, { name: "Bruno", animal: "Dog", breed: "German Shepard" }),
        React.createElement(Pet, { name: "Dino", animal: "Dog", breed: "Pug" }),]
    );
};
ReactDOM.render(
    React.createElement(app),
    document.getElementById("root")
);