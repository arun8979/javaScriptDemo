// let link = document.getElementById("link");

// const hreafvalue = link.getAttribute("href");
// console.log(hreafvalue)


//============crete new element  from java script ============
//  let newbtn = document.createElement("button");
// newbtn.innerText = "clickhere!!";
// console.log(newbtn)
// let div = document.querySelector("div");
// div.append(newbtn); 


// let text = document.createElement("h1");
// text.innerText = "Hii i am Arun singh rawat";
// let body = document.querySelector("#main");
// body.after(text);

//==================question no 1 solution ============
// let div = document.querySelector("div")
// let newButton = document.createElement("button");
// newButton.innerText = "click me!";
// newButton.style.backgroundColor = "red";
// newButton.style.color = "white";
// document.querySelector("body").prepend(newButton);


//==================question no 2 solution ============
// let para = document.querySelector("p");
// para.getAttribute("aru");
// para.classList.add("aru2")


// let heading1 = document.querySelector(".aru");
// heading.getAttribute("class") //thsi work to get class name which one class work in this 
// heading.setAttribute("aru2") //here just change the class name but just overwrite the class old class is deleted and new class is appled
// heading.classList.add(aru2) //here new class is applied but old class as well as used so in a time 2 class is working in same tag


// let heading = document.getElementById("aru");
// let isChange = false;
// heading.onmouseover =() =>{
//     console.log("you are in right place")

//     if(!isChange){
//         if(heading.innerText === "My name is arun singh rawat"){
//         heading.innerText = "wow you are great arun"
//     }else{
//         heading.innerText = "wow you are common man arun"
//     }
//     isChange = true;
// }
// }

//  let heading = document.getElementById( "aru");

//  heading.addEventListener("click", (e) =>{
//     console.log("hii guys")
//     console.log(alert("can i change the color of text"))
//     if(heading.style.color === "black"){
//        heading.style.color = "white" 
//     }else{
//         heading.style.color = "red"
//     }
//  })


 let changeModeBtn = document.getElementById( "mode");
 let currMode = "light";

changeModeBtn.addEventListener("click" , () =>{
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";

    }
    console.log(currMode);

});








