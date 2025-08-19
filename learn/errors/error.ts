// Enable Replica Set automatically on your local MongoDB server
/* Error:
   When I try to add a user to MongoDB with Prisma using Express, I get:

   Error: Prisma needs to perform transactions, which requires your MongoDB 
   server to be run as a replica set. https://pris.ly/d/mongodb-replica-set
*/

/* Solution:
   MONGODB SERVER MUST RUN AS A REPLICA SET

   Replication in MongoDB:
     - Ensures data is always available, even if a system fails.
     - Types:
         * Master-Slave Replication (old method, not recommended)
         * Replica Sets (group of MongoDB processes, recommended)
            --> Min of Replica Sets is Three Server 
                primary Server Of Write Data and Others is
                Seconderay for copy data from primary
*/


