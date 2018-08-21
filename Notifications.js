import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition, transit } from "react-css-transition";
import "./style.scss"


const styles = {
    container: {
        position: "absolute",
        top: "0px",
        left: window.innerWidth/2 - 500/2 + "px",
        width: "500px",
        height: "60px",
        backgroundColor: "#ff7600fa",
        borderRadius: "10px",
        display: "table",
        textAlign: "center"
    },
    textStyle: {
        color: "white",
        display: "table-cell",
        verticalAlign: "middle"
    }
}


export const showNotification = (data) => {
    let el = document.querySelector("#notificationsBar");
    el.dispatchEvent(new CustomEvent('showNotification', { detail: data}));
}


export default class Notifications extends React.Component {

    constructor(props){
        super(props)
        this._handleShowNotificationEvent = this._handleShowNotificationEvent.bind(this)
        this.onNotificationsClick = this.onNotificationsClick.bind(this)

        this.state = {
            text: null,
            shown: false
        }

    }

    _handleShowNotificationEvent = (event) => {
        this.setState({
            text: event.detail.text,
            shown: !this.state.shown
        })
    };

    onNotificationsClick(){
        this.setState({shown: !this.state.shown})
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('showNotification', this._handleShowNotificationEvent);
    }

    componentWillUnmount(){
        ReactDOM.findDOMNode(this).removeEventListener('showNotification', this._handleShowNotificationEvent);
    }

    render(){
        let notificationsActiveClass = this.state.shown && this.state.text ? "active" : null;

        return (
            <div id="notificationsBar" onClick={this.onNotificationsClick} className={notificationsActiveClass}>
                <span style={styles.textStyle}>{this.state.text}</span>
            </div>
        )
    }

}

