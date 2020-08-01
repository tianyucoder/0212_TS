(()=>{

	//借助抽象类，对类进行限制
	abstract class Animal{ //抽象类
		abstract run():void //抽象方法
		abstract cry():number //抽象方法
		eat(){//真实方法
			console.log('我吃饭了');
		}
	}

	//抽象类不是让你new的，是让其他类去继承的，为什么要继承—————对类做出限制
	class Dog extends Animal {
		run(){
			console.log('狗奔跑了');
		}
		cry(){
			console.log('cry');
			return 1
		}
	}
	const d = new Dog()
	d.run()
	d.cry()
	d.eat()

})()