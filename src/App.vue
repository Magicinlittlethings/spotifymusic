<template >
<section class="h-screen">
  <div class=" bg-gray1 flex  w-full" style="height:88vh;">
  <!--side nav -->
    <div class="w-64 bg-black pt-6 px-6 relative text-gray6">
      <img src="spotify logo.svg" class="mb-6 w-32 h-10">
      <div class="border-b border-gray-700">
       <button v-for="tab in tabs" :key="tab"  @click ="id = tab.id"    :class="`${ id === tab.id ?   'text-gray-100 ' : ''} ${tab.id === 'library' ? 'mb-8 ' : 'mb-1'}  flex items-center   hover:text-gray-100  `">
        <i class="material-icons text-3xl mr-5">{{tab.icon}}</i>
        <router-link :to="`${tab.route}`"><p class=" text-sm font-bold">{{tab.title}}</p></router-link>

       </button>
      </div>
      <div>
        <button v-for="playlist in playlists" :key="playlist" @click="id = playlist.id" :class="`${ id === playlist.id ?   'text-gray-100 ' : ''} flex  hover:text-gray-100 mt-2`">
          <p class="text-sm font-semibold mb-1">{{playlist.title}}</p>
        </button>
      </div>
      <button class="flex text-gray-500 hover:text-gray-100 absolute bottom-0">
         <i class="material-icons text-3xl mr-4">download</i>
        <p class=" text-base font-bold mt-1"> Install App</p>

      </button>
      
      
      
     
    </div>
    <!--homepage-->
    <div class="w-full overflow-y-scroll relative">
      
     
     <router-view/>
    </div>

  </div>
  <!--play bar-->
  <div class=" bg-gray5 w-full flex items-center justify-between px-3" style="height:12vh;">
    <div class="flex items-center w-1/4">
    <img class="h-16 w-16 mr-5" src="image76.jpg" alt="">
      <div>
        <p class="text-base font-semibold text-white">Yet To Come</p>
        <p class="text-xs text-gray6 ">BTS</p>
      </div>
      <button class="material-icons text-xl text-spotifygreen mx-4 ">favorite </button>
      <button class="material-icons text-xl text-gray6 hover:text-white ">picture_in_picture_alt</button>
    </div>
    <div class="flex flex-col justify-center w-2/4 items-center">
      <div class="flex items-center">
        <button class="mx-5 text-gray6 hover:text-white"><span class="material-icons text-lg">shuffle</span></button>
        <button class=" text-gray6 hover:text-white"><span class="material-icons text-lg">skip_previous</span></button>
        <button @click.prevent="playSong('song.mp3'), pause = !pause" class="rounded-full h-8 w-8 items-center justify-center mx-5 border-gray6 border text-gray6 hover:text-white hover:border-white hover:scale-110"><span v-if=" pause === false" class="material-icons text-lg">play_arrow</span> <span v-if=" pause === true" class="material-icons text-lg">pause</span></button>
        <button class=" text-gray6 hover:text-white"><span class="material-icons text-lg">skip_next</span></button>
        <button class="mx-5 text-gray6 hover:text-white"><span class="material-icons text-lg">repeat</span></button>
      </div>
      <div class="w-3/4 flex items-center justify-center mt-3">
       <p class="text-xs text-gray6 mr-1">0:28</p>
       <div class="w-full h-1 bg-gray3 rounded-full flex items-center">
         <div class="h-1 rounded-full bg-spotifygreen" style="width:18%;"></div>
         <div class="h-3 w-3 bg-white rounded-full -ml-1 shadow"></div>
       </div>
       <p class="text-xs text-gray6 ml-1">2:40</p>
      </div>
    </div>
    <div class="flex items-center w-1/4 justify-end">
      <button class="material-icons text-gray6 hover:text-white">playlist_play</button>
      <button class="material-icons text-xl mx-3 text-gray6 hover:text-white">important_devices</button>
      <button class="material-icons text-xl text-gray6 hover:text-white">volume_up</button>
      <div class="w-20 ml-2 bg-gray6 border border-transparent rounded-full h-1"></div>
    </div>
  </div>

</section>
  
</template>
<script>

import gsap from 'gsap';
import ScrollTriggerPlugin from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTriggerPlugin);

export default {
  
  name: 'App',
  components: {
    
    
  },
  
   data(){
     return{
       tabs:[
         {icon:'home', title:'Home', id:'home', route:'/'},
         {icon:'search', title:'search', id:'search', route:'/search'},
         {icon:'library_music', title:'Your Library', id:'library', route:'/playlists'},
          {icon:'add', title:'create Playlist', id:'create', route:'/pagenotfound'},
         {icon:'favorite', title:'Liked Songs', id:'liked'},
         
         
  
       ],
       playlists:[
         { title:'Love', id:'love'},
         { title:'My Playlist #2', id:'playlist'},
         
         
         
  
       ],
       
       id:'home',
       showDropdown:false,
       hover:false,
       hover1:false,
       hover2:false,
       hover3:false,
       hover4:false,
       hover5:false,

       pause:false,
       
       }
       },
       methods:{ 
         playSong(song){ 
           if(song){ 
             var audio = new Audio(song);
             audio.play();
           }
         },
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
