// init vue
import Vue from "vue"

// import your custom mixins
import utilsGlobalMixins from '@/plugins/mixins/utilsGlobalMixins.js'

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
  Vue.mixin({
    // Set up your mixin then
    mixins: [utilsGlobalMixins],
  })
}