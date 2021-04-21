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
			footerMenus: [
				{
					title: 'Product',
					links: [	
						{ text: 'Feedback',			href: '#', target: '' },
						{ text: 'Surveys',			href: '#', target: '' },
						{ text: 'Reviews',			href: '#', target: '' },
						{ text: 'Praise',			href: '#', target: '' },
						{ text: 'Slack Integration',href: '#', target: '' },
						{ text: 'Schedule a demo',	href: '#', target: '' },
						{ text: 'Pricing',			href: '#', target: '' }
					]
				},
				{
					title: 'About',
					links: [
						{ text: 'About',			href: '#', target: '' },
						{ text: 'Terms and privacy',href: '#', target: '' },
						{ text: 'Help Center',		href: '#', target: '' },
						{ text: 'Blog',				href: '#', target: '' },
						{ text: 'Digest',			href: '#', target: '' }
					]
				},
				{
					title: 'Connect',
					links: [
						{ text: 'Contact us',		href: '#', target: '' },
						{ text: 'Twitter',			href: '#', target: '' },
						{ text: 'Facebook',			href: '#', target: '' },
						{ text: 'Linkedin',			href: '#', target: '' }
					]
				},
				{
					title: 'Labs',
					links: [
						{ text: 'Manager checklist',	href: '#', target: '' },
						{ text: 'Manager assessment',	href: '#', target: '' },
						{ text: 'Manager handbook',		href: '#', target: '' }
					]
				},
				{
					title		: 'From the blog',
					links: [
						{ text: 'How to change your company culture: a four-step framework',	href: '#', target: '' },
						{ text: 'How teams can be more productive by killing 8-hour workday',	href: '#', target: '' },
						{ text: 'How to build high performing teams inspired by nature',		href: '#', target: '' },
						{ text: 'View all',														href: '#', target: '' }
					]
				}
			],
			testimonialEntry: `
				We are experiencing what Gallup calls 'an employee engagement crisis'. Just one-third of people at work are engaged.
				<br><br>
				To improve performance and engagement companies rely on the same principles as industrial-age factories. But all those annual performance reviews and hundred-question surveys don't work anymore. People want regular feedback. Leaders who don't embrace this change end up with misaligned, disengaged and dwindling team.
				<br><br>
				We designed Teambit to change that. It empowers teams to make feedback a daily habit. Everybody knows what they are doing well and what they need to improve, leading to better performing, engaged and happier teams.
				<br><br>
				We are on a mission to make worklife exciting. Come join us.
			`
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
