(function(root){

  var plugin={
    install:function(Vue,options){
      /**
       *  `$watchAll()` is a instance convenience method to easily watch
       *  a list of properties. Internally, `$watchAll` registers a
       *  watcher for each property. When a property changes, the supplied
       *  callback `callback` is called with the property name and
       *  the current and previous values of the watched property.
       *
       * @param props - property names with optional options
       * @param callback -- invoked with a property changes
       */
      Vue.prototype.$watchAll =
          function (props, callback) {
         
              for (const prop of props) {
                  const [name, opts] = typeof prop === 'string'
                      ? [prop, undefined]
                      : [prop.name, prop.options];

                  const cb = function (newValue, oldValue) {
                      callback(name, newValue, oldValue);
                  };
     
                  this.$watch(name, cb, opts);
              }
          };

    }
  }

  if( typeof module === 'object' && typeof module.exports === 'object'){
    module.exports = plugin
  }else if(typeof define === 'function' && define.amd){
    define('VueWatchAll', plugin)
  }else{
    root.VueWatchAll = plugin
  }

}(this));