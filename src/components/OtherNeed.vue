<template>
	<v-row class="mt-12 fill-height" align="center">
		<v-col v-for="(need, i) in needs" :key="i + need.img"  md="4">
			<v-card class="fe-need-card">
				<div class="d-flex justify-center fe-need-avater">
					<v-avatar size="100" class="my-12">
						<img :src="need.img" />
					</v-avatar>
				</div>

				<h4 class="text-center fe-need-title">{{ need.title }}</h4>
				<p class="text-center fe-need-text ma-3">
					{{ need.description }}
				</p>

				<v-card-actions class="fe-need-btn">
					<v-spacer></v-spacer>
					<v-btn :color="need.color" class="white--text text-capitalize" :to="need.link" rounded>Read More</v-btn>
					<v-spacer></v-spacer>
				</v-card-actions>

				<div :class="need.color" class="fe-divider"></div>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
export default {
	data(){
		return{
			needs: [
				{
					img: "/img/issue-1.gif",
					title: 'Education',
					description: 'Ensuring that children go to school and complete their education',
					link: '/',
					color: 'pink'
				},
				{
					img: '/img/gravidez-saudavel.gif',
					title: 'Health & Nutrition',
					description: 'Increasing access to proper nutrition and quality healthcare',
					link: '/',
					color: 'green'
				},
				{
					img: '/img/issue-2.gif',
					title: 'Safety & Protection',
					description: 'Addressing issues like child labour, child marraige, trafficking and abuse',
					link: '/',
					color: 'purple'
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
.fe-divider{
	height: 5px !important;
	width: 100 !important;
}
.fe-need-card{
	.fe-need-title{

	}
	.fe-need-text{
		display: none;
	}
	.fe-need-btn{
		display: none;
	}
	&:hover{
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		.fe-need-avater{
			display: none !important;
		}
		.fe-need-title{
			padding-top: 50px !important;
		}
		.fe-need-text{
			display: block;
		}
		.fe-need-btn{
			display: flex;
			padding-bottom: 50px;
		}
	}
}
</style>