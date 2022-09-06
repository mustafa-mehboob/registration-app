var obj = [];
function submit() {
    var name = document.getElementById("inputName3");
    var fName = document.getElementById("inputFatherName3");
    var email = document.getElementById("inputEmail3");
    var phone = document.getElementById("inputPhone3");
    var birth = document.getElementById("inputBirth3");
    var cnic = document.getElementById("inputCnic3");
    var radio1 = document.getElementById("inlineRadio1");
    var radio2 = document.getElementById("inlineRadio2");
    var address = document.getElementById("exampleFormControlTextarea1");
    var courseName = document.getElementById("courseName");
    var cityName = document.getElementById("cityName");

    var regixName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var regixfName = /^[a-zA-Z]+$/;
    var regixEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value);
    var regixPhone = /^[0-9]{11}$/.test(phone.value);
    var regixCnic = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic.value);

    if (!regixName.test(name.value) && !regixfName.test(name.value)) {
        alert("Enter valid name");
    }
    else if (!regixName.test(fName.value) && !regixfName.test(fName.value)) {
        alert("Enter valid father name");
    }
    else if (!regixEmail) {
        alert("Enter valid email");
    }
    else if (!regixPhone) {
        alert("Enter valid number");
    }
    else if (!birth.value) {
        alert("Enter your date of birth")
    }
    else if (!radio2.checked && !radio1.checked) {
        alert("Slect your gender")
    }
    else if (!regixCnic) {
        alert("Enter valid cnic");
    }

    else if (courseName.value < 1) {
        alert("Plect slecr course")
    }
    else if (!cityName.value) {
        alert("Slect you city")
    }
    else {

        console.log(name.value);
        console.log(fName.value);
        console.log(email.value);
        console.log(phone.value);
        console.log(birth.value);
        console.log(cnic.value);
        if (radio1.checked) {
            console.log(radio1.value);
        }
        else if (radio2.checked) {
            console.log(radio2.value);
        }
        console.log(address.value);
        console.log(courseName.value);
        console.log(cityName.value);

        obj.push(
            {
                name: name.value,
                fName: fName.value,
                email: email.value,
                phone: phone.value,
                birth: birth.value,
                cnic: cnic.value,
                address: address.value,
                courseName: courseName.value,
                cityName: cityName.value
            }
        );
        localStorage.setItem("user-info", JSON.stringify(obj));
        console.log(JSON.stringify(obj));

        document.getElementById("inputName3").value = "";
        document.getElementById("inputFatherName3").value = "";
        document.getElementById("inputEmail3").value = "";
        document.getElementById("inputPhone3").value = "";
        document.getElementById("inputBirth3").value = "";
        document.getElementById("inputCnic3").value = "";
        document.getElementById("inlineRadio1").value = "";
        document.getElementById("inlineRadio2").value = "";
        document.getElementById("exampleFormControlTextarea1").value = "";
        document.getElementById("courseName").value = "";
        document.getElementById("cityName").value = "";
    }
}