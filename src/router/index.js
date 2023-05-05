import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("../components/HelloWorld.vue"),
      props: (route) => ({ msg: route.query.msg })
    },
    {
      path: "/vmodel",
      component: () => import("../components/vmodel.vue")
    },
    {
      path: "/von",
      component: () => import("../components/von.vue")
    },
    {
      path: "/vbind",
      component: () => import("../components/vbind.vue")
    },
    {
      path: "/prop",
      component: () => import("../components/prop.vue")
    }
  ]
});
