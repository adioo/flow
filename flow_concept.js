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
        ready: {
            on: [
                "eventX",
                [
                    "eventY",
                    [
                        // param config for argument index 0
                        { // pass defined keys from an object
                            keyA: 1,
                            keyB: 1
                        },
                        
                        // param config for argument index 1
                        "keyname", // pass one key of an object
                        
                        // param config for argument index 2
                        [0, 4], // pass items of an array
                        
                        // param config for argument index 2
                        2 // pass item of an array
                    ]
                ]
            ],
            once: ["testFlow"]
        }
    }
};
