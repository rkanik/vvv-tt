import { ModuleTree } from 'vuex'
import { Modules } from '../index'
import { viteImport } from '@/helpers'

export const getModules = async () => {
	return (await viteImport([import.meta.globEager('./*.store.ts')], {
		defaultOnly: true,
	})) as ModuleTree<Modules>
}

export * from './auth.store'
export * from './users.store'
