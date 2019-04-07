
##### Index creation for geospatial queries
```javascript
db.getCollection('match').ensureIndex({location:"2dsphere"});
```

#### geospatial query for matching offer and demand
```javascript
db.getCollection('match').aggregate([
{
     $geoNear: {
        near: { type: "Point", coordinates: [ -73.98142 , 40.71782 ] },
        key: "location",
        distanceField: "distanceField",
        query: { "consume": {"$in":["truck"]}, "provide.description": {"$regex":/truck/i} }
     }
   }
])
```
