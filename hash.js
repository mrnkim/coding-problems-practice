class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  //_ means it is a private property
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
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
      // result array is to deal with multiple values for a single key
      let result = [];
      for (let pair of bin) {
        if (pair[0] === key) {
          result.push(pair[1]);
        }
      }
      if (result.length === 1) return result[0];
      return result;
    } else return undefined;
  }

  keys() {
    const bins = this.data;
    let keys = new Set();
    for (let bin of bins) {
      if (bin) {
        for (let pair of bin) {
          keys.add(pair[0]);
        }
      }
    }
    return keys;
  }
}

// Run the code
const myHashTable = new HashTable(50);

console.log(myHashTable);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.set("grapes", 20000));
console.log(myHashTable.data);
console.log(myHashTable.get("grapes"));
console.log(myHashTable.keys());
