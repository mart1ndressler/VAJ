/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model MMA_Organization
 *
 */
export type MMA_Organization =
  $Result.DefaultSelection<Prisma.$MMA_OrganizationPayload>;
/**
 * Model Fighter
 *
 */
export type Fighter = $Result.DefaultSelection<Prisma.$FighterPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more MMA_Organizations
 * const mMA_Organizations = await prisma.mMA_Organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more MMA_Organizations
   * const mMA_Organizations = await prisma.mMA_Organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb<ClientOptions>,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb<ClientOptions>,
      {
        extArgs: ExtArgs;
      }
    >
  >;

  /**
   * `prisma.mMA_Organization`: Exposes CRUD operations for the **MMA_Organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MMA_Organizations
   * const mMA_Organizations = await prisma.mMA_Organization.findMany()
   * ```
   */
  get mMA_Organization(): Prisma.MMA_OrganizationDelegate<
    ExtArgs,
    ClientOptions
  >;

  /**
   * `prisma.fighter`: Exposes CRUD operations for the **Fighter** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Fighters
   * const fighters = await prisma.fighter.findMany()
   * ```
   */
  get fighter(): Prisma.FighterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends BigInt
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? P : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    MMA_Organization: "MMA_Organization";
    Fighter: "Fighter";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb<ClientOptions = {}>
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > = {
    globalOmitOptions: {
      omit: GlobalOmitOptions;
    };
    meta: {
      modelProps: "mMA_Organization" | "fighter";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      MMA_Organization: {
        payload: Prisma.$MMA_OrganizationPayload<ExtArgs>;
        fields: Prisma.MMA_OrganizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MMA_OrganizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MMA_OrganizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>;
          };
          findFirst: {
            args: Prisma.MMA_OrganizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MMA_OrganizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>;
          };
          findMany: {
            args: Prisma.MMA_OrganizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>[];
          };
          create: {
            args: Prisma.MMA_OrganizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>;
          };
          createMany: {
            args: Prisma.MMA_OrganizationCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.MMA_OrganizationCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>[];
          };
          delete: {
            args: Prisma.MMA_OrganizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>;
          };
          update: {
            args: Prisma.MMA_OrganizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>;
          };
          deleteMany: {
            args: Prisma.MMA_OrganizationDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MMA_OrganizationUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.MMA_OrganizationUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>[];
          };
          upsert: {
            args: Prisma.MMA_OrganizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MMA_OrganizationPayload>;
          };
          aggregate: {
            args: Prisma.MMA_OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMMA_Organization>;
          };
          groupBy: {
            args: Prisma.MMA_OrganizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MMA_OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.MMA_OrganizationCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MMA_OrganizationCountAggregateOutputType>
              | number;
          };
        };
      };
      Fighter: {
        payload: Prisma.$FighterPayload<ExtArgs>;
        fields: Prisma.FighterFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.FighterFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.FighterFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>;
          };
          findFirst: {
            args: Prisma.FighterFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.FighterFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>;
          };
          findMany: {
            args: Prisma.FighterFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>[];
          };
          create: {
            args: Prisma.FighterCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>;
          };
          createMany: {
            args: Prisma.FighterCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          createManyAndReturn: {
            args: Prisma.FighterCreateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>[];
          };
          delete: {
            args: Prisma.FighterDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>;
          };
          update: {
            args: Prisma.FighterUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>;
          };
          deleteMany: {
            args: Prisma.FighterDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.FighterUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateManyAndReturn: {
            args: Prisma.FighterUpdateManyAndReturnArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>[];
          };
          upsert: {
            args: Prisma.FighterUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$FighterPayload>;
          };
          aggregate: {
            args: Prisma.FighterAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateFighter>;
          };
          groupBy: {
            args: Prisma.FighterGroupByArgs<ExtArgs>;
            result: $Utils.Optional<FighterGroupByOutputType>[];
          };
          count: {
            args: Prisma.FighterCountArgs<ExtArgs>;
            result: $Utils.Optional<FighterCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    mMA_Organization?: MMA_OrganizationOmit;
    fighter?: FighterOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type MMA_OrganizationCountOutputType
   */

  export type MMA_OrganizationCountOutputType = {
    fighters: number;
  };

  export type MMA_OrganizationCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    fighters?: boolean | MMA_OrganizationCountOutputTypeCountFightersArgs;
  };

  // Custom InputTypes
  /**
   * MMA_OrganizationCountOutputType without action
   */
  export type MMA_OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_OrganizationCountOutputType
     */
    select?: MMA_OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MMA_OrganizationCountOutputType without action
   */
  export type MMA_OrganizationCountOutputTypeCountFightersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FighterWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model MMA_Organization
   */

  export type AggregateMMA_Organization = {
    _count: MMA_OrganizationCountAggregateOutputType | null;
    _avg: MMA_OrganizationAvgAggregateOutputType | null;
    _sum: MMA_OrganizationSumAggregateOutputType | null;
    _min: MMA_OrganizationMinAggregateOutputType | null;
    _max: MMA_OrganizationMaxAggregateOutputType | null;
  };

  export type MMA_OrganizationAvgAggregateOutputType = {
    id: number | null;
  };

  export type MMA_OrganizationSumAggregateOutputType = {
    id: number | null;
  };

  export type MMA_OrganizationMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    country: string | null;
  };

  export type MMA_OrganizationMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    country: string | null;
  };

  export type MMA_OrganizationCountAggregateOutputType = {
    id: number;
    name: number;
    country: number;
    _all: number;
  };

  export type MMA_OrganizationAvgAggregateInputType = {
    id?: true;
  };

  export type MMA_OrganizationSumAggregateInputType = {
    id?: true;
  };

  export type MMA_OrganizationMinAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
  };

  export type MMA_OrganizationMaxAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
  };

  export type MMA_OrganizationCountAggregateInputType = {
    id?: true;
    name?: true;
    country?: true;
    _all?: true;
  };

  export type MMA_OrganizationAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MMA_Organization to aggregate.
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MMA_Organizations to fetch.
     */
    orderBy?:
      | MMA_OrganizationOrderByWithRelationInput
      | MMA_OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MMA_OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MMA_Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MMA_Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MMA_Organizations
     **/
    _count?: true | MMA_OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: MMA_OrganizationAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: MMA_OrganizationSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MMA_OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MMA_OrganizationMaxAggregateInputType;
  };

  export type GetMMA_OrganizationAggregateType<
    T extends MMA_OrganizationAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMMA_Organization]: P extends
      | "_count"
      | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMMA_Organization[P]>
      : GetScalarType<T[P], AggregateMMA_Organization[P]>;
  };

  export type MMA_OrganizationGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MMA_OrganizationWhereInput;
    orderBy?:
      | MMA_OrganizationOrderByWithAggregationInput
      | MMA_OrganizationOrderByWithAggregationInput[];
    by: MMA_OrganizationScalarFieldEnum[] | MMA_OrganizationScalarFieldEnum;
    having?: MMA_OrganizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MMA_OrganizationCountAggregateInputType | true;
    _avg?: MMA_OrganizationAvgAggregateInputType;
    _sum?: MMA_OrganizationSumAggregateInputType;
    _min?: MMA_OrganizationMinAggregateInputType;
    _max?: MMA_OrganizationMaxAggregateInputType;
  };

  export type MMA_OrganizationGroupByOutputType = {
    id: number;
    name: string;
    country: string;
    _count: MMA_OrganizationCountAggregateOutputType | null;
    _avg: MMA_OrganizationAvgAggregateOutputType | null;
    _sum: MMA_OrganizationSumAggregateOutputType | null;
    _min: MMA_OrganizationMinAggregateOutputType | null;
    _max: MMA_OrganizationMaxAggregateOutputType | null;
  };

  type GetMMA_OrganizationGroupByPayload<
    T extends MMA_OrganizationGroupByArgs,
  > = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MMA_OrganizationGroupByOutputType, T["by"]> & {
        [P in keyof T &
          keyof MMA_OrganizationGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], MMA_OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], MMA_OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type MMA_OrganizationSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      country?: boolean;
      fighters?: boolean | MMA_Organization$fightersArgs<ExtArgs>;
      _count?: boolean | MMA_OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["mMA_Organization"]
  >;

  export type MMA_OrganizationSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      country?: boolean;
    },
    ExtArgs["result"]["mMA_Organization"]
  >;

  export type MMA_OrganizationSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      country?: boolean;
    },
    ExtArgs["result"]["mMA_Organization"]
  >;

  export type MMA_OrganizationSelectScalar = {
    id?: boolean;
    name?: boolean;
    country?: boolean;
  };

  export type MMA_OrganizationOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "country",
    ExtArgs["result"]["mMA_Organization"]
  >;
  export type MMA_OrganizationInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    fighters?: boolean | MMA_Organization$fightersArgs<ExtArgs>;
    _count?: boolean | MMA_OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };
  export type MMA_OrganizationIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};
  export type MMA_OrganizationIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {};

  export type $MMA_OrganizationPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "MMA_Organization";
    objects: {
      fighters: Prisma.$FighterPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        country: string;
      },
      ExtArgs["result"]["mMA_Organization"]
    >;
    composites: {};
  };

  type MMA_OrganizationGetPayload<
    S extends boolean | null | undefined | MMA_OrganizationDefaultArgs,
  > = $Result.GetResult<Prisma.$MMA_OrganizationPayload, S>;

  type MMA_OrganizationCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MMA_OrganizationFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: MMA_OrganizationCountAggregateInputType | true;
  };

  export interface MMA_OrganizationDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["MMA_Organization"];
      meta: { name: "MMA_Organization" };
    };
    /**
     * Find zero or one MMA_Organization that matches the filter.
     * @param {MMA_OrganizationFindUniqueArgs} args - Arguments to find a MMA_Organization
     * @example
     * // Get one MMA_Organization
     * const mMA_Organization = await prisma.mMA_Organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MMA_OrganizationFindUniqueArgs>(
      args: SelectSubset<T, MMA_OrganizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one MMA_Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MMA_OrganizationFindUniqueOrThrowArgs} args - Arguments to find a MMA_Organization
     * @example
     * // Get one MMA_Organization
     * const mMA_Organization = await prisma.mMA_Organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MMA_OrganizationFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MMA_OrganizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MMA_Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationFindFirstArgs} args - Arguments to find a MMA_Organization
     * @example
     * // Get one MMA_Organization
     * const mMA_Organization = await prisma.mMA_Organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MMA_OrganizationFindFirstArgs>(
      args?: SelectSubset<T, MMA_OrganizationFindFirstArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first MMA_Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationFindFirstOrThrowArgs} args - Arguments to find a MMA_Organization
     * @example
     * // Get one MMA_Organization
     * const mMA_Organization = await prisma.mMA_Organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MMA_OrganizationFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MMA_OrganizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more MMA_Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MMA_Organizations
     * const mMA_Organizations = await prisma.mMA_Organization.findMany()
     *
     * // Get first 10 MMA_Organizations
     * const mMA_Organizations = await prisma.mMA_Organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const mMA_OrganizationWithIdOnly = await prisma.mMA_Organization.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MMA_OrganizationFindManyArgs>(
      args?: SelectSubset<T, MMA_OrganizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a MMA_Organization.
     * @param {MMA_OrganizationCreateArgs} args - Arguments to create a MMA_Organization.
     * @example
     * // Create one MMA_Organization
     * const MMA_Organization = await prisma.mMA_Organization.create({
     *   data: {
     *     // ... data to create a MMA_Organization
     *   }
     * })
     *
     */
    create<T extends MMA_OrganizationCreateArgs>(
      args: SelectSubset<T, MMA_OrganizationCreateArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many MMA_Organizations.
     * @param {MMA_OrganizationCreateManyArgs} args - Arguments to create many MMA_Organizations.
     * @example
     * // Create many MMA_Organizations
     * const mMA_Organization = await prisma.mMA_Organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MMA_OrganizationCreateManyArgs>(
      args?: SelectSubset<T, MMA_OrganizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many MMA_Organizations and returns the data saved in the database.
     * @param {MMA_OrganizationCreateManyAndReturnArgs} args - Arguments to create many MMA_Organizations.
     * @example
     * // Create many MMA_Organizations
     * const mMA_Organization = await prisma.mMA_Organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many MMA_Organizations and only return the `id`
     * const mMA_OrganizationWithIdOnly = await prisma.mMA_Organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends MMA_OrganizationCreateManyAndReturnArgs>(
      args?: SelectSubset<T, MMA_OrganizationCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a MMA_Organization.
     * @param {MMA_OrganizationDeleteArgs} args - Arguments to delete one MMA_Organization.
     * @example
     * // Delete one MMA_Organization
     * const MMA_Organization = await prisma.mMA_Organization.delete({
     *   where: {
     *     // ... filter to delete one MMA_Organization
     *   }
     * })
     *
     */
    delete<T extends MMA_OrganizationDeleteArgs>(
      args: SelectSubset<T, MMA_OrganizationDeleteArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one MMA_Organization.
     * @param {MMA_OrganizationUpdateArgs} args - Arguments to update one MMA_Organization.
     * @example
     * // Update one MMA_Organization
     * const mMA_Organization = await prisma.mMA_Organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MMA_OrganizationUpdateArgs>(
      args: SelectSubset<T, MMA_OrganizationUpdateArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more MMA_Organizations.
     * @param {MMA_OrganizationDeleteManyArgs} args - Arguments to filter MMA_Organizations to delete.
     * @example
     * // Delete a few MMA_Organizations
     * const { count } = await prisma.mMA_Organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MMA_OrganizationDeleteManyArgs>(
      args?: SelectSubset<T, MMA_OrganizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MMA_Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MMA_Organizations
     * const mMA_Organization = await prisma.mMA_Organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MMA_OrganizationUpdateManyArgs>(
      args: SelectSubset<T, MMA_OrganizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MMA_Organizations and returns the data updated in the database.
     * @param {MMA_OrganizationUpdateManyAndReturnArgs} args - Arguments to update many MMA_Organizations.
     * @example
     * // Update many MMA_Organizations
     * const mMA_Organization = await prisma.mMA_Organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more MMA_Organizations and only return the `id`
     * const mMA_OrganizationWithIdOnly = await prisma.mMA_Organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends MMA_OrganizationUpdateManyAndReturnArgs>(
      args: SelectSubset<T, MMA_OrganizationUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one MMA_Organization.
     * @param {MMA_OrganizationUpsertArgs} args - Arguments to update or create a MMA_Organization.
     * @example
     * // Update or create a MMA_Organization
     * const mMA_Organization = await prisma.mMA_Organization.upsert({
     *   create: {
     *     // ... data to create a MMA_Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MMA_Organization we want to update
     *   }
     * })
     */
    upsert<T extends MMA_OrganizationUpsertArgs>(
      args: SelectSubset<T, MMA_OrganizationUpsertArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      $Result.GetResult<
        Prisma.$MMA_OrganizationPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of MMA_Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationCountArgs} args - Arguments to filter MMA_Organizations to count.
     * @example
     * // Count the number of MMA_Organizations
     * const count = await prisma.mMA_Organization.count({
     *   where: {
     *     // ... the filter for the MMA_Organizations we want to count
     *   }
     * })
     **/
    count<T extends MMA_OrganizationCountArgs>(
      args?: Subset<T, MMA_OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], MMA_OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MMA_Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MMA_OrganizationAggregateArgs>(
      args: Subset<T, MMA_OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetMMA_OrganizationAggregateType<T>>;

    /**
     * Group by MMA_Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MMA_OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MMA_OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MMA_OrganizationGroupByArgs["orderBy"] }
        : { orderBy?: MMA_OrganizationGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MMA_OrganizationGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMMA_OrganizationGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MMA_Organization model
     */
    readonly fields: MMA_OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MMA_Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MMA_OrganizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    fighters<T extends MMA_Organization$fightersArgs<ExtArgs> = {}>(
      args?: Subset<T, MMA_Organization$fightersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$FighterPayload<ExtArgs>,
          T,
          "findMany",
          GlobalOmitOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MMA_Organization model
   */
  interface MMA_OrganizationFieldRefs {
    readonly id: FieldRef<"MMA_Organization", "Int">;
    readonly name: FieldRef<"MMA_Organization", "String">;
    readonly country: FieldRef<"MMA_Organization", "String">;
  }

  // Custom InputTypes
  /**
   * MMA_Organization findUnique
   */
  export type MMA_OrganizationFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which MMA_Organization to fetch.
     */
    where: MMA_OrganizationWhereUniqueInput;
  };

  /**
   * MMA_Organization findUniqueOrThrow
   */
  export type MMA_OrganizationFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which MMA_Organization to fetch.
     */
    where: MMA_OrganizationWhereUniqueInput;
  };

  /**
   * MMA_Organization findFirst
   */
  export type MMA_OrganizationFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which MMA_Organization to fetch.
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MMA_Organizations to fetch.
     */
    orderBy?:
      | MMA_OrganizationOrderByWithRelationInput
      | MMA_OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MMA_Organizations.
     */
    cursor?: MMA_OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MMA_Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MMA_Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MMA_Organizations.
     */
    distinct?:
      | MMA_OrganizationScalarFieldEnum
      | MMA_OrganizationScalarFieldEnum[];
  };

  /**
   * MMA_Organization findFirstOrThrow
   */
  export type MMA_OrganizationFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which MMA_Organization to fetch.
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MMA_Organizations to fetch.
     */
    orderBy?:
      | MMA_OrganizationOrderByWithRelationInput
      | MMA_OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MMA_Organizations.
     */
    cursor?: MMA_OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MMA_Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MMA_Organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MMA_Organizations.
     */
    distinct?:
      | MMA_OrganizationScalarFieldEnum
      | MMA_OrganizationScalarFieldEnum[];
  };

  /**
   * MMA_Organization findMany
   */
  export type MMA_OrganizationFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * Filter, which MMA_Organizations to fetch.
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MMA_Organizations to fetch.
     */
    orderBy?:
      | MMA_OrganizationOrderByWithRelationInput
      | MMA_OrganizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MMA_Organizations.
     */
    cursor?: MMA_OrganizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MMA_Organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MMA_Organizations.
     */
    skip?: number;
    distinct?:
      | MMA_OrganizationScalarFieldEnum
      | MMA_OrganizationScalarFieldEnum[];
  };

  /**
   * MMA_Organization create
   */
  export type MMA_OrganizationCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a MMA_Organization.
     */
    data: XOR<
      MMA_OrganizationCreateInput,
      MMA_OrganizationUncheckedCreateInput
    >;
  };

  /**
   * MMA_Organization createMany
   */
  export type MMA_OrganizationCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MMA_Organizations.
     */
    data: MMA_OrganizationCreateManyInput | MMA_OrganizationCreateManyInput[];
  };

  /**
   * MMA_Organization createManyAndReturn
   */
  export type MMA_OrganizationCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to create many MMA_Organizations.
     */
    data: MMA_OrganizationCreateManyInput | MMA_OrganizationCreateManyInput[];
  };

  /**
   * MMA_Organization update
   */
  export type MMA_OrganizationUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a MMA_Organization.
     */
    data: XOR<
      MMA_OrganizationUpdateInput,
      MMA_OrganizationUncheckedUpdateInput
    >;
    /**
     * Choose, which MMA_Organization to update.
     */
    where: MMA_OrganizationWhereUniqueInput;
  };

  /**
   * MMA_Organization updateMany
   */
  export type MMA_OrganizationUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MMA_Organizations.
     */
    data: XOR<
      MMA_OrganizationUpdateManyMutationInput,
      MMA_OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which MMA_Organizations to update
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * Limit how many MMA_Organizations to update.
     */
    limit?: number;
  };

  /**
   * MMA_Organization updateManyAndReturn
   */
  export type MMA_OrganizationUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * The data used to update MMA_Organizations.
     */
    data: XOR<
      MMA_OrganizationUpdateManyMutationInput,
      MMA_OrganizationUncheckedUpdateManyInput
    >;
    /**
     * Filter which MMA_Organizations to update
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * Limit how many MMA_Organizations to update.
     */
    limit?: number;
  };

  /**
   * MMA_Organization upsert
   */
  export type MMA_OrganizationUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the MMA_Organization to update in case it exists.
     */
    where: MMA_OrganizationWhereUniqueInput;
    /**
     * In case the MMA_Organization found by the `where` argument doesn't exist, create a new MMA_Organization with this data.
     */
    create: XOR<
      MMA_OrganizationCreateInput,
      MMA_OrganizationUncheckedCreateInput
    >;
    /**
     * In case the MMA_Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<
      MMA_OrganizationUpdateInput,
      MMA_OrganizationUncheckedUpdateInput
    >;
  };

  /**
   * MMA_Organization delete
   */
  export type MMA_OrganizationDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
    /**
     * Filter which MMA_Organization to delete.
     */
    where: MMA_OrganizationWhereUniqueInput;
  };

  /**
   * MMA_Organization deleteMany
   */
  export type MMA_OrganizationDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MMA_Organizations to delete
     */
    where?: MMA_OrganizationWhereInput;
    /**
     * Limit how many MMA_Organizations to delete.
     */
    limit?: number;
  };

  /**
   * MMA_Organization.fighters
   */
  export type MMA_Organization$fightersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    where?: FighterWhereInput;
    orderBy?:
      | FighterOrderByWithRelationInput
      | FighterOrderByWithRelationInput[];
    cursor?: FighterWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[];
  };

  /**
   * MMA_Organization without action
   */
  export type MMA_OrganizationDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MMA_Organization
     */
    select?: MMA_OrganizationSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MMA_Organization
     */
    omit?: MMA_OrganizationOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MMA_OrganizationInclude<ExtArgs> | null;
  };

  /**
   * Model Fighter
   */

  export type AggregateFighter = {
    _count: FighterCountAggregateOutputType | null;
    _avg: FighterAvgAggregateOutputType | null;
    _sum: FighterSumAggregateOutputType | null;
    _min: FighterMinAggregateOutputType | null;
    _max: FighterMaxAggregateOutputType | null;
  };

  export type FighterAvgAggregateOutputType = {
    id: number | null;
    fights: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    organizationId: number | null;
  };

  export type FighterSumAggregateOutputType = {
    id: number | null;
    fights: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    organizationId: number | null;
  };

  export type FighterMinAggregateOutputType = {
    id: number | null;
    fname: string | null;
    lname: string | null;
    weightClass: string | null;
    country: string | null;
    fights: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    organizationId: number | null;
  };

  export type FighterMaxAggregateOutputType = {
    id: number | null;
    fname: string | null;
    lname: string | null;
    weightClass: string | null;
    country: string | null;
    fights: number | null;
    wins: number | null;
    losses: number | null;
    draws: number | null;
    organizationId: number | null;
  };

  export type FighterCountAggregateOutputType = {
    id: number;
    fname: number;
    lname: number;
    weightClass: number;
    country: number;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
    organizationId: number;
    _all: number;
  };

  export type FighterAvgAggregateInputType = {
    id?: true;
    fights?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    organizationId?: true;
  };

  export type FighterSumAggregateInputType = {
    id?: true;
    fights?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    organizationId?: true;
  };

  export type FighterMinAggregateInputType = {
    id?: true;
    fname?: true;
    lname?: true;
    weightClass?: true;
    country?: true;
    fights?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    organizationId?: true;
  };

  export type FighterMaxAggregateInputType = {
    id?: true;
    fname?: true;
    lname?: true;
    weightClass?: true;
    country?: true;
    fights?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    organizationId?: true;
  };

  export type FighterCountAggregateInputType = {
    id?: true;
    fname?: true;
    lname?: true;
    weightClass?: true;
    country?: true;
    fights?: true;
    wins?: true;
    losses?: true;
    draws?: true;
    organizationId?: true;
    _all?: true;
  };

  export type FighterAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Fighter to aggregate.
     */
    where?: FighterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fighters to fetch.
     */
    orderBy?:
      | FighterOrderByWithRelationInput
      | FighterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: FighterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Fighters
     **/
    _count?: true | FighterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: FighterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: FighterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: FighterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: FighterMaxAggregateInputType;
  };

  export type GetFighterAggregateType<T extends FighterAggregateArgs> = {
    [P in keyof T & keyof AggregateFighter]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFighter[P]>
      : GetScalarType<T[P], AggregateFighter[P]>;
  };

  export type FighterGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: FighterWhereInput;
    orderBy?:
      | FighterOrderByWithAggregationInput
      | FighterOrderByWithAggregationInput[];
    by: FighterScalarFieldEnum[] | FighterScalarFieldEnum;
    having?: FighterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FighterCountAggregateInputType | true;
    _avg?: FighterAvgAggregateInputType;
    _sum?: FighterSumAggregateInputType;
    _min?: FighterMinAggregateInputType;
    _max?: FighterMaxAggregateInputType;
  };

  export type FighterGroupByOutputType = {
    id: number;
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
    organizationId: number;
    _count: FighterCountAggregateOutputType | null;
    _avg: FighterAvgAggregateOutputType | null;
    _sum: FighterSumAggregateOutputType | null;
    _min: FighterMinAggregateOutputType | null;
    _max: FighterMaxAggregateOutputType | null;
  };

  type GetFighterGroupByPayload<T extends FighterGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<FighterGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof FighterGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FighterGroupByOutputType[P]>
            : GetScalarType<T[P], FighterGroupByOutputType[P]>;
        }
      >
    >;

  export type FighterSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fname?: boolean;
      lname?: boolean;
      weightClass?: boolean;
      country?: boolean;
      fights?: boolean;
      wins?: boolean;
      losses?: boolean;
      draws?: boolean;
      organizationId?: boolean;
      organization?: boolean | MMA_OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["fighter"]
  >;

  export type FighterSelectCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fname?: boolean;
      lname?: boolean;
      weightClass?: boolean;
      country?: boolean;
      fights?: boolean;
      wins?: boolean;
      losses?: boolean;
      draws?: boolean;
      organizationId?: boolean;
      organization?: boolean | MMA_OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["fighter"]
  >;

  export type FighterSelectUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      fname?: boolean;
      lname?: boolean;
      weightClass?: boolean;
      country?: boolean;
      fights?: boolean;
      wins?: boolean;
      losses?: boolean;
      draws?: boolean;
      organizationId?: boolean;
      organization?: boolean | MMA_OrganizationDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["fighter"]
  >;

  export type FighterSelectScalar = {
    id?: boolean;
    fname?: boolean;
    lname?: boolean;
    weightClass?: boolean;
    country?: boolean;
    fights?: boolean;
    wins?: boolean;
    losses?: boolean;
    draws?: boolean;
    organizationId?: boolean;
  };

  export type FighterOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "fname"
    | "lname"
    | "weightClass"
    | "country"
    | "fights"
    | "wins"
    | "losses"
    | "draws"
    | "organizationId",
    ExtArgs["result"]["fighter"]
  >;
  export type FighterInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | MMA_OrganizationDefaultArgs<ExtArgs>;
  };
  export type FighterIncludeCreateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | MMA_OrganizationDefaultArgs<ExtArgs>;
  };
  export type FighterIncludeUpdateManyAndReturn<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    organization?: boolean | MMA_OrganizationDefaultArgs<ExtArgs>;
  };

  export type $FighterPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Fighter";
    objects: {
      organization: Prisma.$MMA_OrganizationPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        fname: string;
        lname: string;
        weightClass: string;
        country: string;
        fights: number;
        wins: number;
        losses: number;
        draws: number;
        organizationId: number;
      },
      ExtArgs["result"]["fighter"]
    >;
    composites: {};
  };

  type FighterGetPayload<
    S extends boolean | null | undefined | FighterDefaultArgs,
  > = $Result.GetResult<Prisma.$FighterPayload, S>;

  type FighterCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<FighterFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: FighterCountAggregateInputType | true;
  };

  export interface FighterDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Fighter"];
      meta: { name: "Fighter" };
    };
    /**
     * Find zero or one Fighter that matches the filter.
     * @param {FighterFindUniqueArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FighterFindUniqueArgs>(
      args: SelectSubset<T, FighterFindUniqueArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "findUnique",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find one Fighter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FighterFindUniqueOrThrowArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FighterFindUniqueOrThrowArgs>(
      args: SelectSubset<T, FighterFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Fighter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterFindFirstArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FighterFindFirstArgs>(
      args?: SelectSubset<T, FighterFindFirstArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "findFirst",
        GlobalOmitOptions
      > | null,
      null,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find the first Fighter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterFindFirstOrThrowArgs} args - Arguments to find a Fighter
     * @example
     * // Get one Fighter
     * const fighter = await prisma.fighter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FighterFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FighterFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Find zero or more Fighters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fighters
     * const fighters = await prisma.fighter.findMany()
     *
     * // Get first 10 Fighters
     * const fighters = await prisma.fighter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const fighterWithIdOnly = await prisma.fighter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends FighterFindManyArgs>(
      args?: SelectSubset<T, FighterFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    >;

    /**
     * Create a Fighter.
     * @param {FighterCreateArgs} args - Arguments to create a Fighter.
     * @example
     * // Create one Fighter
     * const Fighter = await prisma.fighter.create({
     *   data: {
     *     // ... data to create a Fighter
     *   }
     * })
     *
     */
    create<T extends FighterCreateArgs>(
      args: SelectSubset<T, FighterCreateArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "create",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Create many Fighters.
     * @param {FighterCreateManyArgs} args - Arguments to create many Fighters.
     * @example
     * // Create many Fighters
     * const fighter = await prisma.fighter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends FighterCreateManyArgs>(
      args?: SelectSubset<T, FighterCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create many Fighters and returns the data saved in the database.
     * @param {FighterCreateManyAndReturnArgs} args - Arguments to create many Fighters.
     * @example
     * // Create many Fighters
     * const fighter = await prisma.fighter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Fighters and only return the `id`
     * const fighterWithIdOnly = await prisma.fighter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends FighterCreateManyAndReturnArgs>(
      args?: SelectSubset<T, FighterCreateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "createManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Delete a Fighter.
     * @param {FighterDeleteArgs} args - Arguments to delete one Fighter.
     * @example
     * // Delete one Fighter
     * const Fighter = await prisma.fighter.delete({
     *   where: {
     *     // ... filter to delete one Fighter
     *   }
     * })
     *
     */
    delete<T extends FighterDeleteArgs>(
      args: SelectSubset<T, FighterDeleteArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "delete",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Update one Fighter.
     * @param {FighterUpdateArgs} args - Arguments to update one Fighter.
     * @example
     * // Update one Fighter
     * const fighter = await prisma.fighter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends FighterUpdateArgs>(
      args: SelectSubset<T, FighterUpdateArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "update",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Delete zero or more Fighters.
     * @param {FighterDeleteManyArgs} args - Arguments to filter Fighters to delete.
     * @example
     * // Delete a few Fighters
     * const { count } = await prisma.fighter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends FighterDeleteManyArgs>(
      args?: SelectSubset<T, FighterDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Fighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fighters
     * const fighter = await prisma.fighter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends FighterUpdateManyArgs>(
      args: SelectSubset<T, FighterUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Fighters and returns the data updated in the database.
     * @param {FighterUpdateManyAndReturnArgs} args - Arguments to update many Fighters.
     * @example
     * // Update many Fighters
     * const fighter = await prisma.fighter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Fighters and only return the `id`
     * const fighterWithIdOnly = await prisma.fighter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends FighterUpdateManyAndReturnArgs>(
      args: SelectSubset<T, FighterUpdateManyAndReturnArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "updateManyAndReturn",
        GlobalOmitOptions
      >
    >;

    /**
     * Create or update one Fighter.
     * @param {FighterUpsertArgs} args - Arguments to update or create a Fighter.
     * @example
     * // Update or create a Fighter
     * const fighter = await prisma.fighter.upsert({
     *   create: {
     *     // ... data to create a Fighter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fighter we want to update
     *   }
     * })
     */
    upsert<T extends FighterUpsertArgs>(
      args: SelectSubset<T, FighterUpsertArgs<ExtArgs>>,
    ): Prisma__FighterClient<
      $Result.GetResult<
        Prisma.$FighterPayload<ExtArgs>,
        T,
        "upsert",
        GlobalOmitOptions
      >,
      never,
      ExtArgs,
      GlobalOmitOptions
    >;

    /**
     * Count the number of Fighters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterCountArgs} args - Arguments to filter Fighters to count.
     * @example
     * // Count the number of Fighters
     * const count = await prisma.fighter.count({
     *   where: {
     *     // ... the filter for the Fighters we want to count
     *   }
     * })
     **/
    count<T extends FighterCountArgs>(
      args?: Subset<T, FighterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], FighterCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Fighter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends FighterAggregateArgs>(
      args: Subset<T, FighterAggregateArgs>,
    ): Prisma.PrismaPromise<GetFighterAggregateType<T>>;

    /**
     * Group by Fighter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FighterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends FighterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FighterGroupByArgs["orderBy"] }
        : { orderBy?: FighterGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, FighterGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetFighterGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Fighter model
     */
    readonly fields: FighterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fighter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FighterClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    GlobalOmitOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    organization<T extends MMA_OrganizationDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MMA_OrganizationDefaultArgs<ExtArgs>>,
    ): Prisma__MMA_OrganizationClient<
      | $Result.GetResult<
          Prisma.$MMA_OrganizationPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          GlobalOmitOptions
        >
      | Null,
      Null,
      ExtArgs,
      GlobalOmitOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Fighter model
   */
  interface FighterFieldRefs {
    readonly id: FieldRef<"Fighter", "Int">;
    readonly fname: FieldRef<"Fighter", "String">;
    readonly lname: FieldRef<"Fighter", "String">;
    readonly weightClass: FieldRef<"Fighter", "String">;
    readonly country: FieldRef<"Fighter", "String">;
    readonly fights: FieldRef<"Fighter", "Int">;
    readonly wins: FieldRef<"Fighter", "Int">;
    readonly losses: FieldRef<"Fighter", "Int">;
    readonly draws: FieldRef<"Fighter", "Int">;
    readonly organizationId: FieldRef<"Fighter", "Int">;
  }

  // Custom InputTypes
  /**
   * Fighter findUnique
   */
  export type FighterFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * Filter, which Fighter to fetch.
     */
    where: FighterWhereUniqueInput;
  };

  /**
   * Fighter findUniqueOrThrow
   */
  export type FighterFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * Filter, which Fighter to fetch.
     */
    where: FighterWhereUniqueInput;
  };

  /**
   * Fighter findFirst
   */
  export type FighterFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * Filter, which Fighter to fetch.
     */
    where?: FighterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fighters to fetch.
     */
    orderBy?:
      | FighterOrderByWithRelationInput
      | FighterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Fighters.
     */
    cursor?: FighterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fighters.
     */
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[];
  };

  /**
   * Fighter findFirstOrThrow
   */
  export type FighterFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * Filter, which Fighter to fetch.
     */
    where?: FighterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fighters to fetch.
     */
    orderBy?:
      | FighterOrderByWithRelationInput
      | FighterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Fighters.
     */
    cursor?: FighterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fighters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Fighters.
     */
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[];
  };

  /**
   * Fighter findMany
   */
  export type FighterFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * Filter, which Fighters to fetch.
     */
    where?: FighterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Fighters to fetch.
     */
    orderBy?:
      | FighterOrderByWithRelationInput
      | FighterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Fighters.
     */
    cursor?: FighterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Fighters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Fighters.
     */
    skip?: number;
    distinct?: FighterScalarFieldEnum | FighterScalarFieldEnum[];
  };

  /**
   * Fighter create
   */
  export type FighterCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * The data needed to create a Fighter.
     */
    data: XOR<FighterCreateInput, FighterUncheckedCreateInput>;
  };

  /**
   * Fighter createMany
   */
  export type FighterCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Fighters.
     */
    data: FighterCreateManyInput | FighterCreateManyInput[];
  };

  /**
   * Fighter createManyAndReturn
   */
  export type FighterCreateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * The data used to create many Fighters.
     */
    data: FighterCreateManyInput | FighterCreateManyInput[];
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterIncludeCreateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Fighter update
   */
  export type FighterUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * The data needed to update a Fighter.
     */
    data: XOR<FighterUpdateInput, FighterUncheckedUpdateInput>;
    /**
     * Choose, which Fighter to update.
     */
    where: FighterWhereUniqueInput;
  };

  /**
   * Fighter updateMany
   */
  export type FighterUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Fighters.
     */
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyInput>;
    /**
     * Filter which Fighters to update
     */
    where?: FighterWhereInput;
    /**
     * Limit how many Fighters to update.
     */
    limit?: number;
  };

  /**
   * Fighter updateManyAndReturn
   */
  export type FighterUpdateManyAndReturnArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * The data used to update Fighters.
     */
    data: XOR<FighterUpdateManyMutationInput, FighterUncheckedUpdateManyInput>;
    /**
     * Filter which Fighters to update
     */
    where?: FighterWhereInput;
    /**
     * Limit how many Fighters to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterIncludeUpdateManyAndReturn<ExtArgs> | null;
  };

  /**
   * Fighter upsert
   */
  export type FighterUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * The filter to search for the Fighter to update in case it exists.
     */
    where: FighterWhereUniqueInput;
    /**
     * In case the Fighter found by the `where` argument doesn't exist, create a new Fighter with this data.
     */
    create: XOR<FighterCreateInput, FighterUncheckedCreateInput>;
    /**
     * In case the Fighter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FighterUpdateInput, FighterUncheckedUpdateInput>;
  };

  /**
   * Fighter delete
   */
  export type FighterDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
    /**
     * Filter which Fighter to delete.
     */
    where: FighterWhereUniqueInput;
  };

  /**
   * Fighter deleteMany
   */
  export type FighterDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Fighters to delete
     */
    where?: FighterWhereInput;
    /**
     * Limit how many Fighters to delete.
     */
    limit?: number;
  };

  /**
   * Fighter without action
   */
  export type FighterDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Fighter
     */
    select?: FighterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Fighter
     */
    omit?: FighterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FighterInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const MMA_OrganizationScalarFieldEnum: {
    id: "id";
    name: "name";
    country: "country";
  };

  export type MMA_OrganizationScalarFieldEnum =
    (typeof MMA_OrganizationScalarFieldEnum)[keyof typeof MMA_OrganizationScalarFieldEnum];

  export const FighterScalarFieldEnum: {
    id: "id";
    fname: "fname";
    lname: "lname";
    weightClass: "weightClass";
    country: "country";
    fights: "fights";
    wins: "wins";
    losses: "losses";
    draws: "draws";
    organizationId: "organizationId";
  };

  export type FighterScalarFieldEnum =
    (typeof FighterScalarFieldEnum)[keyof typeof FighterScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Deep Input Types
   */

  export type MMA_OrganizationWhereInput = {
    AND?: MMA_OrganizationWhereInput | MMA_OrganizationWhereInput[];
    OR?: MMA_OrganizationWhereInput[];
    NOT?: MMA_OrganizationWhereInput | MMA_OrganizationWhereInput[];
    id?: IntFilter<"MMA_Organization"> | number;
    name?: StringFilter<"MMA_Organization"> | string;
    country?: StringFilter<"MMA_Organization"> | string;
    fighters?: FighterListRelationFilter;
  };

  export type MMA_OrganizationOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    fighters?: FighterOrderByRelationAggregateInput;
  };

  export type MMA_OrganizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: MMA_OrganizationWhereInput | MMA_OrganizationWhereInput[];
      OR?: MMA_OrganizationWhereInput[];
      NOT?: MMA_OrganizationWhereInput | MMA_OrganizationWhereInput[];
      name?: StringFilter<"MMA_Organization"> | string;
      country?: StringFilter<"MMA_Organization"> | string;
      fighters?: FighterListRelationFilter;
    },
    "id"
  >;

  export type MMA_OrganizationOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
    _count?: MMA_OrganizationCountOrderByAggregateInput;
    _avg?: MMA_OrganizationAvgOrderByAggregateInput;
    _max?: MMA_OrganizationMaxOrderByAggregateInput;
    _min?: MMA_OrganizationMinOrderByAggregateInput;
    _sum?: MMA_OrganizationSumOrderByAggregateInput;
  };

  export type MMA_OrganizationScalarWhereWithAggregatesInput = {
    AND?:
      | MMA_OrganizationScalarWhereWithAggregatesInput
      | MMA_OrganizationScalarWhereWithAggregatesInput[];
    OR?: MMA_OrganizationScalarWhereWithAggregatesInput[];
    NOT?:
      | MMA_OrganizationScalarWhereWithAggregatesInput
      | MMA_OrganizationScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"MMA_Organization"> | number;
    name?: StringWithAggregatesFilter<"MMA_Organization"> | string;
    country?: StringWithAggregatesFilter<"MMA_Organization"> | string;
  };

  export type FighterWhereInput = {
    AND?: FighterWhereInput | FighterWhereInput[];
    OR?: FighterWhereInput[];
    NOT?: FighterWhereInput | FighterWhereInput[];
    id?: IntFilter<"Fighter"> | number;
    fname?: StringFilter<"Fighter"> | string;
    lname?: StringFilter<"Fighter"> | string;
    weightClass?: StringFilter<"Fighter"> | string;
    country?: StringFilter<"Fighter"> | string;
    fights?: IntFilter<"Fighter"> | number;
    wins?: IntFilter<"Fighter"> | number;
    losses?: IntFilter<"Fighter"> | number;
    draws?: IntFilter<"Fighter"> | number;
    organizationId?: IntFilter<"Fighter"> | number;
    organization?: XOR<
      MMA_OrganizationScalarRelationFilter,
      MMA_OrganizationWhereInput
    >;
  };

  export type FighterOrderByWithRelationInput = {
    id?: SortOrder;
    fname?: SortOrder;
    lname?: SortOrder;
    weightClass?: SortOrder;
    country?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
    organization?: MMA_OrganizationOrderByWithRelationInput;
  };

  export type FighterWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: FighterWhereInput | FighterWhereInput[];
      OR?: FighterWhereInput[];
      NOT?: FighterWhereInput | FighterWhereInput[];
      fname?: StringFilter<"Fighter"> | string;
      lname?: StringFilter<"Fighter"> | string;
      weightClass?: StringFilter<"Fighter"> | string;
      country?: StringFilter<"Fighter"> | string;
      fights?: IntFilter<"Fighter"> | number;
      wins?: IntFilter<"Fighter"> | number;
      losses?: IntFilter<"Fighter"> | number;
      draws?: IntFilter<"Fighter"> | number;
      organizationId?: IntFilter<"Fighter"> | number;
      organization?: XOR<
        MMA_OrganizationScalarRelationFilter,
        MMA_OrganizationWhereInput
      >;
    },
    "id"
  >;

  export type FighterOrderByWithAggregationInput = {
    id?: SortOrder;
    fname?: SortOrder;
    lname?: SortOrder;
    weightClass?: SortOrder;
    country?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
    _count?: FighterCountOrderByAggregateInput;
    _avg?: FighterAvgOrderByAggregateInput;
    _max?: FighterMaxOrderByAggregateInput;
    _min?: FighterMinOrderByAggregateInput;
    _sum?: FighterSumOrderByAggregateInput;
  };

  export type FighterScalarWhereWithAggregatesInput = {
    AND?:
      | FighterScalarWhereWithAggregatesInput
      | FighterScalarWhereWithAggregatesInput[];
    OR?: FighterScalarWhereWithAggregatesInput[];
    NOT?:
      | FighterScalarWhereWithAggregatesInput
      | FighterScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Fighter"> | number;
    fname?: StringWithAggregatesFilter<"Fighter"> | string;
    lname?: StringWithAggregatesFilter<"Fighter"> | string;
    weightClass?: StringWithAggregatesFilter<"Fighter"> | string;
    country?: StringWithAggregatesFilter<"Fighter"> | string;
    fights?: IntWithAggregatesFilter<"Fighter"> | number;
    wins?: IntWithAggregatesFilter<"Fighter"> | number;
    losses?: IntWithAggregatesFilter<"Fighter"> | number;
    draws?: IntWithAggregatesFilter<"Fighter"> | number;
    organizationId?: IntWithAggregatesFilter<"Fighter"> | number;
  };

  export type MMA_OrganizationCreateInput = {
    name: string;
    country: string;
    fighters?: FighterCreateNestedManyWithoutOrganizationInput;
  };

  export type MMA_OrganizationUncheckedCreateInput = {
    id?: number;
    name: string;
    country: string;
    fighters?: FighterUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type MMA_OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fighters?: FighterUpdateManyWithoutOrganizationNestedInput;
  };

  export type MMA_OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fighters?: FighterUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type MMA_OrganizationCreateManyInput = {
    id?: number;
    name: string;
    country: string;
  };

  export type MMA_OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
  };

  export type MMA_OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
  };

  export type FighterCreateInput = {
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
    organization: MMA_OrganizationCreateNestedOneWithoutFightersInput;
  };

  export type FighterUncheckedCreateInput = {
    id?: number;
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
    organizationId: number;
  };

  export type FighterUpdateInput = {
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    organization?: MMA_OrganizationUpdateOneRequiredWithoutFightersNestedInput;
  };

  export type FighterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    organizationId?: IntFieldUpdateOperationsInput | number;
  };

  export type FighterCreateManyInput = {
    id?: number;
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
    organizationId: number;
  };

  export type FighterUpdateManyMutationInput = {
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
  };

  export type FighterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
    organizationId?: IntFieldUpdateOperationsInput | number;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type FighterListRelationFilter = {
    every?: FighterWhereInput;
    some?: FighterWhereInput;
    none?: FighterWhereInput;
  };

  export type FighterOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type MMA_OrganizationCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
  };

  export type MMA_OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type MMA_OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
  };

  export type MMA_OrganizationMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    country?: SortOrder;
  };

  export type MMA_OrganizationSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type MMA_OrganizationScalarRelationFilter = {
    is?: MMA_OrganizationWhereInput;
    isNot?: MMA_OrganizationWhereInput;
  };

  export type FighterCountOrderByAggregateInput = {
    id?: SortOrder;
    fname?: SortOrder;
    lname?: SortOrder;
    weightClass?: SortOrder;
    country?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
  };

  export type FighterAvgOrderByAggregateInput = {
    id?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
  };

  export type FighterMaxOrderByAggregateInput = {
    id?: SortOrder;
    fname?: SortOrder;
    lname?: SortOrder;
    weightClass?: SortOrder;
    country?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
  };

  export type FighterMinOrderByAggregateInput = {
    id?: SortOrder;
    fname?: SortOrder;
    lname?: SortOrder;
    weightClass?: SortOrder;
    country?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
  };

  export type FighterSumOrderByAggregateInput = {
    id?: SortOrder;
    fights?: SortOrder;
    wins?: SortOrder;
    losses?: SortOrder;
    draws?: SortOrder;
    organizationId?: SortOrder;
  };

  export type FighterCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          FighterCreateWithoutOrganizationInput,
          FighterUncheckedCreateWithoutOrganizationInput
        >
      | FighterCreateWithoutOrganizationInput[]
      | FighterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | FighterCreateOrConnectWithoutOrganizationInput
      | FighterCreateOrConnectWithoutOrganizationInput[];
    createMany?: FighterCreateManyOrganizationInputEnvelope;
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
  };

  export type FighterUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<
          FighterCreateWithoutOrganizationInput,
          FighterUncheckedCreateWithoutOrganizationInput
        >
      | FighterCreateWithoutOrganizationInput[]
      | FighterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | FighterCreateOrConnectWithoutOrganizationInput
      | FighterCreateOrConnectWithoutOrganizationInput[];
    createMany?: FighterCreateManyOrganizationInputEnvelope;
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type FighterUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          FighterCreateWithoutOrganizationInput,
          FighterUncheckedCreateWithoutOrganizationInput
        >
      | FighterCreateWithoutOrganizationInput[]
      | FighterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | FighterCreateOrConnectWithoutOrganizationInput
      | FighterCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | FighterUpsertWithWhereUniqueWithoutOrganizationInput
      | FighterUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: FighterCreateManyOrganizationInputEnvelope;
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    update?:
      | FighterUpdateWithWhereUniqueWithoutOrganizationInput
      | FighterUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | FighterUpdateManyWithWhereWithoutOrganizationInput
      | FighterUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type FighterUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<
          FighterCreateWithoutOrganizationInput,
          FighterUncheckedCreateWithoutOrganizationInput
        >
      | FighterCreateWithoutOrganizationInput[]
      | FighterUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?:
      | FighterCreateOrConnectWithoutOrganizationInput
      | FighterCreateOrConnectWithoutOrganizationInput[];
    upsert?:
      | FighterUpsertWithWhereUniqueWithoutOrganizationInput
      | FighterUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: FighterCreateManyOrganizationInputEnvelope;
    set?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    disconnect?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    delete?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    connect?: FighterWhereUniqueInput | FighterWhereUniqueInput[];
    update?:
      | FighterUpdateWithWhereUniqueWithoutOrganizationInput
      | FighterUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?:
      | FighterUpdateManyWithWhereWithoutOrganizationInput
      | FighterUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: FighterScalarWhereInput | FighterScalarWhereInput[];
  };

  export type MMA_OrganizationCreateNestedOneWithoutFightersInput = {
    create?: XOR<
      MMA_OrganizationCreateWithoutFightersInput,
      MMA_OrganizationUncheckedCreateWithoutFightersInput
    >;
    connectOrCreate?: MMA_OrganizationCreateOrConnectWithoutFightersInput;
    connect?: MMA_OrganizationWhereUniqueInput;
  };

  export type MMA_OrganizationUpdateOneRequiredWithoutFightersNestedInput = {
    create?: XOR<
      MMA_OrganizationCreateWithoutFightersInput,
      MMA_OrganizationUncheckedCreateWithoutFightersInput
    >;
    connectOrCreate?: MMA_OrganizationCreateOrConnectWithoutFightersInput;
    upsert?: MMA_OrganizationUpsertWithoutFightersInput;
    connect?: MMA_OrganizationWhereUniqueInput;
    update?: XOR<
      XOR<
        MMA_OrganizationUpdateToOneWithWhereWithoutFightersInput,
        MMA_OrganizationUpdateWithoutFightersInput
      >,
      MMA_OrganizationUncheckedUpdateWithoutFightersInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type FighterCreateWithoutOrganizationInput = {
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
  };

  export type FighterUncheckedCreateWithoutOrganizationInput = {
    id?: number;
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
  };

  export type FighterCreateOrConnectWithoutOrganizationInput = {
    where: FighterWhereUniqueInput;
    create: XOR<
      FighterCreateWithoutOrganizationInput,
      FighterUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type FighterCreateManyOrganizationInputEnvelope = {
    data:
      | FighterCreateManyOrganizationInput
      | FighterCreateManyOrganizationInput[];
  };

  export type FighterUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: FighterWhereUniqueInput;
    update: XOR<
      FighterUpdateWithoutOrganizationInput,
      FighterUncheckedUpdateWithoutOrganizationInput
    >;
    create: XOR<
      FighterCreateWithoutOrganizationInput,
      FighterUncheckedCreateWithoutOrganizationInput
    >;
  };

  export type FighterUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: FighterWhereUniqueInput;
    data: XOR<
      FighterUpdateWithoutOrganizationInput,
      FighterUncheckedUpdateWithoutOrganizationInput
    >;
  };

  export type FighterUpdateManyWithWhereWithoutOrganizationInput = {
    where: FighterScalarWhereInput;
    data: XOR<
      FighterUpdateManyMutationInput,
      FighterUncheckedUpdateManyWithoutOrganizationInput
    >;
  };

  export type FighterScalarWhereInput = {
    AND?: FighterScalarWhereInput | FighterScalarWhereInput[];
    OR?: FighterScalarWhereInput[];
    NOT?: FighterScalarWhereInput | FighterScalarWhereInput[];
    id?: IntFilter<"Fighter"> | number;
    fname?: StringFilter<"Fighter"> | string;
    lname?: StringFilter<"Fighter"> | string;
    weightClass?: StringFilter<"Fighter"> | string;
    country?: StringFilter<"Fighter"> | string;
    fights?: IntFilter<"Fighter"> | number;
    wins?: IntFilter<"Fighter"> | number;
    losses?: IntFilter<"Fighter"> | number;
    draws?: IntFilter<"Fighter"> | number;
    organizationId?: IntFilter<"Fighter"> | number;
  };

  export type MMA_OrganizationCreateWithoutFightersInput = {
    name: string;
    country: string;
  };

  export type MMA_OrganizationUncheckedCreateWithoutFightersInput = {
    id?: number;
    name: string;
    country: string;
  };

  export type MMA_OrganizationCreateOrConnectWithoutFightersInput = {
    where: MMA_OrganizationWhereUniqueInput;
    create: XOR<
      MMA_OrganizationCreateWithoutFightersInput,
      MMA_OrganizationUncheckedCreateWithoutFightersInput
    >;
  };

  export type MMA_OrganizationUpsertWithoutFightersInput = {
    update: XOR<
      MMA_OrganizationUpdateWithoutFightersInput,
      MMA_OrganizationUncheckedUpdateWithoutFightersInput
    >;
    create: XOR<
      MMA_OrganizationCreateWithoutFightersInput,
      MMA_OrganizationUncheckedCreateWithoutFightersInput
    >;
    where?: MMA_OrganizationWhereInput;
  };

  export type MMA_OrganizationUpdateToOneWithWhereWithoutFightersInput = {
    where?: MMA_OrganizationWhereInput;
    data: XOR<
      MMA_OrganizationUpdateWithoutFightersInput,
      MMA_OrganizationUncheckedUpdateWithoutFightersInput
    >;
  };

  export type MMA_OrganizationUpdateWithoutFightersInput = {
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
  };

  export type MMA_OrganizationUncheckedUpdateWithoutFightersInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
  };

  export type FighterCreateManyOrganizationInput = {
    id?: number;
    fname: string;
    lname: string;
    weightClass: string;
    country: string;
    fights: number;
    wins: number;
    losses: number;
    draws: number;
  };

  export type FighterUpdateWithoutOrganizationInput = {
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
  };

  export type FighterUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number;
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
  };

  export type FighterUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number;
    fname?: StringFieldUpdateOperationsInput | string;
    lname?: StringFieldUpdateOperationsInput | string;
    weightClass?: StringFieldUpdateOperationsInput | string;
    country?: StringFieldUpdateOperationsInput | string;
    fights?: IntFieldUpdateOperationsInput | number;
    wins?: IntFieldUpdateOperationsInput | number;
    losses?: IntFieldUpdateOperationsInput | number;
    draws?: IntFieldUpdateOperationsInput | number;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
