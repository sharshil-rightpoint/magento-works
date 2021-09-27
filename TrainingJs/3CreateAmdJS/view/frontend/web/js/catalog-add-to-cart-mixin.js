define([
    'jquery'
], function ($) {
    'use strict';

    return function (widget) {

        $.widget('mage.catalogAddToCart', widget, {
            submitForm: function (form) {
                alert("are you srue you want to add !");
                this.ajaxSubmit(form);
            },
        });

        return $.mage.catalogAddToCart;
    }
});