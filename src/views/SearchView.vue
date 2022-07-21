<template>
  <div class="search ">
      <nav class="  flex justify-between sticky top-0 opacity-90 bg-gray1 px-12 py-3 z-30">
        <div class="flex">
          <button @click = "back" class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_left </button>
          <button @click = "forward" class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_right </button>
          <form class="relative">
           <input type="search" placeholder="Artists, songs, or podcasts" class=" z-40  bg-white border border-transparent rounded-full w-72 h-10 text-black px-8  ">
            <span class="material-icons text-2xl  left-2 top-1.5  absolute">search</span>
          </form>
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
     
      
      <div @click="showDropdown = false" class="mt-12 px-8">
          <div class="topgenres  ">
              <p class="text-white text-2xl font-bold mb-4">Your top genres</p>
              <div class="flex flex-wrap">
                  <div class="pop bg-purplee border border-transparent rounded-md w-96 h-56 relative overflow-hidden mb-6 mr-6 cursor-pointer">
                      <p class="text-white text-4xl font-bold ml-3">Pop</p>
                      <img src="searchslide1.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class="pop bg-violete border border-transparent rounded-md w-96 h-56 relative overflow-hidden mb-6 mr-6 cursor-pointer">
                      <p class="text-white text-4xl font-bold ml-3">Afro</p>
                      <img src="searchslide2.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class="pop bg-skybluee border border-transparent rounded-md w-96 h-56 relative overflow-hidden mb-6 mr-6 cursor-pointer">
                      <p class="text-white text-4xl font-bold ml-3">Christian & Gospel</p>
                      <img src="searchslide3.jpeg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class="pop bg-orangee border border-transparent rounded-md w-96 h-56 relative overflow-hidden mb-6 mr-6 cursor-pointer">
                      <p class="text-white text-4xl font-bold ml-3">Hip-Hop</p>
                      <img src="searchslide4.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  
              </div>

          </div>
          <div class="browseall">
               <p class="text-white text-2xl font-bold mb-6 mt-10">Browse all</p>
               <div class="flex justify-between flex-wrap">
                   <div class=" bg-greene border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Podcasts</p>
                      <img src="browse1.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lesssharppink border border-transparent rounded-md w-48 h-52 relative  overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Made For You</p>
                      <img src="browse2.png" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightpurple border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Charts</p>
                      <img src="browse3.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-sharppink border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">New Releases</p>
                      <img src="browse4.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-purplee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Discover</p>
                      <img src="browse5.jpeg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightblue border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Live Events</p>
                      <img src="browse6.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lesssharppink border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">R&B</p>
                      <img src="browse7.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-yelloww border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Frequency</p>
                      <img src="browse8.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightpink border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Soul</p>
                      <img src="browse9.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightblue border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Chill</p>
                      <img src="browse10.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightpurple border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Mood</p>
                      <img src="browse11.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightgreen border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">EQUAL</p>
                      <img src="browse12.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-greene border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Alternative</p>
                      <img src="browse13.jpeg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-grayy border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Workouts</p>
                      <img src="browse14.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-sharppink border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Party</p>
                      <img src="browse15.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-darkpurple border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Focus</p>
                      <img src="browse16.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-bluee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Sleep</p>
                      <img src="browse17.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-yelloww border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Decades</p>
                      <img src="browse18.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lightpurple border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">RADAR</p>
                      <img src="browse19.png" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                  <div class=" bg-lesssharppink border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Dance / Electronic</p>
                      <img src="browse20.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-bluee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Trending</p>
                      <img src="browse21.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-lightblue border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Jazz</p>
                      <img src="browse22.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-violete border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Gaming</p>
                      <img src="browse23.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-skybluee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Travel</p>
                      <img src="browse24.png" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-greene border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Indie</p>
                      <img src="browse25.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-lightblue border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">At Home</p>
                      <img src="browse26.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-nudee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Wellness</p>
                      <img src="browse27.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-skybluee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Higher Ground</p>
                      <img src="browse28.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-sharppink border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">TV & MOVIES</p>
                      <img src="browse29.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-lightgreen border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">League of Legends</p>
                      <img src="browse30.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-purplee border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Kids & Family</p>
                      <img src="browse31.png" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>
                   <div class=" bg-darkpurple border border-transparent rounded-md w-48 h-52 relative overflow-hidden cursor-pointer mb-6">
                      <p class="text-white text-2xl font-bold ml-3">Classical</p>
                      <img src="browse32.jpg" class="absolute w-28 h-28 bottom-0 -right-6 " style="transform:rotate(22deg);">
                  </div>

               </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
data(){
     return{
         showDropdown:false
         }
         },
         methods:{ 
         back() {
      this.$router.go(-1)
    },
    forward() {

       this.$router.go(1)
    },
    },
      
}
</script>

<style>

</style>