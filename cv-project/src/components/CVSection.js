import React from "react";
import { Component } from "react";
import './CVSection.css';

class CVSection extends Component {

    render() {
        return (
            <div className="CV">
                <div id="CVEditor">
                    <form>
                        <div id="Personal">
                            <label htmlFor="fName">First Name</label>
                            <input type='text' id='fName' name='fName' placeholder="First Name"></input>
                            <label htmlFor="lName">Last Name</label>
                            <input type='text' id='lName' name='lName'placeholder="Last Name"></input>
                            <label for="title">Title</label>
                            <input type='text' id='title' name='title' placeholder="Title"></input>
                            <label for="address">Address</label>
                            <input type='text' id='add' name='add' placeholder="Address"></input>
                            <label for="phone">Phone Number</label>
                            <input type='text' id='phone' name='phone' placeholder="Phone Number"></input>
                            <label for="email">Email</label>
                            <input type='text' id='email' name='email' placeholder="Email"></input>
                        </div>
                    </form>
                </div>
                <div id="CVPreview"></div>
            </div>
        );
    }
}

export default CVSection;