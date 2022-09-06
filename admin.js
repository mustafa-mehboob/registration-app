var studentInfo = localStorage.getItem("user-info");
var name1 = document.getElementById("tableData");
if (studentInfo) {
    obj = JSON.parse(studentInfo);
    for (key in obj) {
            var value = obj[key];
            var get = Object.values(value)

            for (let j = 0; j < get.length; j++) {
                console.log(get[j]);
                var col = `
                <td class="tb-dt-txt">${get[j]} 
                </td> 
                `;
                name1.innerHTML += col
            }
    }
}


