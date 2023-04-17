<template>
  <v-row justify="center">

		<v-col md="6">
			<p class="text-center">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, harum dolore. Iure, dolorem minus. Debitis reprehenderit dolor, cupiditate voluptas sit quidem corporis qui totam eveniet adipisci, iste non blanditiis consequuntur!
			</p>
		</v-col>

		<v-col md="12">
			<v-row>
				<v-col v-for="(n, i) in 4" :key="i" md="3">
					<v-card>
						<v-img src="/img/av.jpg" />
						<div class="text-center">
							<h2>Ferdinand Etchu</h2>
							<p>Front-End Developer</p>
						</div>

						<v-card-actions class="py-0">
							<v-spacer></v-spacer>
							<v-btn icon>
								<v-icon>mdi-facebook</v-icon>
							</v-btn>

							<v-btn icon>
								<v-icon>mdi-instagram</v-icon>
							</v-btn>

							<v-btn icon>
								<v-icon>mdi-twitter</v-icon>
							</v-btn>

							<v-btn icon>
								<v-icon>mdi-linkedin</v-icon>
							</v-btn>

							<v-btn icon>
								<v-icon>mdi-youtube</v-icon>
							</v-btn>
							<v-spacer></v-spacer>
						</v-card-actions>

						<v-card-text class="text-center">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque dolorum ab, libero tenetur iusto ad assumenda aspernatur ipsum.
						</v-card-text>
					</v-card>
				</v-col>
			</v-row>
		</v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.team-avatar{
	border-top-left-radius: 5px !important;
}
</style>