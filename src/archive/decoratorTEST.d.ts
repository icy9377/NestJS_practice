declare function Enumerable(enumerable: boolean): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => void;
declare class Person {
    name: string;
    constructor(name: string);
    sayHello(): void;
    set setName(name: string);
    get getName(): string;
}
declare const korean: Person;
