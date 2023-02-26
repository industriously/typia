import typia from "../../../../src";
import { TagMatrix } from "../../../structures/TagMatrix";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_assertPrune_TagMatrix = _test_assertPrune(
    "TagMatrix",
    TagMatrix.generate,
    (input) =>
        ((input: any): TagMatrix => {
            const assert = (input: any): TagMatrix => {
                const $guard = (typia.assertPrune as any).guard;
                const $is_uuid = (typia.assertPrune as any).is_uuid;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is TagMatrix => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ((Array.isArray(input.matrix) &&
                            3 === input.matrix.length) ||
                            $guard(_exceptionable, {
                                path: _path + ".matrix",
                                expected: "Array<Array<string>>",
                                value: input.matrix,
                            })) &&
                        input.matrix.every(
                            (elem: any, _index1: number) =>
                                ((Array.isArray(elem) && 3 === elem.length) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".matrix[" + _index1 + "]",
                                        expected: "Array<string>",
                                        value: elem,
                                    })) &&
                                elem.every(
                                    (elem: any, _index2: number) =>
                                        ("string" === typeof elem &&
                                            true === $is_uuid(elem)) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".matrix[" +
                                                _index1 +
                                                "][" +
                                                _index2 +
                                                "]",
                                            expected: "string",
                                            value: elem,
                                        }),
                                ),
                        );
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "Resolve<TagMatrix>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const prune = (input: TagMatrix): void => {
                const $is_uuid = (typia.assertPrune as any).is_uuid;
                const $po0 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if ("matrix" === key) continue;
                        delete input[key];
                    }
                };
                if ("object" === typeof input && null !== input) $po0(input);
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    TagMatrix.SPOILERS,
);
