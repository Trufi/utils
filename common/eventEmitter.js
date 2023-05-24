/**
 * @template M
 */
export class EventEmitter {
    constructor() {
        /**
         * @private
         * @type {{ [K in keyof M]?: Array<(ev: M[K]) => void> }}
         */
        this.events = {};
    }

    /**
     * Registers event listener
     * @public
     * @template {keyof M} K
     * @param type {K} Event type
     * @param listener {(ev: M[K]) => void} Event handler
     */
    on(type, listener) {
        let eventsByType = this.events[type];
        if (!eventsByType) {
            eventsByType = this.events[type] = [];
        }
        eventsByType.push(listener);
        return this;
    }

    /**
     * Registers event listener which will be called once
     * @public
     * @template {keyof M} K
     * @param type {K} Event type
     * @param listener {(ev: M[K]) => void} Event handler
     */
    once(type, listener) {
        /** @param {M[K]} data */
        const wrapper = (data) => {
            this.off(type, wrapper);
            listener.call(this, data);
        };

        this.on(type, wrapper);

        return this;
    }

    /**
     * Removes event listener registered with `on`
     * @public
     * @template {keyof M} K
     * @param type {K} Event type
     * @param listener {(ev: M[K]) => void} Event handler
     */
    off(type, listener) {
        const eventsByType = this.events[type];

        if (!eventsByType) {
            return this;
        }

        const index = eventsByType.indexOf(listener);

        if (index !== -1) {
            eventsByType.splice(index, 1);
        }

        return this;
    }

    /**
     * Calls all event listeners with event type `type`
     * @public
     * @template {keyof M} K
     * @param type {K} Event type
     * @param data {M[K]=} Data transferred to events
     */
    emit(type, data) {
        const eventsByType = this.events[type];

        if (!eventsByType) {
            return this;
        }

        const events = eventsByType.slice();

        for (let i = 0; i < events.length; i++) {
            events[i].call(this, /** @type any */ (data));
        }

        return this;
    }
}
