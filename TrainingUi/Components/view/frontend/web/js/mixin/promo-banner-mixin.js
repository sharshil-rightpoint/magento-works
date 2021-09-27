define([],
    function(){
    'use strict';
    return function(overrideMessage){
        return overrideMessage.extend({
            defaults:{
                message:'Free Shipping promo message mixin',
            }
        });
    }
});