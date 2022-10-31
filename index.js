const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello jenkin!, I am healthy')
})

app.get('/data', (req, res) => {
  res.json({
    "status": true,
    "message": "",
    "data": [
        {
            "description": "sqswqswqs",
            "timestamp": "2019-11-29T12:46:21.633Z",
            "_id": "5de1131d8f7be5395080f7b9",
            "name": "topics test xqxq",
            "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575031579309.jpg",
            "category_id": "5de0fe0b4f76c22ebce2b70a",
            "__v": 0
        },
        {
            "description": "sqswqswqs",
            "timestamp": "2019-11-29T12:50:35.627Z",
            "_id": "5de1141bc902041b58377218",
            "name": "topics test xqxq",
            "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575031835605.jpg",
            "category_id": "5de0fe0b4f76c22ebce2b70a",
            "__v": 0
        },
        {
            "description": " ",
            "timestamp": "2019-11-30T06:51:18.936Z",
            "_id": "5de211665c3f2c26c00fe64f",
            "name": "topics test xqxq",
            "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575096678917.jpg",
            "category_id": "5de0fe0b4f76c22ebce2b70a",
            "__v": 0
        },
        {
            "description": "null",
            "timestamp": "2019-11-30T06:51:41.060Z",
            "_id": "5de2117d5c3f2c26c00fe650",
            "name": "topics test xqxq",
            "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575096701051.jpg",
            "category_id": "5de0fe0b4f76c22ebce2b70a",
            "__v": 0
        },
        {
            "description": "swqdwqd wwwwdwq",
            "timestamp": "2019-11-30T07:05:22.398Z",
            "_id": "5de214b2964be62d78358f87",
            "name": "topics test xqxq",
            "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575097522372.jpg",
            "category_id": "5de0fe0b4f76c22ebce2b70a",
            "__v": 0
        },
        {
            "description": "swqdwqd wwwwdwq",
            "timestamp": "2019-11-30T07:36:48.894Z",
            "_id": "5de21c1006f2b81790276f6a",
            "name": "topics test xqxq",
            "thumbnail": "waterfall-or-agile-inforgraphics-thumbnail-1575099408870.jpg",
            "category_id": "5de0fe0b4f76c22ebce2b70a",
            "__v": 0
        }
          ]
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})