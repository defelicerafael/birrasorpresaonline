 angular.module("Footer",[])
    .directive("footer",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/footer/templates/footer.html',
            scope: {
                icono:"@"
                
            },
            controller : function($scope,$routeParams,$http,$rootScope){
               $scope.cerveceria = $routeParams.cerveceria;
               $http({method: 'GET',url: 'server/traerCerveceriaMostrarSi.php?c='+$scope.cerveceria})
                        .then(function successCallback(response) {
                            $scope.cerveceriaSi = response.data;
                            $scope.cantidadcerveceriaSi = $scope.cerveceriaSi.length;
                            $scope.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            console.log($scope.cerveceriaSi);
                            $rootScope.nombre = $scope.cerveceriaSi[0].nombre; 
                            $rootScope.direccion = $scope.cerveceriaSi[0].direccion; 
                            console.log($rootScope.nombre,$rootScope.direccion);
                        }, function errorCallback(response) {
                            $scope.cerveceriaSi = response.data;
                            $scope.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            //console.log(indu.sliders);
                        });
            }
        };
    });
        
    
   
  

