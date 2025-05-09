import { Equal, Expect } from "../../helper";

/** as const의 세 가지 효과
1. 리터럴 타입으로 고정
- "red" → string ❌ → "red" ✅

2. readonly 속성 부여
- 객체와 배열의 프로퍼티가 readonly가 됩니다.

3. 타입 추론 정확도 증가
*/

export const Color = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

type Red = (typeof Color)["Red"];
type Green = (typeof Color)["Green"];
type Blue = (typeof Color)["Blue"];

type tests = [
  Expect<Equal<Red, "red">>,
  Expect<Equal<Green, "green">>,
  Expect<Equal<Blue, "blue">>
];

// example 1
const BUTTON_TYPE = {
  Primary: "primary",
  Secondary: "secondary",
  Danger: "danger",
} as const;

type ButtonTy = typeof BUTTON_TYPE;
// {
//     readonly Primary: "primary";
//     readonly Secondary: "secondary";
//     readonly Danger: "danger";
// }

type ButtonTy2 = keyof typeof BUTTON_TYPE;
// → "Primary" | "Secondary" | "Danger"


type ButtonType = (typeof BUTTON_TYPE)[keyof typeof BUTTON_TYPE];
// → "primary" | "secondary" | "danger"
