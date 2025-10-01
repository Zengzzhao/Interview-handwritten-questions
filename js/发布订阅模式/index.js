class EventEmitter {
    constructor() {
        this.events = {}
    }
    // 订阅事件
    on(event, fn) {
        if (this.events[event]) {
            this.events[event].push(fn)
        } else {
            this.events[event] = [fn]
        }
    }
    // 取消订阅
    off(event, fn) {
        if (this.events[event]) {
            const index = this.events[event].indexOf(fn)
            this.events[event].splice(index, 1)
        }
    }
    // 触发事件
    emit(event, ...args) {
        if (this.events[event]) {
            const fns = this.events[event]
            for (const fn of fns) {
                fn(...args)
            }
        }
    }
}