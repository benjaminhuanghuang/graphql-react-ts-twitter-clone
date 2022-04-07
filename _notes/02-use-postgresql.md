
## connect to PostgreSQL
https://www.prisma.io/docs/concepts/database-connectors/postgresql

 
db name: twitter-clone

create server/prisma/.env
```
DATABASE_URL="postgressql://user@localhost:5432/twitter-clone"
```

modify server/prisma/.schema.prisma
sqlite
```
  datasource db {
    provider = "sqlite"
    url      = "file:./dev.db"
  }

```
postgresql
```
  datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
  }
```
 
create tables
```
  # create PrismaClient
  npx prisma generate

  # creat DB
  npx prisma db push 
```


Open prisma GUI and add data
```
npx prisma studio
``` 