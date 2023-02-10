export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		let Arr = ["bb","b","cc","d","bbb"];
		let Arry = ["b","bbb"] 
		//console.log(Arr.length)
		for(let i=0;i < Arr.length;i++){
			if(Arr[i] == Arry[i]){
				console.log("xx")
      }else{
				console.log("yy")
			}
     }
	},
	myFun2: async () => {
		//use async-await or promises
	}
}