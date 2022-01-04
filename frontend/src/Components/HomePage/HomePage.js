import React, { Component } from 'react'
import MainContent from '../MainContent/MainContent'
import Navbar from '../Navbar/Navbar'
export class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <MainContent />
            </div>
        )
    }
}

export default HomePage
