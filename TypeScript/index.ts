let project: {
  member: string[],
  days: number,
  started: boolean,
} = {
  member: ['kim', 'park'],
  days: 30,
  started: true,
}

let user: string = 'kim';
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | number | undefined | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[],
  teacher: string,
  friend: string | string[]
} = {
  score: [100, 97, 84],
  teacher: 'Phil',
  friend: 'John'
}
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher]

function sayHi(x?: string) {
  if (x) {
    console.log('안녕하세요 ' + x)
  } else {
    console.log('왜입력안함')
  }
}

console.log(sayHi('kim'))

function 자릿수세기(x: number | string): number {
  return x.toString().length
}

function 결혼가능하냐(money: number, house: boolean, charm: string): string | void {
  let score: number = 0;
  score += money;
  if (house === true) {
    score += 500
  }
  if (charm === '상') {
    score += 100
  }
  if (score >= 600) {
    return '결혼가능'
  }
}
console.log(결혼가능하냐(100, true, '상')) 