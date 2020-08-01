(()=>{

	 /* 
    访问修饰符: 用来描述类内部的属性/方法的可访问性
      public: 默认值, 公开的外部也可以访问
      protected: 类内部、子类内部可以访问
      private: 只有类内部可以访问
  */

	class Person {
		//声明属性（TS中特有）
		private	name:string //name变成私有的了，只能Person类内部使用
		public readonly age:number
		//构造器方法——在TS中类的构造器参数，要在构造器之前声明
		constructor(name,age){
			this.name = name
			this.age = age
		}
		//一般方法
		protected speak(){ //speak可以在Person类内部、Person的子类内部使用
			console.log(`我是${this.name}我的年龄是${this.age}`);
		}
	}

	class Student extends Person {
		//声明属性（TS中特有）
		public scholl:string
		//构造器方法——在TS中类的构造器参数，要在构造器之前声明
		constructor(name,age,scholl){
			super(name,age)
			this.scholl = scholl
		}
		//一般方法
		public study(){
			this.speak() //super.speak()
			console.log('我在好好的学习');
		}
	}
	
	const p = new Person('tom',19)
	// p.age = 100
	console.log(p.age);

})()