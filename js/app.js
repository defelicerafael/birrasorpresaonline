(function(){
    var app = angular.module('induApp',['ngMaterial','ngMessages','config','Header','Iconos','Contacto','Footer','ngMap','SqlServices','ngSanitize','duScroll','ngCookies','720kb.socialshare','Login','upload_icon','sliderEfectos','sliderTML','sliderEfectosUno','sliderTMLC']).value('duScrollOffset', 100);
    
    app.factory("pasapalabra", function() {
        return {
          data: []
        };
      }); 
    
    app.controller('Ctrl',['$scope','$http','$routeParams','SqlEdit','SqlDelete','$route','SqlInsertArray','Sql','$mdToast','$timeout','pasapalabra','$window','$document','$cookies','$mdDialog','$location','$firebaseAuth',function($scope,$http,$routeParams,SqlEdit,SqlDelete,$route,SqlInsertArray,Sql,$mdToast,$timeout,pasapalabra,$window,$document,$cookies,$mdDialog,$location,$firebaseAuth){
            var indu = this;
            indu.id_slider = $routeParams.id_slider;
            indu.cerveceria = $routeParams.cerveceria;
            
           // console.log(indu.id_slider);
            indu.sliders = [];
            indu.slidersSi = [];
            indu.birras = [];
            indu.birrasSi = [];
            indu.bs = [];
           
            $scope.tuamigo = $cookies.get('guest_nombre');
            
            indu.status = "";
            $scope.loadingSliders = true;
            $scope.loadingProductos = true;
            $scope.loadingCatering = true;
            indu.cantidadSliders = 0;
            indu.cantidadProductos = 0;
            indu.id_foto = pasapalabra.data.id_foto;
            $scope.searchTerm;
            $scope.clearSearchTerm = function() {
              $scope.searchTerm = '';
            };
            indu.user = [];
            indu.cantidadUser = 0;
            $scope.localhost = "";
            $scope.arriba = "";
            $scope.hoy = new Date();
            indu.cerveceriaSi = [];
            
            
           
             // LOGIN //
           $scope.authObj = $firebaseAuth();
                $scope.isSigned  = function(){
                    $scope.authObj.$onAuthStateChanged(function(firebaseUser) {
                        if (firebaseUser) {
                        //    console.log("Signed in as:", firebaseUser.email);
                            $scope.user_email  = firebaseUser.email;
                            $scope.bienvenido = "Bienvenido " + firebaseUser.email;
                                if ($location.url()==='/'+indu.cerveceria+'/panel'){
                                            $location.url('/'+indu.cerveceria+'/panel/admin'); 
                                        }else{
                                            $location.url(); 
                                        }
                        }else{
                    //        console.log("Signed out");
                            $location.url('/'+indu.cerveceria+'/panel');
                        }
                    });
                };
        // FIN LOGIN//
            
            
        //    console.log($cookies.getAll());
            
            indu.logo = {
                'url':'img/header/logo-birra-sorpresa.jpg',
                'alt':'Berlina al paso',
                'width':'20%'
            };
           
            indu.menu = [
                {'link':'Invit\u00E1 una birra','href':'#invitar'}
               
            ];
            indu.panel = [
                
                {'link':'ADMINISTRADOR','href':indu.cerveceria+'/panel/'},
                {'link':'MI CUENTA','href':indu.cerveceria+'/panel/cuenta'},
                {'link':'SALIR','href':indu.cerveceria+'/panel/salir'}
                
                
            ];
            
          
            
            var originatorEv;
            indu.openMenu = function($mdMenu, ev) {
            originatorEv = ev;
            $mdMenu.open(ev);
          };
            
            indu.showSimpleToast = function(text) {
                    $mdToast.show(
                    $mdToast.simple()
                    .textContent(text)
                    .position('bottom left' )
                    .hideDelay(3000)
                );
            };
        
            indu.crearApodo = function(apodo){
                if(typeof apodo !== "undefined"){
                    var cadena = apodo;
                    var nuevaCadena = cadena.trim();
                    var nuevoapodo = nuevaCadena.replace(/ /g,"-");
                    return nuevoapodo.toLowerCase();
                }
                
            };
        
        
        // SCROLLING EFFECTS // 
             window.onscroll = function () {
                indu.scroll = function(id,animacionOn,animacionOff,onset,offset,visibilityOn,visibilityOff){    
                    var target = $document[0].getElementById(id);
                   // console.log(window.pageYOffset);
                        if (window.pageYOffset>onset){
                            target.style.animationName = animacionOn;
                            target.style.visibility = visibilityOn;
                            $scope.$digest();
                        }
                        if (window.pageYOffset<offset){
                            target.style.visibility = visibilityOff;
                            target.style.animationName = animacionOff;
                            $scope.$digest();
                        }
                    };
                    indu.scroll('imgdentro','entrar','none',100,50,'visible','hidden');
                 //   indu.scroll('imgdentro2','entrar','none',600,450,'visible','hidden');
                    $scope.$on('$destroy', function() {
                        window.onscroll = null;
                    });
                    
                };
       
            
                    
                $scope.x = [
                    {color:'#FF524F',animation:'linear'},
                    {color:'#FF832B',animation:'ease'},
                    {color:'#98CA9F',animation:'easein'},
                    {color:'#FF3290',animation:'easeout'},
                    {color:'#17A8BA',animation:'easeinout'},
                    {color:'#FDCC30',animation:'cube'}
                    
                ];
        
             indu.traerBirrasMostrarSi = function(){
                $scope.loadingBirras = true;
                $http({method: 'GET',url: 'server/traerBirrasMostrarSi.php'})
                        .then(function successCallback(response) {
                            indu.birrasSi = response.data;
                            indu.cantidadBirrasSi= indu.birrasSi.length;
                            indu.status = response.status;
                            $scope.loadingBirras = false;
                         //   console.log(indu.catering);
                        }, function errorCallback(response) {
                            indu.birrasSi = response.data;
                            indu.status = response.status;
                            $scope.loadingBirras = false;
                           //console.log(indu.sliders);
                });
            }; 
            
            indu.traerBirras = function(){
                $scope.loadingBirras = true;
                $http({method: 'GET',url: 'server/traerbirras.php'})
                        .then(function successCallback(response) {
                            indu.birras = response.data;
                            indu.cantidadBirras= indu.birras.length;
                            indu.status = response.status;
                            $scope.loadingBirras = false;
                       //     console.log(indu.animador);
                        }, function errorCallback(response) {
                            indu.birras = response.data;
                            indu.status = response.status;
                            $scope.loadingBirras = false;
                           //console.log(indu.sliders);
                });
            };
            
            // TRAEMOS LOS SLIDERS...
            indu.traerSliders = function(){
                $scope.loadingSliders = true;
                $http({method: 'GET',url: 'server/traerSliders.php'})
                        .then(function successCallback(response) {
                            indu.sliders = response.data;
                            indu.cantidadSliders = indu.sliders.length;
                            indu.status = response.status;
                            $scope.loadingSliders = false;
                      //      console.log(indu.sliders);
                        }, function errorCallback(response) {
                            indu.sliders = response.data;
                            indu.status = response.status;
                            $scope.loadingSliders = false;
                           //console.log(indu.sliders);
                });
            };
            indu.traerSlidersMostrarSi = function(){
                $scope.loadingSliders = true;
                $http({method: 'GET',url: 'server/traerSlidersMostrarSi.php'})
                        .then(function successCallback(response) {
                            indu.slidersSi = response.data;
                            indu.cantidadSliders = indu.sliders.length;
                            indu.status = response.status;
                            $scope.loadingSliders = false;
                           // console.log(indu.sliders);
                        }, function errorCallback(response) {
                            indu.sliders = response.data;
                            indu.status = response.status;
                            $scope.loadingSliders = false;
                            //console.log(indu.sliders);
                });
            };
            
            indu.traerCerveceriaMostrarSi = function(){
                $scope.loadingBirraSorpresa = true;
            //    console.log(indu.cerveceria);
                $http({method: 'GET',url: 'server/traerCerveceriaMostrarSi.php?c='+indu.cerveceria})
                        .then(function successCallback(response) {
                            indu.cerveceriaSi = response.data;
                            indu.cantidadcerveceriaSi = indu.cerveceriaSi.length;
                            indu.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                           // console.log(indu.cerveceriaSi[0].foto_grande);
                            
                        }, function errorCallback(response) {
                            indu.cerveceriaSi = response.data;
                            indu.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            //console.log(indu.sliders);
                });
            };
            
            //indu.traerCerveceriaMostrarSi();
            
            
            indu.traerBirraSorpresa = function(){
                $scope.loadingBirraSorpresa = true;
                $http({method: 'GET',url: 'server/traerBirraSorpresa.php'})
                        .then(function successCallback(response) {
                            indu.bs = response.data;
                            indu.cantidadBs = indu.bs.length;
                            indu.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                          //  console.log(indu.bs);
                        }, function errorCallback(response) {
                            indu.sliders = response.data;
                            indu.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            //console.log(indu.sliders);
                });
            };
            
            indu.traerBirraSorpresamostrarSi = function(){
                $scope.loadingBirraSorpresa = true;
                $http({method: 'GET',url: 'server/traerBirraSorpresaMostrarSi.php?c='+indu.cerveceria})
                        .then(function successCallback(response) {
                            indu.bs = response.data;
                            indu.cantidadBs = indu.bs.length;
                            indu.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                          //  console.log(indu.bs);
                        }, function errorCallback(response) {
                            indu.sliders = response.data;
                            indu.status = response.status;
                            $scope.loadingBirraSorpresa = false;
                            //console.log(indu.sliders);
                });
            };
            
             $scope.EnviarMail = function (datos,que){
                        // console.log('entre');
                        // console.log("datos:" + datos + "tabla" + tabla);
                         var datos = datos;
                            if(que==='pago'){
                                var link = 'server/contacto.php';
                            };
                            if(que==='tenes'){
                                link = 'server/contactoTenes.php';
                            };
                            var tabla = tabla;
                            SqlInsertArray.async(link,datos,tabla).then(function(d){
                       //  console.log(d);
                        //$scope.showSimpleToast(d);
                        $scope.isLoading=true;
                        $scope.respuesta = d;
                       });
                };
            
            
            // FIN TRAEMOS LOS SLIDERS 
    $scope.showPrompt = function(ev,celu,nombre) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.prompt()
      .title('Cu\u00e9l es el texto del mensaje?')
      .textContent('')
      .placeholder('')
      .ariaLabel('Dog name')
      .initialValue('Hola '+nombre+', te invitaron una birra sorpresa en Berlina San Isidro! (Chacabuco 435 - San isidro) Veni a buscar tu birra y te contamos quien te la regalo! https://www.instagram.com/berlinasanisidro/')
      .targetEvent(ev)
      .required(true)
      .ok('Enviar')
      .cancel('Cancelar');

    $mdDialog.show(confirm).then(function(result) {
      $scope.status = result; 
      $scope.celu = celu;
     //https://api.whatsapp.com/send?phone=5493516342592&text=Hola!%20Quiero%20generar%20mas%20ventas!
      $scope.whatsApp = "https://api.whatsapp.com/send?phone=54"+$scope.celu+"&text="+$scope.status.replace(/\s/g,"%20");
     // console.log($scope.whatsApp);
      $window.open($scope.whatsApp);
    }, function() {
      $scope.status = 'Cancelaste el mensaje';
    });
  };
          
            
           // FUNCION PARA EDITAR 
          indu.Edit = function (datosi,tablai,idi,show){
              // console.log(datosi);
              $scope.isEditing=true;
                var where = 'id';
                var datos = datosi;
                var link = 'server/edit.php';
                var tabla = tablai;
                var id = idi;
                var show = show;
                SqlEdit.async(link,datos,tabla,id,where).then(function(d){
                    console.log(d);
                    indu.showSimpleToast(d);
                    $scope.isEditing = false;
                        if(show===1){
                        indu.traerBirraSorpresamostrarSi();
                        }
                });
        };
        
        indu.EditAdv = function (datosi,tablai,idi,show){
              // console.log(datosi);
              $scope.isEditing=true;
                var where = 'id';
                var datos = datosi;
                var link = 'server/edit.php';
                var tabla = tablai;
                var id = idi;
                var show = show;
                var r = confirm("Esta seguro que desea ELIMINAR este dato?");
                if(r===true){
                    SqlEdit.async(link,datos,tabla,id,where).then(function(d){
                        console.log(d);
                        indu.showSimpleToast(d);
                        $scope.isEditing = false;
                            if(show===1){
                            indu.traerBirraSorpresamostrarSi();
                            $route.reload();
                            }
                    });
                }
        };
        
        
        indu.EditSelec = function (datosi,tablai,idi,show){
               console.log(datosi);
              $scope.isEditing=true;
                var where = 'id';
                var datos = datosi;
                var link = 'server/editSelected.php';
                var tabla = tablai;
                var id = idi;
                var show = show;
                SqlEdit.async(link,datos,tabla,id,where).then(function(d){
                    console.log(d);
                    indu.showSimpleToast(d);
                    $scope.isEditing = false;
                        if(show===1){
                        window.history.back(1);
                        }
                });
        };
        
        // FUNCION PARA BORRAR DATOS DE LA BASE
        indu.Delete = function (id,tabla){
           // console.log(id,tabla);
            var r = confirm("Esta seguro que desea ELIMINAR este dato?");
            if(r===true){
            var link = 'server/delete.php';
            var id = id;
            SqlDelete.async(link,id,tabla).then(function(d){
            //console.log(d);
            indu.showSimpleToast("Ha BORRADO un dato.");
            $scope.isLoading=true;
            $route.reload();
            });
            }
            
        };
        
        // FUNCION PARA INSERT
        indu.insert = function (datos,tabla){
           console.log(datos);
            var datos = datos;
            var link = 'server/insert_array.php';  
            var tabla = tabla;
            var cantidad = cantidad;
            SqlInsertArray.async(link,datos,tabla).then(function(d){
            console.log(d);
            //indu.showSimpleToast(d);
            $scope.isLoading=true;
            $window.location.href = "https://www.mercadopago.com/mla/checkout/start?pref_id=386346704-ba94994e-80b7-4435-827e-83330d9534a4"; 
            // te envia a mercado pago -->https://www.mercadopago.com/mla/checkout/start?pref_id=160687923-66040c05-5062-4ac7-881e-6af7141663c8 
            });
        };
        
        //FUNCION  SELECT
        indu.Select = function (filtro,tabla,filtro_por, orden, limit){
          //  console.log(filtro,tabla,filtro_por, orden, limit);
            $scope.buscando = true;
            var filtro = filtro;
            var link = 'server/columnasNew.php';
            var tabla = tabla;
            var filtro_por = filtro_por;
            var orden = orden;
            var limit = limit;
            Sql.async(filtro,link,tabla,filtro_por,orden,limit).then(function(d) {
            
            return $timeout(function() {
                switch(tabla) {
                    case "slider":
                        indu.sliders = d;
                        $scope.buscando = false;    
                      //  console.log(indu.sliders);
                        break;
                     case "cerveceria":
                        indu.micerveceria = d;
                        $scope.buscando = false;    
                      //  console.log(indu.sliders);
                        break;   
                    
                    default:
                        indu.datos = d;
                        $scope.buscando = false;    
                      //  console.log(dtl.datos);
                    }
            },1000);        
            });
        };
        
        indu.chequearSiEstaLleno = function(array){
          if (array.constructor === Array){
              return true;
          }  
        };
        
        indu.copiarUrl = function(){
          //  console.log(pasapalabra.data.id_foto);
            indu.id_foto = pasapalabra.data.id_foto;
            //console.log(pasapalabra.data.id_foto);
        };
   
        $scope.siguiente = function(orden,que){
            if(que==="siguiente"){
                var siguiente = Number(orden)+1;
            }else{
                var siguiente = Number(orden)-1;
            }
            Sql.async({'orden':siguiente},'server/columnasNew.php','productos','id','ASC','1').then(function(d) {
                return $timeout(function() {
                    var hola = d;
                    $window.location.href = hola[0].link;
                    },500);        
            });
           
        };
            
       
       
      
    }]);
    
})();


