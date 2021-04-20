// ###################################################### 
// # Vue.js - MAIN INSTANCE                             # 
// ###################################################### 

var app = new Vue(
	{
		el: '#app',
		data: {
			navEntries: [
				{
					text: 'Solutions',
					iconSrc: '',
					class: '',
					href: '#',
					fas: 'fas fa-caret-down'
				},
				{
					text: 'Pricing',
					iconSrc: '',
					class: '',
					href: '#',
					fas: ''
				},
				{
					text: 'Blog',
					iconSrc: '',
					class: '',
					href: '#',
					fas: ''
				},
				{
					text: 'Sign in',
					iconSrc: '',
					class: '',
					href: '#',
					fas: ''
				},
				{
					text: 'Signup',
					iconSrc: 'img/google-logo.svg',
					class: 'btn btn_empty nav',
					href: '#',
					fas: ''
				}
			],
		},
		methods: {
		},
		computed: {
		},
		created() {
		},
		mounted() {
		},
		updated() {
		}
	}
);
// Vue.config.devtools = true;

// ###################################################### 
// # jQuery - DYNAMICS                                  # 
// ###################################################### 

// $(function() {
// // ********************* doc ready start ***


// // *********************** doc ready end ***
// });

// ###################################################### 
// # FUNCTIONS                                          # 
// ###################################################### 

