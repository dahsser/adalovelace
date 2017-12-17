/**
 * Created by jjmarcos on 17/12/17.
 */
var registro=new Vue({
    el:'#registro',
    data:{
        denunciaAnonima:false,
        denunciaPublica:false,
        denunciaEnteidad:false,
        denunciaSeleccion:true,
        elecInstitucionExterna:true,
        elecPrivadaRetorno:true,
        elecPrivada:true
    },
    methods:{
        eliminarTodo:function () {
            this.elecInstitucionExterna=false;
            this.elecPrivada=false;
            this.elecPrivadaRetorno=false;
            this.denunciaAnonima=false;
            this.denunciaPublica=false;
            this.denunciaEnteidad=false;
            this.denunciaSeleccion=false;
        },
        mostrarDenunciaAnonima:function () {
            this.eliminarTodo();
            this.denunciaAnonima=true;
        },
        mostrarDenunciaPublica:function () {
            this.eliminarTodo();
            this.denunciaPublica=true;
        },
        mostrarDenunciaEnteidad:function () {
            this.eliminarTodo();
            this.denunciaEnteidad=true;
        }
    }
})
var denPublica=new Vue({
    el:'#denPublica',
    data:{
        pg1DenPublica:true,
        pg2DenPublica:false
    },
    methods:{
        sig1DemPublica:function () {
            this.pg1DenPublica=false;
            this.pg2DenPublica=true;
        }
    }
})