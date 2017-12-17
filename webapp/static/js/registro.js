/**
 * Created by jjmarcos on 17/12/17.
 */
var registro= new Vue({
    el:'#Identificate',
    data:{
        direccion:none,
        usuario:'',
        password:'',
        mensajeError:false
    },
    methods:{
        ingresar:function () {
            if(this.usuario === "juanjavier.097" && this.password ==="20154556c"){
                direccion="/inicio"
            }else{
                mensajeError=true;
            }
        }
    }
})