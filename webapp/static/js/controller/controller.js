/**
 * Created by Alumno on 20/05/2017.
 */

var controlador = app.controller('micontrolador',function($scope,$http){
    $scope.codigo = null;
    $scope.clave = null;
    $scope.mensaje = null;
    $scope.pagina = 1;
    $scope.alumnos = null;
    $scope.config = {
        headers : {
            'Content-Type': 'application/json;charset=utf-8;'
        }
    };
    $scope.validarUsuario = function () {

        var data  = {
            "codigo" : $scope.codigo,
            "clave" : $scope.clave
        };



        var res = $http.post('/validarUsuario', data, $scope.config);
        res.then(function (response) {
            var respuesta = response.data;
            if(respuesta.codigo == null && respuesta.codigo == ""){
                $scope.mensaje = 'No ingreso';
            }
            if( respuesta.codigo != ""){
                $scope.mostrarAlumnos();
                $scope.pagina = 2;
            }
        });
    };
    $scope.mostrarAlumnos = function () {

        var data  = {
        };



        var res = $http.post('/mostrarAlumnos', data, $scope.config);
        res.then(function (response) {
            var respuesta = response.data;
            $scope.alumnos = respuesta.lista;
        });
    };
    $scope.mostrarCiclo = function () {
        $('#botonIngresar').click();
        /*
        var data  = {
            "cicloRelativo" : $scope.codigo
        };



        var res = $http.post('/alumnosxciclo', data, $scope.config);
        res.then(function (response) {
            var respuesta = response.data;
            $scope.alumnos = respuesta.lista;
            $scope.pagina = 2;
        });
        */
    };
});