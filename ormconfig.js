
module.exports = {
   "type": "postgres",
   "url": "postgres://fqymxemfzlhkvi:4df756899210a1f42eaf00b31dae60a986c9b00395893e6e2cd9e89bcb393fd5@ec2-54-159-138-67.compute-1.amazonaws.com:5432/do5j8tsmpa8i9",
   ssl: {
      rejectUnauthorized: false
   },
   "synchronize": false,
   "logging": false,
   "entities": [
      "dist/entity/**/*.js"
   ],
   "migrations": [
      "dist/migration/**/*.js"
   ],
   "subscribers": [
      "dist/subscriber/**/*.js"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}