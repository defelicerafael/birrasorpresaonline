 angular.module("Iconos",[])
    .directive("iconos",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/iconos/templates/iconos.html',
            scope: {
                icono:"@"
                
            },
            controller : function($scope,$timeout){
               
               $scope.loadingProductos = true;
                $timeout(function callAtTimeout() {
                 $scope.iconos = angular.fromJson($scope.icono);
                $scope.loadingProductos = false;
                }, 2000);
                  
             
            }
        };
    });
        
    
   
  

