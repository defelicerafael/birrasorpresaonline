 angular.module("Header",[])
    .directive("header",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/headerTrans/templates/header.html',
            scope: {
                logo:"@",
                menu:"@"
                //link:"@"
                
            },
            controller : function($scope,$mdSidenav,$location,$document){
                
                
                $scope.menuHeader = angular.fromJson($scope.menu);
                $scope.logoHeader = angular.fromJson($scope.logo);
                //$scope.linked = "#header";
                $scope.toggleLeft = buildToggler('left');
                function buildToggler(componentId) {
                    return function() {
                    $mdSidenav(componentId).toggle();
                    };
                }
               
                             
            }
        };
    });
        
    
   
  

