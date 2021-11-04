import VueRouter from "vue-router";
import routes from "./routes.js";

const vueRouter = new VueRouter({
    mode: 'history',
    routes
})

export default vueRouter;
