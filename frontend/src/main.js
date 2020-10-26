// import './registerServiceWorker'
import Vue from "vue"
import Chakra, {
  CThemeProvider,
  CColorModeProvider,
  CBox,
  CReset
} from "@chakra-ui/vue"
import { faCalculator,  } from '@fortawesome/free-solid-svg-icons'
import App from "./App.vue"

Vue.use(Chakra,{
  icons:{
    iconPack:'fa',
    iconSet:{
      faCalculator
    }
  }
})

Vue.config.productionTip = false

new Vue({
  render(h) {
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])
    ])
  }
}).$mount("#app")