/**
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * http://code.google.com/p/google-blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Core blocks language for Blockly.
 * @author fraser@google.com (Neil Fraser)
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to language files.
 */

if (!Blockly.Language) {
  Blockly.Language = {};
}


Blockly.Language.get = {
  // Variable getter.
  category: null,  // Variables are handled specially.
  helpUrl: 'http://en.wikipedia.org/wiki/Variable_(computer_science)',
  init: function() {
    this.setColour('blue');
    this.addTitle('get');
    this.addTitle(new Blockly.FieldDropdown('item',
        Blockly.Variables.dropdownCreate, Blockly.Variables.dropdownChange));
    this.setOutput(true);
  },
  getVars: function() {
    return [this.getTitleText(1)];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Variables.nameEquals(oldName, this.getTitleText(1))) {
      this.setTitleText(newName, 1);
    }
  }
};

Blockly.Language.set = {
  // Variable setter.
  category: null,  // Variables are handled specially.
  helpUrl: 'http://en.wikipedia.org/wiki/Variable_(computer_science)',
  init: function() {
    this.setColour('blue');
    this.addTitle('set');
    this.addTitle(new Blockly.FieldDropdown('item',
        Blockly.Variables.dropdownCreate, Blockly.Variables.dropdownChange));
    this.addInput('', '', Blockly.INPUT_VALUE);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
  },
  getVars: function() {
    return [this.getTitleText(1)];
  },
  renameVar: function(oldName, newName) {
    if (Blockly.Variables.nameEquals(oldName, this.getTitleText(1))) {
      this.setTitleText(newName, 1);
    }
  }
};

