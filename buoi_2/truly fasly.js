/** 
* Các dữ liệu -> convert boolean -> return false (còn Lại đều Là true) * 1. "" (chuỗi rỗng)
1. ""( chuỗi rỗng) 
2. 0 (só 0) 
3. false 
4. nuLL ( ** LƯU Ý: typeof null -> object) 
5. undefined 
6. NaN

*/
// vd1: danh sách rỗng/ obj rỗng ( --> true)
const empty_list = []; 
if (empty_list. length) 
    { console.log("Empty_list had length > @"); 

    } else if 
    (empty_list) { 
        console. log("Had empty_list"); // run this code
    }
//  vd2:
// Kiểm tra biến có tồn tại (Load API) - sử dụng toán tử 3 ngôi
const none_list = undefined;

// Sử dụng toán tử 3 ngôi
const none_var = none_list ? none_list : "None list is not defined"; 
console.log(none_var); // Ghi lại code (if)

// Sử dụng câu lệnh if
if (none_list) {
    console.log(none_list);
} else {
    console.log("None list is not defined");
}

// Sử dụng so sánh (||)
const ss = none_list || null; 
console.log(ss);

// KIỂU DỮ LIỆU
console.log(typeof 0); // 'number'
console.log(typeof NaN); // 'number'
// chuyển thành number
console.log(parseInt("123.6")); // 123 --> LÀM TRÒN
console.log(parseFloat("123.6")); // 123.6

console.log(typeof "")//string
//  chuyển thành string
console.log(String(true)); // "true"
console.log(String(undefined)); // "undefined"
console.log("90" + 1); // "901" 
console.log("90" - 1); // số 89 (vi string không có toán từ -)
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
console.log(typeof true); // 'boolean'

// chuyen thanh boolean
console.log(Boolean(0)); // false
console.log(Boolean([])); // true

console.log(typeof []); // 'object'
console.log(typeof {}); // 'object'

// cách kiểm tra array [] (phân biệt với object {})
console.log(Array.isArray([])); // true
console.log(Array.isArray({})); // false

// TOÁN TỪ LOGIC
// and (và) '&&': trả về giá trị false gần nhất
// => nếu không có false trong biểu thức => trả về giá trị true cuối cùng
console.log(true && true && 1); // 1
console.log("" && true && []); // ""

// or (hoặc) '||': trả về giá trị true gần nhất
// => nếu không có false trong biểu thức => trả về giá trị false cuối cùng
console.log(true || null || undefined); // true
console.log(null || 0 || "1"); // "1"

