import { ActionTree } from 'vuex'
import { ExampleStateInterface } from '../../../types/modules/module-example'
import { StateInterface } from '../../index'

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction () {
    // a line to prevent linter errors
  }
}

export default actions
