import Vue from "vue";
import App from "./App.vue";
import XButton from "../packages";

Vue.config.productionTip = false;
Vue.use(XButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
