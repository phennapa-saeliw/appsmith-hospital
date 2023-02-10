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
				Show_j_update.run().then(()=>{
					let changeworksttaff = []
					changeworksttaff = Show_j_update.data
					storeValue('update_staff_work',changeworksttaff)
					console.log(Show_j_update.data)
				})
			})
		})
		//closeModal('Modal2')
		showModal('Modal1');
	},
	checkworkid: async () => {
		await Get_work_id.run();
		await storeValue('getworkid',Get_work_id.data[0].work_id)
	}
}