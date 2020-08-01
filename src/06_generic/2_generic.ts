(()=>{

	class User{
		//声明属性
		id:number
		name:string
		age:number
		sex:string

		constructor(name,age,sex){
			this.name = name
			this.age = age
			this.sex = sex
		}
	}

	interface IBaseCRUD<T>{
		data:T[]
		add(t:T):number
		getById(t:number):T
	}

	class UserCRUD implements IBaseCRUD<User> {
		//实例自身上的data属性，用于存储一个一个的User
		data:User[] = []
		//添加一个User
		add(user:User):number{
			//使用时间戳作为该User的id
			const id = Date.now()
			user.id = id
			this.data.push(user)
			return id
		}
		//根据id查询一个User
		getById(id:number):User{
			return this.data.find(user => user.id === id)
		}
	}

	const user1 = new User('tom',19,'男')
	const c = new UserCRUD()
	c.add(user1)
	console.log(c.data);

	//泛型类
	class Demo<T,P> {
		value: T
		add: (x: T, y: T) => P
	}
	const d = new Demo<number,string>() 
	d.value = 1
	d.add = (a:number,b:number)=>{
		return '1'
	}

	//泛型约束
	interface ILength{
		length:number
	}

	function fn2<T extends ILength> (x:T) {
		console.log(x.length)
	}
	fn2<string>('abcd')

})()