/*!
  * vue-reactive-refs v0.0.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
var FocusTrapVue = (function (exports) {
  'use strict';

  var ReactiveRefs = function (_Vue) {
      _Vue.mixin({
          beforeCreate: function () {
              var refs = this.$options.refs;
              if (!refs)
                  return;
              // @ts-ignore
              this.$refs = _Vue.observable(refs.reduce(function ($refs, key) {
                  $refs[key] = undefined;
                  return $refs;
              }, {}));
          },
      });
  };

  /**
   * Because this version uses a Proxy, it will fail on any browser that does not
   * support it
   */
  var DynamicReactiveRefs = function (_Vue) {
      _Vue.mixin({
          beforeCreate: function () {
              var $refs = _Vue.observable({});
              // @ts-ignore
              this.$refs = new Proxy($refs, {
                  set: function (target, key, value) {
                      if (!(key in target))
                          _Vue.set($refs, key, value);
                      return Reflect.set(target, key, value);
                  },
                  get: function (target, key) {
                      if (!(key in target))
                          _Vue.set($refs, key, undefined);
                      return Reflect.get(target, key);
                  },
              });
          },
      });
  };

  exports.DynamicReactiveRefs = DynamicReactiveRefs;
  exports.ReactiveRefs = ReactiveRefs;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
