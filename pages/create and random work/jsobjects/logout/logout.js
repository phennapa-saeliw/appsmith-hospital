export default {
	Logout: () => {
		storeValue('jwt',null),
			navigateTo('Login')
	},

}