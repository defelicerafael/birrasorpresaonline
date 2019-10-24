 angular.module("Login",['firebase'])
    .directive("login",function(){
        
        return{
            
            restrict: "E",
            templateUrl: 'directives/login/templates/login.html',
            scope: {
                icono:"@"
                
            },
            controller : function($scope,$firebaseAuth,$location,$routeParams){
                $scope.user = [];
                $scope.user.email ="";
                $scope.user.pass = "";
                $scope.cerveceria = $routeParams.cerveceria;
                
                $scope.authObj = $firebaseAuth();
                
                $scope.loginEmailPass = function(email,pass){
                    $scope.authObj.$signInWithEmailAndPassword(email, pass).then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.operationType);
                    }).catch(function(error) {
                      console.error("Authentication failed:", error);
                    });
                };
                
               $scope.isSigned  = function(){
                    $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
                        if (firebaseUser) {
                            console.log("Signed in as:", firebaseUser.email);
                            $scope.user_email  = firebaseUser.email;
                            $scope.bienvenido = "Bienvenido " + firebaseUser.email;
                                if ($location.url()==='/'+$scope.cerveceria+'/panel'){
                                            $location.url('/'+$scope.cerveceria+'/panel/admin'); 
                                        }else{
                                            $location.url(); 
                                        }
                        }else{
                            console.log("Signed out");
                            $location.url('/'+$scope.cerveceria+'/panel');
                        }
                    });
                };
              $scope.isSigned();  
            }
        };
    });
        
    
   
  

