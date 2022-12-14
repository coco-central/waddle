Blockly.JavaScript['permissions_get'] = function (block) {
    var dropdown_gettype = block.getFieldValue('GETTYPE');
    var dropdown_type = block.getFieldValue('TYPE');
    switch (dropdown_gettype) {
        case 'THIS':
            var code = `var ${dropdown_type} = this.${dropdown_type};\n`;
            break;
    }
    return code;
};

Blockly.JavaScript['permissions_getall'] = function(){
    return `var document = this.document;
var window = this.window;
var navigator = this.navigator;
var history = this.history;`;
}

Blockly.JavaScript['permissions_document'] = function (block) {
    var code = 'document';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['permissions_window'] = function (block) {
    var code = 'window';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['permissions_navigator'] = function (block) {
    var code = 'navigator';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['permissions_history'] = function (block) {
    var code = 'history';
    return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['permissions_call'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_code = block.getFieldValue('CODE');
    var code = `${dropdown_type}.${text_code};\n`;
    return code;
};

Blockly.JavaScript['permissions_call_return'] = function (block) {
    var dropdown_type = block.getFieldValue('TYPE');
    var text_code = block.getFieldValue('CODE');
    var code = `${dropdown_type}.${text_code}`;
    return [code, Blockly.JavaScript.ORDER_NONE];
};
