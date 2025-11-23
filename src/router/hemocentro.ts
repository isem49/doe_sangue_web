import type { RouteRecordRaw } from "vue-router";
import { RouteNames } from "./route-names";
import ViewHomeHemocentro from "../views/hemocentro/ViewHomeHemocentro.vue";
import ViewBolsasSangue from "../views/hemocentro/ViewBolsasSangue.vue";
import ViewDoadores from "../views/hemocentro/ViewDoadores.vue";

export const routesHemocentro : RouteRecordRaw[] = [
  {
    path: '/hemocentro/home',
    name: RouteNames.HOME_HEMOCENTRO,
    component: ViewHomeHemocentro
  },
  {
    path: '/hemocentro/doadores',
    name: RouteNames.DOADORES_HEMOCENTRO,
    component: ViewDoadores
  },
  {
    path: '/hemocentro/bolsas-sangue',
    name: RouteNames.BOLSAS_SANGUE_HEMOCENTRO,
    component: ViewBolsasSangue
  },
  
]