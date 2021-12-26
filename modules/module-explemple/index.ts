import { Module } from 'vuex'
import { StateInterface } from '../../index'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import { ExampleStateInterface } from '../../../types/modules/module-example'

const exampleModule: Module<ExampleStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}

export default exampleModule
