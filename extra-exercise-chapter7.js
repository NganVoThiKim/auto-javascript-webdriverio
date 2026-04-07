// BÀI KIỂM TRA KIẾN THỨC:
// Câu 1: Trong cơ chế Event Loop, khi một Promise được resolve, callback của nó (.then hoặc sau await) sẽ được đưa vào hàng đợi nào? 
// A. Call Stack 
// B. Web APIs 
// C. Microtask Queue 
// D. Callback Queue (Macrotask)

// 1. C

// Câu 2: Điều gì xảy ra nếu bạn quên từ khóa await trước một hàm trả về Promise bên trong một hàm async? 
// A. Chương trình sẽ báo lỗi cú pháp (Syntax Error) ngay lập tức. 
// B. Hàm đó vẫn chạy, nhưng biến nhận kết quả sẽ là một đối tượng Promise ở trạng thái "pending". 
// C. Chương trình sẽ tự động dừng lại và đợi cho đến khi Promise đó hoàn thành. 
// D. JavaScript sẽ chuyển hàm đó thành chạy đồng bộ (Synchronous).

// 2. D

// Câu 3: Cú pháp Promise.all([p1, p2, p3]) sẽ trả về kết quả gì nếu có MỘT Promise (ví dụ p2) bị reject? 
// A. Trả về mảng kết quả của p1 và p3, bỏ qua p2. 
// B. Đợi cho đến khi p1 và p3 hoàn thành rồi mới báo lỗi p2. 
// C. Ngay lập tức nhảy vào khối .catch hoặc ném ra lỗi mà không đợi p1, p3 nữa. 
// D. Trả về một mảng chứa cả giá trị thành công và thông báo lỗi.

// 3. C

// Câu 4: Cách tốt nhất để xử lý lỗi khi sử dụng Async/Await là gì? 
// A. Sử dụng .catch() ở cuối mỗi dòng có await. 
// B. Bọc toàn bộ các dòng code có await vào trong khối try...catch.
// C. Sử dụng câu lệnh if (error) sau mỗi dòng await. 
// D. Không cần xử lý vì async tự động bắt lỗi.

// 4. B

// Câu 5: Khối lệnh finally trong cấu trúc try...catch...finally có đặc điểm gì quan trọng nhất đối với Tester? 
// A. Chỉ chạy khi Test Case đó vượt qua (Passed).
// B. Chỉ chạy khi Test Case đó thất bại (Failed) để log lỗi. 
// C. Luôn luôn chạy bất kể Test Case Pass hay Fail (thường dùng để đóng trình duyệt). 
// D. Dùng để thay thế cho lệnh return.

// 5. C

// Question 6: What is the exact output order of the following code?

// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// async function quickTask() {
//     console.log('D');
//     await Promise.resolve();
//     console.log('E');
// }
// quickTask();
// console.log('F');

// A. A, B, C, D, E, F
// B. A, D, F, C, E, B
// C. A, D, C, F, E, B
// D. A, D, F, B, C, E

// 6. B

// Question 7: In an Automation framework (like Playwright or WDIO), what is the primary danger of using Array.prototype.map()
// with an async callback without wrapping it in Promise.all()?
// A. It will cause a SyntaxError because map does not support async.
// B. The map function will return an array of pending Promises instead of the actual data, and the script will continue executing immediately.
// C. It will automatically convert the asynchronous calls into synchronous ones, slowing down the test.
// D. It will cause the browser to crash due to a memory overflow.

// 7. B

// Question 8: How does await behave inside a try...catch block if the awaited Promise is rejected?
// A. The script stops execution entirely and the catch block is ignored.
// B. The rejected value is assigned to the variable on the left side of the await.
// C. The await expression throws the rejected value as an exception, immediately jumping to the catch block.
// D. You must use .catch() after the await command because try...catch only works for synchronous code.

// 8. C
