Run postgres docker 
```
docker run --name fiverr-postgres -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -d -p 5432:5432 postgres:latest
```

Prisma
```
npx prisma db push
```