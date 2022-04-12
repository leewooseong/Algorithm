const input = parseInt(prompt("입력"));

console.log(parseInt(input.toString(2)));

// ※ Javascript의 진수 변환
//  - toString 함수를 이용한다.
//  - 변환 방법
//      - parseInt(NumberObject.toString(변환할 진수));
//      - toString 메소드를 쓰는 주체는 "숫자 객체"여야한다.
//      - toString의 결과물은 String 타입이기 때문에 Number로 이용하기 위해선 변환이 필요하다.
// https://ithub.tistory.com/290

// ※ parseInt
//  - 문자열 인자를 파싱하여 특정 진수의 정수를 반환하는 함수
//  - 입력으로 들어온 문자열로 바꿔주는 함수, 문자열의 형식과 radix(진수)의 형식이 같아야한다.
//  - 문법
//  - parseInt(string, radix)
//      - string : 파싱할 값, 문자열이 아닐경우 toString을 이용해 문자열로 변환한다.
//      - radix : string의 닌수를 나타내는 정수
//  - 예시
//      - 2진수 형식의 문자를 숫자로 변환: parseInt("1101",2); === 1101(2진수 숫자)
//      - 8진수 형식의 문자를 숫자로 변환: parseInt("17, 8"); === 17(8진수 숫자)
//  - 주의사항
//      - radix의 표현 범위를 넘어가는 숫자 또는 인식하지 못하는 숫자가 string 입력으로 들어올 경우 parseInt는 반환값으로 NaN을 반환한다.
