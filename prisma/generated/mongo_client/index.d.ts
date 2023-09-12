
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Followers
 * 
 */
export type Followers = $Result.DefaultSelection<Prisma.$FollowersPayload>
/**
 * Model Artists
 * 
 */
export type Artists = $Result.DefaultSelection<Prisma.$ArtistsPayload>
/**
 * Model Albums
 * 
 */
export type Albums = $Result.DefaultSelection<Prisma.$AlbumsPayload>
/**
 * Model PlayLists
 * 
 */
export type PlayLists = $Result.DefaultSelection<Prisma.$PlayListsPayload>
/**
 * Model Genres
 * 
 */
export type Genres = $Result.DefaultSelection<Prisma.$GenresPayload>
/**
 * Model Tracks
 * 
 */
export type Tracks = $Result.DefaultSelection<Prisma.$TracksPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs>;

  /**
   * `prisma.followers`: Exposes CRUD operations for the **Followers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Followers
    * const followers = await prisma.followers.findMany()
    * ```
    */
  get followers(): Prisma.FollowersDelegate<ExtArgs>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **Artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.ArtistsDelegate<ExtArgs>;

  /**
   * `prisma.albums`: Exposes CRUD operations for the **Albums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.albums.findMany()
    * ```
    */
  get albums(): Prisma.AlbumsDelegate<ExtArgs>;

  /**
   * `prisma.playLists`: Exposes CRUD operations for the **PlayLists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayLists
    * const playLists = await prisma.playLists.findMany()
    * ```
    */
  get playLists(): Prisma.PlayListsDelegate<ExtArgs>;

  /**
   * `prisma.genres`: Exposes CRUD operations for the **Genres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genres.findMany()
    * ```
    */
  get genres(): Prisma.GenresDelegate<ExtArgs>;

  /**
   * `prisma.tracks`: Exposes CRUD operations for the **Tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.tracks.findMany()
    * ```
    */
  get tracks(): Prisma.TracksDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Followers: 'Followers',
    Artists: 'Artists',
    Albums: 'Albums',
    PlayLists: 'PlayLists',
    Genres: 'Genres',
    Tracks: 'Tracks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'followers' | 'artists' | 'albums' | 'playLists' | 'genres' | 'tracks'
      txIsolationLevel: never
    },
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UsersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UsersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Followers: {
        payload: Prisma.$FollowersPayload<ExtArgs>
        fields: Prisma.FollowersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          findFirst: {
            args: Prisma.FollowersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          findMany: {
            args: Prisma.FollowersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>[]
          }
          create: {
            args: Prisma.FollowersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          createMany: {
            args: Prisma.FollowersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FollowersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          update: {
            args: Prisma.FollowersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          deleteMany: {
            args: Prisma.FollowersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FollowersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FollowersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FollowersPayload>
          }
          aggregate: {
            args: Prisma.FollowersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFollowers>
          }
          groupBy: {
            args: Prisma.FollowersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FollowersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FollowersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.FollowersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.FollowersCountArgs<ExtArgs>,
            result: $Utils.Optional<FollowersCountAggregateOutputType> | number
          }
        }
      }
      Artists: {
        payload: Prisma.$ArtistsPayload<ExtArgs>
        fields: Prisma.ArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findMany: {
            args: Prisma.ArtistsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          create: {
            args: Prisma.ArtistsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          createMany: {
            args: Prisma.ArtistsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          update: {
            args: Prisma.ArtistsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.ArtistsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtistsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtistsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ArtistsCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      Albums: {
        payload: Prisma.$AlbumsPayload<ExtArgs>
        fields: Prisma.AlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          findFirst: {
            args: Prisma.AlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          findMany: {
            args: Prisma.AlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>[]
          }
          create: {
            args: Prisma.AlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          createMany: {
            args: Prisma.AlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          update: {
            args: Prisma.AlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          deleteMany: {
            args: Prisma.AlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          aggregate: {
            args: Prisma.AlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbums>
          }
          groupBy: {
            args: Prisma.AlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlbumsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlbumsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumsCountAggregateOutputType> | number
          }
        }
      }
      PlayLists: {
        payload: Prisma.$PlayListsPayload<ExtArgs>
        fields: Prisma.PlayListsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayListsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayListsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>
          }
          findFirst: {
            args: Prisma.PlayListsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayListsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>
          }
          findMany: {
            args: Prisma.PlayListsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>[]
          }
          create: {
            args: Prisma.PlayListsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>
          }
          createMany: {
            args: Prisma.PlayListsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlayListsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>
          }
          update: {
            args: Prisma.PlayListsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>
          }
          deleteMany: {
            args: Prisma.PlayListsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlayListsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlayListsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlayListsPayload>
          }
          aggregate: {
            args: Prisma.PlayListsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlayLists>
          }
          groupBy: {
            args: Prisma.PlayListsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlayListsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlayListsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlayListsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PlayListsCountArgs<ExtArgs>,
            result: $Utils.Optional<PlayListsCountAggregateOutputType> | number
          }
        }
      }
      Genres: {
        payload: Prisma.$GenresPayload<ExtArgs>
        fields: Prisma.GenresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findFirst: {
            args: Prisma.GenresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          findMany: {
            args: Prisma.GenresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>[]
          }
          create: {
            args: Prisma.GenresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          createMany: {
            args: Prisma.GenresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          update: {
            args: Prisma.GenresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          deleteMany: {
            args: Prisma.GenresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenresPayload>
          }
          aggregate: {
            args: Prisma.GenresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenres>
          }
          groupBy: {
            args: Prisma.GenresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenresGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GenresFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GenresAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GenresCountArgs<ExtArgs>,
            result: $Utils.Optional<GenresCountAggregateOutputType> | number
          }
        }
      }
      Tracks: {
        payload: Prisma.$TracksPayload<ExtArgs>
        fields: Prisma.TracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findFirst: {
            args: Prisma.TracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findMany: {
            args: Prisma.TracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>[]
          }
          create: {
            args: Prisma.TracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          createMany: {
            args: Prisma.TracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          update: {
            args: Prisma.TracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          deleteMany: {
            args: Prisma.TracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          aggregate: {
            args: Prisma.TracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTracks>
          }
          groupBy: {
            args: Prisma.TracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TracksGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TracksFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TracksAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TracksCountArgs<ExtArgs>,
            result: $Utils.Optional<TracksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    trackList: number
    PlayList: number
    followers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    trackList?: boolean | UsersCountOutputTypeCountTrackListArgs
    PlayList?: boolean | UsersCountOutputTypeCountPlayListArgs
    followers?: boolean | UsersCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountTrackListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPlayListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayListsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FollowersWhereInput
  }



  /**
   * Count Type FollowersCountOutputType
   */

  export type FollowersCountOutputType = {
    followers: number
  }

  export type FollowersCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    followers?: boolean | FollowersCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes

  /**
   * FollowersCountOutputType without action
   */
  export type FollowersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowersCountOutputType
     */
    select?: FollowersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FollowersCountOutputType without action
   */
  export type FollowersCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }



  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    albums: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    albums?: boolean | ArtistsCountOutputTypeCountAlbumsArgs
  }

  // Custom InputTypes

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsCountOutputType
     */
    select?: ArtistsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }



  /**
   * Count Type AlbumsCountOutputType
   */

  export type AlbumsCountOutputType = {
    artists: number
    tracks: number
  }

  export type AlbumsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    artists?: boolean | AlbumsCountOutputTypeCountArtistsArgs
    tracks?: boolean | AlbumsCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes

  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumsCountOutputType
     */
    select?: AlbumsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }



  /**
   * Count Type PlayListsCountOutputType
   */

  export type PlayListsCountOutputType = {
    tracks: number
  }

  export type PlayListsCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tracks?: boolean | PlayListsCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes

  /**
   * PlayListsCountOutputType without action
   */
  export type PlayListsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayListsCountOutputType
     */
    select?: PlayListsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlayListsCountOutputType without action
   */
  export type PlayListsCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }



  /**
   * Count Type GenresCountOutputType
   */

  export type GenresCountOutputType = {
    tracks: number
  }

  export type GenresCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tracks?: boolean | GenresCountOutputTypeCountTracksArgs
  }

  // Custom InputTypes

  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenresCountOutputType
     */
    select?: GenresCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GenresCountOutputType without action
   */
  export type GenresCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }



  /**
   * Count Type TracksCountOutputType
   */

  export type TracksCountOutputType = {
    artists: number
    genres: number
  }

  export type TracksCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    artists?: boolean | TracksCountOutputTypeCountArtistsArgs
    genres?: boolean | TracksCountOutputTypeCountGenresArgs
  }

  // Custom InputTypes

  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksCountOutputType
     */
    select?: TracksCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
  }


  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    email: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    userName: number
    email: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    libraryList: number
    usersId: number
    followersId: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    userName?: true
    email?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    libraryList?: true
    usersId?: true
    followersId?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    libraryList: string[]
    usersId: string | null
    followersId: string[]
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userName?: boolean
    email?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    libraryList?: boolean
    usersId?: boolean
    followersId?: boolean
    trackList?: boolean | Users$trackListArgs<ExtArgs>
    PlayList?: boolean | Users$PlayListArgs<ExtArgs>
    followers?: boolean | Users$followersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    userName?: boolean
    email?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    libraryList?: boolean
    usersId?: boolean
    followersId?: boolean
  }

  export type UsersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    trackList?: boolean | Users$trackListArgs<ExtArgs>
    PlayList?: boolean | Users$PlayListArgs<ExtArgs>
    followers?: boolean | Users$followersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UsersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      trackList: Prisma.$TracksPayload<ExtArgs>[]
      PlayList: Prisma.$PlayListsPayload<ExtArgs>[]
      followers: Prisma.$FollowersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      userName: string
      email: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
      libraryList: string[]
      usersId: string | null
      followersId: string[]
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersCreateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>
    ): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UsersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UsersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {UsersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UsersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    trackList<T extends Users$trackListArgs<ExtArgs> = {}>(args?: Subset<T, Users$trackListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    PlayList<T extends Users$PlayListArgs<ExtArgs> = {}>(args?: Subset<T, Users$PlayListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findMany'> | Null>;

    followers<T extends Users$followersArgs<ExtArgs> = {}>(args?: Subset<T, Users$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Users model
   */ 
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly userName: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly imageUrl: FieldRef<"Users", 'String'>
    readonly createdAt: FieldRef<"Users", 'DateTime'>
    readonly updatedAt: FieldRef<"Users", 'DateTime'>
    readonly libraryList: FieldRef<"Users", 'String[]'>
    readonly usersId: FieldRef<"Users", 'String'>
    readonly followersId: FieldRef<"Users", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
  }


  /**
   * Users findRaw
   */
  export type UsersFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Users aggregateRaw
   */
  export type UsersAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Users.trackList
   */
  export type Users$trackListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Users.PlayList
   */
  export type Users$PlayListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    where?: PlayListsWhereInput
    orderBy?: PlayListsOrderByWithRelationInput | PlayListsOrderByWithRelationInput[]
    cursor?: PlayListsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayListsScalarFieldEnum | PlayListsScalarFieldEnum[]
  }


  /**
   * Users.followers
   */
  export type Users$followersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    where?: FollowersWhereInput
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    cursor?: FollowersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
  }



  /**
   * Model Followers
   */

  export type AggregateFollowers = {
    _count: FollowersCountAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  export type FollowersMinAggregateOutputType = {
    id: string | null
  }

  export type FollowersMaxAggregateOutputType = {
    id: string | null
  }

  export type FollowersCountAggregateOutputType = {
    id: number
    usersId: number
    _all: number
  }


  export type FollowersMinAggregateInputType = {
    id?: true
  }

  export type FollowersMaxAggregateInputType = {
    id?: true
  }

  export type FollowersCountAggregateInputType = {
    id?: true
    usersId?: true
    _all?: true
  }

  export type FollowersAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to aggregate.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Followers
    **/
    _count?: true | FollowersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowersMaxAggregateInputType
  }

  export type GetFollowersAggregateType<T extends FollowersAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowers[P]>
      : GetScalarType<T[P], AggregateFollowers[P]>
  }




  export type FollowersGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FollowersWhereInput
    orderBy?: FollowersOrderByWithAggregationInput | FollowersOrderByWithAggregationInput[]
    by: FollowersScalarFieldEnum[] | FollowersScalarFieldEnum
    having?: FollowersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowersCountAggregateInputType | true
    _min?: FollowersMinAggregateInputType
    _max?: FollowersMaxAggregateInputType
  }

  export type FollowersGroupByOutputType = {
    id: string
    usersId: string[]
    _count: FollowersCountAggregateOutputType | null
    _min: FollowersMinAggregateOutputType | null
    _max: FollowersMaxAggregateOutputType | null
  }

  type GetFollowersGroupByPayload<T extends FollowersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowersGroupByOutputType[P]>
            : GetScalarType<T[P], FollowersGroupByOutputType[P]>
        }
      >
    >


  export type FollowersSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usersId?: boolean
    followers?: boolean | Followers$followersArgs<ExtArgs>
    _count?: boolean | FollowersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["followers"]>

  export type FollowersSelectScalar = {
    id?: boolean
    usersId?: boolean
  }

  export type FollowersInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    followers?: boolean | Followers$followersArgs<ExtArgs>
    _count?: boolean | FollowersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FollowersPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Followers"
    objects: {
      followers: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      usersId: string[]
    }, ExtArgs["result"]["followers"]>
    composites: {}
  }


  type FollowersGetPayload<S extends boolean | null | undefined | FollowersDefaultArgs> = $Result.GetResult<Prisma.$FollowersPayload, S>

  type FollowersCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FollowersFindManyArgs, 'select' | 'include'> & {
      select?: FollowersCountAggregateInputType | true
    }

  export interface FollowersDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Followers'], meta: { name: 'Followers' } }
    /**
     * Find zero or one Followers that matches the filter.
     * @param {FollowersFindUniqueArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FollowersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersFindUniqueArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Followers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FollowersFindUniqueOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FollowersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindFirstArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FollowersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindFirstArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Followers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindFirstOrThrowArgs} args - Arguments to find a Followers
     * @example
     * // Get one Followers
     * const followers = await prisma.followers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FollowersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Followers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Followers
     * const followers = await prisma.followers.findMany()
     * 
     * // Get first 10 Followers
     * const followers = await prisma.followers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followersWithIdOnly = await prisma.followers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FollowersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Followers.
     * @param {FollowersCreateArgs} args - Arguments to create a Followers.
     * @example
     * // Create one Followers
     * const Followers = await prisma.followers.create({
     *   data: {
     *     // ... data to create a Followers
     *   }
     * })
     * 
    **/
    create<T extends FollowersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersCreateArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Followers.
     *     @param {FollowersCreateManyArgs} args - Arguments to create many Followers.
     *     @example
     *     // Create many Followers
     *     const followers = await prisma.followers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FollowersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Followers.
     * @param {FollowersDeleteArgs} args - Arguments to delete one Followers.
     * @example
     * // Delete one Followers
     * const Followers = await prisma.followers.delete({
     *   where: {
     *     // ... filter to delete one Followers
     *   }
     * })
     * 
    **/
    delete<T extends FollowersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersDeleteArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Followers.
     * @param {FollowersUpdateArgs} args - Arguments to update one Followers.
     * @example
     * // Update one Followers
     * const followers = await prisma.followers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FollowersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersUpdateArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Followers.
     * @param {FollowersDeleteManyArgs} args - Arguments to filter Followers to delete.
     * @example
     * // Delete a few Followers
     * const { count } = await prisma.followers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FollowersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FollowersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Followers
     * const followers = await prisma.followers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FollowersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Followers.
     * @param {FollowersUpsertArgs} args - Arguments to update or create a Followers.
     * @example
     * // Update or create a Followers
     * const followers = await prisma.followers.upsert({
     *   create: {
     *     // ... data to create a Followers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Followers we want to update
     *   }
     * })
    **/
    upsert<T extends FollowersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FollowersUpsertArgs<ExtArgs>>
    ): Prisma__FollowersClient<$Result.GetResult<Prisma.$FollowersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Followers that matches the filter.
     * @param {FollowersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const followers = await prisma.followers.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: FollowersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Followers.
     * @param {FollowersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const followers = await prisma.followers.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: FollowersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersCountArgs} args - Arguments to filter Followers to count.
     * @example
     * // Count the number of Followers
     * const count = await prisma.followers.count({
     *   where: {
     *     // ... the filter for the Followers we want to count
     *   }
     * })
    **/
    count<T extends FollowersCountArgs>(
      args?: Subset<T, FollowersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowersAggregateArgs>(args: Subset<T, FollowersAggregateArgs>): Prisma.PrismaPromise<GetFollowersAggregateType<T>>

    /**
     * Group by Followers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowersGroupByArgs} args - Group by arguments.
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
      T extends FollowersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowersGroupByArgs['orderBy'] }
        : { orderBy?: FollowersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FollowersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Followers model
   */
  readonly fields: FollowersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Followers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowersClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    followers<T extends Followers$followersArgs<ExtArgs> = {}>(args?: Subset<T, Followers$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Followers model
   */ 
  interface FollowersFieldRefs {
    readonly id: FieldRef<"Followers", 'String'>
    readonly usersId: FieldRef<"Followers", 'String[]'>
  }
    

  // Custom InputTypes

  /**
   * Followers findUnique
   */
  export type FollowersFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers findUniqueOrThrow
   */
  export type FollowersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers findFirst
   */
  export type FollowersFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Followers findFirstOrThrow
   */
  export type FollowersFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Followers.
     */
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Followers findMany
   */
  export type FollowersFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter, which Followers to fetch.
     */
    where?: FollowersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Followers to fetch.
     */
    orderBy?: FollowersOrderByWithRelationInput | FollowersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Followers.
     */
    cursor?: FollowersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Followers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Followers.
     */
    skip?: number
    distinct?: FollowersScalarFieldEnum | FollowersScalarFieldEnum[]
  }


  /**
   * Followers create
   */
  export type FollowersCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * The data needed to create a Followers.
     */
    data?: XOR<FollowersCreateInput, FollowersUncheckedCreateInput>
  }


  /**
   * Followers createMany
   */
  export type FollowersCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Followers.
     */
    data: FollowersCreateManyInput | FollowersCreateManyInput[]
  }


  /**
   * Followers update
   */
  export type FollowersUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * The data needed to update a Followers.
     */
    data: XOR<FollowersUpdateInput, FollowersUncheckedUpdateInput>
    /**
     * Choose, which Followers to update.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers updateMany
   */
  export type FollowersUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Followers.
     */
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyInput>
    /**
     * Filter which Followers to update
     */
    where?: FollowersWhereInput
  }


  /**
   * Followers upsert
   */
  export type FollowersUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * The filter to search for the Followers to update in case it exists.
     */
    where: FollowersWhereUniqueInput
    /**
     * In case the Followers found by the `where` argument doesn't exist, create a new Followers with this data.
     */
    create: XOR<FollowersCreateInput, FollowersUncheckedCreateInput>
    /**
     * In case the Followers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowersUpdateInput, FollowersUncheckedUpdateInput>
  }


  /**
   * Followers delete
   */
  export type FollowersDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
    /**
     * Filter which Followers to delete.
     */
    where: FollowersWhereUniqueInput
  }


  /**
   * Followers deleteMany
   */
  export type FollowersDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Followers to delete
     */
    where?: FollowersWhereInput
  }


  /**
   * Followers findRaw
   */
  export type FollowersFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Followers aggregateRaw
   */
  export type FollowersAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Followers.followers
   */
  export type Followers$followersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * Followers without action
   */
  export type FollowersDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Followers
     */
    select?: FollowersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FollowersInclude<ExtArgs> | null
  }



  /**
   * Model Artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsAvgAggregateOutputType = {
    popularity: number | null
  }

  export type ArtistsSumAggregateOutputType = {
    popularity: number | null
  }

  export type ArtistsMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    popularity: number | null
    listType: string | null
    tracksId: string | null
  }

  export type ArtistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    popularity: number | null
    listType: string | null
    tracksId: string | null
  }

  export type ArtistsCountAggregateOutputType = {
    id: number
    name: number
    genres: number
    imageUrl: number
    popularity: number
    albumsId: number
    listType: number
    tracksId: number
    _all: number
  }


  export type ArtistsAvgAggregateInputType = {
    popularity?: true
  }

  export type ArtistsSumAggregateInputType = {
    popularity?: true
  }

  export type ArtistsMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    popularity?: true
    listType?: true
    tracksId?: true
  }

  export type ArtistsMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    popularity?: true
    listType?: true
    tracksId?: true
  }

  export type ArtistsCountAggregateInputType = {
    id?: true
    name?: true
    genres?: true
    imageUrl?: true
    popularity?: true
    albumsId?: true
    listType?: true
    tracksId?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to aggregate.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type ArtistsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithAggregationInput | ArtistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: ArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _avg?: ArtistsAvgAggregateInputType
    _sum?: ArtistsSumAggregateInputType
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    id: string
    name: string
    genres: string[]
    imageUrl: string
    popularity: number
    albumsId: string[]
    listType: string
    tracksId: string | null
    _count: ArtistsCountAggregateOutputType | null
    _avg: ArtistsAvgAggregateOutputType | null
    _sum: ArtistsSumAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends ArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genres?: boolean
    imageUrl?: boolean
    popularity?: boolean
    albumsId?: boolean
    listType?: boolean
    tracksId?: boolean
    albums?: boolean | Artists$albumsArgs<ExtArgs>
    Tracks?: boolean | Artists$TracksArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectScalar = {
    id?: boolean
    name?: boolean
    genres?: boolean
    imageUrl?: boolean
    popularity?: boolean
    albumsId?: boolean
    listType?: boolean
    tracksId?: boolean
  }

  export type ArtistsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    albums?: boolean | Artists$albumsArgs<ExtArgs>
    Tracks?: boolean | Artists$TracksArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {
      albums: Prisma.$AlbumsPayload<ExtArgs>[]
      Tracks: Prisma.$TracksPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      genres: string[]
      imageUrl: string
      popularity: number
      albumsId: string[]
      listType: string
      tracksId: string | null
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }


  type ArtistsGetPayload<S extends boolean | null | undefined | ArtistsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsPayload, S>

  type ArtistsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ArtistsFindManyArgs, 'select' | 'include'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface ArtistsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artists'], meta: { name: 'Artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {ArtistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistsWithIdOnly = await prisma.artists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artists.
     * @param {ArtistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
    **/
    create<T extends ArtistsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsCreateArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistsCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artists = await prisma.artists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artists.
     * @param {ArtistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
    **/
    delete<T extends ArtistsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsDeleteArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artists.
     * @param {ArtistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpdateArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artists.
     * @param {ArtistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpsertArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * @param {ArtistsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artists = await prisma.artists.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ArtistsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Artists.
     * @param {ArtistsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artists = await prisma.artists.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ArtistsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistsCountArgs>(
      args?: Subset<T, ArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsGroupByArgs} args - Group by arguments.
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
      T extends ArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artists model
   */
  readonly fields: ArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    albums<T extends Artists$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artists$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    Tracks<T extends Artists$TracksArgs<ExtArgs> = {}>(args?: Subset<T, Artists$TracksArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artists model
   */ 
  interface ArtistsFieldRefs {
    readonly id: FieldRef<"Artists", 'String'>
    readonly name: FieldRef<"Artists", 'String'>
    readonly genres: FieldRef<"Artists", 'String[]'>
    readonly imageUrl: FieldRef<"Artists", 'String'>
    readonly popularity: FieldRef<"Artists", 'Int'>
    readonly albumsId: FieldRef<"Artists", 'String[]'>
    readonly listType: FieldRef<"Artists", 'String'>
    readonly tracksId: FieldRef<"Artists", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Artists findUnique
   */
  export type ArtistsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists findUniqueOrThrow
   */
  export type ArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists findFirst
   */
  export type ArtistsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists findFirstOrThrow
   */
  export type ArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists findMany
   */
  export type ArtistsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists create
   */
  export type ArtistsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Artists.
     */
    data: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
  }


  /**
   * Artists createMany
   */
  export type ArtistsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
  }


  /**
   * Artists update
   */
  export type ArtistsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Artists.
     */
    data: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
    /**
     * Choose, which Artists to update.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists updateMany
   */
  export type ArtistsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
  }


  /**
   * Artists upsert
   */
  export type ArtistsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Artists to update in case it exists.
     */
    where: ArtistsWhereUniqueInput
    /**
     * In case the Artists found by the `where` argument doesn't exist, create a new Artists with this data.
     */
    create: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
    /**
     * In case the Artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
  }


  /**
   * Artists delete
   */
  export type ArtistsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter which Artists to delete.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists deleteMany
   */
  export type ArtistsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistsWhereInput
  }


  /**
   * Artists findRaw
   */
  export type ArtistsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artists aggregateRaw
   */
  export type ArtistsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artists.albums
   */
  export type Artists$albumsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    cursor?: AlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Artists.Tracks
   */
  export type Artists$TracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
  }


  /**
   * Artists without action
   */
  export type ArtistsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
  }



  /**
   * Model Albums
   */

  export type AggregateAlbums = {
    _count: AlbumsCountAggregateOutputType | null
    _avg: AlbumsAvgAggregateOutputType | null
    _sum: AlbumsSumAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  export type AlbumsAvgAggregateOutputType = {
    popularity: number | null
  }

  export type AlbumsSumAggregateOutputType = {
    popularity: number | null
  }

  export type AlbumsMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    popularity: number | null
    listType: string | null
  }

  export type AlbumsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    popularity: number | null
    listType: string | null
  }

  export type AlbumsCountAggregateOutputType = {
    id: number
    name: number
    genres: number
    imageUrl: number
    popularity: number
    artistId: number
    listType: number
    _all: number
  }


  export type AlbumsAvgAggregateInputType = {
    popularity?: true
  }

  export type AlbumsSumAggregateInputType = {
    popularity?: true
  }

  export type AlbumsMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    popularity?: true
    listType?: true
  }

  export type AlbumsMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    popularity?: true
    listType?: true
  }

  export type AlbumsCountAggregateInputType = {
    id?: true
    name?: true
    genres?: true
    imageUrl?: true
    popularity?: true
    artistId?: true
    listType?: true
    _all?: true
  }

  export type AlbumsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to aggregate.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumsMaxAggregateInputType
  }

  export type GetAlbumsAggregateType<T extends AlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbums[P]>
      : GetScalarType<T[P], AggregateAlbums[P]>
  }




  export type AlbumsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithAggregationInput | AlbumsOrderByWithAggregationInput[]
    by: AlbumsScalarFieldEnum[] | AlbumsScalarFieldEnum
    having?: AlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumsCountAggregateInputType | true
    _avg?: AlbumsAvgAggregateInputType
    _sum?: AlbumsSumAggregateInputType
    _min?: AlbumsMinAggregateInputType
    _max?: AlbumsMaxAggregateInputType
  }

  export type AlbumsGroupByOutputType = {
    id: string
    name: string
    genres: string[]
    imageUrl: string
    popularity: number
    artistId: string[]
    listType: string
    _count: AlbumsCountAggregateOutputType | null
    _avg: AlbumsAvgAggregateOutputType | null
    _sum: AlbumsSumAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  type GetAlbumsGroupByPayload<T extends AlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
        }
      >
    >


  export type AlbumsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    genres?: boolean
    imageUrl?: boolean
    popularity?: boolean
    artistId?: boolean
    listType?: boolean
    artists?: boolean | Albums$artistsArgs<ExtArgs>
    tracks?: boolean | Albums$tracksArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albums"]>

  export type AlbumsSelectScalar = {
    id?: boolean
    name?: boolean
    genres?: boolean
    imageUrl?: boolean
    popularity?: boolean
    artistId?: boolean
    listType?: boolean
  }

  export type AlbumsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    artists?: boolean | Albums$artistsArgs<ExtArgs>
    tracks?: boolean | Albums$tracksArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Albums"
    objects: {
      artists: Prisma.$ArtistsPayload<ExtArgs>[]
      tracks: Prisma.$TracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      genres: string[]
      imageUrl: string
      popularity: number
      artistId: string[]
      listType: string
    }, ExtArgs["result"]["albums"]>
    composites: {}
  }


  type AlbumsGetPayload<S extends boolean | null | undefined | AlbumsDefaultArgs> = $Result.GetResult<Prisma.$AlbumsPayload, S>

  type AlbumsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AlbumsFindManyArgs, 'select' | 'include'> & {
      select?: AlbumsCountAggregateInputType | true
    }

  export interface AlbumsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Albums'], meta: { name: 'Albums' } }
    /**
     * Find zero or one Albums that matches the filter.
     * @param {AlbumsFindUniqueArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Albums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumsFindUniqueOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindFirstArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Albums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindFirstOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.albums.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.albums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumsWithIdOnly = await prisma.albums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Albums.
     * @param {AlbumsCreateArgs} args - Arguments to create a Albums.
     * @example
     * // Create one Albums
     * const Albums = await prisma.albums.create({
     *   data: {
     *     // ... data to create a Albums
     *   }
     * })
     * 
    **/
    create<T extends AlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsCreateArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {AlbumsCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const albums = await prisma.albums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Albums.
     * @param {AlbumsDeleteArgs} args - Arguments to delete one Albums.
     * @example
     * // Delete one Albums
     * const Albums = await prisma.albums.delete({
     *   where: {
     *     // ... filter to delete one Albums
     *   }
     * })
     * 
    **/
    delete<T extends AlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsDeleteArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Albums.
     * @param {AlbumsUpdateArgs} args - Arguments to update one Albums.
     * @example
     * // Update one Albums
     * const albums = await prisma.albums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpdateArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumsDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.albums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const albums = await prisma.albums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Albums.
     * @param {AlbumsUpsertArgs} args - Arguments to update or create a Albums.
     * @example
     * // Update or create a Albums
     * const albums = await prisma.albums.upsert({
     *   create: {
     *     // ... data to create a Albums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Albums we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpsertArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * @param {AlbumsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const albums = await prisma.albums.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AlbumsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Albums.
     * @param {AlbumsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const albums = await prisma.albums.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AlbumsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.albums.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumsCountArgs>(
      args?: Subset<T, AlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumsAggregateArgs>(args: Subset<T, AlbumsAggregateArgs>): Prisma.PrismaPromise<GetAlbumsAggregateType<T>>

    /**
     * Group by Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsGroupByArgs} args - Group by arguments.
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
      T extends AlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumsGroupByArgs['orderBy'] }
        : { orderBy?: AlbumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Albums model
   */
  readonly fields: AlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Albums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artists<T extends Albums$artistsArgs<ExtArgs> = {}>(args?: Subset<T, Albums$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    tracks<T extends Albums$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Albums$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Albums model
   */ 
  interface AlbumsFieldRefs {
    readonly id: FieldRef<"Albums", 'String'>
    readonly name: FieldRef<"Albums", 'String'>
    readonly genres: FieldRef<"Albums", 'String[]'>
    readonly imageUrl: FieldRef<"Albums", 'String'>
    readonly popularity: FieldRef<"Albums", 'Int'>
    readonly artistId: FieldRef<"Albums", 'String[]'>
    readonly listType: FieldRef<"Albums", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Albums findUnique
   */
  export type AlbumsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums findUniqueOrThrow
   */
  export type AlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums findFirst
   */
  export type AlbumsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums findFirstOrThrow
   */
  export type AlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums findMany
   */
  export type AlbumsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums create
   */
  export type AlbumsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a Albums.
     */
    data: XOR<AlbumsCreateInput, AlbumsUncheckedCreateInput>
  }


  /**
   * Albums createMany
   */
  export type AlbumsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumsCreateManyInput | AlbumsCreateManyInput[]
  }


  /**
   * Albums update
   */
  export type AlbumsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a Albums.
     */
    data: XOR<AlbumsUpdateInput, AlbumsUncheckedUpdateInput>
    /**
     * Choose, which Albums to update.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums updateMany
   */
  export type AlbumsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumsWhereInput
  }


  /**
   * Albums upsert
   */
  export type AlbumsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the Albums to update in case it exists.
     */
    where: AlbumsWhereUniqueInput
    /**
     * In case the Albums found by the `where` argument doesn't exist, create a new Albums with this data.
     */
    create: XOR<AlbumsCreateInput, AlbumsUncheckedCreateInput>
    /**
     * In case the Albums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumsUpdateInput, AlbumsUncheckedUpdateInput>
  }


  /**
   * Albums delete
   */
  export type AlbumsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter which Albums to delete.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums deleteMany
   */
  export type AlbumsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumsWhereInput
  }


  /**
   * Albums findRaw
   */
  export type AlbumsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Albums aggregateRaw
   */
  export type AlbumsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Albums.artists
   */
  export type Albums$artistsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    cursor?: ArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Albums.tracks
   */
  export type Albums$tracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Albums without action
   */
  export type AlbumsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
  }



  /**
   * Model PlayLists
   */

  export type AggregatePlayLists = {
    _count: PlayListsCountAggregateOutputType | null
    _min: PlayListsMinAggregateOutputType | null
    _max: PlayListsMaxAggregateOutputType | null
  }

  export type PlayListsMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    description: string | null
    private: boolean | null
    listType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type PlayListsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    description: string | null
    private: boolean | null
    listType: string | null
    createdAt: Date | null
    updatedAt: Date | null
    usersId: string | null
  }

  export type PlayListsCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    description: number
    private: number
    listType: number
    createdAt: number
    updatedAt: number
    usersId: number
    _all: number
  }


  export type PlayListsMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    description?: true
    private?: true
    listType?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type PlayListsMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    description?: true
    private?: true
    listType?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
  }

  export type PlayListsCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    description?: true
    private?: true
    listType?: true
    createdAt?: true
    updatedAt?: true
    usersId?: true
    _all?: true
  }

  export type PlayListsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayLists to aggregate.
     */
    where?: PlayListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListsOrderByWithRelationInput | PlayListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayLists
    **/
    _count?: true | PlayListsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayListsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayListsMaxAggregateInputType
  }

  export type GetPlayListsAggregateType<T extends PlayListsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayLists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayLists[P]>
      : GetScalarType<T[P], AggregatePlayLists[P]>
  }




  export type PlayListsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PlayListsWhereInput
    orderBy?: PlayListsOrderByWithAggregationInput | PlayListsOrderByWithAggregationInput[]
    by: PlayListsScalarFieldEnum[] | PlayListsScalarFieldEnum
    having?: PlayListsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayListsCountAggregateInputType | true
    _min?: PlayListsMinAggregateInputType
    _max?: PlayListsMaxAggregateInputType
  }

  export type PlayListsGroupByOutputType = {
    id: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date
    updatedAt: Date
    usersId: string
    _count: PlayListsCountAggregateOutputType | null
    _min: PlayListsMinAggregateOutputType | null
    _max: PlayListsMaxAggregateOutputType | null
  }

  type GetPlayListsGroupByPayload<T extends PlayListsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayListsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayListsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayListsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayListsGroupByOutputType[P]>
        }
      >
    >


  export type PlayListsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    description?: boolean
    private?: boolean
    listType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
    tracks?: boolean | PlayLists$tracksArgs<ExtArgs>
    owner?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | PlayListsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playLists"]>

  export type PlayListsSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    description?: boolean
    private?: boolean
    listType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    usersId?: boolean
  }

  export type PlayListsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tracks?: boolean | PlayLists$tracksArgs<ExtArgs>
    owner?: boolean | UsersDefaultArgs<ExtArgs>
    _count?: boolean | PlayListsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlayListsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PlayLists"
    objects: {
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      owner: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      imageUrl: string
      description: string
      private: boolean
      listType: string
      createdAt: Date
      updatedAt: Date
      usersId: string
    }, ExtArgs["result"]["playLists"]>
    composites: {}
  }


  type PlayListsGetPayload<S extends boolean | null | undefined | PlayListsDefaultArgs> = $Result.GetResult<Prisma.$PlayListsPayload, S>

  type PlayListsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PlayListsFindManyArgs, 'select' | 'include'> & {
      select?: PlayListsCountAggregateInputType | true
    }

  export interface PlayListsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayLists'], meta: { name: 'PlayLists' } }
    /**
     * Find zero or one PlayLists that matches the filter.
     * @param {PlayListsFindUniqueArgs} args - Arguments to find a PlayLists
     * @example
     * // Get one PlayLists
     * const playLists = await prisma.playLists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlayListsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlayListsFindUniqueArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PlayLists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlayListsFindUniqueOrThrowArgs} args - Arguments to find a PlayLists
     * @example
     * // Get one PlayLists
     * const playLists = await prisma.playLists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlayListsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayListsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PlayLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsFindFirstArgs} args - Arguments to find a PlayLists
     * @example
     * // Get one PlayLists
     * const playLists = await prisma.playLists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlayListsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayListsFindFirstArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PlayLists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsFindFirstOrThrowArgs} args - Arguments to find a PlayLists
     * @example
     * // Get one PlayLists
     * const playLists = await prisma.playLists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlayListsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayListsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PlayLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayLists
     * const playLists = await prisma.playLists.findMany()
     * 
     * // Get first 10 PlayLists
     * const playLists = await prisma.playLists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playListsWithIdOnly = await prisma.playLists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlayListsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayListsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PlayLists.
     * @param {PlayListsCreateArgs} args - Arguments to create a PlayLists.
     * @example
     * // Create one PlayLists
     * const PlayLists = await prisma.playLists.create({
     *   data: {
     *     // ... data to create a PlayLists
     *   }
     * })
     * 
    **/
    create<T extends PlayListsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayListsCreateArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PlayLists.
     *     @param {PlayListsCreateManyArgs} args - Arguments to create many PlayLists.
     *     @example
     *     // Create many PlayLists
     *     const playLists = await prisma.playLists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlayListsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayListsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlayLists.
     * @param {PlayListsDeleteArgs} args - Arguments to delete one PlayLists.
     * @example
     * // Delete one PlayLists
     * const PlayLists = await prisma.playLists.delete({
     *   where: {
     *     // ... filter to delete one PlayLists
     *   }
     * })
     * 
    **/
    delete<T extends PlayListsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlayListsDeleteArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PlayLists.
     * @param {PlayListsUpdateArgs} args - Arguments to update one PlayLists.
     * @example
     * // Update one PlayLists
     * const playLists = await prisma.playLists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlayListsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlayListsUpdateArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PlayLists.
     * @param {PlayListsDeleteManyArgs} args - Arguments to filter PlayLists to delete.
     * @example
     * // Delete a few PlayLists
     * const { count } = await prisma.playLists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlayListsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlayListsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayLists
     * const playLists = await prisma.playLists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlayListsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlayListsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlayLists.
     * @param {PlayListsUpsertArgs} args - Arguments to update or create a PlayLists.
     * @example
     * // Update or create a PlayLists
     * const playLists = await prisma.playLists.upsert({
     *   create: {
     *     // ... data to create a PlayLists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayLists we want to update
     *   }
     * })
    **/
    upsert<T extends PlayListsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlayListsUpsertArgs<ExtArgs>>
    ): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more PlayLists that matches the filter.
     * @param {PlayListsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const playLists = await prisma.playLists.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PlayListsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PlayLists.
     * @param {PlayListsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const playLists = await prisma.playLists.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PlayListsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsCountArgs} args - Arguments to filter PlayLists to count.
     * @example
     * // Count the number of PlayLists
     * const count = await prisma.playLists.count({
     *   where: {
     *     // ... the filter for the PlayLists we want to count
     *   }
     * })
    **/
    count<T extends PlayListsCountArgs>(
      args?: Subset<T, PlayListsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayListsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayListsAggregateArgs>(args: Subset<T, PlayListsAggregateArgs>): Prisma.PrismaPromise<GetPlayListsAggregateType<T>>

    /**
     * Group by PlayLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayListsGroupByArgs} args - Group by arguments.
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
      T extends PlayListsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayListsGroupByArgs['orderBy'] }
        : { orderBy?: PlayListsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayListsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayListsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayLists model
   */
  readonly fields: PlayListsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayLists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayListsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tracks<T extends PlayLists$tracksArgs<ExtArgs> = {}>(args?: Subset<T, PlayLists$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    owner<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PlayLists model
   */ 
  interface PlayListsFieldRefs {
    readonly id: FieldRef<"PlayLists", 'String'>
    readonly name: FieldRef<"PlayLists", 'String'>
    readonly imageUrl: FieldRef<"PlayLists", 'String'>
    readonly description: FieldRef<"PlayLists", 'String'>
    readonly private: FieldRef<"PlayLists", 'Boolean'>
    readonly listType: FieldRef<"PlayLists", 'String'>
    readonly createdAt: FieldRef<"PlayLists", 'DateTime'>
    readonly updatedAt: FieldRef<"PlayLists", 'DateTime'>
    readonly usersId: FieldRef<"PlayLists", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PlayLists findUnique
   */
  export type PlayListsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where: PlayListsWhereUniqueInput
  }


  /**
   * PlayLists findUniqueOrThrow
   */
  export type PlayListsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where: PlayListsWhereUniqueInput
  }


  /**
   * PlayLists findFirst
   */
  export type PlayListsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where?: PlayListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListsOrderByWithRelationInput | PlayListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayLists.
     */
    cursor?: PlayListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayLists.
     */
    distinct?: PlayListsScalarFieldEnum | PlayListsScalarFieldEnum[]
  }


  /**
   * PlayLists findFirstOrThrow
   */
  export type PlayListsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where?: PlayListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListsOrderByWithRelationInput | PlayListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayLists.
     */
    cursor?: PlayListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayLists.
     */
    distinct?: PlayListsScalarFieldEnum | PlayListsScalarFieldEnum[]
  }


  /**
   * PlayLists findMany
   */
  export type PlayListsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * Filter, which PlayLists to fetch.
     */
    where?: PlayListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayLists to fetch.
     */
    orderBy?: PlayListsOrderByWithRelationInput | PlayListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayLists.
     */
    cursor?: PlayListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayLists.
     */
    skip?: number
    distinct?: PlayListsScalarFieldEnum | PlayListsScalarFieldEnum[]
  }


  /**
   * PlayLists create
   */
  export type PlayListsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayLists.
     */
    data: XOR<PlayListsCreateInput, PlayListsUncheckedCreateInput>
  }


  /**
   * PlayLists createMany
   */
  export type PlayListsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayLists.
     */
    data: PlayListsCreateManyInput | PlayListsCreateManyInput[]
  }


  /**
   * PlayLists update
   */
  export type PlayListsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayLists.
     */
    data: XOR<PlayListsUpdateInput, PlayListsUncheckedUpdateInput>
    /**
     * Choose, which PlayLists to update.
     */
    where: PlayListsWhereUniqueInput
  }


  /**
   * PlayLists updateMany
   */
  export type PlayListsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayLists.
     */
    data: XOR<PlayListsUpdateManyMutationInput, PlayListsUncheckedUpdateManyInput>
    /**
     * Filter which PlayLists to update
     */
    where?: PlayListsWhereInput
  }


  /**
   * PlayLists upsert
   */
  export type PlayListsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayLists to update in case it exists.
     */
    where: PlayListsWhereUniqueInput
    /**
     * In case the PlayLists found by the `where` argument doesn't exist, create a new PlayLists with this data.
     */
    create: XOR<PlayListsCreateInput, PlayListsUncheckedCreateInput>
    /**
     * In case the PlayLists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayListsUpdateInput, PlayListsUncheckedUpdateInput>
  }


  /**
   * PlayLists delete
   */
  export type PlayListsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    /**
     * Filter which PlayLists to delete.
     */
    where: PlayListsWhereUniqueInput
  }


  /**
   * PlayLists deleteMany
   */
  export type PlayListsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayLists to delete
     */
    where?: PlayListsWhereInput
  }


  /**
   * PlayLists findRaw
   */
  export type PlayListsFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PlayLists aggregateRaw
   */
  export type PlayListsAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PlayLists.tracks
   */
  export type PlayLists$tracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * PlayLists without action
   */
  export type PlayListsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
  }



  /**
   * Model Genres
   */

  export type AggregateGenres = {
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  export type GenresMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    color: string | null
  }

  export type GenresMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    color: string | null
  }

  export type GenresCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    tracksId: number
    color: number
    _all: number
  }


  export type GenresMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    color?: true
  }

  export type GenresMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    color?: true
  }

  export type GenresCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    tracksId?: true
    color?: true
    _all?: true
  }

  export type GenresAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to aggregate.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenresMaxAggregateInputType
  }

  export type GetGenresAggregateType<T extends GenresAggregateArgs> = {
        [P in keyof T & keyof AggregateGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenres[P]>
      : GetScalarType<T[P], AggregateGenres[P]>
  }




  export type GenresGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithAggregationInput | GenresOrderByWithAggregationInput[]
    by: GenresScalarFieldEnum[] | GenresScalarFieldEnum
    having?: GenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenresCountAggregateInputType | true
    _min?: GenresMinAggregateInputType
    _max?: GenresMaxAggregateInputType
  }

  export type GenresGroupByOutputType = {
    id: string
    name: string
    imageUrl: string
    tracksId: string[]
    color: string
    _count: GenresCountAggregateOutputType | null
    _min: GenresMinAggregateOutputType | null
    _max: GenresMaxAggregateOutputType | null
  }

  type GetGenresGroupByPayload<T extends GenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenresGroupByOutputType[P]>
            : GetScalarType<T[P], GenresGroupByOutputType[P]>
        }
      >
    >


  export type GenresSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    tracksId?: boolean
    color?: boolean
    tracks?: boolean | Genres$tracksArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genres"]>

  export type GenresSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    tracksId?: boolean
    color?: boolean
  }

  export type GenresInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    tracks?: boolean | Genres$tracksArgs<ExtArgs>
    _count?: boolean | GenresCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenresPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Genres"
    objects: {
      tracks: Prisma.$TracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      imageUrl: string
      tracksId: string[]
      color: string
    }, ExtArgs["result"]["genres"]>
    composites: {}
  }


  type GenresGetPayload<S extends boolean | null | undefined | GenresDefaultArgs> = $Result.GetResult<Prisma.$GenresPayload, S>

  type GenresCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<GenresFindManyArgs, 'select' | 'include'> & {
      select?: GenresCountAggregateInputType | true
    }

  export interface GenresDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genres'], meta: { name: 'Genres' } }
    /**
     * Find zero or one Genres that matches the filter.
     * @param {GenresFindUniqueArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenresFindUniqueArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenresFindUniqueOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindFirstOrThrowArgs} args - Arguments to find a Genres
     * @example
     * // Get one Genres
     * const genres = await prisma.genres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genres.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genresWithIdOnly = await prisma.genres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genres.
     * @param {GenresCreateArgs} args - Arguments to create a Genres.
     * @example
     * // Create one Genres
     * const Genres = await prisma.genres.create({
     *   data: {
     *     // ... data to create a Genres
     *   }
     * })
     * 
    **/
    create<T extends GenresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresCreateArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenresCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genres = await prisma.genres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genres.
     * @param {GenresDeleteArgs} args - Arguments to delete one Genres.
     * @example
     * // Delete one Genres
     * const Genres = await prisma.genres.delete({
     *   where: {
     *     // ... filter to delete one Genres
     *   }
     * })
     * 
    **/
    delete<T extends GenresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenresDeleteArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genres.
     * @param {GenresUpdateArgs} args - Arguments to update one Genres.
     * @example
     * // Update one Genres
     * const genres = await prisma.genres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenresDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genres = await prisma.genres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genres.
     * @param {GenresUpsertArgs} args - Arguments to update or create a Genres.
     * @example
     * // Update or create a Genres
     * const genres = await prisma.genres.upsert({
     *   create: {
     *     // ... data to create a Genres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genres we want to update
     *   }
     * })
    **/
    upsert<T extends GenresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenresUpsertArgs<ExtArgs>>
    ): Prisma__GenresClient<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * @param {GenresFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const genres = await prisma.genres.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GenresFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Genres.
     * @param {GenresAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const genres = await prisma.genres.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GenresAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genres.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenresCountArgs>(
      args?: Subset<T, GenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenresAggregateArgs>(args: Subset<T, GenresAggregateArgs>): Prisma.PrismaPromise<GetGenresAggregateType<T>>

    /**
     * Group by Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenresGroupByArgs} args - Group by arguments.
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
      T extends GenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenresGroupByArgs['orderBy'] }
        : { orderBy?: GenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genres model
   */
  readonly fields: GenresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenresClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tracks<T extends Genres$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Genres$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genres model
   */ 
  interface GenresFieldRefs {
    readonly id: FieldRef<"Genres", 'String'>
    readonly name: FieldRef<"Genres", 'String'>
    readonly imageUrl: FieldRef<"Genres", 'String'>
    readonly tracksId: FieldRef<"Genres", 'String[]'>
    readonly color: FieldRef<"Genres", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Genres findUnique
   */
  export type GenresFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findUniqueOrThrow
   */
  export type GenresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres findFirst
   */
  export type GenresFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres findFirstOrThrow
   */
  export type GenresFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres findMany
   */
  export type GenresFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Genres create
   */
  export type GenresCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to create a Genres.
     */
    data: XOR<GenresCreateInput, GenresUncheckedCreateInput>
  }


  /**
   * Genres createMany
   */
  export type GenresCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenresCreateManyInput | GenresCreateManyInput[]
  }


  /**
   * Genres update
   */
  export type GenresUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The data needed to update a Genres.
     */
    data: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
    /**
     * Choose, which Genres to update.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres updateMany
   */
  export type GenresUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenresWhereInput
  }


  /**
   * Genres upsert
   */
  export type GenresUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * The filter to search for the Genres to update in case it exists.
     */
    where: GenresWhereUniqueInput
    /**
     * In case the Genres found by the `where` argument doesn't exist, create a new Genres with this data.
     */
    create: XOR<GenresCreateInput, GenresUncheckedCreateInput>
    /**
     * In case the Genres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenresUpdateInput, GenresUncheckedUpdateInput>
  }


  /**
   * Genres delete
   */
  export type GenresDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    /**
     * Filter which Genres to delete.
     */
    where: GenresWhereUniqueInput
  }


  /**
   * Genres deleteMany
   */
  export type GenresDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenresWhereInput
  }


  /**
   * Genres findRaw
   */
  export type GenresFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genres aggregateRaw
   */
  export type GenresAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genres.tracks
   */
  export type Genres$tracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Genres without action
   */
  export type GenresDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
  }



  /**
   * Model Tracks
   */

  export type AggregateTracks = {
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  export type TracksAvgAggregateOutputType = {
    likes: number | null
    duration: number | null
  }

  export type TracksSumAggregateOutputType = {
    likes: number | null
    duration: number | null
  }

  export type TracksMinAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    likes: number | null
    audioUrl: string | null
    verified: boolean | null
    duration: number | null
    imageId: string | null
    audioId: string | null
    usersId: string | null
    albumsId: string | null
    playListId: string | null
  }

  export type TracksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    imageUrl: string | null
    likes: number | null
    audioUrl: string | null
    verified: boolean | null
    duration: number | null
    imageId: string | null
    audioId: string | null
    usersId: string | null
    albumsId: string | null
    playListId: string | null
  }

  export type TracksCountAggregateOutputType = {
    id: number
    name: number
    imageUrl: number
    likes: number
    genresId: number
    audioUrl: number
    verified: number
    duration: number
    imageId: number
    audioId: number
    usersId: number
    albumsId: number
    playListId: number
    _all: number
  }


  export type TracksAvgAggregateInputType = {
    likes?: true
    duration?: true
  }

  export type TracksSumAggregateInputType = {
    likes?: true
    duration?: true
  }

  export type TracksMinAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    likes?: true
    audioUrl?: true
    verified?: true
    duration?: true
    imageId?: true
    audioId?: true
    usersId?: true
    albumsId?: true
    playListId?: true
  }

  export type TracksMaxAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    likes?: true
    audioUrl?: true
    verified?: true
    duration?: true
    imageId?: true
    audioId?: true
    usersId?: true
    albumsId?: true
    playListId?: true
  }

  export type TracksCountAggregateInputType = {
    id?: true
    name?: true
    imageUrl?: true
    likes?: true
    genresId?: true
    audioUrl?: true
    verified?: true
    duration?: true
    imageId?: true
    audioId?: true
    usersId?: true
    albumsId?: true
    playListId?: true
    _all?: true
  }

  export type TracksAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to aggregate.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TracksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TracksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksMaxAggregateInputType
  }

  export type GetTracksAggregateType<T extends TracksAggregateArgs> = {
        [P in keyof T & keyof AggregateTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracks[P]>
      : GetScalarType<T[P], AggregateTracks[P]>
  }




  export type TracksGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithAggregationInput | TracksOrderByWithAggregationInput[]
    by: TracksScalarFieldEnum[] | TracksScalarFieldEnum
    having?: TracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksCountAggregateInputType | true
    _avg?: TracksAvgAggregateInputType
    _sum?: TracksSumAggregateInputType
    _min?: TracksMinAggregateInputType
    _max?: TracksMaxAggregateInputType
  }

  export type TracksGroupByOutputType = {
    id: string
    name: string
    imageUrl: string
    likes: number
    genresId: string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId: string | null
    albumsId: string | null
    playListId: string | null
    _count: TracksCountAggregateOutputType | null
    _avg: TracksAvgAggregateOutputType | null
    _sum: TracksSumAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  type GetTracksGroupByPayload<T extends TracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksGroupByOutputType[P]>
            : GetScalarType<T[P], TracksGroupByOutputType[P]>
        }
      >
    >


  export type TracksSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    likes?: boolean
    genresId?: boolean
    audioUrl?: boolean
    verified?: boolean
    duration?: boolean
    imageId?: boolean
    audioId?: boolean
    usersId?: boolean
    albumsId?: boolean
    playListId?: boolean
    artists?: boolean | Tracks$artistsArgs<ExtArgs>
    genres?: boolean | Tracks$genresArgs<ExtArgs>
    Users?: boolean | Tracks$UsersArgs<ExtArgs>
    Albums?: boolean | Tracks$AlbumsArgs<ExtArgs>
    PlayList?: boolean | Tracks$PlayListArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectScalar = {
    id?: boolean
    name?: boolean
    imageUrl?: boolean
    likes?: boolean
    genresId?: boolean
    audioUrl?: boolean
    verified?: boolean
    duration?: boolean
    imageId?: boolean
    audioId?: boolean
    usersId?: boolean
    albumsId?: boolean
    playListId?: boolean
  }

  export type TracksInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    artists?: boolean | Tracks$artistsArgs<ExtArgs>
    genres?: boolean | Tracks$genresArgs<ExtArgs>
    Users?: boolean | Tracks$UsersArgs<ExtArgs>
    Albums?: boolean | Tracks$AlbumsArgs<ExtArgs>
    PlayList?: boolean | Tracks$PlayListArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TracksPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Tracks"
    objects: {
      artists: Prisma.$ArtistsPayload<ExtArgs>[]
      genres: Prisma.$GenresPayload<ExtArgs>[]
      Users: Prisma.$UsersPayload<ExtArgs> | null
      Albums: Prisma.$AlbumsPayload<ExtArgs> | null
      PlayList: Prisma.$PlayListsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string
      imageUrl: string
      likes: number
      genresId: string[]
      audioUrl: string
      verified: boolean
      duration: number
      imageId: string
      audioId: string
      usersId: string | null
      albumsId: string | null
      playListId: string | null
    }, ExtArgs["result"]["tracks"]>
    composites: {}
  }


  type TracksGetPayload<S extends boolean | null | undefined | TracksDefaultArgs> = $Result.GetResult<Prisma.$TracksPayload, S>

  type TracksCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<TracksFindManyArgs, 'select' | 'include'> & {
      select?: TracksCountAggregateInputType | true
    }

  export interface TracksDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tracks'], meta: { name: 'Tracks' } }
    /**
     * Find zero or one Tracks that matches the filter.
     * @param {TracksFindUniqueArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TracksFindUniqueArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TracksFindUniqueOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindFirstArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.tracks.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.tracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tracksWithIdOnly = await prisma.tracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tracks.
     * @param {TracksCreateArgs} args - Arguments to create a Tracks.
     * @example
     * // Create one Tracks
     * const Tracks = await prisma.tracks.create({
     *   data: {
     *     // ... data to create a Tracks
     *   }
     * })
     * 
    **/
    create<T extends TracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksCreateArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tracks.
     *     @param {TracksCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const tracks = await prisma.tracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tracks.
     * @param {TracksDeleteArgs} args - Arguments to delete one Tracks.
     * @example
     * // Delete one Tracks
     * const Tracks = await prisma.tracks.delete({
     *   where: {
     *     // ... filter to delete one Tracks
     *   }
     * })
     * 
    **/
    delete<T extends TracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TracksDeleteArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tracks.
     * @param {TracksUpdateArgs} args - Arguments to update one Tracks.
     * @example
     * // Update one Tracks
     * const tracks = await prisma.tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpdateArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TracksDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracks.
     * @param {TracksUpsertArgs} args - Arguments to update or create a Tracks.
     * @example
     * // Update or create a Tracks
     * const tracks = await prisma.tracks.upsert({
     *   create: {
     *     // ... data to create a Tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracks we want to update
     *   }
     * })
    **/
    upsert<T extends TracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpsertArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * @param {TracksFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tracks = await prisma.tracks.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TracksFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tracks.
     * @param {TracksAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tracks = await prisma.tracks.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TracksAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.tracks.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TracksCountArgs>(
      args?: Subset<T, TracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TracksAggregateArgs>(args: Subset<T, TracksAggregateArgs>): Prisma.PrismaPromise<GetTracksAggregateType<T>>

    /**
     * Group by Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksGroupByArgs} args - Group by arguments.
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
      T extends TracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksGroupByArgs['orderBy'] }
        : { orderBy?: TracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tracks model
   */
  readonly fields: TracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TracksClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artists<T extends Tracks$artistsArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    genres<T extends Tracks$genresArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenresPayload<ExtArgs>, T, 'findMany'> | Null>;

    Users<T extends Tracks$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$UsersArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Albums<T extends Tracks$AlbumsArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$AlbumsArgs<ExtArgs>>): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    PlayList<T extends Tracks$PlayListArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$PlayListArgs<ExtArgs>>): Prisma__PlayListsClient<$Result.GetResult<Prisma.$PlayListsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tracks model
   */ 
  interface TracksFieldRefs {
    readonly id: FieldRef<"Tracks", 'String'>
    readonly name: FieldRef<"Tracks", 'String'>
    readonly imageUrl: FieldRef<"Tracks", 'String'>
    readonly likes: FieldRef<"Tracks", 'Int'>
    readonly genresId: FieldRef<"Tracks", 'String[]'>
    readonly audioUrl: FieldRef<"Tracks", 'String'>
    readonly verified: FieldRef<"Tracks", 'Boolean'>
    readonly duration: FieldRef<"Tracks", 'Int'>
    readonly imageId: FieldRef<"Tracks", 'String'>
    readonly audioId: FieldRef<"Tracks", 'String'>
    readonly usersId: FieldRef<"Tracks", 'String'>
    readonly albumsId: FieldRef<"Tracks", 'String'>
    readonly playListId: FieldRef<"Tracks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tracks findUnique
   */
  export type TracksFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks findUniqueOrThrow
   */
  export type TracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks findFirst
   */
  export type TracksFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks findFirstOrThrow
   */
  export type TracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks findMany
   */
  export type TracksFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks create
   */
  export type TracksCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tracks.
     */
    data: XOR<TracksCreateInput, TracksUncheckedCreateInput>
  }


  /**
   * Tracks createMany
   */
  export type TracksCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TracksCreateManyInput | TracksCreateManyInput[]
  }


  /**
   * Tracks update
   */
  export type TracksUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tracks.
     */
    data: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
    /**
     * Choose, which Tracks to update.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks updateMany
   */
  export type TracksUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TracksWhereInput
  }


  /**
   * Tracks upsert
   */
  export type TracksUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tracks to update in case it exists.
     */
    where: TracksWhereUniqueInput
    /**
     * In case the Tracks found by the `where` argument doesn't exist, create a new Tracks with this data.
     */
    create: XOR<TracksCreateInput, TracksUncheckedCreateInput>
    /**
     * In case the Tracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
  }


  /**
   * Tracks delete
   */
  export type TracksDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter which Tracks to delete.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks deleteMany
   */
  export type TracksDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TracksWhereInput
  }


  /**
   * Tracks findRaw
   */
  export type TracksFindRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Tracks aggregateRaw
   */
  export type TracksAggregateRawArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Tracks.artists
   */
  export type Tracks$artistsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    cursor?: ArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Tracks.genres
   */
  export type Tracks$genresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genres
     */
    select?: GenresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenresInclude<ExtArgs> | null
    where?: GenresWhereInput
    orderBy?: GenresOrderByWithRelationInput | GenresOrderByWithRelationInput[]
    cursor?: GenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GenresScalarFieldEnum | GenresScalarFieldEnum[]
  }


  /**
   * Tracks.Users
   */
  export type Tracks$UsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }


  /**
   * Tracks.Albums
   */
  export type Tracks$AlbumsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
  }


  /**
   * Tracks.PlayList
   */
  export type Tracks$PlayListArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayLists
     */
    select?: PlayListsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlayListsInclude<ExtArgs> | null
    where?: PlayListsWhereInput
  }


  /**
   * Tracks without action
   */
  export type TracksDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UsersScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    email: 'email',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    libraryList: 'libraryList',
    usersId: 'usersId',
    followersId: 'followersId'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const FollowersScalarFieldEnum: {
    id: 'id',
    usersId: 'usersId'
  };

  export type FollowersScalarFieldEnum = (typeof FollowersScalarFieldEnum)[keyof typeof FollowersScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    genres: 'genres',
    imageUrl: 'imageUrl',
    popularity: 'popularity',
    albumsId: 'albumsId',
    listType: 'listType',
    tracksId: 'tracksId'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const AlbumsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    genres: 'genres',
    imageUrl: 'imageUrl',
    popularity: 'popularity',
    artistId: 'artistId',
    listType: 'listType'
  };

  export type AlbumsScalarFieldEnum = (typeof AlbumsScalarFieldEnum)[keyof typeof AlbumsScalarFieldEnum]


  export const PlayListsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    description: 'description',
    private: 'private',
    listType: 'listType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    usersId: 'usersId'
  };

  export type PlayListsScalarFieldEnum = (typeof PlayListsScalarFieldEnum)[keyof typeof PlayListsScalarFieldEnum]


  export const GenresScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    tracksId: 'tracksId',
    color: 'color'
  };

  export type GenresScalarFieldEnum = (typeof GenresScalarFieldEnum)[keyof typeof GenresScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    imageUrl: 'imageUrl',
    likes: 'likes',
    genresId: 'genresId',
    audioUrl: 'audioUrl',
    verified: 'verified',
    duration: 'duration',
    imageId: 'imageId',
    audioId: 'audioId',
    usersId: 'usersId',
    albumsId: 'albumsId',
    playListId: 'playListId'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    userName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    imageUrl?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    libraryList?: StringNullableListFilter<"Users">
    usersId?: StringNullableFilter<"Users"> | string | null
    followersId?: StringNullableListFilter<"Users">
    trackList?: TracksListRelationFilter
    PlayList?: PlayListsListRelationFilter
    followers?: FollowersListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryList?: SortOrder
    usersId?: SortOrder
    followersId?: SortOrder
    trackList?: TracksOrderByRelationAggregateInput
    PlayList?: PlayListsOrderByRelationAggregateInput
    followers?: FollowersOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    userName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    imageUrl?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    libraryList?: StringNullableListFilter<"Users">
    usersId?: StringNullableFilter<"Users"> | string | null
    followersId?: StringNullableListFilter<"Users">
    trackList?: TracksListRelationFilter
    PlayList?: PlayListsListRelationFilter
    followers?: FollowersListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryList?: SortOrder
    usersId?: SortOrder
    followersId?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    userName?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    imageUrl?: StringWithAggregatesFilter<"Users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Users"> | Date | string
    libraryList?: StringNullableListFilter<"Users">
    usersId?: StringNullableWithAggregatesFilter<"Users"> | string | null
    followersId?: StringNullableListFilter<"Users">
  }

  export type FollowersWhereInput = {
    AND?: FollowersWhereInput | FollowersWhereInput[]
    OR?: FollowersWhereInput[]
    NOT?: FollowersWhereInput | FollowersWhereInput[]
    id?: StringFilter<"Followers"> | string
    usersId?: StringNullableListFilter<"Followers">
    followers?: UsersListRelationFilter
  }

  export type FollowersOrderByWithRelationInput = {
    id?: SortOrder
    usersId?: SortOrder
    followers?: UsersOrderByRelationAggregateInput
  }

  export type FollowersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FollowersWhereInput | FollowersWhereInput[]
    OR?: FollowersWhereInput[]
    NOT?: FollowersWhereInput | FollowersWhereInput[]
    usersId?: StringNullableListFilter<"Followers">
    followers?: UsersListRelationFilter
  }, "id">

  export type FollowersOrderByWithAggregationInput = {
    id?: SortOrder
    usersId?: SortOrder
    _count?: FollowersCountOrderByAggregateInput
    _max?: FollowersMaxOrderByAggregateInput
    _min?: FollowersMinOrderByAggregateInput
  }

  export type FollowersScalarWhereWithAggregatesInput = {
    AND?: FollowersScalarWhereWithAggregatesInput | FollowersScalarWhereWithAggregatesInput[]
    OR?: FollowersScalarWhereWithAggregatesInput[]
    NOT?: FollowersScalarWhereWithAggregatesInput | FollowersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Followers"> | string
    usersId?: StringNullableListFilter<"Followers">
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    genres?: StringNullableListFilter<"Artists">
    imageUrl?: StringFilter<"Artists"> | string
    popularity?: IntFilter<"Artists"> | number
    albumsId?: StringNullableListFilter<"Artists">
    listType?: StringFilter<"Artists"> | string
    tracksId?: StringNullableFilter<"Artists"> | string | null
    albums?: AlbumsListRelationFilter
    Tracks?: XOR<TracksNullableRelationFilter, TracksWhereInput> | null
  }

  export type ArtistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    genres?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    albumsId?: SortOrder
    listType?: SortOrder
    tracksId?: SortOrder
    albums?: AlbumsOrderByRelationAggregateInput
    Tracks?: TracksOrderByWithRelationInput
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    name?: StringFilter<"Artists"> | string
    genres?: StringNullableListFilter<"Artists">
    imageUrl?: StringFilter<"Artists"> | string
    popularity?: IntFilter<"Artists"> | number
    albumsId?: StringNullableListFilter<"Artists">
    listType?: StringFilter<"Artists"> | string
    tracksId?: StringNullableFilter<"Artists"> | string | null
    albums?: AlbumsListRelationFilter
    Tracks?: XOR<TracksNullableRelationFilter, TracksWhereInput> | null
  }, "id">

  export type ArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    genres?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    albumsId?: SortOrder
    listType?: SortOrder
    tracksId?: SortOrder
    _count?: ArtistsCountOrderByAggregateInput
    _avg?: ArtistsAvgOrderByAggregateInput
    _max?: ArtistsMaxOrderByAggregateInput
    _min?: ArtistsMinOrderByAggregateInput
    _sum?: ArtistsSumOrderByAggregateInput
  }

  export type ArtistsScalarWhereWithAggregatesInput = {
    AND?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    OR?: ArtistsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artists"> | string
    name?: StringWithAggregatesFilter<"Artists"> | string
    genres?: StringNullableListFilter<"Artists">
    imageUrl?: StringWithAggregatesFilter<"Artists"> | string
    popularity?: IntWithAggregatesFilter<"Artists"> | number
    albumsId?: StringNullableListFilter<"Artists">
    listType?: StringWithAggregatesFilter<"Artists"> | string
    tracksId?: StringNullableWithAggregatesFilter<"Artists"> | string | null
  }

  export type AlbumsWhereInput = {
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    genres?: StringNullableListFilter<"Albums">
    imageUrl?: StringFilter<"Albums"> | string
    popularity?: IntFilter<"Albums"> | number
    artistId?: StringNullableListFilter<"Albums">
    listType?: StringFilter<"Albums"> | string
    artists?: ArtistsListRelationFilter
    tracks?: TracksListRelationFilter
  }

  export type AlbumsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    genres?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    artistId?: SortOrder
    listType?: SortOrder
    artists?: ArtistsOrderByRelationAggregateInput
    tracks?: TracksOrderByRelationAggregateInput
  }

  export type AlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    name?: StringFilter<"Albums"> | string
    genres?: StringNullableListFilter<"Albums">
    imageUrl?: StringFilter<"Albums"> | string
    popularity?: IntFilter<"Albums"> | number
    artistId?: StringNullableListFilter<"Albums">
    listType?: StringFilter<"Albums"> | string
    artists?: ArtistsListRelationFilter
    tracks?: TracksListRelationFilter
  }, "id">

  export type AlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    genres?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    artistId?: SortOrder
    listType?: SortOrder
    _count?: AlbumsCountOrderByAggregateInput
    _avg?: AlbumsAvgOrderByAggregateInput
    _max?: AlbumsMaxOrderByAggregateInput
    _min?: AlbumsMinOrderByAggregateInput
    _sum?: AlbumsSumOrderByAggregateInput
  }

  export type AlbumsScalarWhereWithAggregatesInput = {
    AND?: AlbumsScalarWhereWithAggregatesInput | AlbumsScalarWhereWithAggregatesInput[]
    OR?: AlbumsScalarWhereWithAggregatesInput[]
    NOT?: AlbumsScalarWhereWithAggregatesInput | AlbumsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Albums"> | string
    name?: StringWithAggregatesFilter<"Albums"> | string
    genres?: StringNullableListFilter<"Albums">
    imageUrl?: StringWithAggregatesFilter<"Albums"> | string
    popularity?: IntWithAggregatesFilter<"Albums"> | number
    artistId?: StringNullableListFilter<"Albums">
    listType?: StringWithAggregatesFilter<"Albums"> | string
  }

  export type PlayListsWhereInput = {
    AND?: PlayListsWhereInput | PlayListsWhereInput[]
    OR?: PlayListsWhereInput[]
    NOT?: PlayListsWhereInput | PlayListsWhereInput[]
    id?: StringFilter<"PlayLists"> | string
    name?: StringFilter<"PlayLists"> | string
    imageUrl?: StringFilter<"PlayLists"> | string
    description?: StringFilter<"PlayLists"> | string
    private?: BoolFilter<"PlayLists"> | boolean
    listType?: StringFilter<"PlayLists"> | string
    createdAt?: DateTimeFilter<"PlayLists"> | Date | string
    updatedAt?: DateTimeFilter<"PlayLists"> | Date | string
    usersId?: StringFilter<"PlayLists"> | string
    tracks?: TracksListRelationFilter
    owner?: XOR<UsersRelationFilter, UsersWhereInput>
  }

  export type PlayListsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    private?: SortOrder
    listType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
    tracks?: TracksOrderByRelationAggregateInput
    owner?: UsersOrderByWithRelationInput
  }

  export type PlayListsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlayListsWhereInput | PlayListsWhereInput[]
    OR?: PlayListsWhereInput[]
    NOT?: PlayListsWhereInput | PlayListsWhereInput[]
    name?: StringFilter<"PlayLists"> | string
    imageUrl?: StringFilter<"PlayLists"> | string
    description?: StringFilter<"PlayLists"> | string
    private?: BoolFilter<"PlayLists"> | boolean
    listType?: StringFilter<"PlayLists"> | string
    createdAt?: DateTimeFilter<"PlayLists"> | Date | string
    updatedAt?: DateTimeFilter<"PlayLists"> | Date | string
    usersId?: StringFilter<"PlayLists"> | string
    tracks?: TracksListRelationFilter
    owner?: XOR<UsersRelationFilter, UsersWhereInput>
  }, "id">

  export type PlayListsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    private?: SortOrder
    listType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
    _count?: PlayListsCountOrderByAggregateInput
    _max?: PlayListsMaxOrderByAggregateInput
    _min?: PlayListsMinOrderByAggregateInput
  }

  export type PlayListsScalarWhereWithAggregatesInput = {
    AND?: PlayListsScalarWhereWithAggregatesInput | PlayListsScalarWhereWithAggregatesInput[]
    OR?: PlayListsScalarWhereWithAggregatesInput[]
    NOT?: PlayListsScalarWhereWithAggregatesInput | PlayListsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayLists"> | string
    name?: StringWithAggregatesFilter<"PlayLists"> | string
    imageUrl?: StringWithAggregatesFilter<"PlayLists"> | string
    description?: StringWithAggregatesFilter<"PlayLists"> | string
    private?: BoolWithAggregatesFilter<"PlayLists"> | boolean
    listType?: StringWithAggregatesFilter<"PlayLists"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlayLists"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PlayLists"> | Date | string
    usersId?: StringWithAggregatesFilter<"PlayLists"> | string
  }

  export type GenresWhereInput = {
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    id?: StringFilter<"Genres"> | string
    name?: StringFilter<"Genres"> | string
    imageUrl?: StringFilter<"Genres"> | string
    tracksId?: StringNullableListFilter<"Genres">
    color?: StringFilter<"Genres"> | string
    tracks?: TracksListRelationFilter
  }

  export type GenresOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tracksId?: SortOrder
    color?: SortOrder
    tracks?: TracksOrderByRelationAggregateInput
  }

  export type GenresWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GenresWhereInput | GenresWhereInput[]
    OR?: GenresWhereInput[]
    NOT?: GenresWhereInput | GenresWhereInput[]
    name?: StringFilter<"Genres"> | string
    imageUrl?: StringFilter<"Genres"> | string
    tracksId?: StringNullableListFilter<"Genres">
    color?: StringFilter<"Genres"> | string
    tracks?: TracksListRelationFilter
  }, "id">

  export type GenresOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tracksId?: SortOrder
    color?: SortOrder
    _count?: GenresCountOrderByAggregateInput
    _max?: GenresMaxOrderByAggregateInput
    _min?: GenresMinOrderByAggregateInput
  }

  export type GenresScalarWhereWithAggregatesInput = {
    AND?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    OR?: GenresScalarWhereWithAggregatesInput[]
    NOT?: GenresScalarWhereWithAggregatesInput | GenresScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genres"> | string
    name?: StringWithAggregatesFilter<"Genres"> | string
    imageUrl?: StringWithAggregatesFilter<"Genres"> | string
    tracksId?: StringNullableListFilter<"Genres">
    color?: StringWithAggregatesFilter<"Genres"> | string
  }

  export type TracksWhereInput = {
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    id?: StringFilter<"Tracks"> | string
    name?: StringFilter<"Tracks"> | string
    imageUrl?: StringFilter<"Tracks"> | string
    likes?: IntFilter<"Tracks"> | number
    genresId?: StringNullableListFilter<"Tracks">
    audioUrl?: StringFilter<"Tracks"> | string
    verified?: BoolFilter<"Tracks"> | boolean
    duration?: IntFilter<"Tracks"> | number
    imageId?: StringFilter<"Tracks"> | string
    audioId?: StringFilter<"Tracks"> | string
    usersId?: StringNullableFilter<"Tracks"> | string | null
    albumsId?: StringNullableFilter<"Tracks"> | string | null
    playListId?: StringNullableFilter<"Tracks"> | string | null
    artists?: ArtistsListRelationFilter
    genres?: GenresListRelationFilter
    Users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
    Albums?: XOR<AlbumsNullableRelationFilter, AlbumsWhereInput> | null
    PlayList?: XOR<PlayListsNullableRelationFilter, PlayListsWhereInput> | null
  }

  export type TracksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    genresId?: SortOrder
    audioUrl?: SortOrder
    verified?: SortOrder
    duration?: SortOrder
    imageId?: SortOrder
    audioId?: SortOrder
    usersId?: SortOrder
    albumsId?: SortOrder
    playListId?: SortOrder
    artists?: ArtistsOrderByRelationAggregateInput
    genres?: GenresOrderByRelationAggregateInput
    Users?: UsersOrderByWithRelationInput
    Albums?: AlbumsOrderByWithRelationInput
    PlayList?: PlayListsOrderByWithRelationInput
  }

  export type TracksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    name?: StringFilter<"Tracks"> | string
    imageUrl?: StringFilter<"Tracks"> | string
    likes?: IntFilter<"Tracks"> | number
    genresId?: StringNullableListFilter<"Tracks">
    audioUrl?: StringFilter<"Tracks"> | string
    verified?: BoolFilter<"Tracks"> | boolean
    duration?: IntFilter<"Tracks"> | number
    imageId?: StringFilter<"Tracks"> | string
    audioId?: StringFilter<"Tracks"> | string
    usersId?: StringNullableFilter<"Tracks"> | string | null
    albumsId?: StringNullableFilter<"Tracks"> | string | null
    playListId?: StringNullableFilter<"Tracks"> | string | null
    artists?: ArtistsListRelationFilter
    genres?: GenresListRelationFilter
    Users?: XOR<UsersNullableRelationFilter, UsersWhereInput> | null
    Albums?: XOR<AlbumsNullableRelationFilter, AlbumsWhereInput> | null
    PlayList?: XOR<PlayListsNullableRelationFilter, PlayListsWhereInput> | null
  }, "id">

  export type TracksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    genresId?: SortOrder
    audioUrl?: SortOrder
    verified?: SortOrder
    duration?: SortOrder
    imageId?: SortOrder
    audioId?: SortOrder
    usersId?: SortOrder
    albumsId?: SortOrder
    playListId?: SortOrder
    _count?: TracksCountOrderByAggregateInput
    _avg?: TracksAvgOrderByAggregateInput
    _max?: TracksMaxOrderByAggregateInput
    _min?: TracksMinOrderByAggregateInput
    _sum?: TracksSumOrderByAggregateInput
  }

  export type TracksScalarWhereWithAggregatesInput = {
    AND?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    OR?: TracksScalarWhereWithAggregatesInput[]
    NOT?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tracks"> | string
    name?: StringWithAggregatesFilter<"Tracks"> | string
    imageUrl?: StringWithAggregatesFilter<"Tracks"> | string
    likes?: IntWithAggregatesFilter<"Tracks"> | number
    genresId?: StringNullableListFilter<"Tracks">
    audioUrl?: StringWithAggregatesFilter<"Tracks"> | string
    verified?: BoolWithAggregatesFilter<"Tracks"> | boolean
    duration?: IntWithAggregatesFilter<"Tracks"> | number
    imageId?: StringWithAggregatesFilter<"Tracks"> | string
    audioId?: StringWithAggregatesFilter<"Tracks"> | string
    usersId?: StringNullableWithAggregatesFilter<"Tracks"> | string | null
    albumsId?: StringNullableWithAggregatesFilter<"Tracks"> | string | null
    playListId?: StringNullableWithAggregatesFilter<"Tracks"> | string | null
  }

  export type UsersCreateInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    trackList?: TracksCreateNestedManyWithoutUsersInput
    PlayList?: PlayListsCreateNestedManyWithoutOwnerInput
    followers?: FollowersCreateNestedManyWithoutFollowersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    followersId?: UsersCreatefollowersIdInput | string[]
    trackList?: TracksUncheckedCreateNestedManyWithoutUsersInput
    PlayList?: PlayListsUncheckedCreateNestedManyWithoutOwnerInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UsersUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    trackList?: TracksUpdateManyWithoutUsersNestedInput
    PlayList?: PlayListsUpdateManyWithoutOwnerNestedInput
    followers?: FollowersUpdateManyWithoutFollowersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    followersId?: UsersUpdatefollowersIdInput | string[]
    trackList?: TracksUncheckedUpdateManyWithoutUsersNestedInput
    PlayList?: PlayListsUncheckedUpdateManyWithoutOwnerNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    followersId?: UsersCreatefollowersIdInput | string[]
  }

  export type UsersUpdateManyMutationInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    followersId?: UsersUpdatefollowersIdInput | string[]
  }

  export type FollowersCreateInput = {
    id?: string
    followers?: UsersCreateNestedManyWithoutFollowersInput
  }

  export type FollowersUncheckedCreateInput = {
    id?: string
    usersId?: FollowersCreateusersIdInput | string[]
    followers?: UsersUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type FollowersUpdateInput = {
    followers?: UsersUpdateManyWithoutFollowersNestedInput
  }

  export type FollowersUncheckedUpdateInput = {
    usersId?: FollowersUpdateusersIdInput | string[]
    followers?: UsersUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type FollowersCreateManyInput = {
    id?: string
    usersId?: FollowersCreateusersIdInput | string[]
  }

  export type FollowersUpdateManyMutationInput = {

  }

  export type FollowersUncheckedUpdateManyInput = {
    usersId?: FollowersUpdateusersIdInput | string[]
  }

  export type ArtistsCreateInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    listType: string
    albums?: AlbumsCreateNestedManyWithoutArtistsInput
    Tracks?: TracksCreateNestedOneWithoutArtistsInput
  }

  export type ArtistsUncheckedCreateInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    albumsId?: ArtistsCreatealbumsIdInput | string[]
    listType: string
    tracksId?: string | null
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistsInput
  }

  export type ArtistsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutArtistsNestedInput
    Tracks?: TracksUpdateOneWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    albumsId?: ArtistsUpdatealbumsIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    tracksId?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUncheckedUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistsCreateManyInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    albumsId?: ArtistsCreatealbumsIdInput | string[]
    listType: string
    tracksId?: string | null
  }

  export type ArtistsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    albumsId?: ArtistsUpdatealbumsIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    tracksId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumsCreateInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    listType: string
    artists?: ArtistsCreateNestedManyWithoutAlbumsInput
    tracks?: TracksCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    artistId?: AlbumsCreateartistIdInput | string[]
    listType: string
    artists?: ArtistsUncheckedCreateNestedManyWithoutAlbumsInput
    tracks?: TracksUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutAlbumsNestedInput
    tracks?: TracksUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    artistId?: AlbumsUpdateartistIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUncheckedUpdateManyWithoutAlbumsNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsCreateManyInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    artistId?: AlbumsCreateartistIdInput | string[]
    listType: string
  }

  export type AlbumsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    artistId?: AlbumsUpdateartistIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
  }

  export type PlayListsCreateInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    tracks?: TracksCreateNestedManyWithoutPlayListInput
    owner: UsersCreateNestedOneWithoutPlayListInput
  }

  export type PlayListsUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    usersId: string
    tracks?: TracksUncheckedCreateNestedManyWithoutPlayListInput
  }

  export type PlayListsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TracksUpdateManyWithoutPlayListNestedInput
    owner?: UsersUpdateOneRequiredWithoutPlayListNestedInput
  }

  export type PlayListsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutPlayListNestedInput
  }

  export type PlayListsCreateManyInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    usersId: string
  }

  export type PlayListsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayListsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: StringFieldUpdateOperationsInput | string
  }

  export type GenresCreateInput = {
    id?: string
    name: string
    imageUrl: string
    color: string
    tracks?: TracksCreateNestedManyWithoutGenresInput
  }

  export type GenresUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl: string
    tracksId?: GenresCreatetracksIdInput | string[]
    color: string
    tracks?: TracksUncheckedCreateNestedManyWithoutGenresInput
  }

  export type GenresUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutGenresNestedInput
  }

  export type GenresUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tracksId?: GenresUpdatetracksIdInput | string[]
    color?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutGenresNestedInput
  }

  export type GenresCreateManyInput = {
    id?: string
    name: string
    imageUrl: string
    tracksId?: GenresCreatetracksIdInput | string[]
    color: string
  }

  export type GenresUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tracksId?: GenresUpdatetracksIdInput | string[]
    color?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    artists?: ArtistsCreateNestedManyWithoutTracksInput
    genres?: GenresCreateNestedManyWithoutTracksInput
    Users?: UsersCreateNestedOneWithoutTrackListInput
    Albums?: AlbumsCreateNestedOneWithoutTracksInput
    PlayList?: PlayListsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    albumsId?: string | null
    playListId?: string | null
    artists?: ArtistsUncheckedCreateNestedManyWithoutTracksInput
    genres?: GenresUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutTracksNestedInput
    genres?: GenresUpdateManyWithoutTracksNestedInput
    Users?: UsersUpdateOneWithoutTrackListNestedInput
    Albums?: AlbumsUpdateOneWithoutTracksNestedInput
    PlayList?: PlayListsUpdateOneWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistsUncheckedUpdateManyWithoutTracksNestedInput
    genres?: GenresUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksCreateManyInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    albumsId?: string | null
    playListId?: string | null
  }

  export type TracksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type TracksListRelationFilter = {
    every?: TracksWhereInput
    some?: TracksWhereInput
    none?: TracksWhereInput
  }

  export type PlayListsListRelationFilter = {
    every?: PlayListsWhereInput
    some?: PlayListsWhereInput
    none?: PlayListsWhereInput
  }

  export type FollowersListRelationFilter = {
    every?: FollowersWhereInput
    some?: FollowersWhereInput
    none?: FollowersWhereInput
  }

  export type TracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayListsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    libraryList?: SortOrder
    usersId?: SortOrder
    followersId?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    email?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FollowersCountOrderByAggregateInput = {
    id?: SortOrder
    usersId?: SortOrder
  }

  export type FollowersMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FollowersMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AlbumsListRelationFilter = {
    every?: AlbumsWhereInput
    some?: AlbumsWhereInput
    none?: AlbumsWhereInput
  }

  export type TracksNullableRelationFilter = {
    is?: TracksWhereInput | null
    isNot?: TracksWhereInput | null
  }

  export type AlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genres?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    albumsId?: SortOrder
    listType?: SortOrder
    tracksId?: SortOrder
  }

  export type ArtistsAvgOrderByAggregateInput = {
    popularity?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    listType?: SortOrder
    tracksId?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    listType?: SortOrder
    tracksId?: SortOrder
  }

  export type ArtistsSumOrderByAggregateInput = {
    popularity?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ArtistsListRelationFilter = {
    every?: ArtistsWhereInput
    some?: ArtistsWhereInput
    none?: ArtistsWhereInput
  }

  export type ArtistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    genres?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    artistId?: SortOrder
    listType?: SortOrder
  }

  export type AlbumsAvgOrderByAggregateInput = {
    popularity?: SortOrder
  }

  export type AlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    listType?: SortOrder
  }

  export type AlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    popularity?: SortOrder
    listType?: SortOrder
  }

  export type AlbumsSumOrderByAggregateInput = {
    popularity?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type PlayListsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    private?: SortOrder
    listType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type PlayListsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    private?: SortOrder
    listType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type PlayListsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    description?: SortOrder
    private?: SortOrder
    listType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    usersId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GenresCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    tracksId?: SortOrder
    color?: SortOrder
  }

  export type GenresMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    color?: SortOrder
  }

  export type GenresMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    color?: SortOrder
  }

  export type GenresListRelationFilter = {
    every?: GenresWhereInput
    some?: GenresWhereInput
    none?: GenresWhereInput
  }

  export type UsersNullableRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type AlbumsNullableRelationFilter = {
    is?: AlbumsWhereInput | null
    isNot?: AlbumsWhereInput | null
  }

  export type PlayListsNullableRelationFilter = {
    is?: PlayListsWhereInput | null
    isNot?: PlayListsWhereInput | null
  }

  export type GenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TracksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    genresId?: SortOrder
    audioUrl?: SortOrder
    verified?: SortOrder
    duration?: SortOrder
    imageId?: SortOrder
    audioId?: SortOrder
    usersId?: SortOrder
    albumsId?: SortOrder
    playListId?: SortOrder
  }

  export type TracksAvgOrderByAggregateInput = {
    likes?: SortOrder
    duration?: SortOrder
  }

  export type TracksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    audioUrl?: SortOrder
    verified?: SortOrder
    duration?: SortOrder
    imageId?: SortOrder
    audioId?: SortOrder
    usersId?: SortOrder
    albumsId?: SortOrder
    playListId?: SortOrder
  }

  export type TracksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    likes?: SortOrder
    audioUrl?: SortOrder
    verified?: SortOrder
    duration?: SortOrder
    imageId?: SortOrder
    audioId?: SortOrder
    usersId?: SortOrder
    albumsId?: SortOrder
    playListId?: SortOrder
  }

  export type TracksSumOrderByAggregateInput = {
    likes?: SortOrder
    duration?: SortOrder
  }

  export type UsersCreatelibraryListInput = {
    set: string[]
  }

  export type TracksCreateNestedManyWithoutUsersInput = {
    create?: XOR<TracksCreateWithoutUsersInput, TracksUncheckedCreateWithoutUsersInput> | TracksCreateWithoutUsersInput[] | TracksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUsersInput | TracksCreateOrConnectWithoutUsersInput[]
    createMany?: TracksCreateManyUsersInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type PlayListsCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlayListsCreateWithoutOwnerInput, PlayListsUncheckedCreateWithoutOwnerInput> | PlayListsCreateWithoutOwnerInput[] | PlayListsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayListsCreateOrConnectWithoutOwnerInput | PlayListsCreateOrConnectWithoutOwnerInput[]
    createMany?: PlayListsCreateManyOwnerInputEnvelope
    connect?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
  }

  export type FollowersCreateNestedManyWithoutFollowersInput = {
    create?: XOR<FollowersCreateWithoutFollowersInput, FollowersUncheckedCreateWithoutFollowersInput> | FollowersCreateWithoutFollowersInput[] | FollowersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowersInput | FollowersCreateOrConnectWithoutFollowersInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
  }

  export type UsersCreatefollowersIdInput = {
    set: string[]
  }

  export type TracksUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<TracksCreateWithoutUsersInput, TracksUncheckedCreateWithoutUsersInput> | TracksCreateWithoutUsersInput[] | TracksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUsersInput | TracksCreateOrConnectWithoutUsersInput[]
    createMany?: TracksCreateManyUsersInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type PlayListsUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<PlayListsCreateWithoutOwnerInput, PlayListsUncheckedCreateWithoutOwnerInput> | PlayListsCreateWithoutOwnerInput[] | PlayListsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayListsCreateOrConnectWithoutOwnerInput | PlayListsCreateOrConnectWithoutOwnerInput[]
    createMany?: PlayListsCreateManyOwnerInputEnvelope
    connect?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
  }

  export type FollowersUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<FollowersCreateWithoutFollowersInput, FollowersUncheckedCreateWithoutFollowersInput> | FollowersCreateWithoutFollowersInput[] | FollowersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowersInput | FollowersCreateOrConnectWithoutFollowersInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdatelibraryListInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type TracksUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TracksCreateWithoutUsersInput, TracksUncheckedCreateWithoutUsersInput> | TracksCreateWithoutUsersInput[] | TracksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUsersInput | TracksCreateOrConnectWithoutUsersInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutUsersInput | TracksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TracksCreateManyUsersInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutUsersInput | TracksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutUsersInput | TracksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type PlayListsUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlayListsCreateWithoutOwnerInput, PlayListsUncheckedCreateWithoutOwnerInput> | PlayListsCreateWithoutOwnerInput[] | PlayListsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayListsCreateOrConnectWithoutOwnerInput | PlayListsCreateOrConnectWithoutOwnerInput[]
    upsert?: PlayListsUpsertWithWhereUniqueWithoutOwnerInput | PlayListsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlayListsCreateManyOwnerInputEnvelope
    set?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    disconnect?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    delete?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    connect?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    update?: PlayListsUpdateWithWhereUniqueWithoutOwnerInput | PlayListsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlayListsUpdateManyWithWhereWithoutOwnerInput | PlayListsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlayListsScalarWhereInput | PlayListsScalarWhereInput[]
  }

  export type FollowersUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<FollowersCreateWithoutFollowersInput, FollowersUncheckedCreateWithoutFollowersInput> | FollowersCreateWithoutFollowersInput[] | FollowersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowersInput | FollowersCreateOrConnectWithoutFollowersInput[]
    upsert?: FollowersUpsertWithWhereUniqueWithoutFollowersInput | FollowersUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    disconnect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    delete?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    update?: FollowersUpdateWithWhereUniqueWithoutFollowersInput | FollowersUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: FollowersUpdateManyWithWhereWithoutFollowersInput | FollowersUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
  }

  export type UsersUpdatefollowersIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TracksUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<TracksCreateWithoutUsersInput, TracksUncheckedCreateWithoutUsersInput> | TracksCreateWithoutUsersInput[] | TracksUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutUsersInput | TracksCreateOrConnectWithoutUsersInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutUsersInput | TracksUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: TracksCreateManyUsersInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutUsersInput | TracksUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutUsersInput | TracksUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type PlayListsUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<PlayListsCreateWithoutOwnerInput, PlayListsUncheckedCreateWithoutOwnerInput> | PlayListsCreateWithoutOwnerInput[] | PlayListsUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: PlayListsCreateOrConnectWithoutOwnerInput | PlayListsCreateOrConnectWithoutOwnerInput[]
    upsert?: PlayListsUpsertWithWhereUniqueWithoutOwnerInput | PlayListsUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: PlayListsCreateManyOwnerInputEnvelope
    set?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    disconnect?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    delete?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    connect?: PlayListsWhereUniqueInput | PlayListsWhereUniqueInput[]
    update?: PlayListsUpdateWithWhereUniqueWithoutOwnerInput | PlayListsUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: PlayListsUpdateManyWithWhereWithoutOwnerInput | PlayListsUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: PlayListsScalarWhereInput | PlayListsScalarWhereInput[]
  }

  export type FollowersUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<FollowersCreateWithoutFollowersInput, FollowersUncheckedCreateWithoutFollowersInput> | FollowersCreateWithoutFollowersInput[] | FollowersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: FollowersCreateOrConnectWithoutFollowersInput | FollowersCreateOrConnectWithoutFollowersInput[]
    upsert?: FollowersUpsertWithWhereUniqueWithoutFollowersInput | FollowersUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    disconnect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    delete?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    connect?: FollowersWhereUniqueInput | FollowersWhereUniqueInput[]
    update?: FollowersUpdateWithWhereUniqueWithoutFollowersInput | FollowersUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: FollowersUpdateManyWithWhereWithoutFollowersInput | FollowersUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
  }

  export type UsersCreateNestedManyWithoutFollowersInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput> | UsersCreateWithoutFollowersInput[] | UsersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput | UsersCreateOrConnectWithoutFollowersInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type FollowersCreateusersIdInput = {
    set: string[]
  }

  export type UsersUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput> | UsersCreateWithoutFollowersInput[] | UsersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput | UsersCreateOrConnectWithoutFollowersInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput> | UsersCreateWithoutFollowersInput[] | UsersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput | UsersCreateOrConnectWithoutFollowersInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFollowersInput | UsersUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFollowersInput | UsersUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFollowersInput | UsersUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type FollowersUpdateusersIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UsersUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput> | UsersCreateWithoutFollowersInput[] | UsersUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutFollowersInput | UsersCreateOrConnectWithoutFollowersInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutFollowersInput | UsersUpsertWithWhereUniqueWithoutFollowersInput[]
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutFollowersInput | UsersUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutFollowersInput | UsersUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type ArtistsCreategenresInput = {
    set: string[]
  }

  export type AlbumsCreateNestedManyWithoutArtistsInput = {
    create?: XOR<AlbumsCreateWithoutArtistsInput, AlbumsUncheckedCreateWithoutArtistsInput> | AlbumsCreateWithoutArtistsInput[] | AlbumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistsInput | AlbumsCreateOrConnectWithoutArtistsInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type TracksCreateNestedOneWithoutArtistsInput = {
    create?: XOR<TracksCreateWithoutArtistsInput, TracksUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: TracksCreateOrConnectWithoutArtistsInput
    connect?: TracksWhereUniqueInput
  }

  export type ArtistsCreatealbumsIdInput = {
    set: string[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<AlbumsCreateWithoutArtistsInput, AlbumsUncheckedCreateWithoutArtistsInput> | AlbumsCreateWithoutArtistsInput[] | AlbumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistsInput | AlbumsCreateOrConnectWithoutArtistsInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type ArtistsUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlbumsUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<AlbumsCreateWithoutArtistsInput, AlbumsUncheckedCreateWithoutArtistsInput> | AlbumsCreateWithoutArtistsInput[] | AlbumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistsInput | AlbumsCreateOrConnectWithoutArtistsInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutArtistsInput | AlbumsUpsertWithWhereUniqueWithoutArtistsInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutArtistsInput | AlbumsUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutArtistsInput | AlbumsUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type TracksUpdateOneWithoutArtistsNestedInput = {
    create?: XOR<TracksCreateWithoutArtistsInput, TracksUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: TracksCreateOrConnectWithoutArtistsInput
    upsert?: TracksUpsertWithoutArtistsInput
    disconnect?: boolean
    delete?: TracksWhereInput | boolean
    connect?: TracksWhereUniqueInput
    update?: XOR<XOR<TracksUpdateToOneWithWhereWithoutArtistsInput, TracksUpdateWithoutArtistsInput>, TracksUncheckedUpdateWithoutArtistsInput>
  }

  export type ArtistsUpdatealbumsIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<AlbumsCreateWithoutArtistsInput, AlbumsUncheckedCreateWithoutArtistsInput> | AlbumsCreateWithoutArtistsInput[] | AlbumsUncheckedCreateWithoutArtistsInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistsInput | AlbumsCreateOrConnectWithoutArtistsInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutArtistsInput | AlbumsUpsertWithWhereUniqueWithoutArtistsInput[]
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutArtistsInput | AlbumsUpdateWithWhereUniqueWithoutArtistsInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutArtistsInput | AlbumsUpdateManyWithWhereWithoutArtistsInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type AlbumsCreategenresInput = {
    set: string[]
  }

  export type ArtistsCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput> | ArtistsCreateWithoutAlbumsInput[] | ArtistsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput | ArtistsCreateOrConnectWithoutAlbumsInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type TracksCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<TracksCreateWithoutAlbumsInput, TracksUncheckedCreateWithoutAlbumsInput> | TracksCreateWithoutAlbumsInput[] | TracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumsInput | TracksCreateOrConnectWithoutAlbumsInput[]
    createMany?: TracksCreateManyAlbumsInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type AlbumsCreateartistIdInput = {
    set: string[]
  }

  export type ArtistsUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput> | ArtistsCreateWithoutAlbumsInput[] | ArtistsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput | ArtistsCreateOrConnectWithoutAlbumsInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutAlbumsInput = {
    create?: XOR<TracksCreateWithoutAlbumsInput, TracksUncheckedCreateWithoutAlbumsInput> | TracksCreateWithoutAlbumsInput[] | TracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumsInput | TracksCreateOrConnectWithoutAlbumsInput[]
    createMany?: TracksCreateManyAlbumsInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type AlbumsUpdategenresInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistsUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput> | ArtistsCreateWithoutAlbumsInput[] | ArtistsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput | ArtistsCreateOrConnectWithoutAlbumsInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutAlbumsInput | ArtistsUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutAlbumsInput | ArtistsUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutAlbumsInput | ArtistsUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type TracksUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<TracksCreateWithoutAlbumsInput, TracksUncheckedCreateWithoutAlbumsInput> | TracksCreateWithoutAlbumsInput[] | TracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumsInput | TracksCreateOrConnectWithoutAlbumsInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutAlbumsInput | TracksUpsertWithWhereUniqueWithoutAlbumsInput[]
    createMany?: TracksCreateManyAlbumsInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutAlbumsInput | TracksUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutAlbumsInput | TracksUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type AlbumsUpdateartistIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistsUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput> | ArtistsCreateWithoutAlbumsInput[] | ArtistsUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput | ArtistsCreateOrConnectWithoutAlbumsInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutAlbumsInput | ArtistsUpsertWithWhereUniqueWithoutAlbumsInput[]
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutAlbumsInput | ArtistsUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutAlbumsInput | ArtistsUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type TracksUncheckedUpdateManyWithoutAlbumsNestedInput = {
    create?: XOR<TracksCreateWithoutAlbumsInput, TracksUncheckedCreateWithoutAlbumsInput> | TracksCreateWithoutAlbumsInput[] | TracksUncheckedCreateWithoutAlbumsInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumsInput | TracksCreateOrConnectWithoutAlbumsInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutAlbumsInput | TracksUpsertWithWhereUniqueWithoutAlbumsInput[]
    createMany?: TracksCreateManyAlbumsInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutAlbumsInput | TracksUpdateWithWhereUniqueWithoutAlbumsInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutAlbumsInput | TracksUpdateManyWithWhereWithoutAlbumsInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type TracksCreateNestedManyWithoutPlayListInput = {
    create?: XOR<TracksCreateWithoutPlayListInput, TracksUncheckedCreateWithoutPlayListInput> | TracksCreateWithoutPlayListInput[] | TracksUncheckedCreateWithoutPlayListInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutPlayListInput | TracksCreateOrConnectWithoutPlayListInput[]
    createMany?: TracksCreateManyPlayListInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutPlayListInput = {
    create?: XOR<UsersCreateWithoutPlayListInput, UsersUncheckedCreateWithoutPlayListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPlayListInput
    connect?: UsersWhereUniqueInput
  }

  export type TracksUncheckedCreateNestedManyWithoutPlayListInput = {
    create?: XOR<TracksCreateWithoutPlayListInput, TracksUncheckedCreateWithoutPlayListInput> | TracksCreateWithoutPlayListInput[] | TracksUncheckedCreateWithoutPlayListInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutPlayListInput | TracksCreateOrConnectWithoutPlayListInput[]
    createMany?: TracksCreateManyPlayListInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TracksUpdateManyWithoutPlayListNestedInput = {
    create?: XOR<TracksCreateWithoutPlayListInput, TracksUncheckedCreateWithoutPlayListInput> | TracksCreateWithoutPlayListInput[] | TracksUncheckedCreateWithoutPlayListInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutPlayListInput | TracksCreateOrConnectWithoutPlayListInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutPlayListInput | TracksUpsertWithWhereUniqueWithoutPlayListInput[]
    createMany?: TracksCreateManyPlayListInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutPlayListInput | TracksUpdateWithWhereUniqueWithoutPlayListInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutPlayListInput | TracksUpdateManyWithWhereWithoutPlayListInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type UsersUpdateOneRequiredWithoutPlayListNestedInput = {
    create?: XOR<UsersCreateWithoutPlayListInput, UsersUncheckedCreateWithoutPlayListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPlayListInput
    upsert?: UsersUpsertWithoutPlayListInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutPlayListInput, UsersUpdateWithoutPlayListInput>, UsersUncheckedUpdateWithoutPlayListInput>
  }

  export type TracksUncheckedUpdateManyWithoutPlayListNestedInput = {
    create?: XOR<TracksCreateWithoutPlayListInput, TracksUncheckedCreateWithoutPlayListInput> | TracksCreateWithoutPlayListInput[] | TracksUncheckedCreateWithoutPlayListInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutPlayListInput | TracksCreateOrConnectWithoutPlayListInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutPlayListInput | TracksUpsertWithWhereUniqueWithoutPlayListInput[]
    createMany?: TracksCreateManyPlayListInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutPlayListInput | TracksUpdateWithWhereUniqueWithoutPlayListInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutPlayListInput | TracksUpdateManyWithWhereWithoutPlayListInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type TracksCreateNestedManyWithoutGenresInput = {
    create?: XOR<TracksCreateWithoutGenresInput, TracksUncheckedCreateWithoutGenresInput> | TracksCreateWithoutGenresInput[] | TracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenresInput | TracksCreateOrConnectWithoutGenresInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type GenresCreatetracksIdInput = {
    set: string[]
  }

  export type TracksUncheckedCreateNestedManyWithoutGenresInput = {
    create?: XOR<TracksCreateWithoutGenresInput, TracksUncheckedCreateWithoutGenresInput> | TracksCreateWithoutGenresInput[] | TracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenresInput | TracksCreateOrConnectWithoutGenresInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type TracksUpdateManyWithoutGenresNestedInput = {
    create?: XOR<TracksCreateWithoutGenresInput, TracksUncheckedCreateWithoutGenresInput> | TracksCreateWithoutGenresInput[] | TracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenresInput | TracksCreateOrConnectWithoutGenresInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutGenresInput | TracksUpsertWithWhereUniqueWithoutGenresInput[]
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutGenresInput | TracksUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutGenresInput | TracksUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type GenresUpdatetracksIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TracksUncheckedUpdateManyWithoutGenresNestedInput = {
    create?: XOR<TracksCreateWithoutGenresInput, TracksUncheckedCreateWithoutGenresInput> | TracksCreateWithoutGenresInput[] | TracksUncheckedCreateWithoutGenresInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenresInput | TracksCreateOrConnectWithoutGenresInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutGenresInput | TracksUpsertWithWhereUniqueWithoutGenresInput[]
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutGenresInput | TracksUpdateWithWhereUniqueWithoutGenresInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutGenresInput | TracksUpdateManyWithWhereWithoutGenresInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type ArtistsCreateNestedManyWithoutTracksInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput> | ArtistsCreateWithoutTracksInput[] | ArtistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput | ArtistsCreateOrConnectWithoutTracksInput[]
    createMany?: ArtistsCreateManyTracksInputEnvelope
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type GenresCreateNestedManyWithoutTracksInput = {
    create?: XOR<GenresCreateWithoutTracksInput, GenresUncheckedCreateWithoutTracksInput> | GenresCreateWithoutTracksInput[] | GenresUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutTracksInput | GenresCreateOrConnectWithoutTracksInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type UsersCreateNestedOneWithoutTrackListInput = {
    create?: XOR<UsersCreateWithoutTrackListInput, UsersUncheckedCreateWithoutTrackListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTrackListInput
    connect?: UsersWhereUniqueInput
  }

  export type AlbumsCreateNestedOneWithoutTracksInput = {
    create?: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutTracksInput
    connect?: AlbumsWhereUniqueInput
  }

  export type PlayListsCreateNestedOneWithoutTracksInput = {
    create?: XOR<PlayListsCreateWithoutTracksInput, PlayListsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: PlayListsCreateOrConnectWithoutTracksInput
    connect?: PlayListsWhereUniqueInput
  }

  export type TracksCreategenresIdInput = {
    set: string[]
  }

  export type ArtistsUncheckedCreateNestedManyWithoutTracksInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput> | ArtistsCreateWithoutTracksInput[] | ArtistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput | ArtistsCreateOrConnectWithoutTracksInput[]
    createMany?: ArtistsCreateManyTracksInputEnvelope
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type GenresUncheckedCreateNestedManyWithoutTracksInput = {
    create?: XOR<GenresCreateWithoutTracksInput, GenresUncheckedCreateWithoutTracksInput> | GenresCreateWithoutTracksInput[] | GenresUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutTracksInput | GenresCreateOrConnectWithoutTracksInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
  }

  export type ArtistsUpdateManyWithoutTracksNestedInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput> | ArtistsCreateWithoutTracksInput[] | ArtistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput | ArtistsCreateOrConnectWithoutTracksInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutTracksInput | ArtistsUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: ArtistsCreateManyTracksInputEnvelope
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutTracksInput | ArtistsUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutTracksInput | ArtistsUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type GenresUpdateManyWithoutTracksNestedInput = {
    create?: XOR<GenresCreateWithoutTracksInput, GenresUncheckedCreateWithoutTracksInput> | GenresCreateWithoutTracksInput[] | GenresUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutTracksInput | GenresCreateOrConnectWithoutTracksInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutTracksInput | GenresUpsertWithWhereUniqueWithoutTracksInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutTracksInput | GenresUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutTracksInput | GenresUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type UsersUpdateOneWithoutTrackListNestedInput = {
    create?: XOR<UsersCreateWithoutTrackListInput, UsersUncheckedCreateWithoutTrackListInput>
    connectOrCreate?: UsersCreateOrConnectWithoutTrackListInput
    upsert?: UsersUpsertWithoutTrackListInput
    disconnect?: boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutTrackListInput, UsersUpdateWithoutTrackListInput>, UsersUncheckedUpdateWithoutTrackListInput>
  }

  export type AlbumsUpdateOneWithoutTracksNestedInput = {
    create?: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutTracksInput
    upsert?: AlbumsUpsertWithoutTracksInput
    disconnect?: boolean
    delete?: AlbumsWhereInput | boolean
    connect?: AlbumsWhereUniqueInput
    update?: XOR<XOR<AlbumsUpdateToOneWithWhereWithoutTracksInput, AlbumsUpdateWithoutTracksInput>, AlbumsUncheckedUpdateWithoutTracksInput>
  }

  export type PlayListsUpdateOneWithoutTracksNestedInput = {
    create?: XOR<PlayListsCreateWithoutTracksInput, PlayListsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: PlayListsCreateOrConnectWithoutTracksInput
    upsert?: PlayListsUpsertWithoutTracksInput
    disconnect?: boolean
    delete?: PlayListsWhereInput | boolean
    connect?: PlayListsWhereUniqueInput
    update?: XOR<XOR<PlayListsUpdateToOneWithWhereWithoutTracksInput, PlayListsUpdateWithoutTracksInput>, PlayListsUncheckedUpdateWithoutTracksInput>
  }

  export type TracksUpdategenresIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ArtistsUncheckedUpdateManyWithoutTracksNestedInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput> | ArtistsCreateWithoutTracksInput[] | ArtistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput | ArtistsCreateOrConnectWithoutTracksInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutTracksInput | ArtistsUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: ArtistsCreateManyTracksInputEnvelope
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutTracksInput | ArtistsUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutTracksInput | ArtistsUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type GenresUncheckedUpdateManyWithoutTracksNestedInput = {
    create?: XOR<GenresCreateWithoutTracksInput, GenresUncheckedCreateWithoutTracksInput> | GenresCreateWithoutTracksInput[] | GenresUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: GenresCreateOrConnectWithoutTracksInput | GenresCreateOrConnectWithoutTracksInput[]
    upsert?: GenresUpsertWithWhereUniqueWithoutTracksInput | GenresUpsertWithWhereUniqueWithoutTracksInput[]
    set?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    disconnect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    delete?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    connect?: GenresWhereUniqueInput | GenresWhereUniqueInput[]
    update?: GenresUpdateWithWhereUniqueWithoutTracksInput | GenresUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: GenresUpdateManyWithWhereWithoutTracksInput | GenresUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: GenresScalarWhereInput | GenresScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TracksCreateWithoutUsersInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    artists?: ArtistsCreateNestedManyWithoutTracksInput
    genres?: GenresCreateNestedManyWithoutTracksInput
    Albums?: AlbumsCreateNestedOneWithoutTracksInput
    PlayList?: PlayListsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    albumsId?: string | null
    playListId?: string | null
    artists?: ArtistsUncheckedCreateNestedManyWithoutTracksInput
    genres?: GenresUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutUsersInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutUsersInput, TracksUncheckedCreateWithoutUsersInput>
  }

  export type TracksCreateManyUsersInputEnvelope = {
    data: TracksCreateManyUsersInput | TracksCreateManyUsersInput[]
  }

  export type PlayListsCreateWithoutOwnerInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    tracks?: TracksCreateNestedManyWithoutPlayListInput
  }

  export type PlayListsUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    tracks?: TracksUncheckedCreateNestedManyWithoutPlayListInput
  }

  export type PlayListsCreateOrConnectWithoutOwnerInput = {
    where: PlayListsWhereUniqueInput
    create: XOR<PlayListsCreateWithoutOwnerInput, PlayListsUncheckedCreateWithoutOwnerInput>
  }

  export type PlayListsCreateManyOwnerInputEnvelope = {
    data: PlayListsCreateManyOwnerInput | PlayListsCreateManyOwnerInput[]
  }

  export type FollowersCreateWithoutFollowersInput = {
    id?: string
  }

  export type FollowersUncheckedCreateWithoutFollowersInput = {
    id?: string
    usersId?: FollowersCreateusersIdInput | string[]
  }

  export type FollowersCreateOrConnectWithoutFollowersInput = {
    where: FollowersWhereUniqueInput
    create: XOR<FollowersCreateWithoutFollowersInput, FollowersUncheckedCreateWithoutFollowersInput>
  }

  export type TracksUpsertWithWhereUniqueWithoutUsersInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutUsersInput, TracksUncheckedUpdateWithoutUsersInput>
    create: XOR<TracksCreateWithoutUsersInput, TracksUncheckedCreateWithoutUsersInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutUsersInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutUsersInput, TracksUncheckedUpdateWithoutUsersInput>
  }

  export type TracksUpdateManyWithWhereWithoutUsersInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutUsersInput>
  }

  export type TracksScalarWhereInput = {
    AND?: TracksScalarWhereInput | TracksScalarWhereInput[]
    OR?: TracksScalarWhereInput[]
    NOT?: TracksScalarWhereInput | TracksScalarWhereInput[]
    id?: StringFilter<"Tracks"> | string
    name?: StringFilter<"Tracks"> | string
    imageUrl?: StringFilter<"Tracks"> | string
    likes?: IntFilter<"Tracks"> | number
    genresId?: StringNullableListFilter<"Tracks">
    audioUrl?: StringFilter<"Tracks"> | string
    verified?: BoolFilter<"Tracks"> | boolean
    duration?: IntFilter<"Tracks"> | number
    imageId?: StringFilter<"Tracks"> | string
    audioId?: StringFilter<"Tracks"> | string
    usersId?: StringNullableFilter<"Tracks"> | string | null
    albumsId?: StringNullableFilter<"Tracks"> | string | null
    playListId?: StringNullableFilter<"Tracks"> | string | null
  }

  export type PlayListsUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PlayListsWhereUniqueInput
    update: XOR<PlayListsUpdateWithoutOwnerInput, PlayListsUncheckedUpdateWithoutOwnerInput>
    create: XOR<PlayListsCreateWithoutOwnerInput, PlayListsUncheckedCreateWithoutOwnerInput>
  }

  export type PlayListsUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PlayListsWhereUniqueInput
    data: XOR<PlayListsUpdateWithoutOwnerInput, PlayListsUncheckedUpdateWithoutOwnerInput>
  }

  export type PlayListsUpdateManyWithWhereWithoutOwnerInput = {
    where: PlayListsScalarWhereInput
    data: XOR<PlayListsUpdateManyMutationInput, PlayListsUncheckedUpdateManyWithoutOwnerInput>
  }

  export type PlayListsScalarWhereInput = {
    AND?: PlayListsScalarWhereInput | PlayListsScalarWhereInput[]
    OR?: PlayListsScalarWhereInput[]
    NOT?: PlayListsScalarWhereInput | PlayListsScalarWhereInput[]
    id?: StringFilter<"PlayLists"> | string
    name?: StringFilter<"PlayLists"> | string
    imageUrl?: StringFilter<"PlayLists"> | string
    description?: StringFilter<"PlayLists"> | string
    private?: BoolFilter<"PlayLists"> | boolean
    listType?: StringFilter<"PlayLists"> | string
    createdAt?: DateTimeFilter<"PlayLists"> | Date | string
    updatedAt?: DateTimeFilter<"PlayLists"> | Date | string
    usersId?: StringFilter<"PlayLists"> | string
  }

  export type FollowersUpsertWithWhereUniqueWithoutFollowersInput = {
    where: FollowersWhereUniqueInput
    update: XOR<FollowersUpdateWithoutFollowersInput, FollowersUncheckedUpdateWithoutFollowersInput>
    create: XOR<FollowersCreateWithoutFollowersInput, FollowersUncheckedCreateWithoutFollowersInput>
  }

  export type FollowersUpdateWithWhereUniqueWithoutFollowersInput = {
    where: FollowersWhereUniqueInput
    data: XOR<FollowersUpdateWithoutFollowersInput, FollowersUncheckedUpdateWithoutFollowersInput>
  }

  export type FollowersUpdateManyWithWhereWithoutFollowersInput = {
    where: FollowersScalarWhereInput
    data: XOR<FollowersUpdateManyMutationInput, FollowersUncheckedUpdateManyWithoutFollowersInput>
  }

  export type FollowersScalarWhereInput = {
    AND?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
    OR?: FollowersScalarWhereInput[]
    NOT?: FollowersScalarWhereInput | FollowersScalarWhereInput[]
    id?: StringFilter<"Followers"> | string
    usersId?: StringNullableListFilter<"Followers">
  }

  export type UsersCreateWithoutFollowersInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    trackList?: TracksCreateNestedManyWithoutUsersInput
    PlayList?: PlayListsCreateNestedManyWithoutOwnerInput
  }

  export type UsersUncheckedCreateWithoutFollowersInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    followersId?: UsersCreatefollowersIdInput | string[]
    trackList?: TracksUncheckedCreateNestedManyWithoutUsersInput
    PlayList?: PlayListsUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UsersCreateOrConnectWithoutFollowersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
  }

  export type UsersUpsertWithWhereUniqueWithoutFollowersInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutFollowersInput, UsersUncheckedUpdateWithoutFollowersInput>
    create: XOR<UsersCreateWithoutFollowersInput, UsersUncheckedCreateWithoutFollowersInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutFollowersInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutFollowersInput, UsersUncheckedUpdateWithoutFollowersInput>
  }

  export type UsersUpdateManyWithWhereWithoutFollowersInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutFollowersInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    userName?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    imageUrl?: StringFilter<"Users"> | string
    createdAt?: DateTimeFilter<"Users"> | Date | string
    updatedAt?: DateTimeFilter<"Users"> | Date | string
    libraryList?: StringNullableListFilter<"Users">
    usersId?: StringNullableFilter<"Users"> | string | null
    followersId?: StringNullableListFilter<"Users">
  }

  export type AlbumsCreateWithoutArtistsInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    listType: string
    tracks?: TracksCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutArtistsInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    artistId?: AlbumsCreateartistIdInput | string[]
    listType: string
    tracks?: TracksUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsCreateOrConnectWithoutArtistsInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutArtistsInput, AlbumsUncheckedCreateWithoutArtistsInput>
  }

  export type TracksCreateWithoutArtistsInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    genres?: GenresCreateNestedManyWithoutTracksInput
    Users?: UsersCreateNestedOneWithoutTrackListInput
    Albums?: AlbumsCreateNestedOneWithoutTracksInput
    PlayList?: PlayListsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutArtistsInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    albumsId?: string | null
    playListId?: string | null
    genres?: GenresUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutArtistsInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutArtistsInput, TracksUncheckedCreateWithoutArtistsInput>
  }

  export type AlbumsUpsertWithWhereUniqueWithoutArtistsInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutArtistsInput, AlbumsUncheckedUpdateWithoutArtistsInput>
    create: XOR<AlbumsCreateWithoutArtistsInput, AlbumsUncheckedCreateWithoutArtistsInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutArtistsInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutArtistsInput, AlbumsUncheckedUpdateWithoutArtistsInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutArtistsInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutArtistsInput>
  }

  export type AlbumsScalarWhereInput = {
    AND?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    OR?: AlbumsScalarWhereInput[]
    NOT?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    genres?: StringNullableListFilter<"Albums">
    imageUrl?: StringFilter<"Albums"> | string
    popularity?: IntFilter<"Albums"> | number
    artistId?: StringNullableListFilter<"Albums">
    listType?: StringFilter<"Albums"> | string
  }

  export type TracksUpsertWithoutArtistsInput = {
    update: XOR<TracksUpdateWithoutArtistsInput, TracksUncheckedUpdateWithoutArtistsInput>
    create: XOR<TracksCreateWithoutArtistsInput, TracksUncheckedCreateWithoutArtistsInput>
    where?: TracksWhereInput
  }

  export type TracksUpdateToOneWithWhereWithoutArtistsInput = {
    where?: TracksWhereInput
    data: XOR<TracksUpdateWithoutArtistsInput, TracksUncheckedUpdateWithoutArtistsInput>
  }

  export type TracksUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    genres?: GenresUpdateManyWithoutTracksNestedInput
    Users?: UsersUpdateOneWithoutTrackListNestedInput
    Albums?: AlbumsUpdateOneWithoutTracksNestedInput
    PlayList?: PlayListsUpdateOneWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
    genres?: GenresUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type ArtistsCreateWithoutAlbumsInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    listType: string
    Tracks?: TracksCreateNestedOneWithoutArtistsInput
  }

  export type ArtistsUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    albumsId?: ArtistsCreatealbumsIdInput | string[]
    listType: string
    tracksId?: string | null
  }

  export type ArtistsCreateOrConnectWithoutAlbumsInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
  }

  export type TracksCreateWithoutAlbumsInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    artists?: ArtistsCreateNestedManyWithoutTracksInput
    genres?: GenresCreateNestedManyWithoutTracksInput
    Users?: UsersCreateNestedOneWithoutTrackListInput
    PlayList?: PlayListsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    playListId?: string | null
    artists?: ArtistsUncheckedCreateNestedManyWithoutTracksInput
    genres?: GenresUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutAlbumsInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutAlbumsInput, TracksUncheckedCreateWithoutAlbumsInput>
  }

  export type TracksCreateManyAlbumsInputEnvelope = {
    data: TracksCreateManyAlbumsInput | TracksCreateManyAlbumsInput[]
  }

  export type ArtistsUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: ArtistsWhereUniqueInput
    update: XOR<ArtistsUpdateWithoutAlbumsInput, ArtistsUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
  }

  export type ArtistsUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: ArtistsWhereUniqueInput
    data: XOR<ArtistsUpdateWithoutAlbumsInput, ArtistsUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistsUpdateManyWithWhereWithoutAlbumsInput = {
    where: ArtistsScalarWhereInput
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type ArtistsScalarWhereInput = {
    AND?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
    OR?: ArtistsScalarWhereInput[]
    NOT?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    genres?: StringNullableListFilter<"Artists">
    imageUrl?: StringFilter<"Artists"> | string
    popularity?: IntFilter<"Artists"> | number
    albumsId?: StringNullableListFilter<"Artists">
    listType?: StringFilter<"Artists"> | string
    tracksId?: StringNullableFilter<"Artists"> | string | null
  }

  export type TracksUpsertWithWhereUniqueWithoutAlbumsInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutAlbumsInput, TracksUncheckedUpdateWithoutAlbumsInput>
    create: XOR<TracksCreateWithoutAlbumsInput, TracksUncheckedCreateWithoutAlbumsInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutAlbumsInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutAlbumsInput, TracksUncheckedUpdateWithoutAlbumsInput>
  }

  export type TracksUpdateManyWithWhereWithoutAlbumsInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutAlbumsInput>
  }

  export type TracksCreateWithoutPlayListInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    artists?: ArtistsCreateNestedManyWithoutTracksInput
    genres?: GenresCreateNestedManyWithoutTracksInput
    Users?: UsersCreateNestedOneWithoutTrackListInput
    Albums?: AlbumsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutPlayListInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    albumsId?: string | null
    artists?: ArtistsUncheckedCreateNestedManyWithoutTracksInput
    genres?: GenresUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutPlayListInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutPlayListInput, TracksUncheckedCreateWithoutPlayListInput>
  }

  export type TracksCreateManyPlayListInputEnvelope = {
    data: TracksCreateManyPlayListInput | TracksCreateManyPlayListInput[]
  }

  export type UsersCreateWithoutPlayListInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    trackList?: TracksCreateNestedManyWithoutUsersInput
    followers?: FollowersCreateNestedManyWithoutFollowersInput
  }

  export type UsersUncheckedCreateWithoutPlayListInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    followersId?: UsersCreatefollowersIdInput | string[]
    trackList?: TracksUncheckedCreateNestedManyWithoutUsersInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UsersCreateOrConnectWithoutPlayListInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPlayListInput, UsersUncheckedCreateWithoutPlayListInput>
  }

  export type TracksUpsertWithWhereUniqueWithoutPlayListInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutPlayListInput, TracksUncheckedUpdateWithoutPlayListInput>
    create: XOR<TracksCreateWithoutPlayListInput, TracksUncheckedCreateWithoutPlayListInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutPlayListInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutPlayListInput, TracksUncheckedUpdateWithoutPlayListInput>
  }

  export type TracksUpdateManyWithWhereWithoutPlayListInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutPlayListInput>
  }

  export type UsersUpsertWithoutPlayListInput = {
    update: XOR<UsersUpdateWithoutPlayListInput, UsersUncheckedUpdateWithoutPlayListInput>
    create: XOR<UsersCreateWithoutPlayListInput, UsersUncheckedCreateWithoutPlayListInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutPlayListInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutPlayListInput, UsersUncheckedUpdateWithoutPlayListInput>
  }

  export type UsersUpdateWithoutPlayListInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    trackList?: TracksUpdateManyWithoutUsersNestedInput
    followers?: FollowersUpdateManyWithoutFollowersNestedInput
  }

  export type UsersUncheckedUpdateWithoutPlayListInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    followersId?: UsersUpdatefollowersIdInput | string[]
    trackList?: TracksUncheckedUpdateManyWithoutUsersNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type TracksCreateWithoutGenresInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    artists?: ArtistsCreateNestedManyWithoutTracksInput
    Users?: UsersCreateNestedOneWithoutTrackListInput
    Albums?: AlbumsCreateNestedOneWithoutTracksInput
    PlayList?: PlayListsCreateNestedOneWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutGenresInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    albumsId?: string | null
    playListId?: string | null
    artists?: ArtistsUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutGenresInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutGenresInput, TracksUncheckedCreateWithoutGenresInput>
  }

  export type TracksUpsertWithWhereUniqueWithoutGenresInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutGenresInput, TracksUncheckedUpdateWithoutGenresInput>
    create: XOR<TracksCreateWithoutGenresInput, TracksUncheckedCreateWithoutGenresInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutGenresInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutGenresInput, TracksUncheckedUpdateWithoutGenresInput>
  }

  export type TracksUpdateManyWithWhereWithoutGenresInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutGenresInput>
  }

  export type ArtistsCreateWithoutTracksInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    listType: string
    albums?: AlbumsCreateNestedManyWithoutArtistsInput
  }

  export type ArtistsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    albumsId?: ArtistsCreatealbumsIdInput | string[]
    listType: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistsInput
  }

  export type ArtistsCreateOrConnectWithoutTracksInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
  }

  export type ArtistsCreateManyTracksInputEnvelope = {
    data: ArtistsCreateManyTracksInput | ArtistsCreateManyTracksInput[]
  }

  export type GenresCreateWithoutTracksInput = {
    id?: string
    name: string
    imageUrl: string
    color: string
  }

  export type GenresUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    imageUrl: string
    tracksId?: GenresCreatetracksIdInput | string[]
    color: string
  }

  export type GenresCreateOrConnectWithoutTracksInput = {
    where: GenresWhereUniqueInput
    create: XOR<GenresCreateWithoutTracksInput, GenresUncheckedCreateWithoutTracksInput>
  }

  export type UsersCreateWithoutTrackListInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    PlayList?: PlayListsCreateNestedManyWithoutOwnerInput
    followers?: FollowersCreateNestedManyWithoutFollowersInput
  }

  export type UsersUncheckedCreateWithoutTrackListInput = {
    id?: string
    userName: string
    email: string
    imageUrl: string
    createdAt: Date | string
    updatedAt: Date | string
    libraryList?: UsersCreatelibraryListInput | string[]
    usersId?: string | null
    followersId?: UsersCreatefollowersIdInput | string[]
    PlayList?: PlayListsUncheckedCreateNestedManyWithoutOwnerInput
    followers?: FollowersUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UsersCreateOrConnectWithoutTrackListInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutTrackListInput, UsersUncheckedCreateWithoutTrackListInput>
  }

  export type AlbumsCreateWithoutTracksInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    listType: string
    artists?: ArtistsCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    genres?: AlbumsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    artistId?: AlbumsCreateartistIdInput | string[]
    listType: string
    artists?: ArtistsUncheckedCreateNestedManyWithoutAlbumsInput
  }

  export type AlbumsCreateOrConnectWithoutTracksInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
  }

  export type PlayListsCreateWithoutTracksInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    owner: UsersCreateNestedOneWithoutPlayListInput
  }

  export type PlayListsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
    usersId: string
  }

  export type PlayListsCreateOrConnectWithoutTracksInput = {
    where: PlayListsWhereUniqueInput
    create: XOR<PlayListsCreateWithoutTracksInput, PlayListsUncheckedCreateWithoutTracksInput>
  }

  export type ArtistsUpsertWithWhereUniqueWithoutTracksInput = {
    where: ArtistsWhereUniqueInput
    update: XOR<ArtistsUpdateWithoutTracksInput, ArtistsUncheckedUpdateWithoutTracksInput>
    create: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
  }

  export type ArtistsUpdateWithWhereUniqueWithoutTracksInput = {
    where: ArtistsWhereUniqueInput
    data: XOR<ArtistsUpdateWithoutTracksInput, ArtistsUncheckedUpdateWithoutTracksInput>
  }

  export type ArtistsUpdateManyWithWhereWithoutTracksInput = {
    where: ArtistsScalarWhereInput
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyWithoutTracksInput>
  }

  export type GenresUpsertWithWhereUniqueWithoutTracksInput = {
    where: GenresWhereUniqueInput
    update: XOR<GenresUpdateWithoutTracksInput, GenresUncheckedUpdateWithoutTracksInput>
    create: XOR<GenresCreateWithoutTracksInput, GenresUncheckedCreateWithoutTracksInput>
  }

  export type GenresUpdateWithWhereUniqueWithoutTracksInput = {
    where: GenresWhereUniqueInput
    data: XOR<GenresUpdateWithoutTracksInput, GenresUncheckedUpdateWithoutTracksInput>
  }

  export type GenresUpdateManyWithWhereWithoutTracksInput = {
    where: GenresScalarWhereInput
    data: XOR<GenresUpdateManyMutationInput, GenresUncheckedUpdateManyWithoutTracksInput>
  }

  export type GenresScalarWhereInput = {
    AND?: GenresScalarWhereInput | GenresScalarWhereInput[]
    OR?: GenresScalarWhereInput[]
    NOT?: GenresScalarWhereInput | GenresScalarWhereInput[]
    id?: StringFilter<"Genres"> | string
    name?: StringFilter<"Genres"> | string
    imageUrl?: StringFilter<"Genres"> | string
    tracksId?: StringNullableListFilter<"Genres">
    color?: StringFilter<"Genres"> | string
  }

  export type UsersUpsertWithoutTrackListInput = {
    update: XOR<UsersUpdateWithoutTrackListInput, UsersUncheckedUpdateWithoutTrackListInput>
    create: XOR<UsersCreateWithoutTrackListInput, UsersUncheckedCreateWithoutTrackListInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutTrackListInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutTrackListInput, UsersUncheckedUpdateWithoutTrackListInput>
  }

  export type UsersUpdateWithoutTrackListInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    PlayList?: PlayListsUpdateManyWithoutOwnerNestedInput
    followers?: FollowersUpdateManyWithoutFollowersNestedInput
  }

  export type UsersUncheckedUpdateWithoutTrackListInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    followersId?: UsersUpdatefollowersIdInput | string[]
    PlayList?: PlayListsUncheckedUpdateManyWithoutOwnerNestedInput
    followers?: FollowersUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type AlbumsUpsertWithoutTracksInput = {
    update: XOR<AlbumsUpdateWithoutTracksInput, AlbumsUncheckedUpdateWithoutTracksInput>
    create: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    where?: AlbumsWhereInput
  }

  export type AlbumsUpdateToOneWithWhereWithoutTracksInput = {
    where?: AlbumsWhereInput
    data: XOR<AlbumsUpdateWithoutTracksInput, AlbumsUncheckedUpdateWithoutTracksInput>
  }

  export type AlbumsUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    artistId?: AlbumsUpdateartistIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type PlayListsUpsertWithoutTracksInput = {
    update: XOR<PlayListsUpdateWithoutTracksInput, PlayListsUncheckedUpdateWithoutTracksInput>
    create: XOR<PlayListsCreateWithoutTracksInput, PlayListsUncheckedCreateWithoutTracksInput>
    where?: PlayListsWhereInput
  }

  export type PlayListsUpdateToOneWithWhereWithoutTracksInput = {
    where?: PlayListsWhereInput
    data: XOR<PlayListsUpdateWithoutTracksInput, PlayListsUncheckedUpdateWithoutTracksInput>
  }

  export type PlayListsUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UsersUpdateOneRequiredWithoutPlayListNestedInput
  }

  export type PlayListsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usersId?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateManyUsersInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    albumsId?: string | null
    playListId?: string | null
  }

  export type PlayListsCreateManyOwnerInput = {
    id?: string
    name: string
    imageUrl: string
    description: string
    private: boolean
    listType: string
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type TracksUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutTracksNestedInput
    genres?: GenresUpdateManyWithoutTracksNestedInput
    Albums?: AlbumsUpdateOneWithoutTracksNestedInput
    PlayList?: PlayListsUpdateOneWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistsUncheckedUpdateManyWithoutTracksNestedInput
    genres?: GenresUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayListsUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TracksUpdateManyWithoutPlayListNestedInput
  }

  export type PlayListsUncheckedUpdateWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tracks?: TracksUncheckedUpdateManyWithoutPlayListNestedInput
  }

  export type PlayListsUncheckedUpdateManyWithoutOwnerInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    private?: BoolFieldUpdateOperationsInput | boolean
    listType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FollowersUpdateWithoutFollowersInput = {

  }

  export type FollowersUncheckedUpdateWithoutFollowersInput = {
    usersId?: FollowersUpdateusersIdInput | string[]
  }

  export type FollowersUncheckedUpdateManyWithoutFollowersInput = {
    usersId?: FollowersUpdateusersIdInput | string[]
  }

  export type UsersUpdateWithoutFollowersInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    trackList?: TracksUpdateManyWithoutUsersNestedInput
    PlayList?: PlayListsUpdateManyWithoutOwnerNestedInput
  }

  export type UsersUncheckedUpdateWithoutFollowersInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    followersId?: UsersUpdatefollowersIdInput | string[]
    trackList?: TracksUncheckedUpdateManyWithoutUsersNestedInput
    PlayList?: PlayListsUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type UsersUncheckedUpdateManyWithoutFollowersInput = {
    userName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    libraryList?: UsersUpdatelibraryListInput | string[]
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    followersId?: UsersUpdatefollowersIdInput | string[]
  }

  export type AlbumsUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    artistId?: AlbumsUpdateartistIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: AlbumsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    artistId?: AlbumsUpdateartistIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateManyAlbumsInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    playListId?: string | null
  }

  export type ArtistsUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
    Tracks?: TracksUpdateOneWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    albumsId?: ArtistsUpdatealbumsIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    tracksId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistsUncheckedUpdateManyWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    albumsId?: ArtistsUpdatealbumsIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    tracksId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TracksUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutTracksNestedInput
    genres?: GenresUpdateManyWithoutTracksNestedInput
    Users?: UsersUpdateOneWithoutTrackListNestedInput
    PlayList?: PlayListsUpdateOneWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistsUncheckedUpdateManyWithoutTracksNestedInput
    genres?: GenresUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TracksCreateManyPlayListInput = {
    id?: string
    name: string
    imageUrl: string
    likes: number
    genresId?: TracksCreategenresIdInput | string[]
    audioUrl: string
    verified: boolean
    duration: number
    imageId: string
    audioId: string
    usersId?: string | null
    albumsId?: string | null
  }

  export type TracksUpdateWithoutPlayListInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutTracksNestedInput
    genres?: GenresUpdateManyWithoutTracksNestedInput
    Users?: UsersUpdateOneWithoutTrackListNestedInput
    Albums?: AlbumsUpdateOneWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutPlayListInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistsUncheckedUpdateManyWithoutTracksNestedInput
    genres?: GenresUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutPlayListInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TracksUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    artists?: ArtistsUpdateManyWithoutTracksNestedInput
    Users?: UsersUpdateOneWithoutTrackListNestedInput
    Albums?: AlbumsUpdateOneWithoutTracksNestedInput
    PlayList?: PlayListsUpdateOneWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
    artists?: ArtistsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    likes?: IntFieldUpdateOperationsInput | number
    genresId?: TracksUpdategenresIdInput | string[]
    audioUrl?: StringFieldUpdateOperationsInput | string
    verified?: BoolFieldUpdateOperationsInput | boolean
    duration?: IntFieldUpdateOperationsInput | number
    imageId?: StringFieldUpdateOperationsInput | string
    audioId?: StringFieldUpdateOperationsInput | string
    usersId?: NullableStringFieldUpdateOperationsInput | string | null
    albumsId?: NullableStringFieldUpdateOperationsInput | string | null
    playListId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistsCreateManyTracksInput = {
    id?: string
    name: string
    genres?: ArtistsCreategenresInput | string[]
    imageUrl: string
    popularity: number
    albumsId?: ArtistsCreatealbumsIdInput | string[]
    listType: string
  }

  export type ArtistsUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    listType?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    albumsId?: ArtistsUpdatealbumsIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateManyWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    genres?: ArtistsUpdategenresInput | string[]
    imageUrl?: StringFieldUpdateOperationsInput | string
    popularity?: IntFieldUpdateOperationsInput | number
    albumsId?: ArtistsUpdatealbumsIdInput | string[]
    listType?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tracksId?: GenresUpdatetracksIdInput | string[]
    color?: StringFieldUpdateOperationsInput | string
  }

  export type GenresUncheckedUpdateManyWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    tracksId?: GenresUpdatetracksIdInput | string[]
    color?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowersCountOutputTypeDefaultArgs instead
     */
    export type FollowersCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FollowersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsCountOutputTypeDefaultArgs instead
     */
    export type ArtistsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ArtistsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumsCountOutputTypeDefaultArgs instead
     */
    export type AlbumsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AlbumsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayListsCountOutputTypeDefaultArgs instead
     */
    export type PlayListsCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PlayListsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresCountOutputTypeDefaultArgs instead
     */
    export type GenresCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GenresCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksCountOutputTypeDefaultArgs instead
     */
    export type TracksCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TracksCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsersDefaultArgs instead
     */
    export type UsersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FollowersDefaultArgs instead
     */
    export type FollowersArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FollowersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsDefaultArgs instead
     */
    export type ArtistsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ArtistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumsDefaultArgs instead
     */
    export type AlbumsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlayListsDefaultArgs instead
     */
    export type PlayListsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PlayListsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenresDefaultArgs instead
     */
    export type GenresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = GenresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksDefaultArgs instead
     */
    export type TracksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = TracksDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}