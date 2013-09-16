M.wrap('github/adioo/flow/vdev/flow.js', function (require, module, exports) {
// setup event flow
function setupEventFlow (eventFlow) {
    var self = this;
    console.log(eventFlow);
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

// constructor
module.exports = function (module, methods, eventFlow) {
    
    // listen to methods
    if (methods) {
        methodToEvent.call(module, methods);
    }
    
    // setup internal event flow
    if (eventFlow) {
        setupEventFlow.call(module, eventFlow);
    }
};

return module; });
