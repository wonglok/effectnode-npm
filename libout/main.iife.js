var EffectNode = (function (exports) {
  'use strict';

  const isFunction = function(obj) {
    return typeof obj === 'function' || false;
  };

  class EventEmitter {
    // https://gist.github.com/datchley/37353d6a2cb629687eb9
    constructor() {
      this.listeners = new Map();

      this.send = this.emit.bind(this);
    }

    on(label, callback) {
      this.listeners.has(label) || this.listeners.set(label, []);
      this.listeners.get(label).push(callback);

      return () => {
        this.off(label, callback);
      }
    }

    off(label, callback) {
      const listeners = this.listeners.get(label);
      let index;

      if (listeners && listeners.length) {
        index = listeners.reduce((i, listener, index) => {
          return (isFunction(listener) && listener === callback) ?
          (i = index) :
          i;
        }, -1);

        if (index > -1) {
          listeners.splice(index, 1);
          this.listeners.set(label, listeners);
          return true;
        }
      }
      return false;
    }

    emit (label, ...args) {
      const listeners = this.listeners.get(label);

      if (listeners && listeners.length) {
        listeners.forEach((listener) => {
          listener(...args);
        });
        return true;
      }
      return false;
    }
  }

  class Wire extends EventEmitter {
  }

  class AutoWire {
    constructor () {
      const map = new Map();
      const proxy = new Proxy({}, {
        get: (object, key) => {
          if (map.has(key)) {
            return map.get(key)
          } else {
            const wire = new Wire();
            map.set(key, wire);
            return wire
          }
        },
        set: (object, key, val) => {
          console.log('enWire is read only');
          return true
        }
      });
      return proxy
    }
  }

  exports.AutoWire = AutoWire;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
