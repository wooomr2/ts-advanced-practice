import {Equal, Expect} from "../../helper";

/**
 * Obtain the parameters of a function type in a tuple
 */
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

function func(
    foo: string,
    obj: {
        bar: number;
        bas: boolean;
    }
) {

}

type FuncParameters = Parameters<typeof func>;

type tests = [
    Expect<
        Equal<
            FuncParameters,
            // tuple type 😅
            [
                string,
                {
                    bar: number;
                    bas: boolean;
                },
            ]
        >
    >,
];
