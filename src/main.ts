import { createApp } from "vue";
import { Quasar, Loading, QSpinnerPie, Notify } from "quasar";
import quasarLang from "quasar/lang/ja";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";

import "@quasar/extras/material-icons/material-icons.css";

import "quasar/src/css/index.sass";
import "./font.css";
import "./click.scss";

const app = createApp(App);

app.use(Quasar, {
  plugins: { Loading, Notify },
  lang: quasarLang,
  config: {
    loading: { QSpinnerPie },
  },
});
app.use(router);
app.use(store, key);
app.mount("#app");
