/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import Controller from './Controller';
import dom from '../dom/dom';

class TextController extends Controller {
  constructor(object, property) {
    super(object, property);

    const _this = this;

    function onChange() {
      _this.setValue(_this.__input.value);
    }

    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }

    this.__input = document.createElement('textarea');
    this.__input.setAttribute('spellcheck','false');

    dom.bind(this.__input, 'keyup', onChange);
    dom.bind(this.__input, 'change', onChange);
    dom.bind(this.__input, 'blur', onBlur);

    this.updateDisplay();

    this.domElement.appendChild(this.__input);
  }

  updateDisplay() {

    if (!dom.isActive(this.__input)) {
      this.__input.value = this.getValue();
    }
    return super.updateDisplay();
  }
}

export default TextController;