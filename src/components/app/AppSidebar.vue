<template>
	<v-navigation-drawer app dark permanent color="green">
		<v-list-item class="h-16">
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
				{
					icon: 'mdi-help-box',
					title: 'CompositionApi',
					to: '/composition-api',
				},
				{
					icon: 'mdi-fruit-pineapple',
					to: '/pinia',
					title: 'Pinia',
				},
				{
					title: 'Intersect',
					icon: 'mdi-checkbox-multiple-blank-circle',
					to: '/intersect',
				},
				{
					title: 'FetchAPI',
					icon: 'mdi-database-import',
					to: '/fetch',
				},
				{ title: 'About', icon: 'mdi-help-box', to: '/about' },
			],
			right: null,
		}
	},
})
</script>
