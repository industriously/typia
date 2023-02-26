import typia from "../../../../src";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectPropertyNullable = _test_validate(
    "ObjectPropertyNullable",
    ObjectPropertyNullable.generate,
    (input: any): typia.IValidation<ObjectPropertyNullable> => {
        const errors = [] as any[];
        const $report = (typia.createValidate as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ObjectPropertyNullable => {
            const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    null === input.value ||
                        "boolean" === typeof input.value ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "(boolean | null)",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    null === input.value ||
                        ("number" === typeof input.value &&
                            Number.isFinite(input.value)) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "(null | number)",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    null === input.value ||
                        "string" === typeof input.value ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected: "(null | string)",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    null === input.value ||
                        ((("object" === typeof input.value &&
                            null !== input.value) ||
                            $report(_exceptionable, {
                                path: _path + ".value",
                                expected:
                                    "(Resolve<ObjectPropertyNullable.IMember> | null)",
                                value: input.value,
                            })) &&
                            $vo4(
                                input.value,
                                _path + ".value",
                                true && _exceptionable,
                            )) ||
                        $report(_exceptionable, {
                            path: _path + ".value",
                            expected:
                                "(Resolve<ObjectPropertyNullable.IMember> | null)",
                            value: input.value,
                        }),
                ].every((flag: boolean) => flag);
            const $vo4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                [
                    "string" === typeof input.id ||
                        $report(_exceptionable, {
                            path: _path + ".id",
                            expected: "string",
                            value: input.id,
                        }),
                    null === input.name ||
                        "string" === typeof input.name ||
                        $report(_exceptionable, {
                            path: _path + ".name",
                            expected: "(null | string)",
                            value: input.name,
                        }),
                    undefined === input.grade ||
                        ("number" === typeof input.grade &&
                            Number.isFinite(input.grade)) ||
                        $report(_exceptionable, {
                            path: _path + ".grade",
                            expected: "(number | undefined)",
                            value: input.grade,
                        }),
                    null === input.serial ||
                        undefined === input.serial ||
                        ("number" === typeof input.serial &&
                            Number.isFinite(input.serial)) ||
                        $report(_exceptionable, {
                            path: _path + ".serial",
                            expected: "(null | number | undefined)",
                            value: input.serial,
                        }),
                    null === input.activated ||
                        "boolean" === typeof input.activated ||
                        $report(_exceptionable, {
                            path: _path + ".activated",
                            expected: "(boolean | null)",
                            value: input.activated,
                        }),
                ].every((flag: boolean) => flag);
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
                        value: input,
                    })) &&
                    (input.length === 4 ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
                            value: input,
                        })) &&
                    [
                        ((Array.isArray(input[0]) ||
                            $report(true, {
                                path: _path + "[0]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>",
                                value: input[0],
                            })) &&
                            input[0]
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path +
                                                    "[0][" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectPropertyNullable.IPointer<boolean>>",
                                                value: elem,
                                            })) &&
                                            $vo0(
                                                elem,
                                                _path + "[0][" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path:
                                                _path + "[0][" + _index1 + "]",
                                            expected:
                                                "Resolve<ObjectPropertyNullable.IPointer<boolean>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "[0]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>",
                                value: input[0],
                            }),
                        ((Array.isArray(input[1]) ||
                            $report(true, {
                                path: _path + "[1]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<number>>>",
                                value: input[1],
                            })) &&
                            input[1]
                                .map(
                                    (elem: any, _index2: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path +
                                                    "[1][" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectPropertyNullable.IPointer<number>>",
                                                value: elem,
                                            })) &&
                                            $vo1(
                                                elem,
                                                _path + "[1][" + _index2 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path:
                                                _path + "[1][" + _index2 + "]",
                                            expected:
                                                "Resolve<ObjectPropertyNullable.IPointer<number>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "[1]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<number>>>",
                                value: input[1],
                            }),
                        ((Array.isArray(input[2]) ||
                            $report(true, {
                                path: _path + "[2]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<string>>>",
                                value: input[2],
                            })) &&
                            input[2]
                                .map(
                                    (elem: any, _index3: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path +
                                                    "[2][" +
                                                    _index3 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectPropertyNullable.IPointer<string>>",
                                                value: elem,
                                            })) &&
                                            $vo2(
                                                elem,
                                                _path + "[2][" + _index3 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path:
                                                _path + "[2][" + _index3 + "]",
                                            expected:
                                                "Resolve<ObjectPropertyNullable.IPointer<string>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "[2]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<string>>>",
                                value: input[2],
                            }),
                        ((Array.isArray(input[3]) ||
                            $report(true, {
                                path: _path + "[3]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>",
                                value: input[3],
                            })) &&
                            input[3]
                                .map(
                                    (elem: any, _index4: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path +
                                                    "[3][" +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                                value: elem,
                                            })) &&
                                            $vo3(
                                                elem,
                                                _path + "[3][" + _index4 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path:
                                                _path + "[3][" + _index4 + "]",
                                            expected:
                                                "Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                            $report(true, {
                                path: _path + "[3]",
                                expected:
                                    "Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>",
                                value: input[3],
                            }),
                    ].every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "[Array<Resolve<ObjectPropertyNullable.IPointer<boolean>>>, Array<Resolve<ObjectPropertyNullable.IPointer<number>>>, Array<Resolve<ObjectPropertyNullable.IPointer<string>>>, Array<Resolve<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>>]",
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
    },
    ObjectPropertyNullable.SPOILERS,
);
