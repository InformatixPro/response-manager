var ResponseManager = function() {
    "use strict";

    this.Success = function(r) {
        r.status(200).send({'Status':'Success'});
    };
    
    this.Error = function(r) {
        r.status(500).send({'Status': 'Error'});
    };
};

module.exports = ResponseManager;


