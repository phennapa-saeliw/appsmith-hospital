export default {
	onLoadPage: async () => {
		storeValue("boxall", undefined);
     await GetAll_work.run(
            () => {
								let all = {};
                let shiftBox = moment(first_date.text).weekday() - 1;
                let result = GetAll_work.data;
                let total = GetAll_work.data.length;
                for(let i=0; i < total;i++){
                    let day = Number(moment(result[i].date).format("D")) + Number(shiftBox);
                    console.log(day);
                    if(result[i].Schedules_id == 1){
                        if(result[i].staff_total >= 9){
                            all["box"+day] = '#bbf7d0';
														
												}else{
                            all["box"+day] = '#fef08a';
                        }
                    }else if(result[i].Schedules_id == 2){
                        if(result[i].staff_total >= 9){
                            all["boxn"+day] = '#bbf7d0';
                        }else{
                            all["boxn"+day] = '#fef08a';
                        }
                    }else if(result[i].Schedules_id == 3){
                        if(result[i].staff_total >= 9){
                            all["boxnn"+day] = '#bbf7d0';
                        }else{
                            all["boxnn"+day] = '#fef08a';
                        }
                    }
                }
								storeValue("boxall", all);
							console.log(appsmith.store.boxall.box23);
            }
            
        );
	}
	
}