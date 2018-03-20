/**
 * @file doris main
 * @author thu
 */

class Doris {
    constructor(option) {
        this.option = option;
        this.el = document.querySelector(this.option.el);
        this.data = {};
        this.innerHTML = this.el.innerHTML;

        this.init();

        /* setTimeout(() => {
            this.data.name = 'thu';
        }, 1000); */
    }
    init() {
        for (let key of Object.keys(this.option.data)) {
            Object.defineProperty(this.data, key, {
                set: value => {
                    this.refresh(key, value);
                }
            });
        }
        Object.assign(this.data, this.option.data);
    }
    refresh(key, value) {
        this.el.innerHTML = this.innerHTML.replace(`{{ ${key} }}`, value);
    }
}

new Doris({
    el: '#app',
    data: {
        name: 'doris',
        age: 22
    }
});
