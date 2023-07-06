/**
함수에서는 다음 3가지 타입을 정의한다. 
-함수의 파라미터(매개변수) 타입
-함수의 반환 타입
-함수의 구조 타입
*/

//JS의 함수
// function sum(a, b){
//     return a + b;
// }

//TS의 함수 : 매개변수와 반환값의 타입은 모두 number 타입으로 지정
function sum1(a: number, b: number): number {
    return a + b;
}
console.log("a+b=", sum1(10, 20));
// console.log("a+b=", sum1(10, 20, 30)); //error
// console.log("a+b=", sum1(10)); //error


function sum2(a: number, b?: number): number {
    if(b==undefined)
        b = 0;
    return a + b;
}
console.log("a,b둘다", sum2(10, 20));
console.log("a만", sum2(10));

function sum3(a: number, b = 100): number {
    return a + b;
}
console.log("a만", sum3(10));
console.log("a,b 둘다", sum3(10, 20));