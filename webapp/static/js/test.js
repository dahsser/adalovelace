/**
 * Created by jjmarcos on 17/12/17.
 */
var test=new Vue({
    el:'#contenedorTest',
    data:{
        testCategoria:true,
        testPareja:false,
        testTrabajo:false,
        testUniversidad:false,
        testDocente:false,
    },
    methods:{
        borrarTodo:function () {
            this.testCategoria=false;
            this.testPareja=false;
            this.testTrabajo=false;
            this.testUniversidad=false;
            this.testDocente=false;
        },
        mostrarPareja:function () {
            this.borrarTodo();
            this.testPareja=true;
        },
        mostrarUni:function () {
            this.borrarTodo();
            this.testUniversidad=true;
        },
        mostrarTrabajo:function () {
            this.borrarTodo();
            this.testTrabajo=true;
        },
        mostratarDocente:function () {
            this.borrarTodo();
            this.testDocente=true;
        },
        retornar:function () {
            this.borrarTodo();

            this.testCategoria=true;
            $(document).ready(function(){
                $('.collapsible').collapsible();
            });
        }
    }
})