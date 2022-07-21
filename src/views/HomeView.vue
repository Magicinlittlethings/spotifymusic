<template>
   <div  class="music px-8">
      <nav class="  flex justify-between sticky top-0 opacity-90 bg-gray1 px-4 py-3 z-30">
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
        <div @click="showDropdown = false">
        <div class="recentlyplayed mt-12">
          <p class="text-white text-2xl font-bold mb-4 cursor-pointer hover:underline">Recently played</p>
          <div class="flex flex-wrap">
            <div @mouseover = "hover = true"  @mouseout = "hover = false" class=" relative bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 mb-6 cursor-pointer hover:bg-gray5">
            <img class="border border-transparent rounded-full h-40" src="image63.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Lewis Capaldi</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div  @mouseover = "hover1 = true"  @mouseout = "hover1 = false" class=" relative bg-gray3 hover:bg-gray5 px-4 py-5 border border-transparent rounded-md mr-6 mb-6 cursor-pointer">
            <img class="border border-transparent rounded-md h-40" src="image0.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Love</p>
            <p class="text-gray-400 text-sm ">By Theblackchild</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover1 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          </div>
        </div>
        <div class="Madefortheblackchild mt-12">
          <p class="text-white text-2xl font-bold mb-2 hover:underline cursor-pointer">Made For Theblackchild</p>
          <p class="text-gray-400 text-base mb-2">Get better recommendations the more you listen</p>
          <div class="flex flex-wrap">
           
          <div @mouseover="hover2=true" @mouseout="hover2=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-md h-40" src="image1.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Discover Weekly</p>
            <p class="text-gray-400 text-sm ">Your weekly mixtape of fresh music. Enjoy new...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover2 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
           <div @mouseover="hover3 = true" @mouseout="hover3=false"  class="cursor-pointer relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image2.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Mix 1</p>
            <p class="text-gray-400 text-sm ">DAY6, NCT DREAM, Henry and more</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover3 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
            <div @mouseover="hover4 = true" @mouseout="hover4=false" class=" hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image3.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Mix 2</p>
            <p class="text-gray-400 text-sm ">James Arthur, Maroon 5, Sam Smith and more</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover4 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
            <div @mouseover="hover5 = true" @mouseout="hover5 =false" class="bg-gray3 hover:bg-gray5 px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48 relative cursor-pointer">
            <img class="border border-transparent rounded-md h-40" src="image4.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Release Radar</p>
            <p class="text-gray-400 text-sm ">Catch all the latest music from artists you follow...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover5 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
          </div>
        </div>
        <div class="Moreofwhatyoulike mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">More of what you like</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Hear a little bit of everything you love</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover6 = true" @mouseout="hover6=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image5.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Pop Right Now</p>
            <p class="text-gray-400 text-sm ">The most interesting tracks in the current...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover6 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover7 = true" @mouseout="hover7=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image6.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mega Hit Mix</p>
            <p class="text-gray-400 text-sm ">A mega mix of 75 favorites from the last...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover7 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover8 = true" @mouseout="hover8 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image7.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad Songs</p>
            <p class="text-gray-400 text-sm ">Beautiful songs to break your heart...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover8 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover9 = true" @mouseout="hover9=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image8.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill Hits</p>
            <p class="text-gray-400 text-sm ">Kick back to the best new and recent chill hits.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover9 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover10 = true" @mouseout="hover10 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image9.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Hits</p>
            <p class="text-gray-400 text-sm ">Get in the zone with these current jams!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover10 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
         <div class="basedonyourrecentlistening mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Based on your recent listening</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Inspired by your recent activity</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover11 = true" @mouseout="hover11=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image7.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad Songs</p>
            <p class="text-gray-400 text-sm ">Beautiful songs to break your heart...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover11 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover12 = true" @mouseout="hover12=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image8.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill hits</p>
            <p class="text-gray-400 text-sm ">kick back to the best new and recent chill hits</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover12 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover13 = true" @mouseout="hover13 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image9.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Hits</p>
            <p class="text-gray-400 text-sm ">Get in the zone with these current jams!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover13 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover14 = true" @mouseout="hover14=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mood Booster</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover14 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover15 = true" @mouseout="hover15 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image12.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Homework Vibes</p>
            <p class="text-gray-400 text-sm ">Some bops to take the pain of homework away.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover15 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="thetoppodcastsof2020 mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">The Top Podcasts of 2020</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Revisit our favorite shows from 2020 </p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover16 = true" @mouseout="hover16=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image14.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Best Episodes of 20...</p>
            <p class="text-gray-400 text-sm ">Our favorite podcast episodes that made us...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover16 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover17 = true" @mouseout="hover17=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image15.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Supernatural with...</p>
            <p class="text-gray-400 text-sm ">Parcast</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover17 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover18 = true" @mouseout="hover18 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image16.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">The Michelle Obam...</p>
            <p class="text-gray-400 text-sm ">Higher Ground</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover18 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover19 = true" @mouseout="hover19=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image17.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Unlocking us with...</p>
            <p class="text-gray-400 text-sm ">Parcast</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover19 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover20 = true" @mouseout="hover20 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image18.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">My year in Mensa</p>
            <p class="text-gray-400 text-sm ">iHeart Podcasts and Jamie Loftus</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover20 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="justthehits mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Just the Hits </p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover21 = true" @mouseout="hover21=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image19.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Just hits</p>
            <p class="text-gray-400 text-sm ">Current favorites and exciting new music ...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover21 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover22 = true" @mouseout="hover22=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image20.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill hits</p>
            <p class="text-gray-400 text-sm ">kick back to the best new and recent chill hits</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover22 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover23 = true" @mouseout="hover23 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mood Booster</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover23 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover24 = true" @mouseout="hover24=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image21.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Soft Pop Hits</p>
            <p class="text-gray-400 text-sm ">Listen to easy songs from your favorite artists!...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover24 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover25 = true" @mouseout="hover25 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image45.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Today's Top Hits</p>
            <p class="text-gray-400 text-sm ">BTS are on top of the hottest 50!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover25 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
       <div class="editorspicks mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Editor's Picks</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover26 = true" @mouseout="hover26=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image22.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">African Heat</p>
            <p class="text-gray-400 text-sm ">The tracks heating up the continent right now!...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover26 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover27 = true" @mouseout="hover27=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image23.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Traffic Jama Naija</p>
            <p class="text-gray-400 text-sm ">Turn traffic stop into jam sessions</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover27 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover28 = true" @mouseout="hover28 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image24.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Equal Afro</p>
            <p class="text-gray-400 text-sm ">Some of the most influential and innovati...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover28 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover29 = true" @mouseout="hover29=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image25.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Hot Hits Naija</p>
            <p class="text-gray-400 text-sm ">Nigeria's hottest tracks. Cover: Ladipoe</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover29 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover30 = true" @mouseout="hover30 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image26.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Rap Caviar</p>
            <p class="text-gray-400 text-sm ">Top Caviar featuring Pharell...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover30 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="driverslicenseenergy mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Driver's license energy</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover31 = true" @mouseout="hover31=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image27.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Songs to scream in...</p>
            <p class="text-gray-400 text-sm ">The mood is to scream into your...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover31 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover32 = true" @mouseout="hover32=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image28.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Broken heart</p>
            <p class="text-gray-400 text-sm ">Nurse your emotional wounds with these...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover32 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover33 = true" @mouseout="hover33 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image29.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad Bops</p>
            <p class="text-gray-400 text-sm ">For all of us dancing on our own</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover33 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover34 = true" @mouseout="hover34=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image30.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad song club</p>
            <p class="text-gray-400 text-sm ">you're not the only one</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover34 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover35 = true" @mouseout="hover35 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image31.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Pop Sauce</p>
            <p class="text-gray-400 text-sm ">Next gen songs featuring Alexal Cappell</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover35 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="happy mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Happy</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Music that makes you feel good</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover36 = true" @mouseout="hover36=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image10.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Confidence Boost</p>
            <p class="text-gray-400 text-sm ">You'reon top ofthe world. Don't forget it.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover36 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover37 = true" @mouseout="hover37=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image57.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">A perfect day</p>
            <p class="text-gray-400 text-sm ">Timeless melodies from your favorite artists,...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover37 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover38 = true" @mouseout="hover38 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image58.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Contry kind of love</p>
            <p class="text-gray-400 text-sm ">Nothing but beautiful country love songs.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover38 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover39 = true" @mouseout="hover39=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image13.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Food Vibes</p>
            <p class="text-gray-400 text-sm ">Set it off withthese epic anthems. Only good...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover39 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover40 = true" @mouseout="hover40 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image59.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Songs to sing in t...</p>
            <p class="text-gray-400 text-sm ">Make your shower more uplifting by singing...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover40 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="bestofartists mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Best of Artists</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Bringing together the top songs from an artist</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover41 = true" @mouseout="hover41=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image35.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is BTS</p>
            <p class="text-gray-400 text-sm ">This is proof of BTS' history. A.R.M.Y is...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover41 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover42 = true" @mouseout="hover42=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image36.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is Justin Beiber</p>
            <p class="text-gray-400 text-sm ">This is the essentisl Justin Beiber</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover42 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover43 = true" @mouseout="hover43 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image38.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is Stray Kids</p>
            <p class="text-gray-400 text-sm ">Stray Kids everywher all around the world. You...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover43 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover44 = true" @mouseout="hover44=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image37.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is James Arthur</p>
            <p class="text-gray-400 text-sm ">All his biggest hits, all in one place.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover44 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover45 = true" @mouseout="hover45 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image39.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is Eric Nam</p>
            <p class="text-gray-400 text-sm ">Listen to Eric Nam's greatest hits. all in one...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover45 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
          
        
       <div class="uniquelyyours mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Uniquely Yours</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Inspired by your recent activity</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover46 = true" @mouseout="hover46=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image40.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Your Time Capsule</p>
            <p class="text-gray-400 text-sm ">We made you a personalized playlist...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover46 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover47 = true" @mouseout="hover47=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image41.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">On Repeat</p>
            <p class="text-gray-400 text-sm ">Songs you love right now</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover47 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover48 = true" @mouseout="hover48 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image42.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Liked Songs</p>
            <p class="text-gray-400 text-sm "></p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover48 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
           
          </div>
        </div>
        <div class="mood mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Mood</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Playlists to match your mood</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover49 = true" @mouseout="hover49=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image10.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Confidence Boost</p>
            <p class="text-gray-400 text-sm ">You're ontop of the world. Don't forget it...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover49 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover50 = true" @mouseout="hover50=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mood Booster</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs! </p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover50 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover51 = true" @mouseout="hover51 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image12.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Life Sucks</p>
            <p class="text-gray-400 text-sm ">Having a bad day? we know how it feels!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover51 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover52 = true" @mouseout="hover52=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image13.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Good Vibes</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover52 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover53 = true" @mouseout="hover53 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image56.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chilled R&B</p>
            <p class="text-gray-400 text-sm ">Chilled R&B vibes for your most relaxed moods.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover53 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="kpopmood mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">K-pop Moods and Moments</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover54 = true" @mouseout="hover54=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image48.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Morning K-Pop1</p>
            <p class="text-gray-400 text-sm ">Everyday should be a happy day when...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover54 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover55 = true" @mouseout="hover55=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image49.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Summer K-pop Hits...</p>
            <p class="text-gray-400 text-sm ">Be cool with refreshing tropical K-pop</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover55 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover56 = true" @mouseout="hover56 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image50.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">I'M FINE, SOLO. AN...</p>
            <p class="text-gray-400 text-sm ">Korean language thingy!!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover56 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover57 = true" @mouseout="hove584=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image51.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">So Kool Driving</p>
            <p class="text-gray-400 text-sm ">Tap your feet to the K-pop beats on your...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover57 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover58 = true" @mouseout="hover58 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image52.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">WOR K OUT</p>
            <p class="text-gray-400 text-sm ">Workout to K-pop? Count me in!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover58 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="chill mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Chill</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Unwind with these calming playlists</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover59 = true" @mouseout="hover59=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image53.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Comfort Zone</p>
            <p class="text-gray-400 text-sm ">Chilled songs that you are familiar with...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover59 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover60 = true" @mouseout="hover60=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image21.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Soft Pop Hits</p>
            <p class="text-gray-400 text-sm ">Listen to any song from your favorite artists!</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover60 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover61 = true" @mouseout="hover61 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image54.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Piano Ballds</p>
            <p class="text-gray-400 text-sm ">Vocals and keys, front and center, Cover:Adele</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover61 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover62 = true" @mouseout="hover62=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image55.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill Vibes</p>
            <p class="text-gray-400 text-sm ">Just Chill...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover62 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover63 = true" @mouseout="hover63 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image56.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chilled R&B</p>
            <p class="text-gray-400 text-sm ">Chilled R&B jams for your most relaxed moods.</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover63 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        <div class="yourfavoriteartists mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Your favorite artists</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="/favorite-artists"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image61.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Tate McRae</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image62.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Ed Sheeran</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image63.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Lewis Capaldi</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image64.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">BTS</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image65.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Stray Kids</p>
            <p class="text-gray-400 text-sm ">Artist</p>
           
           </div>
          </div>
        </div>
          
        <div class="recommendedradio mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Recommended Radio</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Non-stop music based on your favorite songs and artists</p>
          <router-link to="/see-all"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div @mouseover="hover64 = true" @mouseout="hover64=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image66.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Bruno Mars Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover64 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover65 = true" @mouseout="hover65=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image67.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Justin Beiber Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover65 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover66= true" @mouseout="hover66 = false" class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image68.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Charlie Puth Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover66 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover67 = true" @mouseout="hover67=false" class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image69.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">V Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover67 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
            </div>
            <div @mouseover="hover68 = true" @mouseout="hover68 =false" class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image70.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sam Smit Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover68 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
          </div>
        </div>
        
        <div class="suggestedartists mt-12">
          <p class="text-white text-2xl font-bold mb-2 cursor-pointer hover:underline">Suggested artists</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="/favorite-artists"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex flex-wrap ">
           
            <div class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image71.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Olivia Rodrigo</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image72.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Camila Cabellp</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="hidden md:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image73.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Faouzia</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="hidden lg:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image74.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Bilie Eilish</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
            </div>
            <div class="hidden xl:block bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 mb-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image75.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Ariana Grande</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            
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
       hover15:false,
       hover16:false,
       hover17:false,
       hover18:false,
       hover19:false,
       hover20:false,
       hover21:false,
       hover22:false,
       hover23:false,
       hover24:false,
       hover25:false,
       hover26:false,
       hover27:false,
       hover28:false,
       hover29:false,
       hover30:false,
       hover31:false,
       hover32:false,
       hover33:false,
       hover34:false,
       hover35:false,
       hover36:false,
       hover37:false,
       hover38:false,
       hover39:false,
       hover40:false,
       hover41:false,
       hover42:false,
       hover43:false,
       hover44:false,
       hover45:false,
       hover46:false,
       hover47:false,
       hover48:false,
       hover49:false,
       hover50:false,
       hover51:false,
       hover52:false,
       hover53:false,
       hover54:false,
       hover55:false,
       hover56:false,
       hover57:false,
       hover58:false,
       hover59:false,
       hover60:false,
       hover61:false,
       hover62:false,
       hover63:false,
       hover64:false,
       hover65:false,
       hover66:false,
       hover67:false,
       hover68:false,
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
    },

 }
}
</script>

<style>

</style>