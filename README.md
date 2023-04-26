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
