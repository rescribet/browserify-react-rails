'use strict';

var blinkActions = require('../actions/BlinkActions'),
    alt = require('../alt_instance');;

class BlinkStore {
    constructor() {
        this.bindActions(blinkActions);
        this.visible = true;
    }

    toggleBlink() {
        this.setState({visible: !this.visible});
    }
}

module.exports = alt.createStore(BlinkStore);
