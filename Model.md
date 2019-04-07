```json
equipment

{
    "_id" : ObjectId("5ca9aab6b4e5d411c2e2eba4"),
    "provide" : "truck",
    "brand" : "toyota",
    "productionDate" : ISODate("2012-07-14T08:14:00.201Z"),
    "_owner" : ObjectId("5ca9aab6b4e5d411c2e2eba4"),
    "location" : {
        "type" : "Point",
        "coordinates" : [
            51.50998,
            -0.1337
        ]
    }
}
```

```json
user

{
    "_id" : ObjectId("5ca9aab6b4e5d411c2e2eba4"),
    "name" : "alex",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            51.50998,
            -0.1337
        ]
    }
}
```

```json
match

{
    "_id" : ObjectId("5ca9ae08b4e5d411c2e2ed05"),
    "_user" : ObjectId("5ca9aab6b4e5d411c2e2eba4"),
    "provide" : {
        "_item" : ObjectId("5ca9aab6b4e5d411c2e2eba4"),
        "description" : "chainshow"
    },
    "consume" : [
        "truck",
        "bankNotes",
        "token"
    ],
    "location" : {
        "type" : "Point",
        "coordinates" : [
            51.50998,
            -0.1337
        ]
    },
    "timeWindow" : {
        "provide" : {
            "from" : ISODate("2012-07-14T08:14:00.201Z"),
            "to" : ISODate("2012-07-14T08:14:00.201Z")
        },
        "consume" : {
            "from" : ISODate("2012-07-14T08:14:00.201Z"),
            "to" : ISODate("2012-07-14T08:14:00.201Z")
        }
    },
    "status" : "open"
}
```

```json
field

{
    "_id" : ObjectId("5ca9ac1fb4e5d411c2e2ec39"),
    "_owner" : ObjectId("5ca9aab6b4e5d411c2e2eba4"),
    "type" : "tomatos",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            51.50998,
            -0.1337
        ]
    }
}
```
