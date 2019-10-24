 angular.module("Contacto",[])
    .directive("contacto",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/contacto/templates/contacto.html',
            scope: {
                icono:"@"
                
            },
            controller : function($scope,SqlInsertArray,$window,$cookies){
                $scope.insert = function (datos,tabla){
                $scope.isLoading=true;
                var datos = datos;
                var link = 'server/insert_birra_sorpresa.php';  
                var tabla = tabla;
                var cantidad = cantidad;
                SqlInsertArray.async(link,datos,tabla).then(function(d){
                console.log(d);
                $scope.isLoading=false;
                $cookies.put('nombre', datos.nombre);
                $cookies.put('apellido', datos.apellido);
                $cookies.put('email', datos.email);
                $cookies.put('guest_nombre', datos.guest_nombre);
                $cookies.put('guest_celu', datos.guest_celu);
                $cookies.put('guest_mensaje', datos.guest_mensaje);
                console.log($cookies.getAll());
                $window.location.href = 'https://www.mercadopago.com/mla/checkout/start?pref_id=160687923-66040c05-5062-4ac7-881e-6af7141663c8';
            });
        }; 
            }
        };
    });
        
    
   
  

