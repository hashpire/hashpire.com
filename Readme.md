[![Board Status](https://dev.azure.com/hashpire/a8e60057-0fb2-4c91-950d-8e8a3863f157/8b141bb8-266d-4d18-8c1a-ddb4b73cf8ae/_apis/work/boardbadge/abd211b0-b2e7-45e1-b2a2-7d64cfa25ec0)](https://dev.azure.com/hashpire/a8e60057-0fb2-4c91-950d-8e8a3863f157/_boards/board/t/8b141bb8-266d-4d18-8c1a-ddb4b73cf8ae/Microsoft.RequirementCategory)
# Hashpire.com
Inspiring the world with the power of hash

### Installing Dependencies
```
npm install
```
### Development
```
npm start
```
### Production
```
npm run build
```


### Design
```

var Collection = {
    List: 0,

}

// Item Renderer
var Item = {
    MarkDown: 0,
    TXT: 1,
    JSON: ,
    XML: ,
    HTML: ,
    MP4: 
}

ProtobufTypeFormat = [
    {name: string, }
]


function rules(sender) {
    super();
    if sender has enough coin
        return true
    else
        return false
    end
}

function rules2(sender) {
    if sender has permission / in this role
    if 
}

class Node {
    constructor(parents, tid, data, rules) {
        parents.forEach((parent) => {
            // check permission
            // if not ok
            // throw();
            parent.children.push(this);
        });

        this.parents = [...parents];
        this.children = [];
        this.tid = tid;
        this.data = Object.assign({}, data);
        universe.push(this);
        this.id = universe.length;
    }

    function addChild(child) {

        this.children.push(child);
    }

}

let universe = [];

let earth = new Node([], );

function getNode(nodeId) -> Node;




```