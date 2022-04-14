<template>
	<v-layout class="max-w-6xl mx-auto xl:mt-20 space-x-4">
		<!-- <v-navigation-drawer permanent class="flex-none">
			<v-list dense>
				<v-list-item v-for="method in methods" :key="method.value">
					<v-list-item-content>
						<v-list-item-title>{{ method.name }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer> -->

		<v-flex>
			<v-layout class="space-x-2 fetch__address-bar">
				<v-flex shrink class="w-28">
					<v-select
						v-model="request.method"
						:items="HttpMethods"
						dense
						outlined
						rounded
						hide-details
						class="!px-2 v-hide-delimeter select-method pa-0"
					></v-select>
				</v-flex>
				<v-flex>
					<v-text-field
						v-model="request.url"
						dense
						outlined
						rounded
						hide-details
						placeholder="Enter url here..."
					></v-text-field>
				</v-flex>
				<v-btn
					rounded
					depressed
					height="40"
					color="primary"
					class="!normal-case px-8"
					@click="onSendRequest"
				>
					Send
				</v-btn>
			</v-layout>

			<v-tabs v-model="tab" dense>
				<v-tabs-slider color="yellow"></v-tabs-slider>
				<v-tab v-for="item in items" :key="item" small class="!normal-case">
					{{ item }}
				</v-tab>
			</v-tabs>

			<v-tabs-items v-model="tab">
				<v-tab-item v-for="item in items" :key="item">
					<v-card flat>
						<v-card-text v-text="text"></v-card-text>
					</v-card>
				</v-tab-item>
			</v-tabs-items>

			<v-subheader class="px-0">Request</v-subheader>
			<prism-editor
				:value="JSON.stringify(request, null, 2)"
				:highlight="highlighter"
				line-numbers
				class="my-editor height-200"
			></prism-editor>

			<v-subheader class="px-0">Response</v-subheader>
			<prism-editor
				:value="response"
				:highlight="highlighter"
				:line-numbers="!!response"
				readonly
				class="my-editor !h-96"
			></prism-editor>
		</v-flex>
	</v-layout>
</template>

<script lang="ts">
import Vue from 'vue'
import { HTTPMethods } from 'vuelpers/lib/types/http'
import { FetchAPI } from '@/plugins/vuelpers'

// import Prism Editor
import prism from 'prismjs'
import { PrismEditor } from 'vue-prism-editor'
import 'prismjs/themes/prism-tomorrow.css'
import 'vue-prism-editor/dist/prismeditor.min.css'

const fetchApi = new FetchAPI({
	baseURL: '',
})

export default Vue.extend({
	name: 'FetchAPI',
	components: {
		PrismEditor,
	},
	data: () => ({
		tab: null as any,
		items: ['web', 'shopping', 'videos', 'images', 'news'],
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
		HttpMethods: Object.values(HTTPMethods),
		editorCode: 'console.log("Hello World")',
		highlighter: (code: string) => {
			return prism.highlight(code, prism.languages.js)
		},
		response: '',
		request: {
			method: HTTPMethods.GET,
			url: 'https://jsonplaceholder.typicode.com/todos',
		},
		methods: [
			{
				name: 'GET',
				value: 'get',
			},
			{
				name: 'POST',
				value: 'post',
			},
			{
				name: 'PUT',
				value: 'put',
			},
			{
				name: 'DELETE',
				value: 'delete',
			},
		],
	}),
	methods: {
		async onSendRequest() {
			// console.log(fetchApi.get(this.request.url))
			// const apiMethod = fetchApi.get
			// const apiMethod = (fetchApi as any)[this.request.method.toLowerCase()]
			// console.log(apiMethod)
			const [err, response] = await (fetchApi as any)[
				this.request.method.toLowerCase()
			](this.request.url)
			if (!err) this.response = JSON.stringify(response, null, 3)
		},
	},
})
</script>
<style lang="scss">
.fetch {
	&__address-bar {
		.select-method .v-input__slot {
			padding: 0 12px !important;
		}
	}
}

.my-editor {
	/* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
	background: #2d2d2d;
	color: #ccc;

	/* you must provide font-family font-size line-height. Example: */
	font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
	font-size: 14px;
	line-height: 1.5;
	padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
	outline: none;
}

.height-200 {
	height: 200px;
}

.mb-4 {
	margin-bottom: 1rem;
}
</style>
