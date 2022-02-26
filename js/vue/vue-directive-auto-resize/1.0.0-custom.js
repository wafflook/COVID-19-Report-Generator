'use strict';

(function(root){
  
  var plugin = 
  {
    install:function(Vue,options){

      function autoSizeHeight(el){
        el.style.height = 'auto';
        el.style.height = `${el.scrollHeight}px`;
      }

      function handler(e){
        autoSizeHeight(e.target)
      }

      Vue.directive('auto-resize',{
        bind:function(el,binding,vnode){
          ['input', 'change'].forEach(function(event){
            el.addEventListener(event, handler)
          })
        },
        inserted:function(el,binding,vnode){
          autoSizeHeight(el)
        },
        unbind:function(el,binding,vnode){
          ['input', 'change'].forEach(function(event){
            el.removeEventListener(event, handler)
          })
        }
      })

    }
  }

  plugin.version = '1.0.0'

  if (typeof module === 'object' && module.exports == 'object') {
    module.exports = plugin
  } else if (typeof define === 'function' && define.amd) {
    define('VueAutoResize', plugin);
  } else {
    root.VueAutoResize = plugin
  }

}(this));