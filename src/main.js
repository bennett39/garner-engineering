// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import { BootstrapVue } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "~/assets/theme/assets/vendor/icofont/icofont.min.css";
import "~/assets/theme/assets/vendor/boxicons/css/boxicons.min.css";
import "~/assets/theme/assets/css/style.css";

export default function(Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue);
  Vue.component("Layout", DefaultLayout);
}
