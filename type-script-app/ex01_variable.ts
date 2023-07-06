/*
타입스크립트의 기본 타입에는 12가지가 있다. 

Boolean
Number
String
Object
Array
Tuple
Enum
any
void
null
undefined
never
*/
// :을 이용해서 타입을 정의하는 방식을 타입표기(Type Annotation)라고 한다. 

//문자
let str: string = 'hello';

//숫자
let num: number = 10;

//불리언
let isLoggedIn: boolean = false;

//배열1
let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3];

//튜플
let arr3: [string, number] = ['hi', 10];

/**
enum(열거형)
: 이넘은 C, Java와 같은 다른 언어에서 흔하게 쓰이는 타입으로 특정 값(상수)들의 집합을 의미합니다.
 */
//순서대로 0, 1, 2값이 할당된다. 
enum Avengers1 { Captain, IronMan, Thor}
let hero1: Avengers1 = Avengers1.Captain;
console.log("hero1", hero1)//0이 출력됨

//첫번째를 1로 지정하면 순서대로 2,3이 할당된다. 
enum Avengers2 { Captain=1, IronMan, Thor}
let hero2: number = Avengers1.IronMan;
console.log("hero2", hero2)

enum Avengers3 { Captain=3, IronMan=2, Thor=1}
let hero3: number = Avengers2.Thor;
console.log("hero3", hero3)


let any1: any = 'hi';
let any2: any = 99;
let any3: any = true;
let any4: any = ['a', 100, false];
console.log(any1, any2, any3, any4);



