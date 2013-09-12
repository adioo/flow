// ------------------------------------------ event flow
var eventFlow = {
    // configure event chaining
    events: {
        // observer name: miid, global
        obs: {
            // listen to eventName
            // TODO what about "once" (fire an event only once) ?
            eventName: [{
                // event action
                emit: [{
                    // emit eventName
                    eventName: [{
                        // emit on observer
                        obs: "miid",
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

// ------------------------------------------ custom methods
M.custom({
    myCustomMethodA: function () {},
    myCustomMethodB: function () {},
    myCustomMethodC: function () {}
});

// ------------------------------------------ module config
var modConfig = {
    // the module html
    html: '',
    // modules css files
    css: [''],
    // module scripts
    scripts: [''],
    // load other modules
    modules: {miid: 'selector'},
    // plug custom handlers
    handlers: {
        renderItem: 'myCustomMehtodA'
    }
};

// ------------------------------------------ module structure
// TODO gabriel mentioned that the functions in the module.exports
//      object could be used to setup public methods. but this would
//      force the client modules to this structure..

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
    
    // listen to public methods
    flow.onFn(publicMethods);
    
    // setup interal event flow
    flow.setup(eventFlow);
    
    // TODO how to execute events/methods on init?
    //      with config..?
    //      there could be an config to control the
    //      interal event flow and the "flow" module
    //      sets up the event structure
    
    // emit events from code
    self.emit('ready');
};
