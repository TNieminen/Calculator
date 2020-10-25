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
// import "dotenv-defaults/config"

// Import Chakra UI Plugin and register it.
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
    // Mount our application inside the
    // ThemeProvider and ColorModeProvider components :)

    // You can also do this inside the App.vue file if you wish :)
    // See example at https://github.com/chakra-ui/chakra-ui-vue#usage
    return h(CThemeProvider, [
      h(CColorModeProvider, [h(CBox, [h(CReset), h(App)])])
    ])
  }
}).$mount("#app")