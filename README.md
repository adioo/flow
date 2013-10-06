flow
==
Event chaining.

####Usage
```js
var Flow = require('github/adioo/flow');

// this methods are registered as events
// ex. self.emit('myMethodA');
var publicMethods = {
    myMethodA: function () {},
    myMethodN: function () {}
};

var eventFlow = {
    //observer name or miid
    myModule: {
        // listen event name
        listenEventName: [
            {   
                // emit event name
                n: 'myMethodA',
                // arguments handler function
                c: 'myCustomArgumentsHandler',
                // once true/false
                1: true,
                // static arguments
                a: ['staticValue']
            },
            
            // emit event name
            'emitEventNameB'
        ]
    }
};

// init flow
Flow(this, publicMethods, eventFlow);
```

####License

"THE BEER-WARE LICENSE" (Revision 42):

adrian@ottiker.com wrote this code. As long as you retain this notice you
can do whatever you want with this stuff. If we meet some day, and you think
this stuff is worth it, you can buy me a beer in return.

