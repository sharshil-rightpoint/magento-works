define([
	'newComponent'
], function(newComponent) {
    'use strict';
    return newComponent.extend({
        initialize:function(){
            this._super();
            //toCall the extended component method
            alert(this.onCheckoutPage());
        },
        //To override custom extended component method
        // you want to check the both result please uncomment the below function and run

        
        // onCheckoutPage:function(){
        //     return 'Override extended component method';
        // }

    })
    
});