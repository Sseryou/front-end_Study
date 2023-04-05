//console.log("hello JavaScript!");

/*

    JavaScript

    목차

    1. 데이터 타입
    2. 연산자
    3. 조건문
    4. 반복문
    5. 변수와 상수
    6. 함수
    7. 배열
    8. 객체
    9. 클래스
    10. 에러와 예외처리
    11. 비동기 작업
    12. 프로미스
    13. ES6 문법
    14. 정규식
    15. JSON

*/

/*
    데이터 타입

    1. String(문자열)
    2. Number
    3. Boolean
    4. Null
    5. undefined
    6. BigInt
*/

/*
    1. String(문자열)

    연속된 문자
    ' ', "" 안에 값을 작성한다
    
*/
// var foo = 'bar';
// console.log(foo); //bar
// console.log(typeof foo); //string

// console.log(foo[0]); //배열(숫자열) 첫번째 (0,1,2) -> b
// console.log(foo[1]); //배열(숫자열) 두번째 (0,1,2) -> a
// console.log(foo[2]); //배열(숫자열) 세번째 (0,1,2) -> r
// //자바스크립트에는 char 타입이 없다!
// //자바스크립트는 ;를 생략 가능하다.

// console.log(foo.length); //문자열 길이 = 3

/*
    Number

    -(2^1024 -1)에서 2^1024-1 사이의 숫자를 나타낸다.

    값의 종류 :
        정수, 소수, NaN(Not a Number), +Infinity, -Infinity



*/
// //정수
// var year = 2023;
// console.log(year);
// console.log(typeof year);

// //소수
// var pi = 3.14
// console.log(pi);
// console.log(typeof pi);

// //NaN
// var nan = 2 -'foo';
// console.log(nan);

// //Number타입의 최대 값
// var max_value = Number.MAX_VALUE;
// console.log(max_value);


// //Number타입의 최소 값
// var negative_max_value = -Number.MAX_VALUE;
// console.log(negative_max_value);


// //양의 무한대
// var infinity = Number.MAX_VALUE * 1.1;
// console.log(infinity); //Infinity

// var negative_infinity = -Number.MAX_VALUE * 1.1;
// console.log(negative_infinity);

/*
    Boolean
    참 또는 거짓의 값을 갖는다 (true, false)



*/

// var bool = true;
// console.log(bool);
// console.log(typeof bool); //boolean


// // //비교연산이나 논리연산은 boolean값을 반환한다.
// console.log(1 > 0); //true
// console.log(1 == 2); //false


/*
    Null
    '무효' 또는 '없는' 의 상태를 나타낸다.
*/

// var foo = null;
// console.log(foo); //null
// console.log(typeof foo); //object


/*
    undefined
    정의되지 않은 변수를 나타낸다.
*/

// var x;
// console.log(x);
// console.log(typeof x); //undefined

/*
    BigInt
    안전한 정수(Safe Integer) 밖의 정수를 나타낸다.
    Number 타입 값의 뒤에 n을 붙여 선언한다.

    * 안전한 정수 : -(2^53 -1) 에서 2^53 -1 사이의 정수
*/

// //안전한 정수 (최대)

// var max_safe_integer = Number.MAX_SAFE_INTEGER;
// console.log(max_safe_integer);

// //안전한 정수 (최소)
// var min_safe_integer = Number.MIN_SAFE_INTEGER;
// console.log(min_safe_integer);

// //Number타입은 안전한 정수 밖의 정수를 정확하게 저장할 수 없다.
// var not_safe_integer = 9999999999999999999;
// console.log(not_safe_integer); // 1000000000000

// var bigint = 999999999999999999n;
// console.log(bigint);
// console.log(typeof bigint); //BigInt


/*
    연산자

    1. 수리연산자
    2. 할당연산자
    3. 비교연산자
    4. 논리연산자
    5. 타입연산자
*/


/*
    수리연산자

    1. 사칙연산
    + - * /

    2. 증가 연산자
    ++

    3. 감소 연산자
    --

    4. 제곱 연산자
    **
    5. 계수 연산자
    %

*/

//사칙연산

// var add = 1 + 1;
// var subtract = 2 - 1;
// var divide = 1 / 2;
// var multiply = 1 * 1;

// console.log('덧셈:', add);
// console.log('뺄셈:',subtract);
// console.log('나눗셈:',divide);
// console.log('곱셈:',multiply);

//증가연산자

// var i = 1;
// i++;
// console.log(i);

//제곱 연산자(지수)
// var exp = 2 ** 7;
// console.log(exp);

//계수 연산자(나머지)
// var mod = 5 % 2;
// console.log(mod); //1

/*
    할당연산자
    
    1. 변수할당연산자
    =

    2. 덧셈할당연산자
    +=

    3. 뺄셈할당연산자
    -=

    4. 곱셈할당연산자
    *=

    5. 나눗셈할당연산자
    /=

    6. 제곱할당연산자
    **=

    7. 계수할당연산자
    %=
*/


//변수할당연산자
// var foo = 'bar'
// console.log(foo);

//덧셈할당연산자

// var longVariablesName = 1;
// //longVariablesName = longVariablesName + 1 과 같다
// longVariablesName += 1;
// console.log(longVariablesName); //2

/*
    비교연산자

    1. 동등연산자 ==
    2. 비동등연산자 !=
    3. 엄격동등연산자 ===
    4. 엄격비동등연산자 !==
    5. greater then 연산자 >
    6. greater then or equal 연산자 >=
    7. less then 연산자 <
    8. less then or equal 연산자 <=
*/

//동등연산
// console.log('동등', 2023 == 2023); //true
// console.log('동등', 2023 == '2023'); //true
// console.log('동등', null == undefined); //true

//비동등연산
// console.log('비동등', 2023 != 2023); //false
// console.log('비동등', 2023 != '2023'); //false
// console.log('비동등', null != undefined); //false


//엄격동등연산
// console.log('엄격동등', 2023 === 2023); //true
// console.log('엄격동등', 2023 === '2023'); //false
// console.log('엄격동등', null === undefined) //false

//엄격비동등연산
// console.log('엄격비동등', 2023 !== 2023); //false
// console.log('엄격비동등', 2023 !== '2023'); //true
// console.log('엄격비동등', null !== undefined) //true

//greater then
//console.log(1 > 0); //true

/*
    논리연산자

    1. AND (그리고)
    expr 1 && expr 2

    2. OR (또는)
    expr 1 || expr 2

    3. ! (NOT)
    !expr

*/

// //AND
// console.log(1 > 0 && 1 < 2); //true , 두 조건식이 전부 true일때 true

// //OR
// console.log(1 > 0 || 1 > 2); //true , 둘 중 하나만 true여도 true

// //NOT (부정)
// console.log(!(1>0)); //false , true를 false로 false를 true로 바꿈
// console.log(!true); //false

// //boolean 타입이 아닌 다른 데이터 타입을 부정할 경우

// console.log('Not null', !null); //true

// console.log('Not undefined', !undefined); //true

// console.log('Not zero', !0); //true

// console.log('Not 빈문자열', !""); //true

/*
    타입 연산자

    1. typeof
    2. instanceof


*/

// var foo = 'bar';

// //인수의 타입을 리턴한다
// console.log('foo의 타입:', typeof foo);


// Q. 연산자 문제
// 다음 문장을 표현식으로 작성해보세요.
// 나이가 13세이상 19세 이하(청소년)
//age >= 13 && age <= 19

/*
    조건문

    1. if 조건문
    2. switch 조건문
    3. ? (삼항연산자) 조건문

*/


/*
    1. if 조건문

    if(조건){
        조건이 참일 경우 실행되는 코드
    }

*/

// var year = 2023;

// if(year === 2023){
//     console.log('이번 년도');
// }


// var year = 2023;

// if(year === 2023){
//     console.log('이번 년도');
// }else{
//     console.log('이번 년도가 아닙니다.')
// }

// var year = 2023;
// if(year === 2022){
//     console.log('작년');
// }else if(year === 2023){
//     console.log('올해');
// }else if(year === 2024){
//     console.log('내년');
// }else{
//     console.log('가까운 년도가 아닙니다.');
// }

/*
    2. switch 조건문
    엄격동등비교를 수행한다.

*/

// var year = 2023;

// switch(year){
//     case 2022:
//         console.log('작년');
//         break;
//     case 2023:
//         console.log('올해');
//         break;
//     case 2024:
//         console.log('내년');
//         break;
//     default:
//         console.log('가까운 년도가 아닙니다.')

// }


/*
    삼항연산자

    조건 ? 값1 : 값2

    조건이 참이면 값1 리턴
    조건이 거짓이면 값2 리턴

*/

// var year = 2023;
// console.log(year === 2023 ? '올해' : '올해가 아닙니다.');

/*
    나이가 성인이면 "성인입니다"
    성인이 아니면 "성인이 아닙니다"
    를 출력하는 조건문을 만들어 보세요
    1. if조건문
    2. 삼항연산자 조건문
*/

// var age = 20;

// if(age < 19){
//     console.log('성인이 아닙니다.');
// } else{
//     console.log('성인입니다.');
// }

// console.log(age < 19 ? '성인이 아닙니다.' : '성인입니다.');

/*
    반복문

    1. for 반복문
    2. while 반복문

*/


//for 반복문

// for(var i = 0; i < 10; i++){
//     console.log((i+1)+'번 실행되었습니다.');
// }


//1에서 10까지의 합을 구한다
// var sum = 0;

// for(var i = 1; i <= 10; i++){
//     sum += i; //sum = sum + i;
// }

// console.log(sum);

//while 반복문

// let i = 0;

// while(i < 10){
//     console.log (i+'번 실행되었습니다.');
//     i++;
// }


// Q. 반복문

/*
    1/1, 1/2, 1/3, ... 1/10까지의 합 구하기

*/

// var sum = 0;

// for(var i = 1; i <= 10; i++){
//     sum += (1/i);
//     console.log(sum);
// }


/*
    변수와 상수

    1. 변수 : var, let
    2. 상수 : const
    3. 변수/상수의 범위

*/

//1. var

//변수 초기화
// var foo = 'bar';
// console.log(foo);


// var foo = 'bar'; //초기화
// foo = 'baz'; //재정의(재할당)

// console.log(foo); //baz

// var foo; //변수선언
// foo = 'bar'; //정의

// console.log(foo);

// var foo = 'bar';
// var foo = 'baz'; //재선언

// console.log(foo); //baz


//2. let

// let foo = 'bar';
// console.log(foo);

// let foo = 'bar';
// foo = 'baz'; //재정의

// console.log(foo); //baz

// let foo; //선언
// foo = 'bar'; //정의
// console.log(foo); //bar

// let foo = 'bar';
// let foo = 'baz'; //재선언 불가

//3. const (constant) 상수

// const foo = 'bar';
// console.log(foo); //bar


// const foo; //선언과 정의를 따로 할 수 없음.
// foo = 'bar';

/*
    변수/상수의 범위

    1. 전역 범위
    2. 블록 범위
    3. 지역(함수) 범위

*/


/*
    1 전역 범위
    함수 또는 블록 밖에서 선언된 변수가 갖는 범위

*/

//전역(global) 변수
//어디에서든지 접근 가능하다
// var varInGlobal = true;

// {   //블록
//     console.log(varInGlobal);
// }

// function f() {
//     console.log(varInGlobal);
// }
// f();



/*
    2. 지역 범위(함수 범위)
    함수안에서 선언된 변수가 갖는 범위

*/

// function f(){
//     //함수내에서만 접근 가능
//     var varInFunction = true; 
// }

// console.log(varInFunction);//에러


// 3. 블록 범위
// 블록안에서 선언된 변수가 갖는 범위

// {
//     var varInBlock = true;
//     let letInBlock = true;
//     const constInBlock = true;
// }

// console.log('var', varInBlock); //true
// console.log('let', letInBlock); //에러, 블록 범위를 가짐. 블록 밖에서 접근 불가.
// console.log('const', constInBlock); //에러, 블록 범위를 가짐. 블록 밖에서 접근 불가.


/*
    함수

    정의 : 호출될 때만 실행되는 코드

    1. 함수 선언 방법
    2. 게양
    3. 인자
    4. return
    5. 콜백

*/

/*
    1. 함수 선언 방법

    1. 함수선언식
    2. 함수표현식
    3. 화살표 함수

*/

//함수 선언식

// function f(){
//     console.log('foo');
// }

//함수 표현식
//변수에 익명함수를 할당한다
// var f = function(){
//     console.log('foo');
// }

//화살표 함수

// var f = () =>
// {
//     console.log('foo');
// }

/*
    게양(Hoisting)
*/

// f();
// //함수선언식에만 적용된다

// //함수의 정의가 호출 시점보다 올라간다.
// function f(){
//     console.log('foo');
// }


// let f = function(){
//     console.log('foo');
// }

// f();


//parameter (인자)

// function add(x, y){ //x, y는 파라미터
//     console.log(x+y);
// }

// add(1,2);


//return

// function add(x, y){
//     return x+y;
// }

// var r = add(1,2);
// console.log(r);


/*
    콜백
    다른 함수의 인자가 되는 함수

*/

// function f(callback){
//     let r = callback(); //f함수 내부에서 콜백이 실행되었다.
//     console.log(r);
// }
// function cb(){ //콜백
//     return 'foo';
// }

// f(cb);

//콜백 예시

// function getTime(){
//     let time = new Date().toLocaleTimeString(); //현재시간(초단위까지)
//     console.log(time);
// }

// //setInterval(callback, ms)
// //ms마다 callback을 실행하는 함수
// setInterval(getTime, 1000);

//day03

//Q. 인자에 따라서 성인인지 아닌지를 말해주는 함수를 만들어 보세요

// //함수 선언
// function isAdult(age){//age : 매개변수(parameter)
//     if(typeof age !== 'number'){
//         console.log('인자는 숫자만 가능합니다.');
//         return; //return 아래 코드는 실행되지 않는다.
//     }

//     age < 19 ? console.log('성인이 아닙니다.') : console.log('성인입니다.');
// }
// //함수 호출
// isAdult(20); //성인입니다.
// isAdult(11); //성인이 아닙니다.   인자(argument) : 11

// //파라미터와 인자의 차이
// //함수에 실제로 전달하는 값 : 인자(argument)
// //함수에 넣어주도록 정의되어 있는 값 : 매개변수(parameter)

// //매개변수로 집어넣는 값 통제하기

// isAdult('a'); //성인입니다 출력


/*
    배열 (Array)

    한개 이상의 값을 갖는 데이터 타입

    1. 배열에 접근하기
    2. 배열 메서드
    3. 배열과 반복문

*/

//1 배열에 접근하기

// var arr = ['foo', 'bar', 'baz']; //문자열 배열

// //첫번째 아이템의 index는 0이다
// console.log(arr[0]); //foo
// console.log(arr[1]); //bar
// console.log(arr[2]); //baz
// console.log(arr.length); //item의 갯수 : 3

//아이템 업데이트 하기
// arr[2] = 'Baz';
// console.log(arr);

//아이템 추가하기
//arr[3] = 'duck'; //4번째 자리의 item이 없기 때문에 추가됨
//console.log(arr);

// arr[4] = 'duck';
// console.log(arr); //4번째를 건너뛰었으므로 4번째는 undifined가 됨.
// console.log(arr[3]); //undifined

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

/*
    배열 메서드

    Array.push()
    Array.pop()
    Array.concat()
    Array.sort()

*/



//Array.push(newItem1, newItem2, ...)

// var arr = ['foo', 'bar'];

// arr.push('baz'); //맨 끝에 지정한 값을 삽입한다. 콤마를 이용하여 추가적으로 삽입가능

// console.log(arr);

//Array.pop()
// var arr = ['foo','bar','baz'];

// arr.pop(); //맨 끝 값을 제거한다.

// console.log(arr);

//Array1.concat(Array2) //concatenate
//Array1 뒤에 Array2를 붙인다.
// var arr1 = ['foo','bar'];
// var arr2 = ['baz'];

// var result = arr1.concat(arr2); //두 배열을 하나로 합친다.

// console.log(result);

//Array.sort();
//var arr = ['foo', 'bar', 'baz'];

//arr.sort(); //정렬 메서드
//문자열의 기본값은 알파벳순으로 정렬한다.

//console.log(arr);

//splice()
//ex)fruits.splice(2, 0, "Lemon", "Kiwi");
//인덱스 2 자리에 0개만큼의 앞의 자료를 제거하고 레몬과 키위를 삽입한다

//slice()
//ex)fruits.slice(2,4);
//인덱스 2자리부터 4자리까지만 남기고 자른다.

//reverse()
//배열을 거꾸로 다시 쓴다.


/*
    반복문과 배열

    배열에 특정한 작업을 수행할 수 있다.

*/

// var arr = ['foo', 'bar', 'baz'];

// //배열의 아이템에 특정한 작업을 수행할 수 있다.
// for(var i = 0; i< arr.length; i++){
//     console.log(arr[i].toUpperCase());
// }

//필터링 작업

// var arr = ['foo', 'bar', 'baz'];
// //배열 안에 들어간 문자들도 배열로 묶여있는 상태이다.

// for(var i = 0; i < arr.length; i++){
//     if(arr[i][0] === 'b'){
//         //인덱스 i번째 아이템의 0번째(1번째 글자)가 'b'이면 출력
//         console.log(arr[i]);
//     }
// }

//subString(2,13)
//2번째부터 13번째까지의 문자들을 추출

//substr(-4)
//마지막부터 4개의 문자를 추출

//replace("바꿔질문장", "바꿀문장")

//trim() : 문자열 앞 뒤의 공백을 제거
// console.log('             foo         ')
// console.log('             foo         '.trim());


//split() : () 안의 값을 기준으로 문자열을 분리한다.
//결과를 Array로 리턴한다.
//console.log('foo, bar, baz'.split(',')); //[ 'foo', ' bar', ' baz' ]

//Q1.

// var beers = ['기네스', '하이네켄'];
// var americanBeer = '버드와이저';

// beers.push(americanBeer); //방법1. push 이용해서 넣기
// console.log(beers);

// var result = beers.concat(americanBeer); //방법2. concat으로 합치기
// console.log(result);

// beers[2] = americanBeer; //방법3. 그냥 배열에 갖다박기...
// console.log(beers)

//Q2. 성인의 나이만 출력하는 코드 작성하기

// var ages = [12,19,23,30];

// for(var i = 0; i < ages.length; i++){
//     if(ages[i] >= 19){ //조건
//         console.log(ages[i]);
//     }
// }


/*
    객체(Object)
    데이터와 함수의 집합
    
*/

//객체
// var cat = {
//     //객체의 속성(property)
//     name: '치즈',
//     home: null,
//     sound: function(){ //메서드 (method)
//         return '야옹';
//     }
// }

//.은 객체 내부 속성에 접근할때 쓰인다.
// console.log(cat);
// console.log(cat.name); //name속성에 접근
// console.log(cat['name']); //name속성에 접근

// console.log(cat.color); //존재하지 않는 속성에 접근하면 undefined를 반환한다.

// console.log(cat.home);

// console.log(cat.sound()); //메서드 호출

//새로운 속성 추가
// cat.age = 2; //age 속성 추가
// console.log(cat);

//속성 업데이트

// var cat = {
//     //객체의 속성(property)
//     name: '치즈',
//     home: null,
//     sound: function(){ //메서드 (method)
//         return '야옹';
//     }
// }

// cat.home = '삼신동' //cat 내부의 home를 '삼신동'으로 업데이트
// console.log(cat);

//속성 삭제
// delete cat.home; //home 속성 삭제
// console.log(cat);

//Q.네덜란드 맥주의 이름에 접근해보세요.
// var beers = [
//     {name : '기네스', origin : '아일랜드'},
//     {name : '하이네켄', origin : '네덜란드'},
//     {name : '버드와이저', origin : '미국'}
// ]
// console.log(beers[1].name); //배열 안으로 들어오면 접근이 가능하다.


//2023.03.20

/*
    클래스 (class)
    객체를 생성하기 위한 템플릿

    1. 클래스 인스턴스
    2. static 속성과 static 메서드
    3. 미리 정의된 클래스
    4. 리터럴 표기법

*/


//1. 클래스 인스턴스

// class Cat {
//     //생성자 함수 : 인스턴스 속성을 설정하기 위해 사용된다.
//     constructor(name,age){ 
//         this.name = name;
//         this.age = age;
//     }
//     //클래스 멤버 (속성)
//     home = null;

//     //클래스 멤버(메서드)

//     sound(){
//         return '야옹';
//     }
// }
// //Cat 클래스의 인스턴스
// //자바스크립트에서의 객체 생성 방법
// const cat = new Cat('치즈', 2);
// console.log(cat);

// //instanceof = 포함관계를 확인한다.
// console.log(cat instanceof Cat); //true

// //객체 내부 속성 접근
// //상속 (코드재사용)
// console.log(cat.home); //null

// //상속 
// console.log(cat.sound());

/*
    2.static 속성과 static 메서드

    클래스와 인스턴스와 관련된 유틸리티를 제공한다.

*/

// class Cat{
//     //...(생성자, 멤버 등...)

//     //static 속성
//     static family = '고양잇과'

//     //static 메서드
//     static isAdult(age){
//         if(age < 1){
//             return '아기고양이';
//         }else {
//             return '성체고양이';
//         }
//     }
// }

// //static 속성과 메서드는 클래스 자체가 호출한다.
// //static 속성이 붙은것은 하나만 만들수 있기 때문
// console.log(Cat.family); //고양잇과

// console.log(Cat.isAdult(3)); //성체고양이


//Math클래스는 전부 정적 클래스.
// var pi = Math.PI;
// console.log(pi);


/*
    3. 미리 정의된 클래스

    문자처리 : String
    숫자 및 날짜 : Number, Math, Date
    인덱스가 있는 콜렉션 : Array
    에러 : SyntaxError, ReferenceError 기타 에러 등
    기타 : Promise, JSON

*/


/*
    4. 리터럴 표기법

*/

// //String 클래스의 인스턴스
// var foo = new String('bar'); //클래스를 이용해서 생성
// var foo = 'bar'; // 리터럴 표기법 (값만 적는다)

// console.log(foo.toUpperCase());
// //둘 중 어느것을 사용해도 String클래스의 인스턴스이다.
// //javaScript는 모든값이 객체다.

// //Number의 인스턴스
// var year = new Number(2023); //클래스
// var year = 2023; //리터럴 표기


// //Object의 인스턴스
// var o = new Object({prop1:'foo', prop2:'bar'}); //클래스
// var o = {prop1:'foo', prop2:'bar'}; //리터럴 표기


/*
    Q. 다음을 클래스로 정의해보세요

    클래스 이름 :Beer

    인스턴스의 속성 : name, origin(원산지)

    클래스 속성 멤버
    history : B.C 3000;

    클래스 메서드 멤버
    recipe(제조법) : 보리, 홉, 효모, 물 등

    static 속성
    caution(경고): 지나친 음주는 돈이 많이 듭니다.
*/

// class Beer{
//     //인스턴스의 속성 생성
//     constructor(name,origin){
//         this.name = name;
//         this.origin = origin;
//     }
//     //클래스 속성 멤버
//     history = 'B.C 3000';
//     //클래스 메서드 멤버
//     recipy(){
//         return '보리, 홉, 효모, 물 등';
//     }
//     //static 멤버
//     static caution = '지나친 음주는 돈이 많이 듭니다.';
// }

// //Beer의 인스턴스
// var irishBeer = new Beer('기네스', '아일랜드');
// var dutchBeer = new Beer('하이네켄', '네덜란드');

// console.log(irishBeer);
// console.log(dutchBeer);

// //메서드
// console.log(irishBeer.recipy());

// //static 속성
// console.log(Beer.caution);

/*
    에러와 에러처리

    1. 에러개념
    2. 에러처리
    3. 에러종류
    4. 커스텀 에러
*/


/*
    1. 에러개념
    에러는 프로그램의 실행을 중단시킨다
    에러는 처리가 되어야 한다.

*/
// console.log(foo);
//ReferenceError: foo is not defined //foo가 정의되지 않음.

//ReferenceError : name
//foo is not defiend : message
//at Object.... : stack //(에러에 대한 자세한 정보, 위치)

// > app crashed(실행 중단)

/*
    2. 에러 처리

    try/catch

*/

// try{
//     // 코드...
//     console.log(foo);

// }catch(error){
//     console.error(error);
// }

/*
    3. 에러의 종류
    
    ReferenceError(참조 에러)
    SyntaxError(문법 에러)
    TypeError(타입 에러)
    RangeError(범위 에러)
    URIError(URI 에러)

*/

// //1. ReferenceError
// //존재하지 않는 변수를 참조할 때 발생한다.
// console.log(x); //ReferenceError

//2. SyntaxError
//문법이 잘못되었을때 발생한다.
//컴파일 에러를 발생시킨다
//에러 처리를 할 수 없다 (코드 자체의 실행이 실패하기 때문)

// console.log(2023)); //SyntaxError : Unexpected token ')'

//TypeError
//변수 또는 매개변수가 유효한 타입이 아닐때 발생한다.

// //setInterval(callback, ms)
// setInterval(null, 1000); 
// //TypeError 
// //The "callback" argument must be of type function. Received null

//RangeError
//값이 지정한 범위를 벗어났을 때 발생한다.

// var pi = Math.PI;

// console.log(pi);

// //Precision : 소숫점 이하로 몇 자리를 표시할 것인지 정할 수 있다.(최대 100)
// console.log(pi.toPrecision(200));
// //RangeError 
// //toPrecision() argument must be between 1 and 100


//URIError
// //encodeURI 또는 decodeURI 함수가 유효하지 않은 인자를 전달받았을 때 발생한다.
// console.log(decodeURI('%'));
// //URIError
// //URI malformed


/*
    4. 커스텀 에러

*/

// try{
//     var age = 15;
//     console.log('학생:', '아저씨 담배하나 주세요');


//     //throw로, 결과값이 true면 에러 항목으로 이행하는 함수
//     //에러를 발생시켰다.
//     if(age < 18){
//         //throw 커스텀 에러
//         throw '미성년자는 담배를 살 수 없습니다.';
//     }

//     //throw 아래 코드는 실행되지 않는다.
//     console.log('CU직원 : ', '여기있습니다');
// }catch(error){
//     console.error('실패:',error);

// }finally{
//     //에러 발생 여부와 상관없이 항상 실행된다.
//     //있어도 되고, 없어도 된다.
//     console.log('끝');
// }

//2023.03.22

/*
    비동기 작업(Asynchronous operations)

    블록킹을 방지하기 위해 사용된다.
    예) 서버에 데이터 요청 등

    1. 동기 작업
    2. 비동기 작업

*/


/*
    1. 동기 작업(Synchronous operation)
    호출된 순서대로 코드가 실행된다

*/
// function f(){
//     console.log('작업1')

// }

// f();
// console.log('작업2');
// //작업1
// //작업2

/*
    2. 비동기 작업(Asynchronous operations)

    빠른 것부터 처리된다
*/


// //서버에 데이터를 요청하고 받는데 1초가 걸린다고 가정
// function fetchData(callback){ //비동기 함수
//     var data ={ foo: 'bar'};

//     //setTimeout(callback, ms): ms 뒤에 callback을 실행한다.
//     setTimeout(function() {
//         callback(null, data);
//     }, 1000);
    
// }

// fetchData(function(error, data) {
//     if(error){
//         return console.error(error);
//     }

//     console.log('서버에서 받은 데이터 : ', data);
// });
// //'다음 작업'이 빠르게 처리되기 때문에 먼저 처리된다.
// console.log('다음 작업');
// //대부분의 작업은 동기 작업이다.


/*
    프로미스

    비동기 작업의 성공 실패여부와 그 결과를 나타내는 객체
    비동기 작업의 가독성을 향상시키기 위해 사용된다.
    
    1. 프로미스 객체의 구조
    2. 실제 예시
    3. async/await

*/


/*
    1. 프로미스 객체의 구조

    - 프로미스 인스턴스 생성
    생성자 함수에 두개의 매개변수를 가진 콜백을 전달한다

    첫번째 매개변수(resolve): 비동기 작업이 성공했을 경우 호출한다.
    두번째 매개변수(rejected): 비동기 작업이 실패했을 경우 호출한다.

    - 프로미스의 상태
    fullfilled : 작업의 성공
    rejected : 작업의 실패
    pending : 작업이 끝나기를 기다리는 상태

    - 프로미스 인스턴스의 메서드
    Promise.then(): 성공했을 경우 데이터를 다루는 메서드
    Promise.catch() : 실패했을 경우 데이터를 다루는 메서드
    Promise.finally() : 성공/실패 여부와 상관없이 실행되는 코드를 다루는 메서드


*/

// const promise = new Promise(function(res, rej){
//     res({foo : 'bar'});
// })

// console.log(promise); //fullfilled

// const promise = new Promise(function(res,rej){
//     rej({error : '..'}); //rejected
// })

// console.log(promise);

// const promise = new Promise(function(res,rej){

// })

// console.log(promise); //Promise{<pending>}

// const promise = new Promise(function (res, rej){
//     res({foo : 'bar'});
// })

// //Promise가 성공했을 경우 then으로 보내질 수 있다.
// promise
//     .then(function(value){
//         console.log(value);
//     })
//     //실패할 경우, catch로 보내진다.
//     .catch(function(error){
//         console.error(error);
//     })



/*
    2. 실제 사용 예시
    서버에 데이터 요청
*/


// //서버에 데이터를 요청하는 함수
// // 결과를 프로미스 객체로 리턴한다
// function fetchData(){
//     const promise = new Promise(function(res,rej){
//         res({foo : 'bar'});
//     });
//     return promise;
// }

// fetchData()
//     .then((data)=>{
//         console.log('서버에서 받은 데이터', data);
//     })
//     .catch((error)=>{
//         console.error(error);
//     })


//     console.log('다음 작업');


/*
    3. async / await
    프로미스가 결과값을 반환할 때까지 기다린다.
    프로미스의 가독성을 향상시키기 위한 문법
    try / catch 에서 에러를 처리한다.

*/

// function fetchData(){
//     const promise = new Promise((res, rej) =>{
//         res({foo:'bar'});
//     })

//     return promise;
// }

// f();
// console.log('다음 작업');

// async function f(){
//     //작업이 커져도 크게 가독성을 저하시키지 않는다.
//     //콜백에서 데이터 처리, 에러처리를 둘 다 했었다.
//     //이 문법은 try / catch로 구분을 할 수 있기 때문에
//     //콜백을 많이 쓸 필요가 없다.

//     //미래의 어떤 시점에 결과를 제공하겠다는 약속('프로미스')
//     //를 반환.

//     //프로미스 체인 : 프로미스의 결과값이 프로미스인 경우

//     try{
//         //...

//         const data = await fetchData();

//         console.log('서버에서 받은 데이터 : ', data);

        
//     }catch(error){

//         console.error(error);
//     }
// }


/*
    ES6 문법(2015)

    새로운 문법이 많이 나온 버전

    let, const
    화살표 함수
    구조분해할당 v
    스프레드 연산자 v
    클래스
    프로미스
    심볼
    Array.map()

    프로토타입 기반 언어 javaScript

*/


/*
    구조분해할당 - 배열
    
    간단한 문법을 사용하여 배열의 아이템을 변수에 할당할 수 있다.
*/

// var beers = ['기네스', '하이네켄', '버드와이저'];
// var irishBeer = beers[0];
// var dutchBeer = beers[1];
// var americanBeer = beers[2];

// console.log(irishBeer); //기네스
// console.log(dutchBeer); //하이네켄
// console.log(americanBeer); //버드와이저


// var beers = ['기네스', '하이네켄', '버드와이저'];

// //구조분해할당
// var [irishBeer, dutchBeer, americanBeer] = beers;
// //기존에 만들어진 배열에, 새로운 속성을 집어 넣었다.
// console.log(irishBeer);
// console.log(dutchBeer);
// console.log(americanBeer);


/*
    구조분해할당 - 객체

    간단한 문법으로 객체의 속성을 변수에 할당할 수 있다.
*/

// var irishBeer ={name : '기네스', origin : '아일랜드', available : false};

// var name = irishBeer.name;
// var origin = irishBeer.origin;
// var available = irishBeer.available;

// //console.log(name, origin, available);

// console.log('맥주이름 : ', name);
// console.log('원산지 : ', origin);
// console.log('판매중 : ', available ? '예' : '아니오');

// var irishBeer = {name : '기네스', origin : '아일랜드' ,available: false};
// //구조분해할당
// var {name, origin, available} = irishBeer;
// console.log(name, origin, available);

/*
    구조분해할당 - 매개변수
*/

// var irishBeer = {name : '기네스', origin: '아일랜드', available : false};

// function f(beer){

//     console.log(beer); //irishBeer

//     var name = beer.name;
//     var origin = beer.origin;
//     var available = beer.available;

//     console.log(name, origin, available);

// }

// f(irishBeer);


// //구조분해할당
// var irishBeer = {name : '기네스', origin: '아일랜드', available : false};
// function f({name, origin, available}){
//     console.log(name,origin,available);
// }
// f(irishBeer);


/*
    스프레드 연산자 - 배열
    
    배열의 아이템을 간단하게 복사할 수 있다
    ...복사할 배열
*/

// var beers = ['기네스', '하이네켄'];
// var newBeer = '버드와이저';

// //배열을 복사해서 그대로 넣었다. 그리고 새 배열을 만들어서
// //복사한 배열과 새로운 변수를 붙였다.
// var updatedBeers = [...beers, newBeer];

// console.log(updatedBeers); //기네스, 하이네켄, 버드와이저

// var europeanBeers = ['기네스', '하이네켄'];
// var asianBeers = ['아사히', '클라우드'];

// //배열 두 개를 복사해서 하나로 붙였다.
// var worldBeers = [...europeanBeers, ...asianBeers];

// console.log(worldBeers);

/*
    스프레드 연산자 - 객체

    객체의 속성을 간단하게 복사할 수 있다.
    ...복사할 객체

*/

// var irishBeer = {
//     name : '기네스',
//     origin : '아일랜드',
//     available : false
// }

// // //기네스가 재입고 되었다.
// // irishBeer.available = true;

// // console.log(irishBeer);


// // //기네스가 재입고 되었다.
// // //객체를 복사해서 붙여넣기 하였다.
// var updatedIrishBeer = {...irishBeer, available: true};
// console.log(updatedIrishBeer);

/*
    ES6 문제
*/

// //1. 구조분해할당

// var asianBeers= ['클라우드', '아사히'];
// //구조분해할당 문법을 사용해서 각각의 맥주를 변수에 할당해 보세요.

// var [koreanBeer, japaneseBeer] = asianBeers;
// //프로그래밍에서의 = 은 우변을 좌변에 대입하는 것이다. 
// //아마도 그 원리를 사용한 문법일 것이다...
// console.log(koreanBeer);
// console.log(japaneseBeer);

// //2. 스프레드 연산자
// var cat = {
//     name : '치즈',
//     age : 1,
//     home : null,
//     sound : function(){
//         return '야옹'
//     }

// }

// //스프레드 연산자를 사용해 치즈의 home을 '삼산동'으로 업데이트 해보세요
// //결과는 updateCat변수에 할당
// var updateCat = {...cat, home: '삼산동'};
// //cat객체를 ...cat을 이용해서 복사해서 불러온 후, 객체의 값을 수정하였다.
// //입양됨
// console.log(updateCat);

//2023.03.27

/*
    객체와 JSON 

    JSON(JavaScript Object Notation)
    자바스크립트 객체를 저장 또는 이동하기 위하여 사용되는 텍스트 포맷

    1. 객체와 JSON
    2. JSON.stringify()
    3. JSON.parse()

*/

// //1 객체와 JSON

// var o = {foo : 'bar'};

// //밖을 '로 감싸주고, 내부 함수 및 객체를 큰 따음표(")로 감싸준다.

// var json = '{"foo" : "bar"}' //o 객체를 JSON으로 표현

// console.log(typeof o); //object
// console.log(typeof json); //string



// //2 JSON.stringify()
// // 객체를 JSON 포맷으로 변환한다.

// var o = {foo:'bar'};
// var json = JSON.stringify(o);

// console.log(json); //JSON 포맷
// console.log(typeof json); //string
// //자바스크립트 객체를 저장할때. 저장 직전 또는 전송 직전

// // JSON.parse()
// // JSON 포맷을 객체로 변환한다.

// var json = '{"foo" : "bar"}';

// var o = JSON.parse(json);

// console.log(o); //{foo : 'bar'}; //객체
// console.log(typeof o); //object









