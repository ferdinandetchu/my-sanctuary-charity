<template>
	<div>
		<v-container class="mt-12 pt-12">
      <v-row justify="center mt-12">
        <v-row class="fe-app-max-width" justify="center">
					<v-col cols="12">
						<h1 class="text-capitalize fe-hero-title text-center fe-hero-undeline-title">Our Vision</h1>
					</v-col>
					<v-col md="7">
						<p class="text-center text-h4">A happy, healthy and creative child whose rights are protected and honoured in a society that is built on respect for dignity, justice and equity for all.</p>
					</v-col>
				</v-row>
			</v-row>
		</v-container>

		<v-img height="70vh" src="/img/what_have_done2.jpg" class="fe-about-hero-image">
			<v-row class="fill-height fe-image-overlay" align="end">
				<p>..;mfsdf;lsn</p>
			</v-row>
		</v-img>

		<v-container class="mt-12 pt-12">
      <v-row justify="center">
        <v-row class="fe-app-max-width" justify="center">
					<v-col cols="12">
						<h1 class="text-capitalize fe-hero-title text-center fe-hero-undeline-title">Our Mission</h1>
						
						<mission-card />
					</v-col>
				</v-row>
			</v-row>
		</v-container>

		<v-container class="mt-12 pt-12">
      <v-row justify="center">
        <v-row class="fe-app-max-width" justify="center">
					<v-col cols="12">
						<h1 class="text-capitalize fe-hero-title text-center fe-hero-undeline-title">Our Team	</h1>
						
						<team-member />
					</v-col>
				</v-row>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import MissionCard from '../components/mission-card.vue'
import TeamMember from '../components/TeamMember.vue'

export default {
  components:{MissionCard, TeamMember}
}
</script>

<style lang="scss" scoped>
.fe-image-overlay{
	background-color: linear-gradient(transparent, #fed24d);
	position: absolute;
}
</style>