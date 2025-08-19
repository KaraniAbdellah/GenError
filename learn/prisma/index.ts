// Prisma
/*
    Prisma is a next-generation ORM for Interaction with Database [like mongoose]:
        Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript
        Prisma Migrate: Declarative data modeling & migration system
        Prisma Studio: GUI to view and edit data in your database

    npm install express @prisma/client dotenv
    npx i prisma --> Initialize Prisma 
*/

// Basic Concepts
/*
    Prisma Client → It’s the tool you use in your code to talk to your database. Example: prisma.user.findMany() gets all users.
    Prisma Schema → A file (schema.prisma) where you describe your database models (tables, fields, relations).
    Models → They represent tables in the database
*/


// Migrations
/*
    Migration = a way to update your database when you change your schema.
        Example: You add a new field age in User. The database does not know it yet.
        Prisma migration will create/update the table so the database matches your schema.
*/


// What We need to Know --> is how to use schema.prisma
/*
    In this file we connect to database and we create models
    generator client {
        --> prisam create a client API based on this schema
        --> Generator:
            ==>  is programm that take prisma schema as an input and make output
                the famous generator if prisma-client
            ==> is important because each time we changee the schame generator
                called by "npx prisma generate"
            ==> Generator generate client folder that contain functions "create, ...."
                for each schema
        --> provider if "prisma-client-js" if provider that offre function like insert(), update(), create(), ...
        --> we need another script if we added a new index:
            npx prisma migrate dev --name <migration-name>   
            ==> we run this command each time we add new attribute in our model     
*/

// datasource db {
//     url = env("DATABASE_URL"),
//     provider = "mongodb"
// }

// generator client {
//     provider = "prisma-client-js" 
// }
// model User {
//     id Int @id @default(autoincrement())
//     name String?
// }

 

// What is Next After Create Model 
/*
    Migration:
        for MongoDb: "npx prisma db push"
        npx prisma client // generate prisma/client folder that contain functions (create, ...)
*/


// So In Backend With Prisma And Ts We have Buit-in types in prisma
// so we can use this type without create another types
/*
    import {
    User as prismaUserType,
    Session as prismaSessionType,
    Prompt as prismaPromptType,
    Output as prismaOutputType,
    } from "@prisma/client";
    export type userType = Omit<prismaUserType, "id">;
    export type sessionType = Omit<prismaSessionType, "id">;
    export type promptType = Omit<prismaPromptType, "id">;
    export type outputType = Omit<prismaOutputType, "id">;
*/

