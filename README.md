# Transaction App | Database | MongoDB-API
> A transactions app that allows get, post, patch, and delete data with in MongoDB. Undersand MongoDB database.

## Database Structure
Our transaction database will be made up of two collections. A users collection and a transactions collection. Here's what columns these tables contain:

**Users**
- id
- email
- password
- created_at
- updated_at

**Transactions**
- id
- user_id
- amount
- type
- business_name
- created_at
- updated_at

# Technologies
* JavaScript
* Node.js
* EJS
* MongoDB, Mongoose

# Features
* Get transactions.
* Post transactions.
* Delete transactions.
* Update transaction.
