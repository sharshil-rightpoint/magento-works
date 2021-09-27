define([],function(){
    'use strict'

    return function(newMessages){
        // newMessages.defaults.hideTimeout = 100;
        // return newMessages;
        return newMessages.extend({
            defaults:{
                hideTimeout: 100,
                hideSpeed: 100,
            }
        })
    }
});