export default {
	myVar1: [],
	myVar2: {},
	test: async () => {
		employee.run();
		let total = 9;
    let x = true;
    let namer = [];
		const namejunior = employee.data
        while( x ) {
            let r = Math.floor( Math.random() * namejunior.length );
						let rr = namejunior[r];
            if( namer.indexOf( rr) < 0 ) namer.push( rr);
            if( namer.length == parseInt(total) ) x = false;
					storeValue("stafftotal",namer.length)
				storeValue("staffname",namer)
        }
        namer = [];
        x = true;
		//------------------------------------------------------------------------------------------
	},
}