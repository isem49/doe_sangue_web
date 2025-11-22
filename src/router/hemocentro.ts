import type { RouteRecordRaw } from "vue-router";
import { RouteNames } from "./route-names";
import ViewHomeHemocentro from "../views/hemocentro/ViewHomeHemocentro.vue";

export const routesHemocentro : RouteRecordRaw[] = [
  {
    path: '/hemocentro/home',
    name: RouteNames.HOME_HEMOCENTRO,
    component: ViewHomeHemocentro
  },
  
]