M.wrap('github/adioo/flow/vdev/flow.js', function (require, module, exports) {
// setup event flow
function setup (eventFlow) {
    var self = this;
}

// listen to methods
function methodToEvent (methods) {
    var self = this;
    
    for (var event in methods) {
        if (typeof methods[event] === 'function') {
            self.on(event, methods[event]);
        }
    }
}

var Flow = {
    setup: function () {},
    onFn: methodToEvent
};

// constructor
module.exports = function (self) {
    return Object.extend(Flow, self);
};

return module; });