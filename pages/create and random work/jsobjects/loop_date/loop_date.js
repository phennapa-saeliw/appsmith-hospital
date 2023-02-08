export default {
	myVar1: [],
	myVar2: {},
	myFun2: async () => {
		let from = new Date(DatePicker1.selectedDate);
let to = new Date(DatePicker2.selectedDate);
	let dayofmounth = [];
// loop for every day
for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
   // your day is here
	dayofmounth.push(day.toLocaleDateString())
}
		storeValue('dayofmounth',dayofmounth)
	}
}