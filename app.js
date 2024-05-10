let choices = document.querySelectorAll(".choice")
let userresult = true
let userscore = document.querySelector("#user-score")
let compscore = document.querySelector("#comp-score")
let msg = document.querySelector("#msg")
let reset = document.querySelector("#reset")
let win = document.querySelector(".win")
let loose = document.querySelector(".loose")
let usersscore = 0
let compsscore = 0
let result = document.querySelector(".results")



let winner = () => {
    if (userresult) {
        compsscore++
        compscore.innerText = compsscore
        console.log("you los")
        loose.classList.remove("loose")

        
    }
    else {
        loose.classList.add("loose")
        usersscore++
        userscore.innerText = usersscore
        console.log("you won")
        result.classList.remove("results")
        
    }
    

}

let reseet = ()=>{
   userresult = true
   userscore.innerText = ""
   compscore.innerText = ""
   result.style.display = "none"
   
}






let compchoice = () => {
    let comchoi = ["rock", "paper", "scissors"]
    let a = Math.floor(Math.random() * 3)

    comchoi = comchoi[a]
    return comchoi

}

let userid = (id) => {
    let com = compchoice()
    console.log(com)
    if (id === com) {
        console.log("drew")
    } else {

        if (id === "rock") {
            userresult = com === "paper" ? false : true
        }
        else if (id === "paper") {
            userresult = com === "scissors" ? false : true

        }
        else if (id === "scissors") {
            userresult = com === "rock" ? false : true
        }

        
    }
    winner()
}



Array.from(choices).forEach((elements) => {
    elements.addEventListener("click", () => {


        let id = elements.getAttribute("id")
        console.log(id)
        userid(id)





    })

})
reset.addEventListener("click",reseet)






















