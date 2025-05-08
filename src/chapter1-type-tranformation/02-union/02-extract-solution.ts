import {Equal, Expect} from "../../helper";


// T를 이루는 각 유니언 멤버에 대해 개별적으로 평가됩니다. TypeScript는 유니언 타입에 조건부 타입을 적용할 때 디스트리뷰션(distributive) 하게 동작(분해되어 평가)

/**
 * Extract from T those types that are assignable to U
 */
type Extract<T, U> = T extends U ? T : never;


export type Event =
    | {
    type: "click";
    event: MouseEvent;
}
    | {
    type: "focus";
    event: FocusEvent;
}
    | {
    type: "keydown";
    event: KeyboardEvent;
};

type ClickEvent = Extract<Event, {type: "click" }>;

type tests = [Expect<Equal<ClickEvent, { type: "click"; event: MouseEvent }>>];
