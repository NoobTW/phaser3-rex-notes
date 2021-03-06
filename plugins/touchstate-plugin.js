'use strict'

import TouchState from './touchstate.js';

class TouchStatePlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    add(gameObject, config) {
        return new TouchState(gameObject, config);
    }

}

export default TouchStatePlugin;