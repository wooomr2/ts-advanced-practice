import {Equal, Expect} from "../../helper";

// T: 원본 객체 타입
// K: T의 키 중 일부만 선택한 유니언 타입

/**
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};


// K: 키 값의 유니언 (ex: "a" | "b" 또는 1 | 2)
// T: 모든 키에 적용될 값의 타입
// 결과: K에 있는 키들로 구성되고, 모든 값은 T인 객체 타입 생성

/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

type TemplateLiteralKey = `${"user" | "post" | "comment"}${"Id" | "Name"}`;

type ObjectOfKeys = Record<TemplateLiteralKey, string>;

type tests = [
    Expect<
        Equal<
            ObjectOfKeys,
            {
                userId: string;
                userName: string;
                postId: string;
                postName: string;
                commentId: string;
                commentName: string;
            }
        >
    >,
];

