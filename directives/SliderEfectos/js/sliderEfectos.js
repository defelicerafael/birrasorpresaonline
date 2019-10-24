 angular.module("sliderEfectos",[])
       
         
         .directive("sliderefectos",function(){
        
       return{
            
            restrict: "E",
            templateUrl: 'directives/SliderEfectos/templates/sliderEfectos.html',
            scope: {
              
            },
            controller : function($scope,$interval){
                
               
                $scope.clas = ["cut","cut1","cut2","cut3","cut4","cut5","cut6","cut7","cut8","cut9"];
               
                $scope.$watch("fotoelegidaN",function(newValue,oldValue) {   
                if (newValue===oldValue) {
           //         console.log(newValue);
                  return;
                }
                    $scope.clas.forEach(myFunction);
                    function myFunction(item) {
                        document.getElementById(item).classList.remove(item);
                        void document.getElementById(item).offsetWidth;
                        document.getElementById(item).classList.add(item);
                       // document.getElementById('contenedor').style.backgroundImage = "url('"+oldValue+"')";
                  }
                }, true);
                
                var foto;
                var stop;
                
                
                var s = 0; 
                $scope.time = 7000;
                
             
            $scope.foto = [
                 "img/home/slider/Berlina-SanIsidro-04b.jpg",
                 "img/home/slider/Berlina-SanIsidro-03.jpg",
                "img/home/slider/Berlina-SanIsidro-01.jpg"
             ];
            
             $scope.fotoelegidaN=$scope.foto[0];
             stop = $interval(function(foto){
                    foto = $scope.foto;
                    $scope.fotoelegidaN=foto[s];
                   
                    if (s === foto.length-1){
                    s = 0;
                    
                    }else{
                        s++;
                    }
            },$scope.time); 
            $scope.fotoelegidaN=$scope.foto[0];
           
                
                $scope.ruedatexto = function(mas){
                    $interval.cancel(stop);
                    if (mas==="suma"){
                        if(s===foto.length-1){
                            s = 0;
                            $scope.fotoelegidaN=foto[s];
                        }else{
                            s ++;
                            $scope.fotoelegidaN=foto[s];
                       }
                    }
                    if (mas==="resta"){
                        
                        if(s<=0){
                            s = foto.length-1;
                            $scope.fotoelegidaN=foto[s];
                        }else{
                            s --;
                            $scope.fotoelegidaN=foto[s];
                        }
                    }
                };
                
                $scope.elegir = function(index){
                    $interval.cancel(stop);
                    $scope.fotoelegidaN = $scope.foto[index];
             
                };
             
             
            }
        
        };
    });
        
    
   
  

