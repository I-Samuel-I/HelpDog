import { createApp } from "vue";
import "./style.css";
import Home from "./assets/pages/index.vue";
import "./assets/global/style.css";

const app = createApp(Home);
app.mount("#app");
