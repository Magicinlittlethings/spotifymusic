<template>
  <div class="profile">
      <nav class="  flex justify-between sticky top-0 opacity-90 bg-gray5 px-12 py-3 z-30">
        <div class="flex">
          <button @click = "back" class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_left </button>
          <button @click = "back" class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin"> chevron_right </button>
        </div>
        <div class="flex justify-between">
          <router-link to="/pagenotfound"><button class="border rounded-full px-2 mr-2 cursor-pointer hover:bg-black mt-2">
            <p class="text-gray-100  font-bold text-sm  mt-0.5 mt-2">Upgrade</p>
          </button></router-link>
          <div class="relative">
           <button @click="showDropdown = !showDropdown" :class="`border rounded-full px-1 flex bg-black ml-2 border-transparent cursor-pointer hover:bg-gray3 ${ showDropdown === true ?   'bg-gray3 ' : ''}`">
            <span class="material-icons mr-1 text-3xl text-white ">account_circle</span>
            <p class="text-gray-100 font-bold ml-1 mt-2 text-sm"> Theblackchild </p>
            <span v-if="showDropdown === true" class="material-icons text-white mt-1.5"> arrow_drop_down</span>
            <span v-if="showDropdown === false" class="material-icons text-white mt-1.5"> arrow_drop_up</span>
           </button>
           <div v-if="showDropdown === true" class="absolute bg-spotifyblack mt-2  border rounded-md border-transparent shadow-2xl p-2 w-52">
            <router-link to="/pagenotfound"> <button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
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
      <div @click="showDropdown = false" class=" pb-20">
          <div class="bg-gray5 py-16 px-8 flex">
              <div>
                  <img src="portfolioo.jpg" class="object-cover shadow-lg shadow-gray1 border border-transparent rounded-full h-48 w-48 mr-6">
              </div>
              <div class="mt-4">
                  <p class="text-base font-bold text-white">PROFILE</p>
                  <p class="text-8xl my-1 text-white text-bold">Theblackchild</p>
                  <p class="text-base text-white">1 public playlist <span class="text-lg font-bold mx-0.5">.</span>32 following</p>
              </div>
          </div>
          <div class="px-8">
              <div class="relative">
                <button @click=" showDropdown2 = !showDropdown2"><span class="material-icons text-3xl text-gray6 hover:text-white mt-10">more_horiz</span></button>
                <div v-if ="showDropdown2 === true" class="absolute bg-spotifyblack mt-2  border rounded-md border-transparent shadow-2xl p-2  ">
                    <router-link to="/pagenotfound"><button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
                   <p class="text-white text-base"> Edit Profile</p>
               
                   </button></router-link>
                   <router-link to="/pagenotfound"><button class="w-full border border-transparent rounded-md hover:bg-gray3 p-1 flex justify-between" >
                  <p class="text-white text-base"> Copy link to profile</p>
               
                  </button></router-link>
                </div>
              </div>
              <div class="topartists mt-12">
               <p class="text-white text-2xl font-bold mb-2">Top Artists</p>
               <div class="flex justify-between mb-2">
               <p class="text-gray-400 text-base ">Only visible to you</p>
          
              </div>
              <div class="flex ">
           
               <div @mouseover = "hover = true"  @mouseout = "hover = false" class="relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
               <img class="border border-transparent rounded-full h-40" src="image64.jpg" alt="">
               <p class="text-white text-base font-semibold mt-2">BTS</p>
               <p class="text-gray-400 text-sm ">Artist</p>
               <transition appear @before-enter = "beforeEnter" @enter = "enter">
                <div v-if ="hover === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen   border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
                  <span class="material-icons text-black text-4xl">play_arrow</span>
                </div>
               </transition>
              </div>
            
             </div>
             <div class="table mt-12 w-full">
                 <p class="text-white text-2xl font-bold mb-2">Top Tracks this month</p>
                 <div class="flex justify-between mb-2">
                   <p class="text-gray-400 text-base ">Only visible to you</p>
                   <router-link to="/pagenotfound"><p class="text-gray-400 text-base font-semibold ">SEE ALL</p></router-link>
          
                 </div>
                 <div @mouseover="hovertrack = true"  @mouseout="hovertrack = false" class="mb-3 hover:bg-gray5 border border-transparent rounded-md grid grid-cols-2 p-2">
                     <div class="flex">
                         <div class="mr-4 mt-3">
                             <span v-if="hovertrack === false" class="text-white text-base">1</span>
                             <span v-if="hovertrack === true" class="text-white text-base material-icons ">play_arrow</span>
                         </div>
                         <img src="top1.jpg" class="mr-4 w-12 h-12">
                         <div>
                             <p class="text-base text-white font-semibold">Yet To Come</p>
                             <p class="text-base text-white">BTS</p>
                         </div>
                     </div>
                     <div class="flex justify-between text-white"> 
                         
                         <p class="text-base text-white cursor-pointer hover:underline">Proof </p>
                         <div class="flex justify-between">
                           <button @click = "green = !green" v-if="hovertrack === true" :class="`material-icons  mb-5 mr-4 ${ green === true ?   'text-spotifygreen ' : ''}`">favorite</button>
                           <p class="text-base text-white mr-4">3:13</p>
                           <span v-if="hovertrack === true" class="material-icons text-white">more_horiz</span>
                         </div>
                     </div>
                 </div>
                 <div @mouseover="hovertrack1 = true"  @mouseout="hovertrack1 = false" class="mb-3 hover:bg-gray5 border border-transparent rounded-md grid grid-cols-2 p-2">
                     <div class="flex">
                         <div class="mr-4 mt-3">
                             <span v-if="hovertrack1 === false" class="text-white text-base">2</span>
                             <span v-if="hovertrack1 === true" class="text-white text-base material-icons ">play_arrow</span>
                         </div>
                         <img src="top2.jpg" class="mr-4 w-12 h-12">
                         <div>
                             <p class="text-base text-white font-semibold">Yours</p>
                             <p class="text-base text-white">JIN</p>
                         </div>
                     </div>
                     <div class="flex justify-between"> 
                         
                         <p class="text-base text-white cursor-pointer hover:underline">Jirisan (Original Television Soundtrack) </p>
                         <div class="flex justify-between">
                           <span v-if="hovertrack1 === true" class="material-icons text-white mr-4 ">favorite</span>
                           <p class="text-base text-white mr-4">4:24</p>
                           <span v-if="hovertrack1 === true" class="material-icons text-white">more_horiz</span>
                         </div>
                     </div>
                 </div>
                 <div @mouseover="hovertrack2 = true"  @mouseout="hovertrack2 = false" class="mb-3 hover:bg-gray5 border border-transparent rounded-md grid grid-cols-2 p-2">
                     <div class="flex">
                         <div class="mr-4 mt-3">
                             <span v-if="hovertrack2 === false" class="text-white text-base">3</span>
                             <span v-if="hovertrack2 === true" class="text-white text-base material-icons ">play_arrow</span>
                         </div>
                         <img src="top3.jpg" class="mr-4 w-12 h-12">
                         <div>
                             <p class="text-base text-white font-semibold">TOMBOY</p>
                             <p class="text-base text-white">(G)_IDLE</p>
                         </div>
                     </div>
                     <div class="flex justify-between"> 
                         
                         <p class="text-base text-white cursor-pointer hover:underline">I NEVER DIE </p>
                         <div class="flex justify-between">
                           <span v-if="hovertrack2 === true" class="material-icons text-white mr-4 ">favorite</span>
                           <p class="text-base text-white mr-4">2:54</p>
                           <span v-if="hovertrack2 === true" class="material-icons text-white">more_horiz</span>
                         </div>
                     </div>
                 </div>
                 <div @mouseover="hovertrack3 = true"  @mouseout="hovertrack3 = false" class="mb-3 hover:bg-gray5 border border-transparent rounded-md grid grid-cols-2 p-2">
                     <div class="flex">
                         <div class="mr-4 mt-3">
                             <span v-if="hovertrack3 === false" class="text-white text-base">4</span>
                             <span v-if="hovertrack3 === true" class="text-white text-base material-icons ">play_arrow</span>
                         </div>
                         <img src="top4.jpg" class="mr-4 w-12 h-12">
                         <div>
                             <p class="text-base text-white font-semibold">DARARI</p>
                             <p class="text-base text-white">TREASURE</p>
                         </div>
                     </div>
                     <div class="flex justify-between"> 
                         
                         <p class="text-base text-white cursor-pointer hover:underline">THE SECOND STOP: CHAPTER ONE </p>
                         <div class="flex justify-between">
                           <span v-if="hovertrack3 === true" class="material-icons text-white mr-4 ">favorite</span>
                           <p class="text-base text-white mr-4">3:40</p>
                           <span v-if="hovertrack3 === true" class="material-icons text-white">more_horiz</span>
                         </div>
                     </div>
                 </div>
             </div>
             <div class = "publicplaylists mt-12">
               <p class="text-white text-2xl font-bold mb-2">Public playlists</p>
               <div class="flex justify-between mb-2">
                 <p class="text-gray-400 text-base "></p>
                 <p class="text-gray-400 text-base font-semibold ">  </p>
               </div>
                <div class="flex flex-wrap">
                <div @mouseover = "hover1 = true"  @mouseout = "hover1 = false" class=" relative bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 cursor-pointer hover:bg-gray5">
                <img class="border border-transparent rounded-md h-40" src="image0.jpg" alt="">
                <p class="text-white text-base font-semibold mt-2">Love</p>
                <p class="text-gray-400 text-sm ">Made by Theblackchild</p>
                <transition appear @before-enter = "beforeEnter" @enter = "enter">
                <div v-if ="hover1 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
                <span class="material-icons text-black text-4xl">play_arrow</span>
                </div>
                </transition>
                </div>
              
                </div>
             </div>
             <div class="yourfavoriteartists mt-12">
               <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Following</p>
               <div class="flex justify-between mb-2">
                 <p class="text-gray-400 text-base "></p>
                 <router-link to="favorite-artists"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
               </div>
               <div class="flex ">
                 <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48 cursor-pointer  hover:bg-gray5">
                   <img class="border border-transparent rounded-full h-40" src="image61.jpg" alt="">
                   <p class="text-white text-base font-semibold mt-2">Tate McRae</p>
                   <p class="text-gray-400 text-sm ">Artist</p>
                 </div>
                 <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48 cursor-pointer  hover:bg-gray5">
                   <img class="border border-transparent rounded-full h-40" src="image62.jpg" alt="">
                   <p class="text-white text-base font-semibold mt-2">Ed Sheeran</p>
                   <p class="text-gray-400 text-sm ">Artist</p>
                 </div>
                 <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48 cursor-pointer  hover:bg-gray5">
                   <img class="border border-transparent rounded-full h-40" src="image63.jpg" alt="">
                   <p class="text-white text-base font-semibold mt-2">Lewis Capaldi</p>
                   <p class="text-gray-400 text-sm ">Artist</p>
                 </div>
                 <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48 cursor-pointer  hover:bg-gray5">
                   <img class="border border-transparent rounded-full h-40" src="image64.jpg" alt="">
                   <p class="text-white text-base font-semibold mt-2">BTS</p>
                   <p class="text-gray-400 text-sm ">Artist</p>
                 </div>
                 <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48 cursor-pointer  hover:bg-gray5">
                   <img class="border border-transparent rounded-full h-40" src="image65.jpg" alt="">
                   <p class="text-white text-base font-semibold mt-2">Stray Kids</p>
                   <p class="text-gray-400 text-sm ">Artist</p>
                 </div>
               </div>
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
         showDropdown2:false,
          hover:false,
          hover1:false,
          hovertrack:false,
          hovertrack1:false,
          hovertrack2:false,
          hovertrack3:false,
          green:false,
      
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