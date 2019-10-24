 angular.module("sliderTML",['sliderEfectos'])
       .animation('.slide', [function() {
            return {
              enter: function(element, doneFn) {
                jQuery(element).slideIn(1000, doneFn);
              }
            };
        }])
         
         .directive("newslider",function(){
        
       return{
            
            restrict: "E",
            templateUrl: 'directives/sliderTml/templates/slider.html',
            scope: {
               
            },
            controller : function(){
            }
        };
    });
        
    
   
  

