<template>
	<v-row class="mt-12 fill-height" align="center" justify="center">
		<v-col v-for="(need, i) in needs" :key="i + need.img"  md="3">
			<v-card class="fe-need-card">
				<div class="d-flex justify-center fe-need-avater">
					<v-img :src="need.img" />
				</div>

				<h4 class="text-center fe-need-title">{{ need.title }}</h4>
				<p class="text-center fe-need-text ma-3 px-6">
					{{ need.description }}
				</p>

				<v-card-actions class="fe-need-btn">
					<v-spacer></v-spacer>
					<!-- <v-btn :color="need.color" class="white--text text-capitalize" :to="need.link" rounded>Read More</v-btn> -->
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
					img: '/img/about-card-1.gif',
					title: 'Taking Responsibility',
					description: 'To enable people to take responsibility for the situation of the deprived Indian child and so motivate them to seek resolution through individual and collective action thereby enabling children to realise their full potential',
					link: '/',
					color: 'pink'
				},
				{
					img: '/img/about-card-2.gif',
					title: 'Mobilising Potential',
					description: 'To make people discover their potential for action and change',
					link: '/',
					color: 'green'
				},
				{
					img: '/img/about-card-3.gif',
					title: 'Inspiring Collective Action',
					description: 'To enable peoples’ collectives and movements encompassing diverse segments, to pledge their particular strengths, working in partnership to secure, protect and honour the rights of India’s children.',
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
		margin-top: 50px;
		margin-bottom: 50px;
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