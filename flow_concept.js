// ------------------------------------------ event flow
// configure event chaining
var internalEventFlow = {
    // listen to eventName
    // TODO what about "once"?
    ready: {
        on: [
            "methodB"
            //["eventY", {keyA: 1, keyB: 1}]
        ],
        once: ["testFlow"]
    }
};

// configure event chaining
var externalEventFlow = {
    // observer name: miid, global
    index: {
        // listen to eventName
        // TODO what about "once"?
        ready: [
            // pass all parameters
            "eventX",
            {
                n: 'name',
                c: 'myCustomFunction',
                1: true
            }
        ]
    }
};
