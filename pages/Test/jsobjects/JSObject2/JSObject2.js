export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
			Schedules.run();
			let a = Schedules.data;
			for(let i=0;i < Schedules.data.length;i++){
       	const x = Schedules.data[i];
				if(x.Schedules_id === 3){
					let y = [];
					Query1.run();
					const namesenior = Query1.data;
					seniorcheckschedules.run();
					const nameseniorcheck = seniorcheckschedules.data;
        }
       }
	},
	myFun2: async () => {
		//use async-await or promises
	}
}