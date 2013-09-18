M.wrap('github/adioo/flow/vdev/flow.js', function (require, module, exports) {

// TODO handle arguments
function listenHandler (emit) {
    
    return function () {
        var self = this;
        
        self.emit(emit);
    };
}

function chain (event, obs, emit, i) {
    var self = this;
    
    if (emit.on) {
        for (i = 0; i < emit.on.length; ++i) {
            self.on(event, obs, listenHandler(emit.on[i]));
        }
    }
    
    if (emit.once) {
        for (i = 0; i < emit.once.length; ++i) {
            self.once(event, obs, listenHandler(emit.once[i]));
        }
    }
} 
    
// setup internal event flow
function setupInternalEventFlow (eventFlow, obs) {
    var self = this;
    
    obs = obs || self.miid;
    
    for (var event in eventFlow) {
        if (eventFlow.hasOwnProperty(event)) {
            
            chain.call(self, event, obs, eventFlow[event]);
        }
    }
}

// setup external event flow
function setupExternalEventFlow (eventFlow) {
    var self = this;
    
    for (var obs in eventFlow) {
        if (eventFlow.hasOwnProperty(obs)) {
            
            setupInternalEventFlow.call(self, eventFlow[obs], obs);
        }
    }
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
module.exports = function (module, methods, internalEventFlow, externalEventFlow) {
    
    // listen to methods
    if (methods) {
        methodToEvent.call(module, methods);
    }
    
    // setup internal event flow
    if (internalEventFlow) {
        setupInternalEventFlow.call(module, internalEventFlow);
    }
    
    // setup external event flow
    if (externalEventFlow) {
        setupExternalEventFlow.call(module, externalEventFlow);
    }
};

return module; });
