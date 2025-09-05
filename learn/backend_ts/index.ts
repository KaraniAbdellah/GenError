// Express with Ts
/*
    if i want to use typescript with express i need to setup also backend like frontend:
        npm install typescript @types/node @types/express ts-node --save-dev
            --> typescript: TypeScript compiler.
            --> @types/node: Type definitions for Node.js.
            --> @types/express: Type definitions for Express.
            --> ts-node: TypeScript execution environment for Node.js.
*/

// Why Error Happen in npm i:
/*
Usually < 3
when we fork a project
we run npm i to install all the dependencies.
But something strange happens: we see some vulnerability errors,
yet when we run the project it still works fine, like nothing is wrong.

--> Actually, there are a lot of dependency errors here:
    // 36 packages are looking for funding → This means 36 authors are asking for donations.
    //  Warnings → The project uses some old libraries that should be updated.
    //  18 vulnerabilities → npm checked and found some security issues.

--> Solutions:
    // We can use: "npm audit fix force"

--> But what audit do exactly:

*/


