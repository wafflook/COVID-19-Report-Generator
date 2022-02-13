(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueJsonPretty"] = factory();
	else
		root["VueJsonPretty"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 16:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ src; }
});

// CONCATENATED MODULE: ./package.json
var package_namespaceObject = {"i8":"1.8.0"};
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tree/index.vue?vue&type=template&id=2fa4692a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"tree",class:{
    'vjs-tree': true,
    'is-virtual': _vm.virtual,
  },on:{"scroll":_vm.onTreeScroll}},[_c('div',{style:(_vm.virtual && { height: ((_vm.flatData.length * _vm.itemHeight) + "px") })},[_c('div',{style:(_vm.virtual && { transform: ("translateY(" + _vm.translateY + "px)") })},_vm._l((_vm.visibleData),function(item){return _c('tree-node',{key:item.id,attrs:{"node":item,"collapsed":!!_vm.hiddenPaths[item.path],"custom-value-formatter":_vm.customValueFormatter,"show-double-quotes":_vm.showDoubleQuotes,"show-length":_vm.showLength,"collapsed-on-click-brackets":_vm.collapsedOnClickBrackets,"checked":_vm.selectedPaths.includes(item.path),"selectable-type":_vm.selectableType,"show-line":_vm.showLine,"show-select-controller":_vm.showSelectController,"select-on-click-node":_vm.selectOnClickNode,"path-selectable":_vm.pathSelectable,"highlight-selected-node":_vm.highlightSelectedNode},on:{"tree-node-click":_vm.onTreeNodeClick,"brackets-click":_vm.onBracketsClick,"selected-change":_vm.onSelectedChange}})}),1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Tree/index.vue?vue&type=template&id=2fa4692a&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TreeNode/index.vue?vue&type=template&id=cc6d9c02&
var TreeNodevue_type_template_id_cc6d9c02_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:{
    'vjs-tree__node': true,
    'has-selector': _vm.showSelectController,
    'is-highlight': _vm.highlightSelectedNode && _vm.checked,
  },on:{"click":_vm.onTreeNodeClick}},[(
      _vm.showSelectController && _vm.selectable && _vm.node.type !== 'objectEnd' && _vm.node.type !== 'arrayEnd'
    )?[_c('check-controller',{attrs:{"is-multiple":_vm.isMultiple,"checked":_vm.checked},on:{"change":_vm.onCheckedChange}})]:_vm._e(),_vm._v(" "),_vm._l((_vm.node.level),function(item,index){return _c('div',{key:index,class:{
      'vjs-tree__indent': true,
      'has-line': _vm.showLine,
    }})}),_vm._v(" "),(_vm.node.key)?_c('span',{staticClass:"vjs-key"},[_vm._v(" "+_vm._s(_vm.prettyKey)+":  ")]):_vm._e(),_vm._v(" "),_c('span',[(_vm.node.type !== 'content')?_c('brackets',{attrs:{"data":_vm.node.content,"collapsed-on-click-brackets":_vm.collapsedOnClickBrackets},on:{"click":_vm.onBracketsClick}}):[(_vm.customValueFormatter)?_c('span',{class:_vm.valueClass,domProps:{"innerHTML":_vm._s(_vm.customFormatter(_vm.node.content))}}):_c('span',{class:_vm.valueClass},[_vm._v(_vm._s(_vm.defaultFormatter(_vm.node.content)))])],_vm._v(" "),(_vm.node.showComma)?_c('span',[_vm._v(",")]):_vm._e(),_vm._v(" "),(_vm.showLength && _vm.collapsed)?_c('span',{staticClass:"vjs-comment"},[_vm._v(" // "+_vm._s(_vm.node.length)+" items ")]):_vm._e()],2)],2)}
var TreeNodevue_type_template_id_cc6d9c02_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/TreeNode/index.vue?vue&type=template&id=cc6d9c02&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Brackets/index.vue?vue&type=template&id=66a21067&
var Bracketsvue_type_template_id_66a21067_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"vjs-tree__brackets",on:{"click":function($event){$event.stopPropagation();return _vm.toggleBrackets($event)}}},[_vm._v("\n  "+_vm._s(_vm.data)+"\n")])}
var Bracketsvue_type_template_id_66a21067_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Brackets/index.vue?vue&type=template&id=66a21067&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Brackets/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var Bracketsvue_type_script_lang_js_ = ({
  props: {
    data: {
      required: true,
      type: String,
    },
    collapsedOnClickBrackets: Boolean,
  },
  methods: {
    // 切换括号展开|关闭
    toggleBrackets(e) {
      if (this.collapsedOnClickBrackets) {
        this.$emit('click', e);
      }
    },
  },
});

// CONCATENATED MODULE: ./src/components/Brackets/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bracketsvue_type_script_lang_js_ = (Bracketsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/Brackets/index.vue





/* normalize component */

var component = normalizeComponent(
  components_Bracketsvue_type_script_lang_js_,
  Bracketsvue_type_template_id_66a21067_render,
  Bracketsvue_type_template_id_66a21067_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Brackets = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CheckController/index.vue?vue&type=template&id=6b31e0de&
var CheckControllervue_type_template_id_6b31e0de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:["vjs-check-controller", _vm.checked ? 'is-checked' : ''],on:{"click":function($event){$event.stopPropagation();}}},[_c('span',{class:("vjs-check-controller__inner is-" + _vm.uiType)}),_vm._v(" "),((_vm.uiType)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],class:("vjs-check-controller__original is-" + _vm.uiType),attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.model)?_vm._i(_vm.model,null)>-1:(_vm.model)},on:{"change":[function($event){var $$a=_vm.model,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.model=$$a.concat([$$v]))}else{$$i>-1&&(_vm.model=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.model=$$c}},function($event){return _vm.$emit('change', _vm.model)}],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):((_vm.uiType)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],class:("vjs-check-controller__original is-" + _vm.uiType),attrs:{"type":"radio"},domProps:{"checked":_vm._q(_vm.model,null)},on:{"change":[function($event){_vm.model=null},function($event){return _vm.$emit('change', _vm.model)}],"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.model),expression:"model"}],class:("vjs-check-controller__original is-" + _vm.uiType),attrs:{"type":_vm.uiType},domProps:{"value":(_vm.model)},on:{"change":function($event){return _vm.$emit('change', _vm.model)},"focus":function($event){_vm.focus = true},"blur":function($event){_vm.focus = false},"input":function($event){if($event.target.composing){ return; }_vm.model=$event.target.value}}})])}
var CheckControllervue_type_template_id_6b31e0de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/CheckController/index.vue?vue&type=template&id=6b31e0de&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/CheckController/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var CheckControllervue_type_script_lang_js_ = ({
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
    isMultiple: Boolean,
  },
  data() {
    return {
      focus: false,
    };
  },
  computed: {
    uiType() {
      return this.isMultiple ? 'checkbox' : 'radio';
    },

    model: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
});

// CONCATENATED MODULE: ./src/components/CheckController/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CheckControllervue_type_script_lang_js_ = (CheckControllervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/CheckController/index.vue





/* normalize component */

var CheckController_component = normalizeComponent(
  components_CheckControllervue_type_script_lang_js_,
  CheckControllervue_type_template_id_6b31e0de_render,
  CheckControllervue_type_template_id_6b31e0de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var CheckController = (CheckController_component.exports);
// CONCATENATED MODULE: ./src/utils/index.js
// 获取数据类型
function getDataType(value) {
  return Object.prototype.toString
    .call(value)
    .slice(8, -1)
    .toLowerCase();
}

// type enum: content | objectStart | objectEnd | objectCollapsed | arrayStart | arrayEnd | arrayCollapsed
function jsonFlatten(
  data,
  path = 'root',
  level = 0,
  { key, index, type = 'content', showComma = false, length = 1 } = {},
) {
  const dataType = getDataType(data);
  if (dataType === 'array') {
    const inner = data
      .map((item, idx, arr) =>
        jsonFlatten(item, `${path}[${idx}]`, level + 1, {
          index: idx,
          showComma: idx !== arr.length - 1,
          length,
          type,
        }),
      )
      .flat();
    return [
      jsonFlatten('[', path, level, { key, length: data.length, type: 'arrayStart' })[0],
    ].concat(
      inner,
      jsonFlatten(']', path, level, { showComma, length: data.length, type: 'arrayEnd' })[0],
    );
  } else if (dataType === 'object') {
    const keys = Object.keys(data);
    const inner = keys
      .map((objKey, idx, arr) =>
        jsonFlatten(
          data[objKey],
          objKey.includes('.') ? `${path}["${objKey}"]` : `${path}.${objKey}`,
          level + 1,
          {
            key: objKey,
            showComma: idx !== arr.length - 1,
            length,
            type,
          },
        ),
      )
      .flat();
    return [
      jsonFlatten('{', path, level, { key, index, length: keys.length, type: 'objectStart' })[0],
    ].concat(
      inner,
      jsonFlatten('}', path, level, { showComma, length: keys.length, type: 'objectEnd' })[0],
    );
  }

  const output = Object.entries({
    content: data,
    level,
    key,
    index,
    path,
    showComma,
    length,
    type,
  }).reduce((acc, [key, value]) => {
    if (value !== undefined) {
      return {
        ...acc,
        [key]: value,
      };
    }
    return acc;
  }, {});

  return getDataType(output) === 'object' ? [output] : output;
}

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/TreeNode/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var TreeNodevue_type_script_lang_js_ = ({
  components: {
    Brackets: Brackets,
    CheckController: CheckController,
  },
  props: {
    node: {
      required: true,
      type: Object,
    },
    collapsed: Boolean,
    collapsedOnClickBrackets: Boolean,
    showDoubleQuotes: Boolean,
    showLength: Boolean,
    checked: Boolean,
    // 定义数据层级支持的选中方式, 默认无该功能
    selectableType: {
      type: String,
      default: '', // ''|multiple|single
    },
    // 是否展示左侧选择控件
    showSelectController: {
      type: Boolean,
      default: false,
    },
    showLine: {
      type: Boolean,
      default: true,
    },
    // 是否在点击树的时候选中节点
    selectOnClickNode: {
      type: Boolean,
      default: true,
    },
    // 定义某个数据层级是否支持选中操作
    pathSelectable: {
      type: Function,
      default: () => true,
    },
    // highlight current node when checked
    highlightSelectedNode: {
      type: Boolean,
      default: true,
    },
    // custom formatter for values
    customValueFormatter: {
      type: Function,
      default: null,
    },
  },
  computed: {
    valueClass() {
      return `vjs-value vjs-value__${this.dataType}`;
    },

    // 当前数据类型
    dataType() {
      return getDataType(this.node.content);
    },

    prettyKey() {
      return this.showDoubleQuotes ? `"${this.node.key}"` : this.node.key;
    },

    // 当前的树是否支持选中功能
    selectable() {
      return (
        this.pathSelectable(this.node.path, this.node.content) && (this.isMultiple || this.isSingle)
      );
    },

    // 多选模式
    isMultiple() {
      return this.selectableType === 'multiple';
    },

    // 单选模式
    isSingle() {
      return this.selectableType === 'single';
    },
  },
  methods: {
    defaultFormatter(data) {
      let text = data + '';
      if (this.dataType === 'string') text = `"${text}"`;
      return text;
    },

    customFormatter(data) {
      return this.customValueFormatter
        ? this.customValueFormatter(
            data,
            this.node.key,
            this.node.path,
            this.defaultFormatter(data),
          )
        : this.defaultFormatter(data);
    },

    onBracketsClick() {
      this.$emit('brackets-click', !this.collapsed, this.node.path);
    },

    onCheckedChange() {
      this.$emit('selected-change', this.node);
    },

    onTreeNodeClick() {
      this.$emit('tree-node-click', this.node);
      if (this.selectable && this.selectOnClickNode) {
        this.$emit('selected-change', this.node);
      }
    },
  },
});

// CONCATENATED MODULE: ./src/components/TreeNode/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_TreeNodevue_type_script_lang_js_ = (TreeNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/TreeNode/index.vue





/* normalize component */

var TreeNode_component = normalizeComponent(
  components_TreeNodevue_type_script_lang_js_,
  TreeNodevue_type_template_id_cc6d9c02_render,
  TreeNodevue_type_template_id_cc6d9c02_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TreeNode = (TreeNode_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/components/Tree/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var Treevue_type_script_lang_js_ = ({
  name: 'VueJsonPretty',
  components: {
    TreeNode: TreeNode,
  },
  props: {
    // 当前树的数据
    data: {
      type: [String, Number, Boolean, Array, Object],
      default: null,
    },
    // 定义树的深度, 大于该深度的子树将不被展开
    deep: {
      type: Number,
      default: Infinity,
    },
    // 数据层级顶级路径
    path: {
      type: String,
      default: 'root',
    },
    virtual: {
      type: Boolean,
      default: false,
    },
    itemHeight: {
      type: Number,
      default: 20,
    },
    // 是否显示数组|对象的长度
    showLength: {
      type: Boolean,
      default: false,
    },
    // key名是否显示双引号
    showDoubleQuotes: {
      type: Boolean,
      default: true,
    },
    // 定义数据层级支持的选中方式, 默认无该功能
    selectableType: {
      type: String,
      default: '', // ''|multiple|single
    },
    // 是否展示左侧选择控件
    showSelectController: {
      type: Boolean,
      default: false,
    },
    showLine: {
      type: Boolean,
      default: true,
    },
    // 是否在点击树的时候选中节点
    selectOnClickNode: {
      type: Boolean,
      default: true,
    },
    // 存在选择功能时, 定义已选中的数据层级
    //    多选时为数组['root.a', 'root.b'], 单选时为字符串'root.a'
    value: {
      type: [Array, String],
      default: () => '',
    },
    // 定义某个数据层级是否支持选中操作
    pathSelectable: {
      type: Function,
      default: () => true,
    },
    // highlight current node when checked
    highlightSelectedNode: {
      type: Boolean,
      default: true,
    },
    // collapsed control
    collapsedOnClickBrackets: {
      type: Boolean,
      default: true,
    },
    // custom formatter for values
    customValueFormatter: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      translateY: 0,
      visibleData: null,
      hiddenPaths: jsonFlatten(this.data, this.path).reduce((acc, item) => {
        if (
          (item.type === 'objectStart' || item.type === 'arrayStart') &&
          item.level === this.deep
        ) {
          return {
            ...acc,
            [item.path]: 1,
          };
        }
        return acc;
      }, {}),
    };
  },
  computed: {
    flatData() {
      let startHiddenItem = null;
      const data = jsonFlatten(this.data, this.path).reduce((acc, cur, index) => {
        const item = {
          ...cur,
          id: index,
        };
        const isHidden = this.hiddenPaths[item.path];
        if (startHiddenItem && startHiddenItem.path === item.path) {
          const isObject = startHiddenItem.type === 'objectStart';
          const mergeItem = {
            ...startHiddenItem,
            ...item,
            content: isObject ? '{...}' : '[...]',
            type: isObject ? 'objectCollapsed' : 'arrayCollapsed',
          };
          startHiddenItem = null;
          return acc.concat(mergeItem);
        } else if (isHidden && !startHiddenItem) {
          startHiddenItem = item;
          return acc;
        }

        return startHiddenItem ? acc : acc.concat(item);
      }, []);
      return data;
    },

    selectedPaths: {
      get() {
        if (this.value && this.selectableType === 'single') {
          return [this.value];
        }
        return this.value || [];
      },
      set(val) {
        this.$emit('input', val);
      },
    },

    propsError() {
      const error = this.selectableType && !this.selectOnClickNode && !this.showSelectController;
      return error
        ? 'When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.'
        : '';
    },
  },
  watch: {
    propsError: {
      handler(message) {
        if (message) {
          throw new Error(`[VueJsonPretty] ${message}`);
        }
      },
      immediate: true,
    },

    flatData: {
      handler() {
        this.onTreeScroll();
      },
      immediate: true,
    },
  },
  methods: {
    onTreeScroll() {
      if (this.virtual) {
        const visibleCount = 10;
        const scrollTop = (this.$refs.tree && this.$refs.tree.scrollTop) || 0;
        const scrollCount = Math.floor(scrollTop / this.itemHeight);
        let start =
          scrollCount < 0
            ? 0
            : scrollCount + visibleCount > this.flatData.length
            ? this.flatData.length - visibleCount
            : scrollCount;
        if (start < 0) {
          start = 0;
        }
        const end = start + visibleCount;
        this.translateY = start * this.itemHeight;
        this.visibleData = this.flatData.filter((item, index) => index >= start && index < end);
      } else {
        this.visibleData = this.flatData;
      }
    },

    onSelectedChange({ path }) {
      const type = this.selectableType;
      if (type === 'multiple') {
        const index = this.selectedPaths.findIndex(item => item === path);
        const oldVal = [...this.selectedPaths];
        if (index !== -1) {
          this.selectedPaths.splice(index, 1);
        } else {
          this.selectedPaths.push(path);
        }

        this.$emit('change', this.selectedPaths, oldVal);
      } else if (type === 'single') {
        if (this.selectedPaths !== path) {
          const oldVal = this.selectedPaths;
          const newVal = path;
          this.selectedPaths = newVal;
          this.$emit('change', newVal, oldVal);
        }
      }
    },

    onTreeNodeClick({ content, path }) {
      this.$emit('click', path, content);
    },

    onBracketsClick(collapsed, path) {
      if (collapsed) {
        this.hiddenPaths = {
          ...this.hiddenPaths,
          [path]: 1,
        };
      } else {
        const newPaths = { ...this.hiddenPaths };
        delete newPaths[path];
        this.hiddenPaths = newPaths;
      }
    },
  },
});

// CONCATENATED MODULE: ./src/components/Tree/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Treevue_type_script_lang_js_ = (Treevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Tree/index.vue





/* normalize component */

var Tree_component = normalizeComponent(
  components_Treevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Tree = (Tree_component.exports);
// CONCATENATED MODULE: ./src/index.js



/* harmony default export */ var src = (Object.assign({}, Tree, {
  version: package_namespaceObject.i8,
}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(16);
/******/ })()
;
});