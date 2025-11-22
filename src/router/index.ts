import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routesDoador } from './doador'
import { routesDeslogadas } from './deslogado'
import { routesHemocentro } from './hemocentro';

const routes : RouteRecordRaw[] = [...routesDeslogadas, ...routesDoador, ...routesHemocentro];

export const router = createRouter({
  history: createWebHistory(),
  routes
})