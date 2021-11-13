import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/sites",
      name: "sites",
      component: () => import("./components/SitesList")
    },
    {
      path: "/sites/:id",
      name: "site-details",
      component: () => import("./components/SiteItem")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddSite")
    }
  ]
});
