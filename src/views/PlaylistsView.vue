<template>
<div class="playlist">
    <nav class="  flex justify-between sticky top-0 opacity-90 bg-gray1  py-3 z-30 px-12">
        <div class="flex">
          <p class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_left </p>
          <p class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_right </p>
          <div class="flex justify-between mt-1.5">
           <router-link to="/pagenotfound"><p class="text-white font-semibold text-base mr-3 border border-transparent hover:bg-spotifyblack rounded-md px-2 cursor-pointer">Playlists</p></router-link>
           <router-link to="/pagenotfound"><p class="text-white font-semibold text-base mr-3 px-2 border border-transparent hover:bg-spotifyblack rounded-md cursor-pointer">Podcasts</p></router-link>
            <router-link to="/pagenotfound"><p class="text-white font-semibold text-base mr-3 px-2 border border-transparent hover:bg-spotifyblack rounded-md cursor-pointer">Artists</p></router-link>
            <router-link to="/pagenotfound"><p class="text-white font-semibold text-base  px-2 border border-transparent hover:bg-spotifyblack rounded-md cursor-pointer">Albums</p></router-link>
          </div>
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
    <div class="mt-12 px-8">
        
        <p class="text-white text-2xl font-bold mb-4">Playlists</p>
        <div class="flex flex-wrap ">
          <div  @mouseover = "hover = true"  @mouseout = "hover = false" class=" relative  bg-bluee border border-transparent rounded-md w-96 h-72 relative overflow-hidden mb-6 mr-6  cursor-pointer">
             <div class="absolute bottom-3 left-3">
                 <p class="text-white text-3xl font-smeibold">Liked Songs</p>
                 <p class="text-white text-base">0 liked songs</p>
             </div>
             <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
                      
          </div>
          <div  @mouseover = "hover1 = true"  @mouseout = "hover1 = false" class=" relative bg-gray3 hover:bg-gray5 px-4 py-5 border border-transparent rounded-md mb-6 mr-6 cursor-pointer">
            <img class="border border-transparent rounded-md h-40" src="image0.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Love</p>
            <p class="text-gray-400 text-sm ">By Theblackchild</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover1 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div  @mouseover = "hover2 = true"  @mouseout = "hover2 = false" class=" relative bg-gray3 hover:bg-gray5 px-4 py-5 border border-transparent rounded-md mb-6 mr-6 cursor-pointer">
            <img class="border border-transparent rounded-md h-40" src="image69.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">My Playlist #2</p>
            <p class="text-gray-400 text-sm ">By Theblackchild</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover2 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
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
         hover2:false
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

 }
}
</script>

<style>

</style>