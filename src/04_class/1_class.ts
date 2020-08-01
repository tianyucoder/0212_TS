(()=>{
	
	class Person {
		//声明属性（TS中特有）
		name:string
		age:number

		//构造器方法——在TS中类的构造器参数，要在构造器之前声明
		constructor(name,age){
			this.name = name
			this.age = age
		}

		//一般方法
		speak(){
			console.log(`我是${this.name}我的年龄是${this.age}`);
		}

	}

	const p1 = new Person('tom',19)
	console.log(p1);
	p1.speak()

})()