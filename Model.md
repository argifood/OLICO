```json
equipment

{
    "_id" : ObjectId,
    "provide" : "truck",
    "brand" : "toyota",
    "productionDate" : ISODate,
    "_owner" : ObjectId,
    "location" : {
        "type" : "Point",
        "coordinates" : [
            0,
            0
        ]
    }
}
```

```json
user

{
    "_id" : ObjectId,
    "name" : "alex",
    "location" : {
        "type" : "Point",
        "coordinates" : [
            0,
            0
        ]
    }
}
```

```json
match

{
    "_id" : ObjectId,
    "_user" : ObjectId,
    "provide" : {
        "_item" : ObjectId,
        "description" : "chainsaw"
    },
    "consume" : [
        "truck",
        "bankNotes",
        "token"
    ],
    "location" : {
        "type" : "Point",
        "coordinates" : [
            0,
            0
        ]
    },
    "timeWindow" : {
        "provide" : {
            "from" : ISODate,
            "to" : ISODate
        },
        "consume" : {
            "from" : ISODate,
            "to" : ISODate
        }
    },
    "status" : {
      "_pointer": ObjectId,
      "flag": "open"
    }
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
