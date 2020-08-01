(()=>{

	//定义一个基类Animal
	class Animal {
		//声明属性
		name:string
		//构造器
		constructor(name){
			this.name = name
		}
		//一般方法
		run(distance:number){
			console.log(`动物前进了${distance}米`);
		}
	}

	//定义一个派生类Snake
	class Snake extends Animal {
		//构造器
		constructor(name){
			super(name)
		}
		//重写从父类继承过来的run方法
		run(distance:number){
			console.log(`蛇滑行了${distance}米`);
		}
	}

	//定义一个派生类Horse
	class Horse extends Animal {
		//构造器
		constructor(name){
			super(name)
		}
		//重写从父类继承过来的run方法
		run(distance:number){
			console.log(`马儿奔跑了${distance}米`);
		}
		//马独有的吼叫方法
		cry(){
			console.log('hou~hou~');
		}
	}

	// const tom = new Animal('tom')
	// const jerry = new Snake('jerry')
	// const peter = new Horse('peter')
	// tom.run(100)
	// jerry.run(100)
	// peter.run(100)

	let tom:Animal //tom是一个动物
	
	tom = new Horse('tom')
	console.log(tom.name);
	tom.run(100)
	// tom.cry()

})()