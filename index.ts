import { createStore } from 'vuex'

/*
../types/modules/module-example
export interface ExampleStateInterface {
  prop: boolean;
}
*/

import exampleModule from './modules/module-explemple'
import { ExampleStateInterface } from './modules/module-explemple/state'

export interface StateInterface {
  example: ExampleStateInterface
}

export default createStore<StateInterface>({
  modules: {
    example: exampleModule
  }
})
