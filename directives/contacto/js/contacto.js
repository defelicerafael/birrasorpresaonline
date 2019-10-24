 angular.module("Contacto",[])
    .directive("contacto",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/contacto/templates/contacto.html',
            scope: {
                icono:"@"
                
            },
            controller : function($scope,SqlInsertArray,$window,$cookies,$http,$routeParams){
            $scope.insert = function (datos,tabla){
                $scope.isLoading=true;
                $scope.cerveceria = $routeParams.cerveceria;
                
                var data = datos;
                data.cerveceria = $scope.cerveceria;
                
                var link = 'server/insert_birra_sorpresa.php';  
                var tabla = tabla;
                var cantidad = cantidad;
                SqlInsertArray.async(link,data,tabla).then(function(d){
                console.log(d);
                $scope.isLoading=false;
                $cookies.put('nombre', datos.nombre);
                $cookies.put('apellido', datos.apellido);
                $cookies.put('email', datos.email);
                $cookies.put('guest_nombre', datos.guest_nombre);
                $cookies.put('guest_celu', datos.guest_celu);
                $cookies.put('guest_mensaje', datos.guest_mensaje);
                console.log($cookies.getAll());
                $http({method: 'GET',url: 'server/traerCerveceriaMostrarSi.php?c='+$scope.cerveceria})
                        .then(function successCallback(response) {
                            $scope.cerveceriaSi = response.data;
                            $scope.cantidadcerveceriaSi = $scope.cerveceriaSi.length;
                            $scope.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            $window.location.href = $scope.cerveceriaSi[0].mercadopago;
                        }, function errorCallback(response) {
                            $scope.cerveceriaSi = response.data;
                            $scope.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            //console.log(indu.sliders);
                        });
                });
            }; 
        }
    };
});
        
    
   
  

