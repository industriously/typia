import typia from "../../../../src";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_DynamicUndefined = _test_isParse(
    "DynamicUndefined",
    DynamicUndefined.generate,
    (input) =>
        ((input: any): typia.Primitive<DynamicUndefined> => {
            const is = (input: any): input is DynamicUndefined => {
                const $join = (typia.isParse as any).join;
                const $io0 = (input: any): boolean =>
                    Object.keys(input).every((key) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return null !== value && undefined === value;
                        return true;
                    });
                return (
                    "object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input) &&
                    $io0(input)
                );
            };
            input = JSON.parse(input);
            return is(input) ? (input as any) : null;
        })(input),
    DynamicUndefined.SPOILERS,
);
