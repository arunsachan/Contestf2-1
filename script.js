/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  arr.map((item)=>{
    if(item.profession == "developer"){
      console.log(item);
    }
  })
}

function PrintDeveloperbyForEach() {
  arr.forEach((item)=>{
    if(item.profession == "developer"){
      console.log(item);
    }
  })
}

function addData() {
  let newElem={id:4,name:"susan",age:"20",profession:"intern"}  
   arr.push(newElem);
  console.log(arr);
}

function removeAdmin() {
  let new_arr = arr.filter(function (val) {
    if (val.profession !== "admin") {
       return val;
    }
  });
  console.log(new_arr);
}


function concatenateArray() {
  let brr = [{ id: 4, name: "rohan", age: "25", profession: "support" },{ id: 5, name: "mohan", age: "26", profession: "sales" },{ id: 6, name: "sohan", age: "39", profession: "webdev" }];
  arr=arr.concat(brr);
  console.log(arr);
}
