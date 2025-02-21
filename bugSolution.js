```javascript
// Check if the input array is empty. If it is, return all documents. Otherwise, use the $in operator.
function findDocuments(inputArray) {
  if (inputArray.length === 0) {
    return db.collection.find({});
  } else {
    return db.collection.find({ field: { $in: inputArray } });
  }
}
```