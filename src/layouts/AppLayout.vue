<template>
	<v-app class="AppLayout">
		<app-header></app-header>
		<app-sidebar></app-sidebar>
		<v-main>
			<v-container>
				<v-fade-transition>
					<router-view></router-view>
				</v-fade-transition>
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

<style lang="scss" scoped>
.AppLayout {
	background-color: red;
}
</style>
