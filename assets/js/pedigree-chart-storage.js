(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.WebtreesPedigreeChart = {}));
})(this, (function (exports) { 'use strict';

    /**
     * See LICENSE.md file for further details.
     */

    /**
     * This class handles the storage of form values.
     *
     * @author  Rico Sonntag <mail@ricosonntag.de>
     * @license https://opensource.org/licenses/GPL-3.0 GNU General Public License v3.0
     * @link    https://github.com/magicsunday/webtrees-pedigree-chart/
     */
    class Storage
    {
        /**
         * Constructor.
         *
         * @param {String} name The name of the storage
         */
        constructor(name)
        {
            this._name    = name;
            this._storage = JSON.parse(localStorage.getItem(this._name)) || {};
        }

        /**
         * Register a HTML element.
         *
         * @param {String} name The id or name of a HTML element
         */
        register(name)
        {
            let input       = document.getElementById(name);
            let storedValue = this.read(name);

            if (storedValue) {
                if (input.type && (input.type === "checkbox")) {
                    input.checked = storedValue;
                } else {
                    input.value = storedValue;
                }
            } else {
                this.onInput(input);
            }

            // Add event listener
            input.addEventListener("input", (event) => {
                this.onInput(event.target);
            });
        }

        /**
         * This methods stores the value of an input element depending on its type.
         *
         * @param {EventTarget|HTMLInputElement} element The HTML input element
         */
        onInput(element)
        {
            if (element.type && (element.type === "checkbox")) {
                this.write(element.name, element.checked);
            } else {
                this.write(element.name, element.value);
            }
        }

        /**
         * Returns the stored value belonging to the HTML element id.
         *
         * @param {String} name The id or name of a HTML element
         *
         * @returns {String|Boolean|Number}
         */
        read(name)
        {
            return this._storage[name];
        }

        /**
         * Stores a value to the given HTML element id.
         *
         * @param {String}                name  The id or name of a HTML element
         * @param {String|Boolean|Number} value The value to store
         */
        write(name, value)
        {
            this._storage[name] = value;

            localStorage.setItem(this._name, JSON.stringify(this._storage));
        }
    }

    exports.Storage = Storage;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
