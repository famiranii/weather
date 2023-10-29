import Dashboard from "../pages/dashboard/Dashboard.vue";
import Todos from "../pages/todos/Todos.vue";
import Weather from "../pages/weather/Weather.vue";
import Profile from "../pages/profile/Profile.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/todos", component: Todos },
  { path: "/weather", component: Weather },
  { path: "/profile", component: Profile },
];

export default routes;
