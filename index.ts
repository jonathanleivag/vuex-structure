import { createStore } from 'vuex'
import { ExampleStateInterface } from '../types/modules/module-example'

/*
../types/modules/module-example
export interface ExampleStateInterface {
  prop: boolean;
}
*/

import exampleModule from './modules/module-explemple'

export interface StateInterface {
  example: ExampleStateInterface
}

export default createStore<StateInterface>({
  modules: {
    example: exampleModule
  }
})
