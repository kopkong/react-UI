import './appheader.scss';

import React,{PropTypes, Component} from 'react';

export default class AppHeader extends Component{
    static propTypes = {
        leftText : PropTypes.string,
        leftIcon: PropTypes.string,
        rightText: PropTypes.string,
        rightIcon: PropTypes.string,
        title: PropTypes.string
    };

    render() {
        return (
            <header className="app-header clearfix">
                <div className="app-header-leftIcon">
                    {this.props.leftText}
                    {   this.props.leftIcon && this.props.leftIcon.length > 0
                        ? <i className={`fa fa-`+ this.props.leftIcon}></i>
                        : null
                    }
                </div>
                <div className="app-header-rightIcon">
                    {this.props.rightText}
                    {   this.props.rightIcon && this.props.rightIcon.length > 0
                        ? <i className={`fa fa-`+ this.props.rightIcon}></i>
                        : null
                    }
                </div>
                <span className="app-header-title">
                    {this.props.title}
                </span>
            </header>
        )
    }
}