<template>
	<v-app-bar app dark color="primary">
		<v-toolbar-title>App Layout</v-toolbar-title>

		<v-spacer></v-spacer>

		<base-button></base-button>

		<v-btn icon dark>
			<v-icon>mdi-magnify</v-icon>
		</v-btn>
		<v-btn icon dark>
			<v-icon>mdi-dots-vertical</v-icon>
		</v-btn>
		<v-btn icon dark>
			<v-icon>mdi-bell</v-icon>
		</v-btn>
		<v-btn icon dark>
			<v-icon>mdi-account-circle</v-icon>
		</v-btn>
	</v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'AppHeader',
})
</script>
