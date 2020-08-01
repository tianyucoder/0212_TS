(()=>{

	//定义函数
	function add(x: number, y: number): number {
		return x + y
	}
	
	let myAdd = function(x: number, y: number): number { 
		return x + y
	}

	//书写完整函数类型（几乎不写）
	const mul:(a:number,b:number)=>number = function (a:number,b:number):number{
		return a * b
	}

	//定义一个创建名字的函数
	function buildName(firstName:string='A',lasName?:string):string{
		if(lasName){
			return firstName + '-' + lasName
		}else{
			return firstName
		}
	}
	console.log(buildName('张','三'));

	//剩余参数
	function demo(...args:any[]){
		console.log(args);
	}
	demo(1,2,3,4,'asd')

	//定义一个函数，能接受两个参数，可能：两个参数都是数值，两个参数都是字符串
	//若为字符串：返回二者拼接的结果
	//若为数值：返回二者的差值
	function test(a:string,b:string):string
	function test(a:number,b:number):number

	function test(a:string | number,b:string | number):string | number {
		if(typeof a === 'string' && typeof b === 'string'){
			return a+b
		}else if (typeof a === 'number' && typeof b === 'number'){
			return a-b
		}
	}
	// console.log(test(10,'guigu'));
	// console.log(test('aasd',22));
	console.log(test(10,19));
	console.log(test('asd','asd'));

})()