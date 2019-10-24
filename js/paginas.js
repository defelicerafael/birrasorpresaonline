(function(){
    var app = angular.module('paginas',[]);
    
    app.directive('header', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/header.html'
            };
        });
        
    app.directive('bannerempresas', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/bannerEmpresas.html'
            };
        });    
    
    app.directive('bannereducacion', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/bannereducacion.html'
            };
        });
    
     app.directive('todaslasempresas', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/todaslasempresas.html'
            };
        });    
        
        
    app.directive('userToolBar', function(){
        return{
            restrict: 'E',
            templateUrl:'templates/toolbarBD.html'
            };
        });       
    })();
