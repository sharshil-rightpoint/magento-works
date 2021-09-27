define(['jquery',"aliasTest"], function($,aliasTest){
    return function(className, duration){
       // $(className).hide().fadeIn(duration || 2000);
        $(className).hide();
        aliasTest();
    }
});