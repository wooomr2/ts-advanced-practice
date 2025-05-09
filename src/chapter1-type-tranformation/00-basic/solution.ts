import { Equal, Expect } from "../../helper";

// typeof는 "이 변수의 타입을 그대로 가져와서 타입으로 쓰자"
// keyof는 객체 타입에서 **모든 키(key)**를 유니언 타입으로 뽑아냅니다.

const obj = {
  hello: "world",
  hello2: "world2",
  hello3: "world3",
};

type TestingFramework = keyof typeof obj;

type tests = [Expect<Equal<TestingFramework, "hello" | "hello2" | "hello3">>];
