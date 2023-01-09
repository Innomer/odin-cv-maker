import React from "react";
import { Component } from "react";
import CVSection from "./CVSection";
import './HeaderSection.css';

class HeaderSection extends Component {
    render() {
        return (
            <div>
                <header>
                    CV CREATOR
                </header>
                <CVSection />
            </div>
        );
    }
}

export default HeaderSection;