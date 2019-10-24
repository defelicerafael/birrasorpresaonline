 angular.module("NewSlider",[])
       .animation('.slide', [function() {
            return {
              enter: function(element, doneFn) {
                jQuery(element).slideIn(2000, doneFn);
              }
            };
        }])
         
         .directive("newslider",function(){
        
       return{
            
            restrict: "E",
            templateUrl: 'directives/newslider/templates/slider.html',
            scope: {
                titulo:"@",
                log:"@",
                tipo:"@",
                fotos:"@",
                texto:"@"
            },
            controller : function($scope,$timeout){
          //  console.log($scope.fotos);
          //  console.log($scope.tipo);
                $scope.setTime = 5000;
                $scope.selected = 0;
                 $timeout(function callAtTimeout() {
                  $scope.textos = angular.fromJson($scope.texto);
                  $scope.foto = angular.fromJson($scope.fotos);
                    console.log($scope.foto);
                }, 100);
                
                
                $scope.setTime = 4000;
                
                
                $scope.selected = 0;
                $scope.textos = angular.fromJson($scope.texto);
              //  console.log($scope.tipo);
                
                
                $scope.rueda = function(){
                    if($scope.selected===$scope.foto.length-1){
                        $scope.selected = 0;
                    }else{
                        $scope.selected ++;
                    }
                    //console.log($scope.selected);
                };
                $scope.ruedatexto = function(mas){
                    if (mas==="suma"){
                    
                        if($scope.selected===$scope.foto.length-1){
                            $scope.selected = 0;
                      //      console.log($scope.selected);
                        }else{
                            $scope.selected ++;
                       //     console.log($scope.selected);
                        }
                    }
                    if (mas==="resta"){
                        
                        if($scope.selected<=0){
                            $scope.selected = $scope.foto.length-1;
            //                console.log($scope.selected);
                        }else{
                            $scope.selected --;
              //              console.log($scope.selected);
                        }
                    }
                    //console.log($scope.selected);
                };
                
                $scope.isThis = function(index){
                   if(index===$scope.selected){
                       return true;
                   }else{
                       return false;
                   }
                    
                };
                
                $scope.elegir = function(index){
                   $scope.selected = index;
                };
                
             /*   if($scope.tipo==="foto"){
                    $interval($scope.rueda, $scope.setTime);
          //          console.log("entre foto");
                }*/
           
            }
        };
    });
        
    
   
  

