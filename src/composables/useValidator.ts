/* eslint-disable no-useless-escape */
import { isEmpty } from 'vuelpers'

const _regex = {
	name: /^[a-zA-Z\.\- ]{3,32}$/,
	email: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
	phone: /^(\+?[0-9\-]{10,15})$/,
	password: /^.{8,20}$/,
	character: /^[a-zA-Z]+$/,
	number: /^[0-9\s\-]+$/,
}

const validators = {
	email: (v: any) =>
		isEmpty(v) || _regex.email.test(v) || `Email is not valid.`,
	name: (v: any) => _regex.name.test(v) || `Name can only have characters`,
	password: (v: any) =>
		_regex.password.test(v) ||
		`Password can't have less than 8 characters and more than 20 characters`,
	phone: (v: any) =>
		isEmpty(v) ||
		_regex.phone.test(v) ||
		`Please enter a valid phone number.`,
	onlyCharacters: (v: any) =>
		_regex.character.test(v) || "Can't have special characters or numbers",
	required: (fieldName: any) => (v: any) =>
		!isEmpty(v) || `${fieldName || 'Field'} is required.`,
	max: (len: number, fieldName: any) => (v: any) => {
		if (typeof v === 'string' && Number.isNaN(+v))
			return (
				!(v && v.length >= len) ||
				`${fieldName || 'Field'} can't have more than ${len} characters`
			)
		else if (!Number.isNaN(+v))
			return v <= len || `${fieldName || 'Field'} can't be more than ${len}.`
		return true
	},
	// max: (len: any, fieldName: any) => (v: any) =>
	// 	!(v && v.length > len) ||
	// 	this.$t('rules.max', { field: fieldName || this.$t('field'), len }),
	min: (len: any, fieldName: any) => (v: any) => {
		if (typeof v === 'string' && Number.isNaN(+v))
			return (
				!(v && v.length < len) ||
				`${fieldName || 'Field'} can't have less than ${len} characters`
			)
		else if (!Number.isNaN(+v))
			return v >= len || `${fieldName || 'Field'} can't be less than ${len}.`
		return true
	},

	number: (v: any) => _regex.number.test(v) || `Please enter a valid number.`,
	match: (v1: any, v2: any, fieldName: any) => {
		return v1 === v2 || `${fieldName} does not matched`
	},
	cantMatch: (v1: any, v2: any, f1 = 'Field1', f2 = 'Field2') => {
		return v1 !== v2 || `${f1} and ${f2} can't be matched`
	},
}

type Validators = typeof validators
type ValidatorKey = keyof Validators

export const useValidator = (...keys: ValidatorKey[]) => {
	const mRules: Validators = Object.entries(validators)
		.filter(([key]) => keys.includes(key as ValidatorKey))
		.reduce(
			(acc, [key, value]) => ({
				...acc,
				[key]: value,
			}),
			{} as Validators
		)
	return mRules
}
