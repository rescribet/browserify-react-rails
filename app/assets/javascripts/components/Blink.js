'use strict';

const React = require('react'),
      blinkActions = require('../actions/BlinkActions'),
      blinkStore = require('../stores/BlinkStore'),
      connectToStores = require('alt/utils/connectToStores');

class Blink extends React.Component {
    constructor(props) {
        super(props);
    }

    static getPropsFromStores() {
        return blinkStore.getState();
    }

    static getStores() {
        return [blinkStore];
    }

    makeBlink() {
        blinkActions.toggleBlink();
    }

    style() {
        return {
            visibility: this.props.visible ? 'visible' : 'hidden'
        };
    }

    render() {
        return (<div>
            <p style={this.style()}>I blink</p>
            <a href="#" onClick={this.makeBlink.bind(this)}>Toggle Blink</a>
        </div>);
    }
}

module.exports = connectToStores(Blink);
