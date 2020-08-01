(()=>{

	class Person{
		firstName:string
		lastName:string
		static phone:string = '13988999988'

		constructor(firstName,lastName){
			this.firstName = firstName
			this.lastName = lastName
		}

		//fullName属性被修改时触发
		set fullName(value){
			const nameArr = value.split('-')
			this.firstName = nameArr[0]
			this.lastName = nameArr[1]
		}

		//读取fullName时触发
		get fullName(){
			return this.firstName + '-' + this.lastName
		}

	}

})()