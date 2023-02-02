export default {
	myVar1: [],
	myVar2: {},
	getlist: async (Schedules_id, date) => {
		//write code here
			//showModal('Modal2')
			storeValue('input_sid', Schedules_id)
			storeValue('input_date', date)
		//console.log(Schedules_id + " "+ date)
			await Show_Senior.run().then(()=>{
			//console.log(senior.data)
			storeValue('input_work_id', Show_Senior.data[0].work_id)
			Show_Junior.run().then(()=>{
				
				let staffsArr = []
				staffsArr = Show_Junior.data
				staffsArr.unshift(Show_Senior.data[0])
				storeValue('staffs_table', staffsArr)
				console.log(staffsArr)
			})
		})
		//closeModal('Modal2')
		showModal('Modal1');
	},
	myFun2: async () => {
		//use async-await or promises
	}
}