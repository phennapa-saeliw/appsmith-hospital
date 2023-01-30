export default {
	myVar1: [],
	myVar2: {},
	myFun2: async () => {
		let data = []
		let randomlist = []
		let idschedules = []
		//use async-await or promises
		if(Checkbox1.isChecked){
			let id = 1;
			data = await Getstaff_work1.run()
			idschedules = await id;
			data = data.map((row) => { 
				return { label: row.E_name, value: row.E_id } 
			})
			if(Button4Copy){
			randomlist = await employee.run()
			randomlist = await randomliststaff.work1()
			randomlist = appsmith.store.staffname
      }
		}
			if(Checkbox2.isChecked){
			let id = 2;
			data = await Getstaff_work2.run()
			idschedules = await id;
			data = data.map((row) => { 
				return { label: row.E_name, value: row.E_id } 
			})
			if(Button4Copy){
			randomlist = await employee.run()
			randomlist = await randomliststaff.work2()
			randomlist = appsmith.store.staffname2
      }
		}
		if(Checkbox3.isChecked){
			let id = 3;
			data = await Getstaff_work3.run()
			idschedules = await id;
			data = data.map((row) => { 
				return { label: row.E_name, value: row.E_id } 
			})
			if(Button4Copy){
			randomlist = await employee.run()
			randomlist = await randomliststaff.work3()
			randomlist = appsmith.store.staffname3
      }
		}
		storeValue('idschedules',idschedules)
		storeValue('ramdomlist', randomlist)
		storeValue('select', data)
		return data
		return randomlist
	}
}