class Person {
    name: string;
    age: number;
    constructor(a: string) {
        this.name = a;
        this.age = 20;
    }
}

let john = new Person('john');
let kim = new Person('kim');

console.log(john.name);
console.log(kim.age);

class Car {
    model: string;
    price: number;
    constructor(a: string, b: number) {
        this.model = a;
        this.price = b;
    }

    tax(): number {
        return this.price * 0.1
    }
}


let car1 = new Car('소나타', 3000)
console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()) //콘솔창 출력결과는 300

class Word {
    num;
    str;

    constructor(...param: (number | string)[]) {
        let 숫자들: number[] = [];
        let 문자들: string[] = [];

        param.forEach((i) => {
            if (typeof i === 'string') {
                문자들.push(i)
            } else {
                숫자들.push(i)
            }
        })

        this.num = 숫자들;
        this.str = 문자들;
    }
}


let obj = new Word('kim', 3, 5, 'park');
console.log(obj.num) //[3,5]
console.log(obj.str) //['kim', 'park'] 