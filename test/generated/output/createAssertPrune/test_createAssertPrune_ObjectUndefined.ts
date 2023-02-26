import typia from "../../../../src";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_ObjectUndefined = _test_assertPrune(
    "ObjectUndefined",
    ObjectUndefined.generate,
    (input: any): ObjectUndefined => {
        const assert = (input: any): ObjectUndefined => {
            const $guard = (typia.createAssertPrune as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ObjectUndefined => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        })) &&
                    (undefined === input.professor ||
                        "string" === typeof input.professor ||
                        ("number" === typeof input.professor &&
                            Number.isFinite(input.professor)) ||
                        $guard(_exceptionable, {
                            path: _path + ".professor",
                            expected: "(number | string | undefined)",
                            value: input.professor,
                        })) &&
                    (undefined === input.classroom ||
                        ((("object" === typeof input.classroom &&
                            null !== input.classroom) ||
                            $guard(_exceptionable, {
                                path: _path + ".classroom",
                                expected:
                                    "(Resolve<ObjectUndefined.IClassroom> | undefined)",
                                value: input.classroom,
                            })) &&
                            $ao1(
                                input.classroom,
                                _path + ".classroom",
                                true && _exceptionable,
                            ))) &&
                    (undefined === input.grade ||
                        ("number" === typeof input.grade &&
                            Number.isFinite(input.grade)) ||
                        $guard(_exceptionable, {
                            path: _path + ".grade",
                            expected: "(number | undefined)",
                            value: input.grade,
                        })) &&
                    (null !== input.nothing ||
                        $guard(_exceptionable, {
                            path: _path + ".nothing",
                            expected: "undefined",
                            value: input.nothing,
                        })) &&
                    (undefined === input.nothing ||
                        $guard(_exceptionable, {
                            path: _path + ".nothing",
                            expected: "undefined",
                            value: input.nothing,
                        })) &&
                    true &&
                    (null !== input.never ||
                        $guard(_exceptionable, {
                            path: _path + ".never",
                            expected: "undefined",
                            value: input.never,
                        })) &&
                    (undefined === input.never ||
                        $guard(_exceptionable, {
                            path: _path + ".never",
                            expected: "undefined",
                            value: input.never,
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.id ||
                        $guard(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        })) &&
                    ("string" === typeof input.name ||
                        $guard(_exceptionable, {
                            path: _path + ".name",
                            expected: "string",
                            value: input.name,
                        }));
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<Resolve<ObjectUndefined.ILecture>>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "Resolve<ObjectUndefined.ILecture>",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        };
        const prune = (input: ObjectUndefined): void => {
            const $io1 = (input: any): boolean =>
                "string" === typeof input.id && "string" === typeof input.name;
            const $po0 = (input: any): any => {
                if (
                    "object" === typeof input.classroom &&
                    null !== input.classroom
                )
                    $po1(input.classroom);
                for (const key of Object.keys(input)) {
                    if (
                        "name" === key ||
                        "professor" === key ||
                        "classroom" === key ||
                        "grade" === key ||
                        "nothing" === key ||
                        "unknown" === key ||
                        "never" === key
                    )
                        continue;
                    delete input[key];
                }
            };
            const $po1 = (input: any): any => {
                for (const key of Object.keys(input)) {
                    if ("id" === key || "name" === key) continue;
                    delete input[key];
                }
            };
            if (Array.isArray(input))
                input.forEach((elem: any) => {
                    if ("object" === typeof elem && null !== elem) $po0(elem);
                });
        };
        assert(input);
        prune(input);
        return input;
    },
    ObjectUndefined.SPOILERS,
);
