// Create a new collection
use("DatabaseName")
db.createCollection("collectionName")
// Removes a collection from database
db.collectionName.drop()
// Insert a single document into a collection
db.collectionName.insertOne({
    name:"Ashikur Rahman",
    email:'ashik@gmail.com'
})
// Delete a single document from the collection
db.collectionName.deleteOne({
    "name":"Ashikur Rahman"
})
