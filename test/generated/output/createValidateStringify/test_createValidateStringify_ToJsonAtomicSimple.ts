import typia from "../../../../src";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ToJsonAtomicSimple =
    _test_validateStringify(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        (input: ToJsonAtomicSimple): typia.IValidation<string> => {
            const validate = (
                input: any,
            ): typia.IValidation<ToJsonAtomicSimple> => {
                const errors = [] as any[];
                const $report = (typia.createValidateStringify as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ToJsonAtomicSimple => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            true ||
                                $report(_exceptionable, {
                                    path: _path + ".toJSON",
                                    expected: "unknown",
                                    value: input.toJSON,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            true ||
                                $report(_exceptionable, {
                                    path: _path + ".toJSON",
                                    expected: "unknown",
                                    value: input.toJSON,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            true ||
                                $report(_exceptionable, {
                                    path: _path + ".toJSON",
                                    expected: "unknown",
                                    value: input.toJSON,
                                }),
                        ].every((flag: boolean) => flag);
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "[Resolve<ToJsonAtomicSimple.IToJson<boolean>>, Resolve<ToJsonAtomicSimple.IToJson<number>>, Resolve<ToJsonAtomicSimple.IToJson<string>>]",
                                value: input,
                            })) &&
                            (input.length === 3 ||
                                $report(true, {
                                    path: _path + "",
                                    expected:
                                        "[Resolve<ToJsonAtomicSimple.IToJson<boolean>>, Resolve<ToJsonAtomicSimple.IToJson<number>>, Resolve<ToJsonAtomicSimple.IToJson<string>>]",
                                    value: input,
                                })) &&
                            [
                                ((("object" === typeof input[0] &&
                                    null !== input[0]) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "Resolve<ToJsonAtomicSimple.IToJson<boolean>>",
                                        value: input[0],
                                    })) &&
                                    $vo0(input[0], _path + "[0]", true)) ||
                                    $report(true, {
                                        path: _path + "[0]",
                                        expected:
                                            "Resolve<ToJsonAtomicSimple.IToJson<boolean>>",
                                        value: input[0],
                                    }),
                                ((("object" === typeof input[1] &&
                                    null !== input[1]) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "Resolve<ToJsonAtomicSimple.IToJson<number>>",
                                        value: input[1],
                                    })) &&
                                    $vo1(input[1], _path + "[1]", true)) ||
                                    $report(true, {
                                        path: _path + "[1]",
                                        expected:
                                            "Resolve<ToJsonAtomicSimple.IToJson<number>>",
                                        value: input[1],
                                    }),
                                ((("object" === typeof input[2] &&
                                    null !== input[2]) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "Resolve<ToJsonAtomicSimple.IToJson<string>>",
                                        value: input[2],
                                    })) &&
                                    $vo2(input[2], _path + "[2]", true)) ||
                                    $report(true, {
                                        path: _path + "[2]",
                                        expected:
                                            "Resolve<ToJsonAtomicSimple.IToJson<string>>",
                                        value: input[2],
                                    }),
                            ].every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Resolve<ToJsonAtomicSimple.IToJson<boolean>>, Resolve<ToJsonAtomicSimple.IToJson<number>>, Resolve<ToJsonAtomicSimple.IToJson<string>>]",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const stringify = (input: ToJsonAtomicSimple): string => {
                const $number = (typia.createValidateStringify as any).number;
                const $string = (typia.createValidateStringify as any).string;
                return `[${input[0].toJSON()},${$number(
                    input[1].toJSON(),
                )},${$string(input[2].toJSON())}]`;
            };
            const output = validate(input) as any;
            if (output.success) output.data = stringify(input);
            return output;
        },
    );
