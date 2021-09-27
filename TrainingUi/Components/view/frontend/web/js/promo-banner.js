define([
    'uiComponent',

], function(
    Component
    ) {
    'use strict'; 
        console.log("this is actully working");

    // what is extend you can check here
    //https://devdocs.magento.com/guides/v2.4/ui_comp_guide/concepts/ui_comp_uiclass_concept.html#commonly-used-uiclass-methods
    //extend is the base of uiComponente Class and it acccept object as an argument.
    return Component.extend({
        //ui element defaults properties 
        //path to check default properties: vendor/magento/module-ui/view/base/web/js/lib/core/element/element.js and fine defaults , we can also add our custom properties
        defaults:{
            message:'Free Shipping promo message',
            template:'TrainingUi_Components/promo-banner',
            //template propety is used to call html template inside the phtml
            tracks:{
                message: true
            }
        },
        //this initialize function called  every time when component is initialzed.
        initialize: function(){
            this._super();
            console.log(this.message)
            //when we use initialize we have to set this._super();
            //_super will call parent's `initialize` method here
            //The _super() method calls the parent UI component method with the same name as the _super() method’s caller. If that method does not exists in the parent UI component, then the method tries to find it higher in the inheritance chain.
        },
        clickEvent:function(){
            this.message = "you got the offer apple this coupan code EAEWS2 !"
        }
    });
        
});