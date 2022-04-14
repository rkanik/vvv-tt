import { FetchAPI } from './plugins/vuelpers'

const Api = new FetchAPI({
	baseURL: 'http://localhost:8000/api/v1',
})

const JsonApi = new FetchAPI({
	baseURL: 'https://jsonplaceholder.typicode.com',
})

export { Api, JsonApi }

export default Api
