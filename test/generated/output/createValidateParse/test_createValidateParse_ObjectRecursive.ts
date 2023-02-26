import typia from "../../../../src";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_ObjectRecursive = _test_validateParse(
    "ObjectRecursive",
    ObjectRecursive.generate,
    (
        input: string,
    ): typia.IValidation<typia.Primitive<ObjectRecursive.IDepartment>> => {
        const validate = (
            input: any,
        ): typia.IValidation<ObjectRecursive.IDepartment> => {
            const errors = [] as any[];
            const $report = (typia.createValidateParse as any).report(errors);
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectRecursive.IDepartment => {
                const $vo0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        null === input.parent ||
                            ((("object" === typeof input.parent &&
                                null !== input.parent) ||
                                $report(_exceptionable, {
                                    path: _path + ".parent",
                                    expected:
                                        "(Resolve<ObjectRecursive.IDepartment> | null)",
                                    value: input.parent,
                                })) &&
                                $vo0(
                                    input.parent,
                                    _path + ".parent",
                                    true && _exceptionable,
                                )) ||
                            $report(_exceptionable, {
                                path: _path + ".parent",
                                expected:
                                    "(Resolve<ObjectRecursive.IDepartment> | null)",
                                value: input.parent,
                            }),
                        ("number" === typeof input.id &&
                            Number.isFinite(input.id)) ||
                            $report(_exceptionable, {
                                path: _path + ".id",
                                expected: "number",
                                value: input.id,
                            }),
                        "string" === typeof input.code ||
                            $report(_exceptionable, {
                                path: _path + ".code",
                                expected: "string",
                                value: input.code,
                            }),
                        "string" === typeof input.name ||
                            $report(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            }),
                        ("number" === typeof input.sequence &&
                            Number.isFinite(input.sequence)) ||
                            $report(_exceptionable, {
                                path: _path + ".sequence",
                                expected: "number",
                                value: input.sequence,
                            }),
                        ((("object" === typeof input.created_at &&
                            null !== input.created_at) ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "Resolve<ObjectRecursive.ITimestamp>",
                                value: input.created_at,
                            })) &&
                            $vo1(
                                input.created_at,
                                _path + ".created_at",
                                true && _exceptionable,
                            )) ||
                            $report(_exceptionable, {
                                path: _path + ".created_at",
                                expected: "Resolve<ObjectRecursive.ITimestamp>",
                                value: input.created_at,
                            }),
                    ].every((flag: boolean) => flag);
                const $vo1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    [
                        ("number" === typeof input.time &&
                            Number.isFinite(input.time)) ||
                            $report(_exceptionable, {
                                path: _path + ".time",
                                expected: "number",
                                value: input.time,
                            }),
                        ("number" === typeof input.zone &&
                            Number.isFinite(input.zone)) ||
                            $report(_exceptionable, {
                                path: _path + ".zone",
                                expected: "number",
                                value: input.zone,
                            }),
                    ].every((flag: boolean) => flag);
                return (
                    ((("object" === typeof input && null !== input) ||
                        $report(true, {
                            path: _path + "",
                            expected: "Resolve<ObjectRecursive.IDepartment>",
                            value: input,
                        })) &&
                        $vo0(input, _path + "", true)) ||
                    $report(true, {
                        path: _path + "",
                        expected: "Resolve<ObjectRecursive.IDepartment>",
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
        input = JSON.parse(input);
        const output = validate(input);
        return output;
    },
    ObjectRecursive.SPOILERS,
);
