import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import { createMetaManager, defaultConfig, resolveOption, useMeta } from 'vue-meta'

const decisionMaker5000000 = resolveOption((prevValue, context) => {
  const { uid = 0 } = context.vm || {}
  if (!prevValue || prevValue < uid) {
    return uid
  }
})

const metaManager = createMetaManager({
  ...defaultConfig,
  esi: {
    group: true,
    namespaced: true,
    attributes: ['src', 'test', 'text']
  }
}, decisionMaker5000000)

useMeta(
  {
    og: {
      something: 'test'
    }
  },
  metaManager
)



createApp(App).use(store).use(router).use(metaManager).mount("#app");
