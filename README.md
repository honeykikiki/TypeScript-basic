# TypeScript-basic

# 타입스크립트 시작

> 타입스크립트란 ?

    타입스크립트는 MS에서 개발하고 관리하는 오픈소스 프로그래밍 언어로 어떤 브라우저나 호스트, 운영체제에서도 동작한다. 타입스크립트는 자바스크립트의 상위 집합으로서 ECMA의 최신 표준을 충분히 지원한다. 타입이라는 특징을 가지고 ES7이하의 표준을 포함하고 있다. 타입스크립트는 ES5를 포함하는 집합이기 때문에 기존의 ES5 자바스크립트 문법을 그대로 사용할 수 있다. 또한, ES6의 새로운 기능들을 사용하기 위해 Babel과 같은 별도 트랜스파일러를 사용하지 않아도 ES6의 새로운 기능을 기존의 자바스크립트 엔진에서 사용할 수 있다.

    장점 : 타입스크립트의 장점은 정적 타입 언어(static type language)이기 때문에 컴파일 시 시간이 조금 걸리더라도 안정성을 보장한다는 점이다.

## 타입스크립트 컴파일

> npm npx 차이 : https://seizemymoment.tistory.com/106

> 타입스크립트 컴파일

    1. npm i typescript
    2. npm tsc [filename]

    npx 이용
    1. npx tsc [filename]

> 자동 컴파일

    1. npm i typescript
    2. npm tsc [filename] -w

    npx 이용
    1. npx tsc [filename] -w

## d.ts 파일

> d.ts파일이란 타입스크립트 선언 파일 d.ts 는 타입스크립트 코드의 타입 추론을 돕는 파일입니다.

## tsconfig.json 설정

### 공식문서 참고하기

<a>https://www.typescriptlang.org/ko/docs/handbook/compiler-options.html</a>

> {
> "compilerOptions": {

    "target": "es5", // 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext' 가능
    "module": "commonjs", //무슨 import 문법 쓸건지 'commonjs', 'amd','es2015',  'esnext'
    "allowJs": true, // js 파일들 ts에서 import해서 쓸 수 있는지
    "checkJs": true, // 일반 js 파일에서도 에러체크 여부
    "jsx": "preserve", // tsx 파일을 jsx로 어떻게 컴파일할 것인지 'preserve',     'react-native', 'react'
    "declaration": true, //컴파일시 .d.ts 파일도 자동으로 함께생성 (현재쓰는 모든 타입이 정의된     파일)
    "outFile": "./", //모든 ts파일을 js파일 하나로 컴파일해줌 (module이 none, amd, system일     때만 가능)
    "outDir": "./", //js파일 아웃풋 경로바꾸기
    "rootDir": "./", //루트경로 바꾸기 (js 파일 아웃풋 경로에 영향줌)
    "removeComments": true, //컴파일시 주석제거

    "strict": true, //strict 관련, noimplicit 어쩌구 관련 모드 전부 켜기
    "noImplicitAny": true, //any타입 금지 여부
    "strictNullChecks": true, //null, undefined 타입에 이상한 짓 할시 에러내기
    "strictFunctionTypes": true, //함수파라미터 타입체크 강하게
    "strictPropertyInitialization": true, //class constructor 작성시 타입체크 강하게
    "noImplicitThis": true, //this 키워드가 any 타입일 경우 에러내기
    "alwaysStrict": true, //자바스크립트 "use strict" 모드 켜기

    "noUnusedLocals": true, //쓰지않는 지역변수 있으면 에러내기
    "noUnusedParameters": true, //쓰지않는 파라미터 있으면 에러내기
    "noImplicitReturns": true, //함수에서 return 빼먹으면 에러내기
    "noFallthroughCasesInSwitch": true, //switch문 이상하면 에러내기

}
}
