// let 제목 = document.querySelector('#title');
// if (제목 != null) {
//     제목.innerHTML = '반갑소'
// }

// let 제목 = document.querySelector('#title');
// if (제목 instanceof HTMLElement) {
//     제목.innerHTML = '반가워요'
// }

// let 제목 = document.querySelector('#title') as HTMLElement;
// 제목.innerHTML = '반갑소'

let 제목 = document.querySelector('#title');
if (제목?.innerHTML != undefined) {
    제목.innerHTML = '반갑소'
}

let 링크 = document.querySelector('.link');
if (링크 instanceof HTMLAnchorElement) {
    링크.href = 'https://kakao.com'  //잘됨
}

let 버튼 = document.getElementById('button');
버튼?.addEventListener('click', function () {
    console.log('안녕')
}) 