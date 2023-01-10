import React from "react";
import { Component } from "react";
import './CVSection.css';

class CVSection extends Component {

    constructor() {
        super();
        this.state = {
            Profile: false,
            Education: false,
            Experience: false,
            fName: 'Name',
            lName: 'lName',
            title: 'Title',
            add: 'India',
            phone: '12345678',
            email: 'xyz@gmail.com',
        };
        this.enableExperience = this.enableExperience.bind(this);
        this.enableEducation = this.enableEducation.bind(this);
        this.enableProf = this.enableProf.bind(this);
        this.updateCV = this.updateCV.bind(this);
    }

    enableExperience() {
        this.setState({
            Profile: false,
            Education: false,
            Experience: true,
        });
    }

    enableEducation() {
        this.setState({
            Profile: false,
            Education: true,
            Experience: false,
        });
    }

    enableProf() {
        this.setState({
            Profile: true,
            Education: false,
            Experience: false,
        });
    }

    updateCV(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        for (let [keyss, value] of formData.entries()) {
            this.setState({
                [keyss]:value
            })
        }
    }

    render() {
        return (
            <div className="CV">
                <div id="CVEditor">
                    <form onSubmit={this.updateCV}>
                        <div id="Personal" className={this.state.Profile ? null : 'Dis'}>
                            <p id='formTitle'>Personal Details</p>
                            <label htmlFor="fName">First Name</label>
                            <input type='text' id='fName' name='fName' placeholder="First Name"></input>
                            <label htmlFor="lName">Last Name</label>
                            <input type='text' id='lName' name='lName' placeholder="Last Name"></input>
                            <label htmlFor="title">Title</label>
                            <input type='text' id='title' name='title' placeholder="Title"></input>
                            <label htmlFor="address">Address</label>
                            <input type='text' id='add' name='add' placeholder="Address"></input>
                            <label htmlFor="phone">Phone Number</label>
                            <input type='text' id='phone' name='phone' placeholder="Phone Number"></input>
                            <label htmlFor="email">Email</label>
                            <input type='text' id='email' name='email' placeholder="Email"></input>
                            <input type='submit' id='submitBut' value="Submit"></input>
                        </div>
                        <div id="Education" className={this.state.Education ? null : 'Dis'}>
                            <p id='formTitle'>Education</p>
                            <label htmlFor="uniName">University Name</label>
                            <input type='text' id='uniName' name='uniName' placeholder="University Name"></input>
                            <label htmlFor="uniCity">City</label>
                            <input type='text' id='uniCity' name='uniCity' placeholder="City"></input>
                            <label htmlFor="uniDegree">Degree</label>
                            <input type='text' id='uniDegree' name='uniDegree' placeholder="Degree"></input>
                            <label htmlFor="uniFrom">Start Year</label>
                            <input type='number' id='uniFrom' name='uniFrom' placeholder="Start Year"></input>
                            <label htmlFor="uniEnd">End Year</label>
                            <input type='number' id='uniEnd' name='uniEnd' placeholder="End Year"></input>
                            <input type='button' id='addBut' value="Add"></input>
                            <input type='button' id='delBut' value="Remove"></input>
                            <input type='submit' id='submitBut' value="Submit"></input>
                        </div>
                        <div id="Experience" className={this.state.Experience ? null : 'Dis'}>
                            <p id='formTitle'>Experience</p>
                            <label htmlFor="compPos">Position</label>
                            <input type='text' id='compPos' name='compPos' placeholder="Position"></input>
                            <label htmlFor="compName">Company Name</label>
                            <input type='text' id='compName' name='compName' placeholder="Company Name"></input>
                            <label htmlFor="compCity">City</label>
                            <input type='text' id='compCity' name='compCity' placeholder="City"></input>
                            <label htmlFor="compFrom">Start Year</label>
                            <input type='number' id='compFrom' name='compFrom' placeholder="Start Year"></input>
                            <label htmlFor="compEnd">End Year</label>
                            <input type='text' id='compEnd' name='compEnd' placeholder="End Year"></input>
                            <input type='button' id='addBut' value="Add"></input>
                            <input type='button' id='delBut' value="Remove"></input>
                            <input type='submit' id='submitBut' value="Submit"></input>
                        </div>
                    </form>
                </div>
                <div id="CVPreview">
                    <div id="prevHeader">
                        <h1>{this.state.fName} {this.state.lName}</h1>
                        <h2>{this.state.title}</h2>
                        <h4>{this.state.add}</h4>
                        <h4>{this.state.phone}</h4>
                        <h4>{this.state.email}</h4>
                        <p><button id="editProf" onClick={this.enableProf}>Edit</button></p>
                    </div>
                    <div id="prevExperience">
                        <p>Experience<button id="editExp" onClick={this.enableExperience}>Edit</button></p>
                        <div>
                            <p className="posi">{this.state.compPos}</p>
                            <p className="expName">{this.state.compName}</p>
                            <p className="city">{this.state.compCity}</p>
                            <p className="year">{this.state.compFrom} - {this.state.compEnd}</p>
                        </div>
                    </div>
                    <div id="prevEducation">
                        <p>Education <button id="editEdu" onClick={this.enableEducation}>Edit</button></p>
                        <div>
                            <p className="posi">{this.state.uniDegree}</p>
                            <p className="expName">{this.state.uniName}</p>
                            <p className="city">{this.state.uniCity}</p>
                            <p className="year">{this.state.uniFrom} - {this.state.uniEnd}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CVSection;