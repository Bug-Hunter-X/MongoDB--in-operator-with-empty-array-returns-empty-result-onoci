# MongoDB $in Operator with Empty Array

This repository demonstrates a common issue with the MongoDB `$in` operator when used with an empty array.  The query unexpectedly returns an empty result set instead of returning all documents.

## Problem

The following query is intended to find documents where the 'field' matches any value within an array. However, if the array is empty, it incorrectly returns an empty result set.

```javascript
db.collection.find({ field: { $in: [] } });
```

## Solution

The solution is to avoid using `$in` with an empty array. Instead, if you need to handle cases where there might be no values to match, use an alternative approach, such as checking for null or undefined values or adjusting your logic accordingly. For instance, if you wish to return all documents when the input array is empty, you may restructure the query entirely.

```javascript
// Check if the array is empty, then return all documents.
let query = {};
if(inputArray.length > 0) {
    query = { field: { $in: inputArray } };
}

db.collection.find(query);
```