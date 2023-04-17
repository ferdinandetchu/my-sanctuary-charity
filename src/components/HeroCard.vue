<template>
	<v-card class="mx-md-6" flat>
		<v-icon large color="secondary">{{ info.icon }}</v-icon>
		<h2 class="my-3">{{ info.title }}</h2>
		<p>{{ info.description }}</p>
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