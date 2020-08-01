(()=>{
	/* 继承 */

	//定义一个动物类—————————————父类(基类)
	class Animal {
		//奔跑的方法
		run(distance:number){
			console.log(`动物奔跑了${distance}米`);
		}
	}

	//定义一个Dog类，继承于Animal——————————子类(派生类)
	class Dog extends Animal{
		//重写从父类继承过来的run
		run(distance:number){
			console.log(`狗奔跑了${distance}米`);
		}
		//吼叫的方法
		cry(){
			console.log('汪汪汪');
		}
	}

	const a1 = new Animal()
	a1.run(100)

	const d1 = new Dog()
	d1.cry()
	d1.run(50)


})()