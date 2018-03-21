/**
 * @file doris main
 * @author thu
 */

class Doris {
    constructor(option) {
        this.option = option;
        this.el = document.querySelector(this.option.el);
        this.data = {};
        this._data = {};
        this.innerHTML = this.el.innerHTML;

        Object.assign(this._data, this.option.data);

        this.init();

        // setTimeout(() => { this.data.name = 'thu'; }, 1000);
    }
    init() {
        for (let key of Object.keys(this._data)) {
            Object.defineProperty(this.data, key, {
                enumerable: true,
                get: () => this._data[key],
                set: value => {
                    this._data[key] = value;
                    this.refresh();
                }
            });
        }
        Object.assign(this.data, this._data);
    }
    refresh() {
        let innerHTML = this.innerHTML;
        for (let [key, value] of Object.entries(this.data)) {
            innerHTML = innerHTML.replace(`{{ ${key} }}`, value);
        }
        this.el.innerHTML = innerHTML;
    }
}

new Doris({
    el: '#app',
    data: {
        name: 'doris',
        age: 22
    }
});
