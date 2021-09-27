define(['jquery','TrainingJs_3CreateAmdJS/js/jquery-log'], function($){
    'use strict'
    var elementId;
    $.log('Tesing output for shim to the console.')
    return function(config,element){
        // $("#"+ element.id).click(function(){
        //     console.log('working click');
        // });
        elementId = element.id;
        console.log(elementId)
        $("#"+ element.id).click(function(){
            console.log('working click');
        });
    }
});