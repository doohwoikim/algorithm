var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
var user = 'kim';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
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
    var score = 0;
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
    var 클리닝완료된거 = [];
    a.forEach(function (b) {
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
