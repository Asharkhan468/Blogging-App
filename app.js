import {
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";

import { auth ,db } from "./config.js";

let allBlogs = []

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    const uid = user.uid;
  } else {
    window.location='login.html'
  }
});


const logouBtn = document.querySelector('#logout-btn');


logouBtn.addEventListener('click' , ()=>{
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        alert('You are sucessfully logged out')
        window.location="login.html"
      })
      .catch((error) => {
        alert(error)
       
      });
})



const mainDiv = document.querySelector('#main-div')



async function getData() {
  const querySnapshot = await getDocs(collection(db, "users"));
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    allBlogs.push(doc.data())

    function render() {
      mainDiv.innerHTML+=`<p class="text-[black]">Loading...</p>`
      mainDiv.innerHTML = "";
      allBlogs.map((item) => {

        mainDiv.innerHTML += `<div class="card bg-[#eef0eb]  w-[100%] shadow-2xl mx-[10px] border border-[2px] mt-4" >
       <div class="card-body">
    <h2 class="card-title">Title: ${item.title}</h2>
    <p> Description: ${item.blogDescription}</p>
  </div>
  <div/>`;
      });
    }

    render();

    
    
  });

}


getData()




