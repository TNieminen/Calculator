<template>
  <CFlex direction="column" justify="center" align="center" pt="30px">
    <CHeading maxW="300px" mt="100px" as="h1" mb="10">Log in to Vercel</CHeading>
    <CStack maxW="200px" mb="10">
      <c-input-group size="sm">
        <c-input-left-element>
          <c-icon name="email" color="black"/>
        </c-input-left-element>
        <c-input
          font-size="xs"
          rounded="md"
          border-color="black"
          type="email"
          placeholder="Email address"
        />
      </c-input-group>
      <CButton
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
      >Continue</CButton>
    </CStack>
    <p v-chakra font-family="body" font-size="xs">You can also
      <a v-chakra color="blue.400">continue with GitHub or GitLab</a>
    </p>
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
  components: {
    CFlex,
    CHeading,
    CStack,
    CInput,
    CButton,
    CInputGroup,
    CInputLeftElement,
    CIcon
  }
}
</script>
