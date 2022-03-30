
## connect to PostgreSQL
https://www.prisma.io/docs/concepts/database-connectors/postgresql

 
db name: twitter-clone

create server/prisma/.env
```
DATABASE_URL="postgressql://user@localhost:5432/twitter-clone"
```

modify server/prisma/.schema.prisma
```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

create tables
```
  npx prisma generate

  npx prisma migrate save --experimental
  npx prisma migrate up --experimental
```