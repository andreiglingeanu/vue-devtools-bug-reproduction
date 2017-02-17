import Vue from 'vue';

new Vue({
	template: `
		<div>
			<my-component />
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

