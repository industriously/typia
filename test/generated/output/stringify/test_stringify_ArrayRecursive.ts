import typia from "../../../../src";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayRecursive = _test_stringify(
    "ArrayRecursive",
    ArrayRecursive.generate,
    (input) =>
        ((input: ArrayRecursive.ICategory): string => {
            const $number = (typia.stringify as any).number;
            const $string = (typia.stringify as any).string;
            const $io0 = (input: any): boolean =>
                Array.isArray(input.children) &&
                input.children.every(
                    (elem: any) =>
                        "object" === typeof elem && null !== elem && $io0(elem),
                ) &&
                "number" === typeof input.id &&
                "string" === typeof input.code &&
                "number" === typeof input.sequence &&
                "object" === typeof input.created_at &&
                null !== input.created_at &&
                $io1(input.created_at);
            const $io1 = (input: any): boolean =>
                "number" === typeof input.time &&
                "number" === typeof input.zone;
            const $so0 = (input: any): any =>
                `{"children":${`[${input.children
                    .map((elem: any) => $so0(elem))
                    .join(",")}]`},"id":${$number(input.id)},"code":${$string(
                    input.code,
                )},"sequence":${$number(
                    input.sequence,
                )},"created_at":${`{"time":${$number(
                    input.created_at.time,
                )},"zone":${$number(input.created_at.zone)}}`}}`;
            return $so0(input);
        })(input),
);
