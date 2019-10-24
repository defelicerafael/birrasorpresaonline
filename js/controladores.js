  (function(){
    var app = angular.module('controladores',[]);
    
    
    app.controller('contacto',['$scope','$http','$route','$routeParams','SqlInsertArray', function($scope,$http,$route,$routeParams,SqlInsertArray) {
             
             var dtl = this;
             dtl.user = [];
             
         
            
            dtl.contacto = function(name,apellido,email,mensaje){
                 // console.log("datos:" + datos + "tabla" + tabla);
                var datos = {'nombre':name,'apellido':apellido,'email':email,'mensaje':mensaje};
                var link = 'server/contacto.php';
                var tabla = tabla;
                SqlInsertArray.async(link,datos,tabla).then(function(d){
               // console.log(d);
                dtl.showSimpleToast("Ha enviado un email correctamente");
                $scope.isLoading=true;
                $window.location.href = 'http://www.desdetulugar.org.ar';
                });
            }; 
        }]);
    
    app.directive('ngConfirmClick', [
        function(){
            return {
                link: function (scope, element, attr) {
                    var msg = attr.ngConfirmClick || "Vas a eliminar una foto, �Estas seguro?";
                    var clickAction = attr.confirmedClick;
                    element.bind('click',function (event) {
                        if ( window.confirm(msg) ) {
                            scope.$eval(clickAction);
                        }
                    });
                }
            };
    }]);

    app.directive('uploaderModel',["$parse", function($parse){
              return {
                  restrict:'A',
                  link: function (scope,Element,iAttrs)
                  {
                    Element.on("change",function(e){
                        $parse(iAttrs.uploaderModel).assign(scope,Element[0].files[0]);
                    });
                  }
              };
          }]);
    app.service('upload',["$http","$q",function($http, $q)
            {
               this.uploadFile = function(file,name,dir)
               {
                   var deferred = $q.defer();
                   var formData = new FormData();
                   
                    var dir = dir;
                    formData.append("dir",dir);
                    formData.append("name",name);
                    formData.append("file",file);
                   console.log(dir);
                   return $http.post("server/server_insert.php",formData,{
                    headers:{
                        "content-type":undefined
                    },
                    transformRequest: angular.identity
                    
                   })
                    .success(function(res)
                    {
                        deferred.resolve(res);
                    })
                    .error(function(msg){
                        deferred.reject(msg);
                   });
                   return deferred.promise;
               }; 
            
            }]);
     
    
     
     
        
        
        
 })();

