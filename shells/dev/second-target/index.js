import Vue from 'vue';

Vue.config.devtools = false;

new Vue({
	name: 'SecondBundleComponent',
	template: `
		<div>
			<my-component />

			<!-- that's the component that receives the duplicated ID -->
			<my-component />
		</div>
	`,

	components: {
		MyComponent: {
			data () {
				return {a: 1};
			},

			template: `<div>here we go {{ a }}</div>`
		}
	}
}).$mount('#second-vue-dependency');

