// function thuong
function sum1() {
    const params = [];
    // fori: Lọc từ obj arg => trả về 1 mảng
    for (let index = 0; index < arguments.length; index++) {
      if (typeof arguments[index] === "number") {
        params.push(arguments[index]);
      } else throw new Error("Please add item in number type"); // Xuất lỗi nếu không là phần tử số
      
    }
    
    // reduce: tính tổng mảng params
    const result = params.reduce(function (prevValue, curValue, curIndex, arr) {
      console.table({ prevValue, curValue, curIndex, arr });
      return prevValue + curValue;
    }, 0);
    
    console.log(result);
  }
  
  sum1(1, 2, 3);
  
  // function gọi và chạy Luôn/ no name / chỉ chạy 1 Lần
(function (a, b) {
    console.log(a + b);
  })(1, 2);
  


// 
this.name = "abc";

function hello1() {
  this.name = "xyz";
  this.getName = () => {
    // cap 2 => Lấy this cấp 1 (k có)
    console.log("1", this.name);
  };
}

const obj1 = new hello1();
obj1.getName();

const hello2 = () => {
  console.log(this);
};
hello2();

function hello(name) {
  return "hello" + name;
}

const h = (name) => "hello" + name;

const sum = (...data) => data.reduce((prevValue, curValue, curIndex, arr) => prevValue + curValue, 0);
console.log(sum(1, 2, 3, 4, 5, 6));

