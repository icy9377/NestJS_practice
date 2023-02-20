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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function Enumerable(enumerable) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = enumerable;
    };
}
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello, ".concat(this.name));
    };
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        Enumerable(false)
    ], Person.prototype, "sayHello");
    __decorate([
        Enumerable(false)
    ], Person.prototype, "setName");
    __decorate([
        Enumerable(true)
    ], Person.prototype, "getName");
    return Person;
}());
var korean = new Person('kkagdugi');
for (var key in korean) {
    console.log(key, korean[key]);
}
korean.sayHello();
