(function(root){

  var plugin={

    install:function(Vue,options){

      Vue.component('DatGui',{
        template:"\
          <div>\
            <div ref='container'>\
              <slot>\
             </slot>\
           </div>\
         </div>\
        ",
        name:'DatGui',
        props: {
          expand: {
            type: Boolean,
            default:undefined
          }
        },
        watch: {
          expand:function(value) {
            this.$_gui && this.$_gui.expand(value)
          }
        },
        data:function(){
          return {
            context: {}
          }
        },
        provide:function() {
          return {
            context: this.context
          }
        },
        created:function() {
          this.$_gui = new dat.GUI({ autoPlace: false })
        },
        mounted:function() {
          this.$refs.container.appendChild(this.$_gui.domElement)
          if(this.expand !== undefined){
            this.$_gui.expand(this.expand)
          }
        },
        beforeDestroy:function() {
          this.$_gui && this.$_gui.destroy()
        }
      })
      Vue.component('DatFolder',{
        template:"\
          <span>\
            <slot>\
           </slot>\
         </span>\
        ",
        props: {
          name: {
            type: String,
            default: 'folder'
          },
          open: {
            type: Boolean,
            default: false
          },
          expand: {
            type: Boolean,
            default:undefined
          },
          title: {
            type: String,
            default: ''
          }
        },
        watch: {
          name:function(value){
            this.$_gui && (this.$_gui.name = value)
          },
          open:function(value){
            this.$_gui && this.$_gui[this.open ? 'open' : 'close']()
          },
          expand:function(value) {
            this.$_gui && this.$_gui.expand(value)
          }
        },
        created:function() {
          this.$_gui = this.$parent.$_gui.addFolder(this.name,this.title)
        },
        mounted:function() {
          if(this.open !== undefined){
            this.$_gui[this.open ? 'open' : 'close']()
          }
          if(this.expand !== undefined){
            this.$_gui.expand(this.expand)
          }
        }
      })
      Vue.component('DatValue',{
        template:"\
          <span>\
         </span>\
        ",
        name: 'DatValue',
        props: {
          value: {
            type: [Number, String, Boolean, undefined],
            default: undefined
          },
          label: {
            type: String,
            default:undefined
          },
          max: {
            type: Number,
            default: null
          },
          min: {
            type: Number,
            default: null
          },
          step: {
            type: Number,
            default: null
          },
          empty: {
            type: Number,
            default: null
          },
          values: {
            type: [Object, Array],
            default:function() {
              return null
            }
          },
          placeholder: {
            type: String,
            default:''
          },
          readonly: {
            type: Boolean,
            default: false
          },
          password: {
            type: Boolean,
            default: false
          },
          title: {
            type: String,
            default: ''
          },
          type:{
            type:String,
            default:''
          },
        },
        inject: ['context'],
        computed: {
          valueInner:function() {
            return this.context && this.context[this.label]
          }
        },
        watch: {
          value:function(value) {
            this.$_controller && this.$_controller.setValue(value)
          },
          valueInner:function(newVal){
            this.$emit('input', newVal)
          },
          label:function(value) {
            this.$_controller && this.$_controller.name(value)
          },
          max:function(value) {
            this.$_controller && this.$_controller.max(value)
            this.$_controller.updateDisplay()
          },
          min:function(value) {
            this.$_controller && this.$_controller.min(value)
            this.$_controller.updateDisplay()
          },
          step:function(value) {
            this.$_controller && this.$_controller.step(value)
            this.$_controller.updateDisplay()
          },
          empty:function(value) {
            this.$_controller && this.$_controller.empty(value)
          },
          values:function(list) {
            this.$_controller = this.$_controller.options(list)

            return
            var html = ''
            var type = Object.prototype.toString.call(list).slice(8,-1).toLowerCase()

            switch(type){
              case 'array':
                list.forEach(function(v){
                  html += '<option value=' + v + '>' + v + '</option>';
                })
                break;
              case 'object':
                Object.keys(list).forEach(function(k){
                  html += '<option value=' + list[k] + '>' + k + '</option>';
                })
                break;
            }
      
            if(this.$_controller){
              this.$_controller.domElement.children[0].innerHTML = html
              this.$_controller.updateDisplay()
            }
          },
          placeholder:function(value) {
            this.$_controller && this.$_controller.placeholder(value)
          },
          readonly:function(value) {
            this.$_controller && this.$_controller.readonly(value)
          },
          password:function(value) {
            this.$_controller && this.$_controller.password(value)
          },
          title:function(value) {
            this.$_controller && this.$_controller.title(value)
          },
          type:function(value) {
            this.$_controller && this.$_controller.type(value)
          }
        },
        beforeDestroy:function() {
          this.$_controller.remove()
        },
        created:function() {
          var self = this
      
          if (this.value === undefined) {
            this.$set(this.context, this.label, function() {
              self.$emit('click')
            })
            this.$_controller = this.$parent.$_gui.add(this.context, this.label)
            return
          }
      
          this.$set(this.context, this.label, this.value)
          if (this.values) {
            this.$_controller = this.$parent.$_gui.add(this.context, this.label, this.values)
            this.$_controller.onFinishChange(function(obj){
              var has_selected_option = this.__select.selectedOptions.length > 0
              if(has_selected_option){
                self.$emit('change',this.__select.selectedOptions[0].innerText)
              }
            })
          } else if (this.min != null && this.max != null && this.step != null) {
            if (this.empty != null){
              this.$_controller = this.$parent.$_gui.add(this.context, this.label, this.min, this.max, this.step, this.empty)
            } else {
              this.$_controller = this.$parent.$_gui.add(this.context, this.label, this.min, this.max, this.step)
            }
            this.$_controller.onFinishChange(function(value){
              self.$emit('finish-change',value)
            })
            this.$_controller.onChange(function(value){
              self.$emit('change',value)
            })
            this.$_controller.empty(this.empty)
          } else {
            this.$_controller = this.$parent.$_gui.add(this.context, this.label)
            this.$_controller.onFinishChange(function(value){
              self.$emit('finish-change',value)
            })
            this.$_controller.onChange(function(value){
              self.$emit('change',value)
            })
            this.$_controller.placeholder(this.placeholder)
            this.$_controller.readonly(this.readonly)
            this.$_controller.password(this.password)
            this.$_controller.title(this.title)
            this.$_controller.type(this.type)
          }
        }
      })

      Vue.component('DatPlotter',{
        template:"\
           <span>\
          </span>\
        ",
        name: 'DatPlotter',
        props:{
          value:{
            type:Number,
            default:0
          },
          label:{
            type:String,
            default:undefined
          },
          max:{
            type:Number,
            default:10
          },
          period:{
            type:Number,
            default:500
          },
          type:{
            type:String,
            default:'line'
          },
          fgColor:{
            type:String,
            default:'#fff'
          },
          bgColor:{
            type:String,
            default:'#000'
          }
        },
        inject: ['context'],
        computed: {
          valueInner:function() {
            return this.context && this.context[this.label]
          }
        },
        watch: {
          value:function(value) {
            this.$_controller && this.$_controller.setValue(value)
          },
          valueInner:function(newVal) {
            switch(true){
              case this.$_controller instanceof dat.controllers.NumberController:
              case this.$_controller instanceof dat.controllers.NumberControllerBox:
                this.$emit('input', newVal == this.empty_n ? '' : newVal)
                break;
              default:
                this.$emit('input', newVal)
            }
          }
        },
        created:function() {
          this.$set(this.context, this.label, this.value)
          this.$_controller = this.$parent.$_gui.addPlotter(this.context, this.label,this.max,this.period,this.type,this.fgColor,this.bgColor)
        }
      })

      Vue.component('DatColor',{
        template:"\
          <span>\
         </span>\
        ",
        name: 'DatColor',
        props: {
          value: {
            type: [String, Array, Object]
          },
          label: {
            type: String
          }
        },
        inject: ['context'],
        computed: {
          valueInner:function() {
            return this.context && this.context[this.label]
          }
        },
        watch: {
          value:function(value) {
            this.$_controller && this.$_controller.setValue(value)
          },
          valueInner:function(newVal) {
            this.$emit('input', newVal)
          }
        },
        created:function() {
          this.$set(this.context, this.label, this.value)
          this.$_controller = this.$parent.$_gui.addColor(this.context, this.label)
        }
      })

      Vue.component('DatText',{
        template:"\
          <span>\
         </span>\
        ",
        name: 'DatText',
        props: {
          value: {
            type: String
          },
          label: {
            type: String
          },
          placeholder: {
            type: String,
            default:''
          },
          readonly: {
            type: Boolean,
            default: false
          }
        },
        inject: ['context'],
        computed: {
          valueInner:function() {
            return this.context && this.context[this.label]
          }
        },
        watch: {
          value:function(value) {
            this.$_controller && this.$_controller.setValue(value)
          },
          valueInner:function(newVal) {
            this.$emit('input', newVal)
          },
          label:function(value) {
            this.$_controller && this.$_controller.name(value)
          },
          placeholder:function(value) {
            this.$_controller && this.$_controller.placeholder(value)
          },
          readonly:function(value) {
            this.$_controller && this.$_controller.readonly(value)
          }
        },
        created:function() {
          this.$set(this.context, this.label, this.value)
          this.$_controller = this.$parent.$_gui.addText(this.context, this.label)
          this.$_controller.placeholder(this.placeholder)
          this.$_controller.readonly(this.readonly)
        }
      })

      Vue.component('DatObject',{
        template:"\
          <span>\
         </span>\
        ",
        name: 'DatObject',
        props: {
          value: {
            type: [Object,Array]
          },
          label: {
            type: String
          }
        },
        inject: ['context'],
        computed: {
          valueInner:function() {
            return this.value
          }
        },
        watch: {
          value:function(value) {
            this.$_controller && this.$_controller.setValue(value)
          },
          valueInner:function(newVal) {
            this.$emit('input', newVal)
          },
          label:function(value) {
            this.$_controller && this.$_controller.name(value)
          }
        },
        created:function() {
          var self = this
          this.$_controller = this.$parent.$_gui.addObject(this.value, this.label)
        }
      })


      Vue.component('DatImage',{
        template:"\
          <span>\
         </span>\
        ",
        name: 'DatImage',
        props: {
          value: {
            type: String
          },
          label: {
            type: String
          }
        },
        inject: ['context'],
        computed: {
          valueInner:function() {
            return this.context && this.context[this.label]
          }
        },
        watch: {
          label:function(value) {
            this.$_controller && this.$_controller.name(value)
          }
        },
        created:function() {
          var self = this
          this.$set(this.context, this.label, this.value)
          this.$_controller = this.$parent.$_gui.addImage(this.context, this.label)
          this.$_controller.onChange(function(img){
            if(img){
              self.$emit('change',img.src)
              self.$emit('input', img.src)
            }
          })
        }
      })
    }
  }

  if( typeof module === 'object' && typeof module.exports === 'object'){
    module.exports = plugin
  }else if(typeof define === 'function' && define.amd){
    define('VueDatGui', plugin)
  }else{
    root.VueDatGui = plugin
  }

}(this));