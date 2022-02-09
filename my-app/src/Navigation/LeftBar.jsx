import React, {Component} from 'react';
import yoga from '../assets/yoga.png'
import swim from '../assets/swim.png'
import bike from '../assets/biking.png'
import bell from '../assets/dumbbell.png'

export default class LeftBar extends Component {
    render (){
        return(
            <nav className="leftBar">
                <ul className="iconsbar">
                    <button className="yoga icons">
                        <img className="yoga" src={yoga} alt="yoga"></img>
                    </button>
                    <button className="swim icons">
                        <img className="swim" src={swim} alt="swimming"></img>
                    </button>
                    <button className="bike icons">
                        <img className="bike" src={bike} alt="biking"></img>
                    </button>
                    <button className="bell icons">
                        <img className="bell" src={bell} alt="bell"></img>
                    </button>
                </ul>
                <p className="copyright">Copyright, SportSee 2021</p>
            </nav>
        )
    }
}