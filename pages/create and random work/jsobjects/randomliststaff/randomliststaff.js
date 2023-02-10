export default {
	myVar1: [],
	myVar2: {},
	work1: () => {
		Getstaff_work1.run();
		let total = 9;
    let x = true;
    let namer = [];
		const namejunior1 = Getstaff_work1.data;
        while( x ) {
            let r = Math.floor( Math.random() * namejunior1.length );
						let rr = namejunior1[r];
            if( namer.indexOf( rr ) < 0 ) namer.push( rr );
            if( namer.length == parseInt(total) ) x = false;
					storeValue("stafftotal",namer.length)
				storeValue("staffname",namer)
        }
        namer = [];
					console.log(namer);
        x = true;
		//------------------------------------------------------------------------------------------
	},
		work2: () => {
		Getstaff_work2.run()
		let total = 9;
    let x = true;
    let namer2 = [];
		const namejunior2 = Getstaff_work2.data;
        while( x ) {
            let r = Math.floor( Math.random() * namejunior2.length );
						let rr = namejunior2[r];
            if( namer2.indexOf( rr ) < 0 ) namer2.push( rr );
            if( namer2.length == parseInt(total) ) x = false;
					storeValue("stafftotal",namer2.length)
				storeValue("staffname2",namer2)
        }
        namer2 = [];
			console.log(namer2);
        x = true;
		//------------------------------------------------------------------------------------------
	},
	work3: () => {
		Getstaff_work3.run()
		let total = 9;
    let x = true;
    let namer3 = [];
		const namejunior = Getstaff_work3.data;
        while( x ) {
            let r = Math.floor( Math.random() * namejunior.length );
						let rr = namejunior[r];
            if( namer3.indexOf( rr ) < 0 ) namer3.push( rr );
            if( namer3.length == parseInt(total) ) x = false;
					storeValue("stafftotal",namer3.length)
				storeValue("staffname3",namer3)
        }
        namer3 = [];
					console.log(namer3);
        x = true;
		//------------------------------------------------------------------------------------------
	},
}