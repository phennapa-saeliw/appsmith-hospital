export default {
	myVar1: [],
	myVar2: {},
	updateprofile: async () => {
		await Update_profile_name.run();
		await Update_profile_EmailPassword.run()
		await Getuser.run();
		storeValue('jwt',Getuser.data[0])
		closeModal('Modal1')
		console.log(Getuser.data[0])
	},
	myFun2: async () => {
		//use async-await or promises
	}
}