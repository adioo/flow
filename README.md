flow
==
Event chaining.

####Usage
```js
var Flow = require('github/adioo/flow');

var publicMethods = {
    myMethodA: function () {},
    myMethodN: function () {}
};

var interalEventFlow = {
    // listen event name
    listenEventName: [
        {   
            // emit event name
            n: 'emitEventNameA',
            // arguments handler function
            c: 'myCustomArgumentsHandler',
            // once true/false
            1: true
        },
        
        // emit event name
        'myMethodN'
    ]
};

var exteralEventFlow = {
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
                1: true
            },
            
            // emit event name
            'emitEventNameB'
        ]
    }
};

// init flow
Flow(this, publicMethods, internalEventFlow, externalEventFlow);
```

