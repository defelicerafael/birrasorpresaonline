(function(){
    var app = angular.module('config',['ngRoute']);

    app.config(function($routeProvider, $locationProvider){
        $routeProvider
                .when("/",{
                    templateUrl:"templates/home.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/panel",{
                    templateUrl:"templates/panel.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/:cerveceria",{
                    templateUrl:"templates/cerveceria.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/pago_exitoso",{
                    templateUrl:"templates/pagoSi.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/pago_en_proceso",{
                    templateUrl:"templates/pagoEnProceso.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/:cerveceria/panel",{
                    templateUrl:"templates/login.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/:cerveceria/panel/admin",{
                    templateUrl:"templates/panel_home.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
                .when("/:cerveceria/panel/cuenta",{
                    templateUrl:"templates/edit_cerveceria.html",
                    controller:"Ctrl",
                    controllerAs : "ctrl"
                })
               

                .otherwise("/");
        
        // use the HTML5 History API
        $locationProvider.html5Mode(true);
        (function($mdIconProvider) {
            $mdIconProvider
              .icon('share-arrow', 'img/icons/share-arrow.svg', 24)
              .icon('upload', 'img/icons/upload.svg', 24)
              .icon('copy', 'img/icons/copy.svg', 24)
              .icon('print', 'img/icons/print.svg', 24)
              .icon('hangout', 'img/icons/hangout.svg', 24)
              .icon('mail', 'img/icons/mail.svg', 24)
              .icon('message', 'img/icons/message.svg', 24)
              .icon('copy2', 'img/icons/copy2.svg', 24)
              .icon('facebook', 'img/icons/facebook.svg', 24)
              .icon('twitter', 'img/icons/twitter.svg', 24);
          });
    });
})();
