import { createApp } from "vue";
import App from "./assets/global/app.vue";
import "./style.css";
import "./assets/global/style.css";
import router from "./assets/routes/script.js";

const app = createApp(App);
app.use(router);
app.mount("#app");
