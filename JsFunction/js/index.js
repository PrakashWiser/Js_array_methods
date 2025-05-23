{{
        let data = [1, 2, 3, 4]
        console.log(data.length);  // 4
        data.pop() 
        console.log(data);
        console.log(data.push(10));
        data.shift()
        console.log(data);
        var number = Number('12')
        console.log(number);
        data.unshift(number)
        console.log(data);
        let stringData = ['one', 'two', 'three']
        let stringDataResult = stringData.join('=')
		console.log(stringDataResult);
        let atData0 = stringData.at(0)
        let atData1 = stringData.at(1)
        let atData2 = stringData.at(2)
        console.log(atData0);
        let concatData = atData0.concat(atData1, atData2)
        console.log(concatData);
        console.log(stringData);
        let sliceData = stringData.slice(1, 1)
        console.log(sliceData);
        const numSlice = ['zero', 'one', 'two', 'three', 'four', 'five']; 
		const numSplice = ['zero', 'one', 'two', 'three', 'four', 'five'];

		console.log(numSplice.splice(4, 1, 'six')); // (a, b) => start from a, b starts from a
		console.log(numSlice.slice(3, 4)); // (a, b) => start from a, b starts from starting

		console.log(numSplice);

}}