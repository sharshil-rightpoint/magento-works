define([
	'uiComponent',
	'Magento_Checkout/js/model/totals'
], function(Component, totals) {
    'use strict';
    return Component.extend({
        initialize:function(){
            this._super();
            alert('Will run two times');
        },
        onCheckoutPage: function(){
            return 'You are on checkout Page.'
        }
    })
    
});