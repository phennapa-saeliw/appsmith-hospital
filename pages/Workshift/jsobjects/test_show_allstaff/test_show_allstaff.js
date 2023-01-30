export default {
	liststaff: async () => {
		storeValue("allstaff", undefined);
     await Get_Senior_Junior.run(
            () => {
								let all = {};
								//let a = [];
                let shiftBox = moment(first_date.text).weekday() - 1;
                let result = Get_Senior_Junior.data;
                let total = Get_Senior_Junior.data.length
                for(let i=0; i < total;i++){
                    let day = Number(moment(result[i].date).format("D")) + Number(shiftBox);
                    //console.log(day);
                    if(result[i].Schedules_id == 1){
                            all["staff1"+day] = result[i];
														//a.push(result[i])
														storeValue("allstaff", all);
														console.log(appsmith.store.allstaff)
                    }
                }
							//storeValue("allstaff", all);
							//console.log(appsmith.store.allstaff)
						}
		 );
            }
            
	}