<template>
	<v-card flat>
		<iframe height="200" :src="info.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		<v-card-title class="px-0">{{ info.sName }}</v-card-title>
		<v-card-subtitle class="grey--text px-0">{{ info.age }}</v-card-subtitle>
		<v-card-text class="px-0">
			{{ info.description }}
		</v-card-text>
		<v-btn class="text-capitalize font-weight-bold" text rounded>Read more <v-icon class="ml-2" small>mdi-arrow-right</v-icon></v-btn>
	</v-card>
</template>

<script>
export default {
	props:{
		info:{
			type: Object,
			required: true
		}
	}
}
</script>

<style>

</style>