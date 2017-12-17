/**
 * Created by jjmarcos on 17/12/17.
 */
var app = new Vue({
    el: '#app',
    data:{
        message:'hello vue'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data:{
        message:'you loaded this age on' + new Date().toLocaleTimeString()
    }
})
var app3 = new Vue({
    el:'#app-3',
    data:{
        oracion1:true,
        oracion2:false
    },
    methods:{
        cambio:function () {
            a=this.oracion1;
            this.oracion1 = this.oracion2;
            this.oracion2=a;
        }
    }
})