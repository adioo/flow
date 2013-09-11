// ------------------------------------------ event flow
var appDescriptor = {
    // configure event chaining
    events: {
        // observer name: miid, global
        obs: {
            // listen to eventName
            // TODO what about "once" (fire an event only once) ?
            eventName: [{
                // event action
                emit: {
                    // emit eventName
                    eventName: [{
                        // emit on observer
                        obs: "miid|global",
                        // parameter object config
                        // this is optional
                        keys: {
                            // pass this key to the next event
                            keyName: 1 // 0 | 1
                        }
                    }]
                },
                
                // TODO when events had a return value, executing
                //      a function directly could be obsolete
                method: {
                    module: "miid|global",
                    name: "functionName"
                },
                
                // activate/deactivate states
                states: {}
            }]
        }
    }
};

// ------------------------------------------ custom methods
M.custom('myCustomMethodA', function () {});
M.custom('myCustomMethodB', function () {});
M.custom('myCustomMethodC', function () {});

// or... (I like this more)
M.custom({
    myCustomMethodA: function () {},
    myCustomMethodB: function () {},
    myCustomMethodC: function () {}
});


// ------------------------------------------ module structure
// TODO gabriel mentioned that the functions in the module.exports
//      object could be used to setup public methods. but this would
//      force the client modules to this structure..

// private methods
function privateMethod () {}
function merger () {}
function repeat () {}
function binds () {}
function states () {}
function events () {}

// public methods
var publicMethods = {
    functionName: function () {}
};

// module init
module.exports = function (config) {
    var self = this;
    self.config = config;
    
    // listen to public methods
    for (var name in publicMethods) {
        self.on(name, methods[name]);
    }
    
    // TODO how to execute events/methods on init?
    //      with config..?
};
