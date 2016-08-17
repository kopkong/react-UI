/**
 * Created by colin on 16/8/16.
 */
import './appnav.scss';

import React, {PropTypes, Component} from 'react';

export default class AppNav extends Component {
    static propTypes ={
        foodEntry: PropTypes.array
    };

    render() {
        const navItems = this.props.foodEntry.map((item,key)=>{
            return (
                <div className="app-nav-item" key={key}>
                    <img src={item.img} alt="" className="app-nav-item-img"/>
                    <span className="app-nav-item-title">{item.title}</span>
                </div>
            )
        });

        return (
            <div className="app-nav">
                {navItems}
            </div>
        )
    }
}