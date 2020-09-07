import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import CarList from "../views/CarList.vue";
import CreateUserComponent from "../components/user/CreateUser";
import EditUserComponent from "../components/user/EditUser";
import CreateCarComponent from "../components/car/CreateCar";
import EditCarComponent from "../components/car/EditCar";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", redirect: { name: "home" } },
    { path: "/home", name: "home", component: Home },
    { path: "/car-list", name: "carList", component: CarList },
    {
      path: "/create-user",
      name: "CreateUser",
      component: CreateUserComponent,
    },
    { path: "/edit-user/:id", name: "EditUser", component: EditUserComponent },
    { path: "/create-car", name: "CreateCar", component: CreateCarComponent },
    { path: "/edit-car/:id", name: "EditCar", component: EditCarComponent },
  ],
});

export default router;
