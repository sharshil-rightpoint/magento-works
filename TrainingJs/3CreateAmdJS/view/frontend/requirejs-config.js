// reference url : https://devdocs.magento.com/guides/v2.4/javascript-dev-guide/javascript/requirejs.html

var config={
    "map":{     //    It only works for local amd modules if you have external url use path
        "*":{  //  "*"" means that all require module can use this alias
            "fadeInElement": "TrainingJs_3CreateAmdJS/js/fade-in-element",
            "owlTest": "TrainingJs_3CreateAmdJS/js/owl-test",
            "Magento_Review/js/submit-review":"TrainingJs_3CreateAmdJS/js/submit-review", //override javascript file or component with map 

        }
    },
    "paths":{ // it's used for aliasing not just any real AMD module that calls define()
        // "owlCarousel": "TrainingJs_3CreateAmdJS/js/owlcarousel"
        //"vue": "TrainingJs_3CreateAmdJS/js/vue",
        //"vue": "https://cdn.jsdelivr.net/npm/vue@2/dist/vue" // alternet way
        // Add a host to the content security policy XML
        //The http content security policy is response header, and allow to control what pages loads for specific user agents.
        //cross site scripting attack.  
        // have to create whitelist xml name = etc/csp_whitelist.xml
        
        // if cdn went down
        "vue":  [ "TrainingJs_3CreateAmdJS/js/vue",
                "https://cdn.jsdelivr.net/npm/vue@2/dist/vue" 
            ]
            // if cdn went down
    },
    "shim":{ //shim can only be used on non amd modules , value will be in object
         "TrainingJs_3CreateAmdJS/js/jquery-log": ["jquery"]    //value of this property is array of dependecies
    },
    "deps":["TrainingJs_3CreateAmdJS/js/every-page"] ,   
    //Deps immediately load javascript files value will be an array
    //And it's load this js on every page.
    "config":{
        "mixins":{
            //example of component mixin
            "Magento_Ui/js/view/messages": {
                "TrainingJs_3CreateAmdJS/js/view/messages-new-mixin":true
            },

            //example of widget mixin
            "Magento_Catalog/js/catalog-add-to-cart": {
                "TrainingJs_3CreateAmdJS/js/catalog-add-to-cart-mixin":true
            }
        }
    }
    //mixins are not part of js
    //to use mixins for amd module either need to return ui component, jquery widget or js object
}