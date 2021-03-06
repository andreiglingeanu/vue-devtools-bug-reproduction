import Vue from 'vue'
import store from './store'
import Target from './Target.vue'
import Other from './Other.vue'
import Counter from './Counter.vue'
import Events from './Events.vue'

// when you make that false - no component will be inspectable in devtools
Vue.config.devtools = true;

let items = []
for (var i = 0; i < 100; i++) {
  items.push({ id: i })
}

let circular = {}
circular.self = circular

new Vue({
  store,
  render (h) {
    return h('div', null, [
      h(Counter),
      h(Target, {props:{msg:'hi'}}),
      h(Other),
      h(Events)
    ])
  },
  data: {
    obj: {
      items: items,
      circular
    }
  }
}).$mount('#app')

// custom element instance
const ce = document.querySelector('#shadow')
const shadowRoot = ce.attachShadow({ mode: 'open' })

const ceVM = new Vue({
  name: 'Shadow',
  render (h) {
    return h('h2', 'Inside Shadow DOM!')
  }
}).$mount()

shadowRoot.appendChild(ceVM.$el)

