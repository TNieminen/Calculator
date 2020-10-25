import { shallowMount } from '@vue/test-utils'
import Calculator from '../../src/App.vue'

const provide = {
  $toggleColorMode: key => key,
  $chakraColorMode: key => key
}

describe('Calculator.vue', () => {
  it('Should render calculator', () => {
    const component = shallowMount(Calculator, {provide})
    expect(component.vm).toBeTruthy()
  })
})
