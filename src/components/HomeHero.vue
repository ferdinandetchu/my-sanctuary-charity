<template>
	<v-img height="80vh" class="fe-hero-image" src="../assets/images/hero-image.jpg">
		<v-row class="fill-height" justify="center">
			<v-row class="fill-height fe-app-max-width" align="end" justify="center">
				<v-col md="4">
					<h1 class="text-capitalize fe-hero-title">A World With <span class="fe-hero-undeline-title">No Malnorished</span> And <span class="fe-hero-undeline-title">Uneducated</span> Child</h1>
					<p class="my-12">Every minute one child; dies of malnutrition, or becomes a problem to the society, be the one to help them have good food and good educetion.</p>

					<v-btn class="text-capitalize font-weight-bold secondary--text" color="primary" rounded><v-icon class="mr-2">mdi-heart</v-icon> Donate Now</v-btn>
					<v-btn class="text-capitalize font-weight-bold ml-2" text rounded>Discover <v-icon class="ml-2" small>mdi-arrow-down</v-icon></v-btn>
				</v-col>
				<v-col cols="8">
					<div class="d-flex justify-end">
						<div>
							<h2 class="fe-hero-title">{{death}}</h2>
							<div class="fe-hero-number-circle"></div>
							<p>Children die every <br> day in Africa</p>
						</div>
					</div>
				</v-col>
			</v-row>
		</v-row>
	</v-img>
</template>

<script>
export default {
  name: 'HomeHero',
	computed: {
		death(){
			return 288
		}
	}
}
</script>
