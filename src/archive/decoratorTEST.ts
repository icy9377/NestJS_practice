// const deco = (target:any, propertyKey: string, descriptor: PropertyDescriptor) => {
//     console.log('핫도비 데코!!')
// };
//
// class TestClass {
//     @deco
//     testMethod() {
//         console.log('테스트 메소드 호출!')
//     }
// }
//
// const t = new TestClass()
// t.testMethod()


// function first() {
//     console.log('first')
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log('frist(): called')
//     }
// }
//
// function second() {
//     console.log('second')
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         console.log('second(): called')
//     }
// }
//
// class ExampleClass {
//     @first()
//     @second()
//     method() {
//         console.log('method is called')
//     }
// }
//
// const t = new ExampleClass()
// t.method()
//
// function checkVaildPayment<T extends { new (...args: any[]): {}}>(constructor: T) {
//     return class extends constructor {
//         checked = false
//     }
// }
//
// @checkVaildPayment
// class purchase {
//     type = "book"
//     title: string
//
//     constructor(title: string) {
//         this.title = title
//     }
// }
//
// const payment = new purchase("연을 쫓는 아이")
// console.log(payment)


function Enumerable(enumerable: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = enumerable
    }
}

class Person {
    constructor(public name: string) {
    }

    @Enumerable(false)
    sayHello() {
        console.log(`Hello, ${this.name}`)
    }

    @Enumerable(false)
    set setName(name: string) {
        this.name = name
    }

    @Enumerable(true)
    get getName() {
        return this.name
    }
}

const korean = new Person('kkagdugi')
for(const key in korean) {
    console.log(key, korean[key])
}
korean.sayHello()


