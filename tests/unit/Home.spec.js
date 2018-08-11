import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import storeStubs from '../stubs/store'
import i18n from '@/locale'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('Home.vue', () => {
  let wrapper
  let store

  beforeEach(() => {
    store = new Vuex.Store(storeStubs)
    wrapper = mount(Home, {
      i18n,
      store,
      localVue,
      stubs: ['router-link']
    })
  })

  it('renders home page with navigation bar', () => {
    expect(wrapper.contains('.home > .nav')).toBe(true)
  })

  it('renders all available boards list', () => {
    expect(wrapper.contains('.board-list')).toBe(true)
  })

  it('renders all available board items', () => {
    expect(wrapper.contains('.board-item')).toBe(true)
    expect(wrapper.findAll('.board-item').length).toBe(2)

    // Get first board and check its name
    expect(wrapper.find('.board-item').text()).toBe('Random Board')
  })
})
