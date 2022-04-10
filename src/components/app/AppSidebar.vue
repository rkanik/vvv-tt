<template>
	<v-navigation-drawer app permanent>
		<v-list-item>
			<v-list-item-content>
				<v-list-item-title class="text-h6">Application</v-list-item-title>
				<v-list-item-subtitle>subtext</v-list-item-subtitle>
			</v-list-item-content>
		</v-list-item>

		<v-divider></v-divider>

		<v-list dense nav>
			<v-list-item
				v-for="item in items"
				:key="item.title"
				link
				:to="item.to"
			>
				<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
				</v-list-item-icon>

				<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	name: 'AppSidebar',
	data() {
		return {
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
				{ title: 'About', icon: 'mdi-help-box', to: '/about' },
			],
			right: null,
		}
	},
})
</script>
