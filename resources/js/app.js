require('./bootstrap');

window.Vue = require('vue');

Vue.component('dashboard', require('./components/Dashboard.vue').default);

Vue.component('categoria', require('./components/Categoria.vue').default);
Vue.component('articulo', require('./components/Articulo.vue').default);
Vue.component('ingreso', require('./components/Ingreso.vue').default);
Vue.component('proveedor', require('./components/Proveedor.vue').default);
Vue.component('venta', require('./components/Venta.vue').default);
Vue.component('cliente', require('./components/Cliente.vue').default);

Vue.component('usuario', require('./components/User.vue').default);
Vue.component('rol', require('./components/Rol.vue').default);

Vue.component('consultaingreso', require('./components/ConsultaIngreso.vue').default);
Vue.component('consultaventa', require('./components/ConsultaVenta.vue').default);

Vue.component('ayuda', require('./components/Ayuda.vue').default);
Vue.component('acerca', require('./components/Acerca.vue').default);

//Vue.component('notification', require('./components/Notification.vue').default);

const app = new Vue({
    el: '#app',
    data :{
        menu : 0
    }
});
