// 크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다.
// 그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다.
// 온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다.
// 하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다.

// 은비를 위해 프로그램을 작성해 주세요.

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

// 공백 4개 별 1개
// 공백 3개 별 3개
// 공백 2개 별 5개
// 공백 1개 별 7개
// 공백 0개 별 9개

function MakeStar(num) {
  // 바보같이 왜 배열로 시작했을까.. 문자열에 관한 함수는 문자열로!
  // 배열 ver.
  // let columns = [];

  // // 새로 길이 만큼 반복
  // for (let height = 1; height <= num; height++) {
  //   // 가로 출력에 해당하는 부분
  //   // 공백 찍기
  //   for (let blankIndex = 0; blankIndex < num - height; blankIndex++) {
  //     columns[columns.length] = " ";
  //   }
  //   // 별 찍기
  //   for (let j = 1; j < height * 2; j++) {
  //     columns[columns.length] = "*";
  //   }
  //   console.log(columns.join(""));
  //   columns = [];
  // }

  // 문자열 ver.
  let stars = "";

  // 새로 길이 만큼 반복
  for (let height = 1; height <= num; height++) {
    // 가로 출력에 해당하는 부분
    // 공백 찍기
    for (let blankIndex = 0; blankIndex < num - height; blankIndex++) {
      stars += " ";
    }
    // 별 찍기
    for (let starsIndex = 1; starsIndex < height * 2; starsIndex++) {
      stars += "*";
    }

    // 개행하는 방법... console.log() 쓰지말고 이걸로 쓰자
    stars += "\n";
  }
  console.log(stars);
}

const input = prompt("숫자를 입력하세요");
MakeStar(5);

// 추가로 공부할 것
// -join()
