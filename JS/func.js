function Calculate() {
    let Inputnumber = document.getElementById("InputMaindish").value.trim();
    let Randomnumber = Math.floor(Math.random() * 5) + 1;
    if (Inputnumber === "") {
        document.getElementById("InputMaindish").placeholder = "กรุณาใส่น้ำหนักของคุณ";
    } else {
        console.log(Randomnumber);
        if (Randomnumber === 1){
            window.location.href = "/calculateRenalDiet/HTML/Result1.html"
        }else if (Randomnumber === 2){
            window.location.href = "/calculateRenalDiet/HTML/Result2.html"
        }else if (Randomnumber === 3){
            window.location.href = "/calculateRenalDiet/HTML/Result3.html"
        }else if (Randomnumber === 4){
            window.location.href = "/calculateRenalDiet/HTML/Result4.html"
        }else{
            window.location.href = "/calculateRenalDiet/HTML/Result5.html"
        }
    }
}
function CalculateB() {
    let Inputnumber = document.getElementById("DessertInput").value.trim();
    let Randomnumber = Math.floor(Math.random() * 5) + 1;
    if (Inputnumber === "") {
        document.getElementById("DessertInput").placeholder = "กรุณาใส่น้ำหนักของคุณ";
    } else {
        console.log(Randomnumber);
        if (Randomnumber === 1){
            window.location.href = "/calculateRenalDiet/HTML/ResultA.html"
        }else if (Randomnumber === 2){
            window.location.href = "/calculateRenalDiet/HTML/ResultB.html"
        }else if (Randomnumber === 3){
            window.location.href = "/calculateRenalDiet/HTML/ResultC.html"
        }else if (Randomnumber === 4){
            window.location.href = "/calculateRenalDiet/HTML/ResultD.html"
        }else{
            window.location.href = "/calculateRenalDiet/HTML/ResultE.html"
        }
    }
}
