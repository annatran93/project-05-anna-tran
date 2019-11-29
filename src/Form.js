import React, { Component } from 'react';
import './App.css'
import firebase from './firebase.js';


class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentCards: [],
            guestName: '',
            guestComment: ''
        }
    }

    onChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log('name', name);
        // console.log('value', value);
        this.setState({
            [name]: value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        const nameToBeAdded = this.state.guestName;
        const commentToBeAdded = this.state.guestComment;

        if (this.state.guestName !== '' && this.state.guestComment) {
            firebase.database().ref().push({ 'name': nameToBeAdded, 'comment': commentToBeAdded })
            this.setState({
                guestName: '',
                guestComment: ''
            })
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label htmlFor="guestName"></label>
                <input id="guestName" name="guestName" type="text" onChange={this.onChange} value={this.state.guestName} />
                <label htmlFor="guestComment"></label>
                <input id="guestComment" name="guestComment" type="text" onChange={this.onChange} value={this.state.guestComment} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;