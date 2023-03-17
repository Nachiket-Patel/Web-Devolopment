//A JavaScript Set is a collection of unique values.
//Each value can only occur once in a Set.

//create set

const a = new Set(["a", "b", "c"]);
console.log(a);
//add() - method to add new element in set
const b = new Set();
b.add("1");
b.add("2");
b.add("3");
console.log(b);

const c = new Set();
const a1 = "A";
const b1 = "B";
const c1 = "C";
c.add(a1);
c.add(b1);
c.add(c1);
console.log(c);


//forEach() - 
const d = new Set(["a", "1", "A"]);
let e = ""
d.forEach(function(value){
    e += value;
});
console.log(e);


//value() - return all values in set
e = new Set(["Z", "x", "5"]);
console.log(e.values());
for(const x of e.values()){
    console.log(x);
}
