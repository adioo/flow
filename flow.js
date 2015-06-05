// handle arguments
function listenHandler (emit) {
    var self =  this;
    
    var args = [emit.n];
    
    // add static arguments
    if (emit.a) {
        args.concat(emit.a);
    }
    
    return function () {
        
        // convert arguments to array
        var arguments_array = Array.prototype.slice.call(arguments, 0);
        
        if (emit.c && M.custom(emit.c)) {
            arguments_array = M.custom(emit.c).call(self, arguments_array);
        }
        
        // emit the chained event and pass params
        self.emit.apply(self, args.concat(arguments_array));
    };
}

function chain (event, obs, emit, i) {
    var self = this;
    
    for (i = 0; i < emit.length; ++i) {
        
        if (typeof emit[i] === 'string') {
            emit[i] = {n: emit[i]};
        }
        
        if (!emit[i][1]) {
            self.on(event, obs, listenHandler.call(self, emit[i]));
        } else {
            self.once(event, obs, listenHandler.call(self, emit[i]));
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
module.exports = function (module, methods, eventFlow) {
    
    // listen to methods
    if (methods) {
        methodToEvent.call(module, methods);
    }
    
    // setup event flow
    if (eventFlow) {
        setupExternalEventFlow.call(module, eventFlow);
    }
};
