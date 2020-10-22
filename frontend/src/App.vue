<template>
  <CFlex direction="column" justify="center" align="center" pt="30px">
    <CHeading maxW="300px" mt="100px" as="h1" mb="10">Calculate!</CHeading>
    <CStack maxW="200px" mb="10">
      <c-input-group size="sm">
        <c-input-left-element>
          <c-icon name="email" color="black"/>
        </c-input-left-element>
        <c-input
          v-model="input"
          font-size="xs"
          rounded="md"
          border-color="black"
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
      >Submit</CButton>
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
  CButton
} from "@chakra-ui/vue"

export default {
  name: "Form",
  data() {
    return {
      input: '2 * (23/(3*3))- 23 * (2*3)'
    }
  },
  components: {
    CFlex,
    CHeading,
    CStack,
    CInput,
    CButton,
    CInputGroup,
    CInputLeftElement,
    CIcon
  },
  methods: {
    calculate() {
      console.log('Input!',this.input)
      fetch(`http://localhost:3000/calculus?query=${btoa(this.input)}`).then(res=>console.log(res.status))
      // // fetch(`http://localhost:3000/calculus?query=${encodeURIComponent(this.input)}`)
      // fetch(`http://localhost:3000/calculus?query=${this.input}`,{
      //   method:'POST',
      //   headers: {
      //   'Content-Type': 'application/json'
      //   },
      //   mode: 'cors', // no-cors, *cors, same-origin
      //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      //   // credentials: 'same-origin', // include, *same-origin, omit
      //   body:JSON.stringify({input:this.input})
      // })
    }
  },
}
</script>
