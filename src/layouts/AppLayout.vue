<template>
	<v-app class="AppLayout">
		<app-header></app-header>
		<app-sidebar></app-sidebar>
		<v-main class="bg-green-50">
			<v-container>
				<base-transition>
					<router-view></router-view>
				</base-transition>
			</v-container>
		</v-main>
	</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'AppLayout',
})
</script>
