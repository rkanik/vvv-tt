export type VFormRef = {
	reset: () => void
	validate: () => boolean
}

export type Filter = 'all' | 'finished' | 'unfinished'

export interface ComputedOptions<T> {
	get?(): T
	set?(value: T): void
	cache?: boolean
}

export type Computed<T> = {
	[K in keyof T]: (() => T[K]) | ComputedOptions<T[K]>
}

export type User = {
	id: number
	name: string
	email: string
	avatar: string
}

export type Todo = {
	id: number
	title: string
	completed: boolean
	userId?: number
	description?: string
}

export enum HttpMethod {
	GET = 'GET',
	POST = 'POST',
	PUT = 'PUT',
	DELETE = 'DELETE',
	PATCH = 'PATCH',
}
