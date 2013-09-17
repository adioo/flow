// ------------------------------------------ event flow
var eventFlow = {
    // configure event chaining
    events: {
        // observer name: miid, global
        miid: {
            // listen to eventName
            // TODO what about "once" (fire an event only once) ?
            eventName: [{
                // event action
                emit: [{
                    // emit eventName
                    eventName: [{
                        // emit on observer
                        miid: "miid",
                        // parameter object config
                        // this is optional
                        keys: {
                            // pass this key to the next event
                            keyName: 1 // 0 | 1
                        }
                    }]
                }],
                
                // TODO when events had a return value, executing
                //      a function directly could be obsolete
                method: [{
                    module: "miid|custom",
                    name: "functionName"
                }],
                
                // activate/deactivate states
                states: [{}]
            }]
        }
    }
};

// private methods
function privateMethod () {
    var self = this;
    
    // emit events from code
    self.emit('eventName', params);
}

// public methods
var publicMethods = {
    functionName: function () {
        var self = this;
        
        // listen from code
        // TODO can this be done with a event-flow config?
        //      it can, but sure there are some cases where
        //      listen from inside the code is required.
        self.on('eventName', handlerFunction);
        self.once('eventName', handlerFunction);
        
        // emit events from code
        self.emit('eventName', params);
    }
};

// module init
module.exports = function (config) {
    var self = this;
    var flow = Flow(self);
    
    self.config = config;
    
    // init flow
    Flow(self, publicMethods, eventFlow);
    
    // TODO how to execute events/methods on init?
    //      with config..?
    //      there could be an config to control the
    //      interal event flow and the "flow" module
    //      sets up the event structure
    
    // emit events from code
    self.emit('ready');
};
