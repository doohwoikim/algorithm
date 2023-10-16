let person = { student: true, age: 20 }

function 함수({ student, age }: { student: boolean, age: number }) {
    console.log(student, age)
}
함수({ student: true, age: 20 })

function 최댓값(...x: number[]) {
    let result = 0;
    x.forEach((i) => {
        if (result < i) {
            result = i
        }
    })
    return result;
}
console.log(최댓값(4, 6, 3, 2))

type UserType = {
    user: string,
    comment: number[],
    admin: boolean
}

function 함수1({ user, comment, admin }: UserType): void {
    console.log(user, comment, admin)
}

함수1({ user: 'kim', comment: [3, 5, 4], admin: false })

type 어레이 = (number | string | boolean)[];

function 함수2([a, b, c]: 어레이) {
    console.log(a, b, c)
}

함수2([40, 'wine', false]) 