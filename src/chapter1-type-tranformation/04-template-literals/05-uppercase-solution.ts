import {Equal, Expect } from "../../helper";

/*
    🔍 intrinsic이란?
    intrinsic은 TypeScript 타입 시스템 내부에 하드코딩된 특별한 구현을 의미합니다.
    사용자 정의 타입이나 일반적인 타입 조합으로는 만들 수 없습니다.
    TypeScript 컴파일러가 특별히 인식해서 처리합니다.
 */


type Event = `log_in` | "log_out" | "sign_up";

type ObjectOfKeys = Record<Uppercase<Event>, string>;

type tests = [
    Expect<
        Equal<
            ObjectOfKeys,
            {
                LOG_IN: string;
                LOG_OUT: string;
                SIGN_UP: string;
            }
        >
    >,
];
