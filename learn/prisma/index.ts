// Prisma Introduction
/*
    Prisma like mongoose (use to interact with database)
    but prisma can intercat with more then +12 database not like mongoose just mongoDB
*/

// Concepts In Prisma
/*
    Schema change → Migration → Prisma Client update → Database updated → Use in code

    -- Prisma Schame: A file (schema.prisma) that contain out structure
    -- Model: Represents a table in my database
    -- Migration: way to update database when shcema changed
    -- Prisma Client: A API that offre a lot functions to intercat with database like (findMany(), ...)
    -- Prisma Studio: A GUI to view and edit data in your database
    -- Generator: create Prisma Client API from your schema

    Flow: Change schema → Run migration → Generate client → Use in code
*/

// How we Can Work With Prisma
/*
    - We Create Schama and we define our database structure in file called schema.prisma

    - We Update Client APi:
        --> npx prisma generate

    - Update database:
        --> for SQL: npx prisma migrate dev --name <migration-name>
        --> for MongoDB: npx prisma db push
            NOTE: if we already generate prisma client --> 
            we need just to run "npx prisma db push" it will be
            regenerate Prisma Client API 
*/

