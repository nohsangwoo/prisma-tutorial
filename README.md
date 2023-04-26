# prisma tutorial

# install

-   ref: https://www.prisma.io/docs/getting-started/quickstart

# prisma settup

-   ref: https://www.prisma.io/docs/getting-started/quickstart

# schema 작성시 migration

```
& npx prisma migrate dev --name init
```

-   issue1 / 테이블 안에 데이터가 남아있어서 그럼, 전부 지워주고 다시시도.

```
Error:
⚠️ We found changes that cannot be executed:

  • Step 0 Added the required column `age` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 0 Added the required column `email` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 0 Added the required column `isAdmin` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.
  • Step 0 Added the required column `preferences` to the `User` table without a default value. There are 3 rows in this table, it is not possible to execute this step.

You can use prisma migrate dev --create-only to create the migration file, and manually modify it to address the underlying issue(s).
Then run prisma migrate dev to apply it and verify it works.
```

# prisma generate로 prisma client 생성

```
& npx prisma generate
```

# include와 select의 차이

-   include는 선택된 컬림을 추가로 더 가져온다
    (보통 다른 테이블의 컬럼들을 가져올때 사용)
-   select는 선택된 컬럼만 가져온다.

# distinct

-   중복된 데이터를 제거하고 가져온다.(중복되는 내용중의 첫번째 데이터를 가져옴.)

# take

-   가져올 데이터의 갯수를 정한다.

```js
const users = await prisma.user.findMany({
    where: {
        name: "jongran",
    },
    take: 2,
});
```

# skip

-   건너띌 데이터의 갯수를 정한다.

```js
const users = await prisma.user.findMany({
    where: {
        name: "jongran",
    },
    skip: 1,
});
```

# orderBy

-   정렬 방식: asc,desc 중 택1

```js
const users = await prisma.user.findMany({
    where: {
        name: "jongran",
    },
    orderBy: {
        age: "asc",
    },
});
```

# equals

-   같은 조건의 데이터를 가져온다

```js
const users = await prisma.user.findMany({
    where: {
        name: { not: "jongran" },
    },
});
console.log(users);
```

# not

-   같지 않은 조건

```js
const users = await prisma.user.findMany({
    where: {
        name: { not: "jongran" },
    },
});
```

# notIn

-   배열안에 있는 데이터를 제외하고 가져온다.

```js
const users = await prisma.user.findMany({
    where: {
        name: { notIn: ["jongran", "sangwoo5"] },
    },
});
console.log(users);
```

# lt, lte, gt, gte

-   lt: 작다
-   lte: 작거나 같다
-   gt: 크다
-   gte: 크거나 같다

```js
const users = await prisma.user.findMany({
    where: {
        age: { lt: 30 },
    },
});
```

# contains

-   문자열이 포함되어있는지 확인

```js
const users = await prisma.user.findMany({
    where: {
        name: { contains: "ran" },
    },
});
```

# startsWith, endsWith

-   startsWith: 문자열로 시작하는지 확인
-   endsWith: 문자열로 끝나는지 확인

```js
const users = await prisma.user.findMany({
    where: {
        name: { startsWith: "san" },
    },
});
```

```js
const users = await prisma.user.findMany({
    where: {
        name: { endWith: ".com" },
    },
});
```

# AND

-   AND 조건

```js
const users = await prisma.user.findMany({
    where: {
        AND: [{ email: { contains: "naver" } }, { name: { contains: "jong" } }],
    },
});
```

# OR

-   OR 조건

````js
const users = await prisma.user.findMany({
    where: {
        OR: [
            { email: { contains: "jongran@" } },
            { name: { contains: "miyayun" } },
        ],
    },
});
console.log(users);
    ```
````

# NOT

-   NOT 조건

```js
const users = await prisma.user.findMany({
    where: {
        NOT: [
            { email: { contains: "jongran@" } },
            { name: { contains: "miyayun" } },
        ],
    },
});
console.log(users);
```

# 관계된 다른 테이블의 데이터 가져오기

```js
const users = await prisma.user.findMany({
    where: {
        userPreference: {
            emailUpdates: true,
        },
    },
});
console.log(users);
```
