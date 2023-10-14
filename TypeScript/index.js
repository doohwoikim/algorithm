let project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
let user = 'kim';
let age = undefined;
let married = false;
let 철수 = [user, age, married];
let 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
function sayHi(x) {
    if (x) {
        console.log('안녕하세요 ' + x);
    }
    else {
        console.log('왜입력안함');
    }
}
console.log(sayHi('kim'));
function 자릿수세기(x) {
    return x.toString().length;
}
function 결혼가능하냐(money, house, charm) {
    let score = 0;
    score += money;
    if (house === true) {
        score += 500;
    }
    if (charm === '상') {
        score += 100;
    }
    if (score >= 600) {
        return '결혼가능';
    }
}
console.log(결혼가능하냐(100, true, '상'));
function 클리닝함수(a) {
    let 클리닝완료된거 = [];
    a.forEach((b) => {
        if (typeof b === 'string') {
            클리닝완료된거.push(parseFloat(b));
        }
        else {
            클리닝완료된거.push(b);
        }
    });
    return 클리닝완료된거;
}
console.log(클리닝함수([123, '3']));
function 만들함수(x) {
    if (typeof x.subject === 'string') {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return '없쪄';
    }
}
console.log(만들함수({ subject: ['english', 'art'] }));
let 테스트용변수 = {
    size: 123,
    position: [1, 2, 3]
};
let 회원가입정보 = {
    name: 'kim',
    adult: false,
    phone: 1234
};
function rock(a) {
    return ['가위', '보'];
}
var 자료 = {
    name: 'kim'
};
function 내함수(a) {
}
내함수(자료.name);
let 회원정보 = {
    name: 'kim',
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log('안녕');
    }
};
회원정보.plusOne(1);
회원정보.changeName();
let cutZero = function (x) {
    let result = x.replace(/^0+/, "");
    return result;
};
function removeDash(x) {
    let result = x.replace(/-/g, "");
    return parseFloat(result);
}
function 만들함수1(a, func1, func2) {
    let result = func1(a);
    let result2 = func2(result);
    console.log(result2);
}
만들함수1('010-1111-2222', cutZero, removeDash); //1011112222 출력잘됨
