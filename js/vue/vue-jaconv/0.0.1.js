'use strict';

(function(root){
  
   var plugin = 
   {
     install:function(Vue,options){

       if ('jaconv' in window){
         for(var func in jaconv){
           Vue.filter(func,jaconv[func])
         }
       }else{
         throw 'must implement jaconv'
       }

     }
  }

  plugin.version = '0.0.1'

  if (typeof module === 'object' && module.exports == 'object') {
    module.exports = plugin
  } else if (typeof define === 'function' && define.amd) {
    define('VueJaconv', plugin);
  } else {
    root.VueJaconv = plugin
  }

}(this));