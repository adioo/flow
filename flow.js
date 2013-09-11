var appDescriptor = {
    // configure event chaining
    events: {
        // observer name: miid, global
        obs: {
            // listen to eventName
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
                
                // TODO when events had an return value, executing
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

// module methods
var module = {exports: {}};
module.exports = function (config) {
    var self = this;
    
    self.on('eventName', function () {});
};

// custom methods

// what was this??!!
var devConfig = {
    flow: {
        dom: {
            '#selector': {
                miid1: []
            }
        },
        init: {
            miid1: "methodName"
        },
        miids: {
            miid1: {}
        }
    },
    miids: {
        miid1: {},
        miid2: {},
        miid3: {}
    }
};

function merger () {}
function repeat () {}
function binds () {}
function states () {}
function events () {}

// module structure

// private methods
function privateMethod () {}

// public methods
var methods = {
    functionName: function () {}
};

// module init
function init (config) {
    var self = this;
    
    // listen to public methods
    for (var name in methods) {
        self.on(name, methods[name]);
    }
}

module.exports = init;
