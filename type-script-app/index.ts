/*
타입스크립트 컴파일러 설치

> npm i -g typescript
> tsc --version

로컬에서 실행하기
>tsc --init
*/

console.log("Hello Typescript..!!");

let greet = (name: string) => console.log(`Hello, ${name}`);
greet("영수");
