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
    
    
  });

}


getData()




function render(){


  allBlogs.map((item)=>{

    mainDiv.innerHTML=""

    mainDiv.innerHTML += `
        <div class="flex-wrap">
            <h1 class="font-bold text-2xl mt-5"></h1>
            <h1 class="mt-4"><span>Ashar khan</span> -  21 August 2024</h1>
        </div>


        </div>


        <div class="mt-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, odio. Eaque illo velit quos odit nam recusandae illum obcaecati cum saepe. Non est saepe quo molestias omnis, pariatur voluptate quos?
            Natus autem cumque necessitatibus quos quidem doloribus quaerat provident ratione officiis repellendus, dolor recusandae aperiam fuga, adipisci deleniti consectetur quo id perspiciatis amet vitae, quisquam ipsa. Eveniet similique aperiam consequatur.
            Temporibus, mollitia. Sequi quo temporibus dolorem eligendi adipisci aut sunt saepe, quae consequatur quos voluptatem qui, id ad molestiae corrupti numquam. Natum iluptatibus.
            Culpa suscilicabo deserunt, rem corporis obcaecati perferendis quae tempora consequatur? Deserunt provident voluptate recusandae voluptas, a officiis, quibusdam dolor expedita corrupti, quia alias reprehenderit? Nulla?</p>
        </div>`;

  })




  
}
