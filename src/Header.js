import React, { Component } from 'react';
import './App.css'
import leaf from './assets/leaf-01.png';
import foil from './assets/foil.jpg';


class Header extends Component {

    onClick = (event) => {
        const form = document.querySelector('form')
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    }

    render() {
        return (
            <header>
                <img src={leaf} className="left leaf" />
                <img src={leaf} className="right leaf" />
                <div className="button">
                    <button onClick={this.onClick}> Add Comment</button>
                </div>
                <div className="title">
                    <h1>Kelvin ❤ Karen</h1>
                    <h2>November 28th 2019</h2>
                    <div className="instructions">
                        <p>Record a video with your well wishes, something funny, words of advice, or maybe date night ideas. When we look back we'll be reminded of all the people who helped celebrate our special day.</p>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;