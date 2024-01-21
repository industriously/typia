import typia from "typia";

import { _test_reflect_metadata } from "../../../internal/_test_reflect_metadata";
import { MapSimpleProtobuf } from "../../../structures/MapSimpleProtobuf";

export const test_reflect_metadata_MapSimpleProtobuf = _test_reflect_metadata(
  "MapSimpleProtobuf",
)({
  metadatas: [
    {
      any: false,
      required: true,
      optional: false,
      nullable: false,
      functional: false,
      atomics: [],
      constants: [],
      templates: [],
      escaped: null,
      rest: null,
      arrays: [],
      tuples: [],
      objects: ["MapSimpleProtobuf"],
      aliases: [],
      natives: [],
      sets: [],
      maps: [],
    },
  ],
  components: {
    objects: [
      {
        name: "MapSimpleProtobuf",
        properties: [
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["boolean"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "boolean",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["int32"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "number",
                        tags: [
                          [
                            {
                              target: "number",
                              name: 'Type<"int32">',
                              kind: "type",
                              value: "int32",
                              validate:
                                "Math.floor($input) === $input && -2147483648 <= $input && $input <= 2147483647",
                              exclusive: true,
                            },
                          ],
                        ],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["bigint"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "bigint",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["double"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "number",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["string"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [
                          [
                            {
                              target: "string",
                              name: "MinLength<1>",
                              kind: "minLength",
                              value: 1,
                              validate: "1 <= $input.length",
                              exclusive: true,
                            },
                          ],
                        ],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["bytes"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: ["Uint8Array"],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
          {
            key: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [
                {
                  type: "string",
                  values: ["objects"],
                },
              ],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [],
            },
            value: {
              any: false,
              required: true,
              optional: false,
              nullable: false,
              functional: false,
              atomics: [],
              constants: [],
              templates: [],
              escaped: null,
              rest: null,
              arrays: [],
              tuples: [],
              objects: [],
              aliases: [],
              natives: [],
              sets: [],
              maps: [
                {
                  key: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [
                      {
                        type: "string",
                        tags: [],
                      },
                    ],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: [],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                  value: {
                    any: false,
                    required: true,
                    optional: false,
                    nullable: false,
                    functional: false,
                    atomics: [],
                    constants: [],
                    templates: [],
                    escaped: null,
                    rest: null,
                    arrays: [],
                    tuples: [],
                    objects: ["MapSimpleProtobuf"],
                    aliases: [],
                    natives: [],
                    sets: [],
                    maps: [],
                  },
                },
              ],
            },
            description: null,
            jsDocTags: [],
          },
        ],
        jsDocTags: [],
        index: 0,
        recursive: true,
        nullables: [false],
      },
    ],
    aliases: [],
    arrays: [],
    tuples: [],
  },
});
