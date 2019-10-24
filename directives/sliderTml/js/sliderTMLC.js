 angular.module("sliderTMLC",['sliderEfectosUno'])
       .animation('.slide', [function() {
            return {
              enter: function(element, doneFn) {
                jQuery(element).slideIn(1000, doneFn);
              }
            };
        }])
         
         .directive("newsliderc",function(){
        
       return{
            
            restrict: "E",
            templateUrl: 'directives/sliderTml/templates/sliderC.html',
            scope: {
               
            },
            controller : function(){
               // console.log("entre a sliderTMLC");
            }
        };
    });
        
    
   
  

