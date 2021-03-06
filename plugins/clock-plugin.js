'use strict'

import Clock from './clock.js';

class ClockPlugin extends Phaser.Plugins.BasePlugin {

    constructor(pluginManager) {
        super(pluginManager);
    }

    start() {
        var eventEmitter = this.game.events;
        eventEmitter.once('destroy', this.destroy, this);
    }

    add(scene, config) {
        return new Clock(scene, config);
    }

}

export default ClockPlugin;