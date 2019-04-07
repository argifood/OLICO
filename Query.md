
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
        query: {
            "consume": {"$in":["chainshow"]},
            "provide.description": {"$regex":/truck/i},
            "timeWindow.provide.from": {
                    "$gte": ISODate("2019-07-14T08:14:00.201Z")                    
             },
            "timeWindow.provide.to": {
                    "$lte": ISODate("2010-07-20T08:14:00.201Z")                    
             },
            "timeWindow.provide.from": {
                    "$gte": ISODate("2019-07-14T08:14:00.201Z")                    
             },
            "timeWindow.provide.to": {
                    "$lte": ISODate("2010-07-20T08:14:00.201Z")                    
             },
        }
     }
```
