(()=>{

	//对象接口
	//定义一个person对象的接口——用于对person对象中的属性，进行限制
	interface IPerson {
		id:number,
		readonly name:string, //只读属性
		age:number,
		sex?:string //可选属性
	}
	//定义一个person对象
	const person:IPerson = {
		id:1,
		name:'tom',
		age:19,
	}
	//person.name = 'jerry'
	console.log(person);

	//函数接口
	//定义一个函数接口
	interface IFindKeyWord {
		(source:string,keyWord:string):boolean
	}
	const findKeyWord:IFindKeyWord = function (source,keyWord){
		return source.search(keyWord) > -1
	}
	console.log(findKeyWord('aertyhgred5r6tyug','t'));

	//类接口
	//定义一个Car类的车轮类接口
	interface IWhell {
		whellType:string
		roll():void
	}
	//定义一个Car类的灯光接口
	interface ILight {
		lightOn():void
		lightOff():void
	}
	//接口是可以继承的
	interface ICarOption extends IWhell,ILight{
		
	}
	
	class Car implements ICarOption {
		//类中的一般属性（类中写赋值语句，形如 a = 1,类的实例上追加一个a属性，值为1）
		whellType = '防滑轮胎'
		//类型中的一般方法
		roll(){
			console.log('车轮在飞速的滚动');
		}
		lightOn(){
			console.log('开灯');
		}
		lightOff(){
			console.log('关灯');
		}
	}


})()