<template>
  <div class="fave">
       <nav class="  flex justify-between sticky top-0 opacity-90 bg-gray1 px-12 py-3 z-30">
        <div class="flex">
          <button @click = "back" class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_left </button>
          <button @click ="forward" class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin"> chevron_right </button>
        </div>
        <div class="flex justify-between">
          <router-link to="/pagenotfound"><button class="border rounded-full px-2 mr-2 cursor-pointer hover:bg-black mt-2">
            <p class="text-gray-100  font-bold text-sm  mt-0.5 ">Upgrade</p>
          </button></router-link>
          <div class="relative">
           <button @click="showDropdown = !showDropdown" :class="`border rounded-full px-1 flex bg-black ml-2 border-transparent cursor-pointer hover:bg-gray3 ${ showDropdown === true ?   'bg-gray3 ' : ''}`">
            <span class="material-icons mr-1 text-3xl text-white ">account_circle</span>
            <p class="text-gray-100 font-bold ml-1 mt-2 text-sm"> Theblackchild </p>
            <span v-if="showDropdown === true" class="material-icons text-white mt-1.5"> arrow_drop_down</span>
            <span v-if="showDropdown === false" class="material-icons text-white mt-1.5"> arrow_drop_up</span>
           </button>
           <div v-if="showDropdown === true" class="absolute bg-spotifyblack mt-2  border rounded-md border-transparent shadow-2xl p-2 w-52">
             <router-link to="/pagenotfound"><button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
               <p class="text-white text-base"> Account</p>
               <span class="material-icons text-white text-lg"> open_in_new</span>
             </button></router-link>
             <router-link to="/profile"><button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
               <p class="text-white text-base"> Profile</p>
               
             </button></router-link>
             <router-link to="/pagenotfound"><button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
               <p class="text-white text-base"> Upgrade to Premium</p>
               <span class="material-icons text-white text-lg"> open_in_new</span>
             </button></router-link>
             <router-link to="/pagenotfound"><button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
               <p class="text-white text-base"> Log out</p>
               
             </button></router-link>
           </div>
          </div>
          
          
        </div>

      </nav>
      <div @click="showDropdown = false" class="px-8 mt-12 ">
          <div class="favoriteartists mt-12">
          <p class="text-white text-2xl font-bold mb-2 hover:underline cursor-pointer">Your favorite Artists</p>
          <p class="text-gray-400 text-base mb-2"></p>
          <div class="flex flex-wrap ">
           
          <div @mouseover="hover=true" @mouseout="hover=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave1.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Justin Bieber</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover1=true" @mouseout="hover1=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave2.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Alec Benjamin</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover1 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover2=true" @mouseout="hover2=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave3.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">James Arthur</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover2 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover3=true" @mouseout="hover3=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave4.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Charlie Puth</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover3 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover4=true" @mouseout="hover4=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave5.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Stray Kids</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover4 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>   
          <div @mouseover="hover5=true" @mouseout="hover5=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave6.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Eric Nam</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover5 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>  
          <div @mouseover="hover6=true" @mouseout="hover6=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave7.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sam Smith</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover6 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover7=true" @mouseout="hover7=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave8.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Bruno Mars</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover7 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>  
          <div @mouseover="hover8=true" @mouseout="hover8=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave9.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Kim Tae Hyung</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover8 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>  
          <div @mouseover="hover9=true" @mouseout="hover9=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40 w-40" src="fave10.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Henry</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover9 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover10=true" @mouseout="hover10=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Day6</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover10 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div> 
          <div @mouseover="hover11=true" @mouseout="hover11=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave12.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Alex</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover11 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div> 
          <div @mouseover="hover12=true" @mouseout="hover12=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave13.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">The Weeknd</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover12 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover13=true" @mouseout="hover13=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave14.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Dean Lewis</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover13 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div @mouseover="hover14=true" @mouseout="hover14=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-4 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-full h-40" src="fave15.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Fireboy DML</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover14 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
            
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTriggerPlugin);
export default {
data(){
     return{
       showDropdown:false, 
       hover:false,
       hover1:false,
       hover2:false,
       hover3:false,
       hover4:false,
       hover5:false,
       hover6:false,
       hover7:false,
       hover8:false,
       hover9:false,
       hover10:false,
       hover11:false,
       hover12:false,
       hover13:false,
       hover14:false,
         }
         },
      methods:{ 
         
          beforeEnter(el){
    autoAlpha:0;
  },
    enter(el){
    gsap.from(el,{
     y:20,
      duration:0.5,
      
      
      
      
     })
  },
  back() {
      this.$router.go(-1)
    },
    forward() {

       this.$router.go(1)
    }

 }
}
</script>


<style>

</style>