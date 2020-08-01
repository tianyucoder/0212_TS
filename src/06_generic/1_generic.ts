(()=>{

	//引入泛型
	function createArr<P>(count:number,data:P):P[]{
		let arr:P[] = []
		for (let i = 0; i < count; i++) {
			arr.push(data)
		}
		return arr
	}
	const arr1 = createArr<string>(3,'0212') //["0212", "0212", "0212"]
	const arr2 = createArr<number>(4,10.235) //[100, 100, 100, 100]

	console.log(arr1[0].split('1'));//运行不报错，但编写时无提示
	console.log(arr2[0].toString());//运行不报错，但编写时无提示
	console.log(arr2[0].toFixed(1));//运行不报错，但编写时无提示
	// console.log(arr1[0].toFixed);//运行报错


	//使用多个泛型
	function demo <T,P> (a:T,b:P):[T,P]{
		return [a,b]
	}
	const arr =	demo<number,string>(1,'qwe')
	arr[1].split('0')
	


})()