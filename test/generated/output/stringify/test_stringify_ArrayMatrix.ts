import typia from "../../../../src";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ArrayMatrix = _test_stringify(
    "ArrayMatrix",
    ArrayMatrix.generate,
    (input) =>
        ((input: ArrayMatrix): string => {
            const $number = (typia.stringify as any).number;
            return `[${input
                .map(
                    (elem: any) =>
                        `[${elem
                            .map(
                                (elem: any) =>
                                    `[${elem
                                        .map((elem: any) => $number(elem))
                                        .join(",")}]`,
                            )
                            .join(",")}]`,
                )
                .join(",")}]`;
        })(input),
);
