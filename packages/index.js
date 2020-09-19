import XButton from "./button.vue";

const components = [XButton];

const install = (Vue) => {
  components.forEach((item) => {
    Vue.component(item.name, item);
  });
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};
