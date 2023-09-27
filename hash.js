class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      //create an empty bin
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  get(key) {
    let address = this._hash(key);
    let bin = this.data[address];
    if (bin) {
      for (let pair of bin) {
        if (pair[0] === key) {
          return pair[1];
        }
      }
    } else return undefined;
  }

  //_ means it is a private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("grapess"));
