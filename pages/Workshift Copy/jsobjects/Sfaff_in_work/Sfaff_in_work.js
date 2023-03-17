export default {
	myVar1: [],
	myVar2: {},
	showstaff_forupdate: async () => {
			await show_s_update.run().then(()=>{
			//console.log(senior.data)
			Show_j_update.run().then(()=>{
				
				let staffsArr = []
				staffsArr = Show_j_update.data
				staffsArr.unshift(show_s_update.data[0])
				storeValue('update_staff', staffsArr)
				console.log(staffsArr)
			})
		})
	},
}