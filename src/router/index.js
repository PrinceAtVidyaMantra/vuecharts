import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from "@/components/Add.vue"
import DayView from "@/views/DayView.vue"
import MonthView from "@/views/MonthView.vue"
import YearView from "@/views/YearView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Add',
    component: Add
  },
  {
    path: '/view/day',
    name: 'DayView',
    component: DayView
  },
  {
    path: '/view/month',
    name: 'MonthView',
    component: MonthView
  },
  {
    path: '/view/year',
    name: 'YearView',
    component: YearView
  },
  
]

const router = new VueRouter({
  routes
})

export default router
