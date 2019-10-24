 angular.module("sliderEfectosUno",[])
       
         
         .directive("sliderefectosuno",function(){
        
       return{
            
            restrict: "E",
            templateUrl: 'directives/SliderEfectos/templates/sliderEfectos-barrido.html',
            scope: {
              
            },
            controller : function($scope,$http,$routeParams){
                $scope.cerveceria = $routeParams.cerveceria;
                $scope.fotoelegidaN = "foto"; 
                console.log("entre");
                $scope.traerCerveceriaMostrarSi = function(){
                $scope.loadingBirraSorpresa = true;
                $http({method: 'GET',url: 'server/traerCerveceriaMostrarSi.php?c='+$scope.cerveceria})
                        .then(function successCallback(response) {
                            $scope.cerveceriaSi = response.data;
                            $scope.cantidadcerveceriaSi = $scope.cerveceriaSi.length;
                            $scope.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            console.log($scope.cerveceriaSi[0].foto_grande);
                            $scope.foto = $scope.cerveceriaSi[0].foto_grande;
                            $scope.fotoelegidaN=$scope.foto; 
                            console.log(typeof($scope.foto));
                                
                            
                        }, function errorCallback(response) {
                            $scope.cerveceriaSi = response.data;
                            $scope.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            //console.log(indu.sliders);
                });
            };
                $scope.traerCerveceriaMostrarSi();
                $scope.clas = ["cut","cut1","cut2","cut3","cut4","cut5","cut6","cut7","cut8","cut9"];
                $scope.clas.forEach(myFunction);
                    function myFunction(item) {
                        document.getElementById(item).classList.remove(item);
                        void document.getElementById(item).offsetWidth;
                        document.getElementById(item).classList.add(item);
                       // document.getElementById('contenedor').style.backgroundImage = "url('"+oldValue+"')";
                 }
                
            }
        };
    });
        
    
   
  

