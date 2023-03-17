export default {
	myVar1: [],
	myVar2: {},
	getAllWorkshift: () => {
		//Morning
		//clear all store
		clearStore();
		get_workshift_morning.run(
			() => {
				let shiftBox = moment(first_date.text).weekday() - 1;
				let results = get_workshift_morning.data;
				let total = get_workshift_morning.data.length;
				for(let i=0;i < total;i++){
					console.log(results[i]);
					let day = Number(moment(results[i].date).format("D")) + Number(shiftBox);
					let key = "box"+day.toString();
					console.log(key);
					if(results[i].staff_total >= 9){
						storeValue("box"+day,'#bbf7d0');
					}else{
						storeValue("box"+day,'#fef08a');
					}
        }
			}
		);
		// Afternoon 
		clearStore();
		GetSelect_Workshift_afternoon.run(
			() => {
				let shiftBox1 = moment(first_date.text).weekday() - 1;
				let results1 = GetSelect_Workshift_afternoon.data;
				let total1 = GetSelect_Workshift_afternoon.data.length;
				for(let i=0;i < total1;i++){
					console.log(results1[i]);
					let day1 = Number(moment(results1[i].date).format("D")) + Number(shiftBox1);
					let key1 = "boxn"+day1.toString();
					console.log(key1);
					if(results1[i].staff_total >= 9){
						storeValue("boxn"+day1,'#bbf7d0');
					}else{
						storeValue("boxn"+day1,'#fef08a');
					}
        }
			}
		);
		//Night
		clearStore();
		GetSelect_Workshift_night.run(
			() => {
				let shiftBox2 = moment(first_date.text).weekday() - 1;
				let results2 = GetSelect_Workshift_night.data;
				let total2 = GetSelect_Workshift_night.data.length;
				for(let i=0;i < total2;i++){
					console.log(results2[i]);
					let day2 = Number(moment(results2[i].date).format("D")) + Number(shiftBox2);
					let key2 = "boxnn"+day2.toString();
					console.log(key2);
					if(results2[i].staff_total >= 9){
						storeValue("boxnn"+day2,'#bbf7d0');
					}else{
						storeValue("boxnn"+day2,'#fef08a');
					}
        }
			}
		);
	},
	
}