<template>
  <CFlex
    v-bind="mainStyles[colorMode]"
    flex-dir="column"
    justify-content="center"
    align-items="center"
    w="100vw"
    h="100vh"
  >
    <CIconButton
      right="0px"
      top="0px"
      w="50px"
      position="absolute"
      :icon="colorMode === 'light' ? 'moon' : 'sun'"
      @click="$toggleColorMode"
      :aria-label="`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`"
    />
    <CHeading textAlign="center" as="h1" mb="10">Calculate!</CHeading>
    <c-text
      :color="isErrorState ? 'red.300' : 'black'"
      v-show="result"
      fontSize="xl"
      is-truncated
      maxW="30vw"
      >Result: {{ result }}</c-text
    >
    <CStack w="30vw" mb="10">
      <c-input-group size="sm">
        <c-input-left-element>
          <c-icon name="calculator" color="black" />
        </c-input-left-element>
        <c-input
          v-model="input"
          font-size="xs"
          rounded="md"
          :borderColor="isErrorState ? 'red.300' : 'black'"
          type="email"
          placeholder="Email address"
        />
      </c-input-group>
      <CButton
        @click="calculate"
        size="sm"
        bg="black"
        color="white"
        font-size="xs"
        :_hover="{
          bg: 'white',
          color: 'black',
          border: '1px solid'
        }"
        :_active="{
          bg: 'gray.800'
        }"
        >Submit</CButton
      >
    </CStack>
  </CFlex>
</template>

<script>
import {
  CFlex,
  CHeading,
  CStack,
  CIcon,
  CInput,
  CInputGroup,
  CInputLeftElement,
  CButton,
  CIconButton,
  CText
} from '@chakra-ui/vue'

export default {
  name: 'Calculator',
  data() {
    return {
      input: '2 * (23/(3*3))- 23 * (2*3)',
      mainStyles: {
        dark: {
          bg: 'gray.700',
          color: 'whiteAlpha.900'
        },
        light: {
          bg: 'white',
          color: 'gray.900'
        }
      },
      result: undefined,
      serverUrl: process.env.VUE_APP_API_SERVER_ADDRESS,
      serverPort: process.env.VUE_APP_API_SERVER_PORT
    }
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  components: {
    CFlex,
    CHeading,
    CStack,
    CInput,
    CButton,
    CInputGroup,
    CInputLeftElement,
    CIcon,
    CIconButton,
    CText
  },
  methods: {
    calculate() {
      fetch(`${this.serverUrl}/calculus?query=${btoa(this.input)}`)
        .then(res => res.json())
        .then(res => {
          if (res.error) {
            throw new Error(res.message)
          }
          this.isErrorState = false
          this.result = res.result
        })
        .catch(err => {
          console.log(err)
          this.isErrorState = true
          this.result = err.message
        })
    }
  },
  computed: {
    /**
     * In order to preserve reactivity, Chakra provides the color mode
     * inside the `$chakraColorMode` function. This function returns the current
     * color mode.
     */
    colorMode() {
      return this.$chakraColorMode()
    }
  }
}
</script>
