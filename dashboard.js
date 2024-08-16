import {
  collection,
  addDoc,
  getDocs,

} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import { signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import { db , auth} from "./config.js";


let dataArr = [];



let placeholder = document.querySelector('#placeholder')
let description = document.querySelector('#description')
let form = document.querySelector('#form')
let cardRender = document.querySelector("#card-publish");


form.addEventListener('submit' , (event)=>{

 

    event.preventDefault()

    async function setData(){
     try {
  const docRef = await addDoc(collection(db, "users"), {
    title: placeholder.value,
    blogDescription: description.value,
  });


  console.log("Document written with ID: ", docRef.id);

   placeholder.value = "";
   description.value = "";

} catch (e) {
  console.error("Error adding document: ", e);
}
   }

   setData()

})


async function getData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());

    console.log(dataArr);

    renderCard()
    

  
  });
}

getData();
   







function renderCard() {
      
      dataArr.map((item) => {
         cardRender.innerHTML = ''
         cardRender.innerHTML += `
        
        <div class="mt-5 border mx-[30px] sm:mx-[70px]lg:mx-[70px] p-[30px] shadow-lg rounded-xl">
        
        
        <div class="flex flex-wrap">
        
        <div>
        <img class="m-7 " src="men image.jpeg" alt="">
        </div>
        
        <div class="flex-wrap">
        <h1 class="font-bold text-2xl mt-5">${item.title}</h1>
        <h1 class="mt-4"><span>Ashar khan</span> -  21 August 2024</h1>
        </div>
        
        
        </div>
        
        
        <div class="mt-4">
        <p>${item.blogDescription}</p>
        </div>
        `;
       });
     }

    //  renderCard();
   






const logouBtn = document.querySelector("#logout-btn");

logouBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      alert("You are sucessfully logged out");
      window.location = "login.html";
    })
    .catch((error) => {
      alert(error);
    });
});

























// function render() {
//   cardPublish = "";
//   data.map((item) => {
    // cardPublish.innerHTML += `<div class="mt-5 border mx-[30px] sm:mx-[70px]lg:mx-[70px] p-[30px] shadow-lg rounded-xl">
        
        
    //     <div class="flex flex-wrap">
        
    //     <div>
    //     <img class="m-7 " src="men image.jpeg" alt="">
    //     </div>
        
    //     <div class="flex-wrap">
    //     <h1 class="font-bold text-2xl mt-5">${item.title}</h1>
    //     <h1 class="mt-4"><span>Ashar khan</span> -  21 August 2024</h1>
    //     </div>
        
        
    //     </div>
        
        
    //     <div class="mt-4">
    //     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio. Eaque illo velit quos odit nam recusandae illum obcaecati cum saepe. Non est saepe quo molestias omnis, pariatur voluptate quos?
    //     Natus autem cumque necessitatibus quos quidem doloribus quaerat provident ratione officiis repellendus, dolor recusandae aperiam fuga, adipisci deleniti consectetur quo id perspiciatis amet vitae, quisquam ipsa. Eveniet similique aperiam consequatur.
    //     Temporibus, mollitia. Sequi quo temporibus dolorem eligendi adipisci aut sunt saepe, quae consequatur quos voluptatem qui, id ad molestiae corrupti numquam. Natum iluptatibus.
    //     Culpa suscilicabo deserunt, rem corporis obcaecati perferendis quae tempora consequatur? Deserunt provident voluptate recusandae voluptas, a officiis, quibusdam dolor expedita corrupti, quia alias reprehenderit? Nulla?</p>
    //     </div>
        
        
    // //     <div class="flex mt-4">
    // //     <div>
    // //     <button class="btn btn-primary">Delete</button>
        
    // //     </div>
        
    // //     <div>
    // //     <button class="btn btn-primary">edit</button>
        
    // //     </div>
    // //     </div>`;
//   });
// }





// render()


 










































































// import {
//   collection,
//   addDoc,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

// import { signOut } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// import { db, auth } from "./config.js";

// let dataArr = [];

// let placeholder = document.querySelector("#placeholder");
// let description = document.querySelector("#description");
// let form = document.querySelector("#form");
// let cardRender = document.querySelector("#card-publish");





// const logouBtn = document.querySelector("#logout-btn");

// logouBtn.addEventListener("click", () => {
//   signOut(auth)
//     .then(() => {
//       alert("You are sucessfully logged out");
//       window.location = "login.html";
//     })
//     .catch((error) => {
//       alert(error);
//     });
// });



















