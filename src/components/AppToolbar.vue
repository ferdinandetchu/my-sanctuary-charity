<template>
	<div>
		<v-app-bar
			fixed
			color="transparent"
			:elevate-on-scroll="(toolbarScrollStyle == '')? true : false"
			height="100"
			:class="toolbarScrollStyle"
			class="app-toolbar-padding"
		>
			<v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
			<nuxt-link to="/">
				<v-avatar size="70">
					<img src="../assets/images/CHARITY LOGO.jpg">
				</v-avatar>
			</nuxt-link>

			<v-btn class="text-capitalize ml-md-12" to="/about-us" text rounded>About Us</v-btn>
			<v-btn class="text-capitalize" href="/#discover" text rounded>Discover</v-btn>
			<v-btn class="text-capitalize" href="/#whom-we-helped" text rounded>Whom we help</v-btn>
			<v-btn class="text-capitalize" href="/#discover" text rounded>Contact</v-btn>

			<v-spacer></v-spacer>

			<v-btn class="text-capitalize secondary--text font-weight-bold" color="primary" rounded><v-icon class="mr-2">mdi-heart</v-icon> Donate Now</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
export default {
	data() {
		return{
			toolbarScrollStyle: ''
		}
	},
	methods: {
		handleScroll () {
			var currentScrollPosition = window.scrollY
			if(currentScrollPosition > 0) {
				this.toolbarScrollStyle = 'fe-toolbar-colr'
			}else{
				this.toolbarScrollStyle = ''
			}
    }
	},
	mounted () {
		window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss" scoped>
.app-toolbar-padding{
	padding-left: 200px;
	padding-right: 200px;
}
.fe-toolbar-colr{
	background-color: #fed24d !important;
}
</style>