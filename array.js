let bugList = ["Lỗi giao diện", "Lỗi API", "Lỗi Logic"];
bugList.push("Lỗi bảo mật");
console.log(`Bug list after insert: ${bugList}`);
bugList.shift();
bugList.pop();
console.log(`Bug list after delete: ${bugList}`);
console.log(`Currently, Bug total: ${bugList.length}`);