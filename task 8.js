let test = new Map();
test.set("monkey 1 ","banana A");
test.set("monkey 2 ","banana B");
test.set("monkey 3 ","banana C");
test.set("monkey 4 ","banana D");
test.set("monkey 5 ","banana E");

for(let testsubj of test.keys()){
    console.log(testsubj + " eat " + test.get(testsubj));
}