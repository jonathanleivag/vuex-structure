import { GetterTree } from 'vuex'
import { ExampleStateInterface } from '../../../types/modules/module-example'
import { StateInterface } from '../../index'

const getters: GetterTree<ExampleStateInterface, StateInterface> = {
  someGetter () {
    // return true;
  }
}

export default getters
