
#### Index creation for geospatial queries
```javascript
db.getCollection('match').ensureIndex({location:"2dsphere"});
```

#### geospatial query for matching offer and demand
```javascript
db.getCollection('match').aggregate([
{
     $geoNear: {
        near: { type: "Point", coordinates: [ 0, 0 ] },
        key: "location",
        distanceField: "distanceField",
        query: {
            "consume": {"$in":["chainsaw"]},
            "provide.description": {"$regex":/truck/i},
            "timeWindow.provide.from": {
                    "$gte": ISODate("2019-07-14T08:14:00.201Z")                    
             },
            "timeWindow.provide.to": {
                    "$lte": ISODate("2019-07-20T08:14:00.201Z")                    
             },
            "timeWindow.consume.from": {
                    "$gte": ISODate("2019-07-14T08:14:00.201Z")                    
             },
            "timeWindow.consume.to": {
                    "$lte": ISODate("2019-07-20T08:14:00.201Z")                    
             },
        }
     }
   }
])
```
