export default {
	myVar1: [],
	myVar2: {},
	test: () => {
		Query1.run();
		employee.run();
		let total = 9;
    let x = true;
    let namer = [];
		const namejunior = Query1.data
        while( x ) {
            let r = Math.floor( Math.random() * namejunior.length );
						let rr = namejunior[r];
            if( namer.indexOf( rr ) < 0 ) namer.push( rr );
            if( namer.length == parseInt(total) ) x = false;
					storeValue("stafftotal",namer.length)
				storeValue("staffname",namer)
					console.log(namer)
        }
        namer = [];
        x = true;
		//------------------------------------------------------------------------------------------
	},
	myFun2: async () => {
		//use async-await or promises
	}
}