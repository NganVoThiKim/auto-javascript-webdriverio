// Bài tập:
// Hãy yêu cầu học viên viết lại đoạn kịch bản test sau từ Callback sang Promise:
// wait(1s) -> In ra "Start Test".
// wait(1s) -> In ra "Doing Test".
// wait(1s) -> In ra "End Test".

// function wait(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }
// wait(1000)
//     .then(() => {
//         console.log("Start Test");
//         return wait(1000);
//     })
//     .then(() => {
//         console.log("Doing Test");
//         return wait(1000);
//     })
//     .then(() => {
//         console.log("End Test");
//     })
//     .catch(error => {
//         console.error("Error: ", error);
//     });

// Bài tập 1: "Làm phẳng" kim tự tháp (Refactoring)
// Đề bài: Cho một đoạn code sử dụng Callback cực kỳ rắc rối dưới đây. Đoạn code này mô phỏng việc Mở trình duyệt 
// -> Nhập URL -> Tìm Element -> Click.

// function openBrowser(callback) {
//     setTimeout(() => {
//         console.log("1. Đã mở trình duyệt");
//         callback();
//     }, 1000);
// }
// function enterUrl(url, callback) {
//     setTimeout(() => {
//         console.log("2. Đã nhập URL: " + url);
//         callback();
//     }, 1000);
// }
// function clickButton(callback) {
//     setTimeout(() => {
//         console.log("3. Đã click nút Login");
//         callback();
//     }, 1000);
// }
// // Thực thi (Địa ngục Callback)
// openBrowser(() => {
//     enterUrl("https://test.com", () => {
//         clickButton(() => {
//             console.log("✅ Test hoàn tất!");
//         });
//     });
// });

// Yêu cầu: 
//1. Viết lại 3 hàm trên dưới dạng Promise.

function openBrowser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("1. Đã mở trình duyệt");
            resolve();
        }, 1000);
    });
}
function enterUrl(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("2. Đã nhập URL: " + url);
            resolve();
        }, 1000);
    });
}
function clickButton() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("3. Đã click nút Login");
            resolve();
        }, 1000);
    });
}

// openBrowser()
//     .then(() => enterUrl("https://test.com"))
//     .then(() => clickButton())
//     .then(() => console.log("✅ Test hoàn tất!"))
//     .catch(error => console.error("Error: ", error));

// 2. Sử dụng Async/Await để thực thi chuỗi hành động trên sao cho code trông "thẳng" và dễ đọc nhất.

// async function runTest() {
//     try {
//         await openBrowser();
//         await enterUrl("https://test.com");
//         await clickButton();
//         console.log("✅ Test hoàn tất!");
//     } catch (error) {
//         console.error("Error: ", error);
//     }
// }
// runTest();

// Bài tập 2: "Bẫy lỗi" hệ thống (Error Handling)
// Đề bài: Trong Automation, đôi khi Server sẽ trả về lỗi (ví dụ: Timeout 404). Bạn cần viết một script "nồi đồng cối đá" không bị crash khi gặp lỗi.
// Yêu cầu: 
// 1. Viết một hàm fetchDataFromServer() trả về một Promise. 
// 2. Sử dụng Math.random() bên trong hàm: 
// * Nếu số ngẫu nhiên > 0.5: Resolve với nội dung "Dữ liệu đã sẵn sàng". 
// * Nếu số ngẫu nhiên <= 0.5: Reject với nội dung "Lỗi kết nối Server!". 

function fetchDataFromServer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve("Dữ liệu đã sẵn sàng");
            } else {
                reject("Lỗi kết nối Server!");
            }
        }, 1000);

    })
}

// 3. Viết một hàm runTest() sử dụng Async/Await để gọi hàm trên. 
// 4. Quan trọng: Phải dùng try...catch để: 
// * Nếu thành công: In ra dữ liệu. 
// * Nếu thất bại: In ra thông báo lỗi màu đỏ và dòng chữ "Đang đóng trình duyệt để dọn dẹp...".

async function runTest() {
    try {
        const data = await fetchDataFromServer();
        console.log(data);
    } catch (error) {
        console.error('\x1b[31m%s\x1b[0m', 'Lỗi kết nối Server!');
        console.error('\x1b[31m%s\x1b[0m', 'Đang đóng trình duyệt để dọn dẹp...');
    }
}
runTest();

// Bài tập 3: Kịch bản Test song song (Parallel vs Sequential)
// Đề bài: Giả sử bạn cần kiểm tra 3 Page khác nhau: HomePage, ProductPage, và ContactPage. Mỗi trang mất 2 giây để load.
// Yêu cầu:
// Viết một hàm checkPage(pageName) trả về Promise và hoàn thành sau 2 giây.
// Kịch bản A (Tuần tự): Dùng await để kiểm tra từng trang một (Trang 1 xong mới đến trang 2). 
// Sau đó in ra tổng thời gian chạy (dự kiến là 6 giây).
// Kịch bản B (Song song - Nâng cao): Tìm hiểu về Promise.all() để kích hoạt kiểm tra cả 3 trang cùng một lúc. 
// Sau đó in ra tổng thời gian chạy (dự kiến chỉ mất 2 giây).

function checkPage(pageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Trang ${pageName} đã load xong.`);
            resolve();
        }, 2000);
    });
}

// Kịch bản A (Tuần tự)
async function runSequentialTest() {
    console.time("Sequential Test");
    await checkPage("HomePage");
    await checkPage("ProductPage");
    await checkPage("ContactPage");
    console.timeEnd("Sequential Test");
}
runSequentialTest();

// Kịch bản B (Song song - Nâng cao)
async function runParallelTest() {
    console.time("Parallel Test");
    await Promise.all([
        checkPage("HomePage"),
        checkPage("ProductPage"),
        checkPage("ContactPage")
    ]);
    console.timeEnd("Parallel Test");
}
runParallelTest();

