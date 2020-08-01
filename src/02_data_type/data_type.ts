(()=>{

	//布尔值
	let isDone:boolean
	isDone = true
	//isDone = 'asd' //error 不能将类型“"asd"”分配给类型“boolean”

	//数值
	let a1:number = 10 // 十进制
	let a2:number = 0b1010  // 二进制
	let a3:number = 0o12 // 八进制
	let a4:number = 0xa // 十六进制

	//字符串
	let name:string
	let age:number
	name = 'tom'
	age = 19

	//undefined和null
	//我们一般不会将一个变量限制为undefined或null类型，因为这样做没意义
	//undefined和null是任意一个类型的子类型
	let b1:number
	let b2:string
	b1 = null
	b2 = undefined

	//数组
	//arr1和arr2是等价的，都是数组类型，数组中存储的元素只能是数值
	let arr1:number[]
	let arr2:Array<number>
	let arr3:Array<string>
	arr1 = [1,2,3,4,5,6,7,8,9]
	arr2 = [1,3,5,7,9]
	arr3 = ['1','2']

	//元组
	let t1:[number,string] = [1,'qwe']
	let t2:[string,number,boolean] = ['abc',123,true]

	//枚举
	enum booksName {
		zhao,
		qian,
		sun,
		li
	}
	console.log(booksName);
	console.log(booksName[0]);
	console.log(booksName[1]);
	console.log(booksName.zhao);
	console.log(booksName.qian);

})()