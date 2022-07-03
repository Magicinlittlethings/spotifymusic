<template>
   <div class="music px-8">
      <nav class="  flex justify-between sticky top-0 opacity-90 bg-gray1 px-4 py-3 z-30">
        <div class="flex">
          <p class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin mr-5"> chevron_left </p>
          <p class="material-icons border border-transparent rounded-full bg-black h-10 text-4xl text-gray-100 font-thin"> chevron_right </p>
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
     
        <div class="recentlyplayed mt-12">
          <p class="text-white text-2xl font-bold mb-4 cursor-pointer hover:underline">Recently played</p>
          <div class="flex">
            <div @mouseover = "hover = true"  @mouseout = "hover = false" class=" relative bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 cursor-pointer hover:bg-gray5">
            <img class="border border-transparent rounded-full h-40" src="image63.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Lewis Capaldi</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
          <div  @mouseover = "hover1 = true"  @mouseout = "hover1 = false" class=" relative bg-gray3 hover:bg-gray5 px-4 py-5 border border-transparent rounded-md mr-6 cursor-pointer">
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
          <div class="flex ">
           
          <div @mouseover="hover2=true" @mouseout="hover2=false" class="  relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48 relative cursor-pointer ">
            <img class="border border-transparent rounded-md h-40" src="image1.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Discover Weekly</p>
            <p class="text-gray-400 text-sm ">Your weekly mixtape of fresh music. Enjoy new...</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover2 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
          </div>
           <div @mouseover="hover3 = true" @mouseout="hover3=false"  class="cursor-pointer relative hover:bg-gray5 bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image2.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Mix 1</p>
            <p class="text-gray-400 text-sm ">DAY6, NCT DREAM, Henry and more</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover3 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
            <div @mouseover="hover4 = true" @mouseout="hover4=false" class="bg-gray3 hover:bg-gray5 relative coursor-pointer px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image3.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Mix 2</p>
            <p class="text-gray-400 text-sm ">James Arthur, Maroon 5, Sam Smith and more</p>
            <transition appear @before-enter = "beforeEnter" @enter = "enter">
            <div v-if ="hover4 === true" class=" absolute shadow-sm shadow-spotifygreen bg-spotifygreen border border-transparent rounded-full h-10 w-10  right-8 bottom-20">
              <span class="material-icons text-black text-4xl">play_arrow</span>
            </div>
            </transition>
           </div>
            <div @mouseover="hover5 = true" @mouseout="hover5 =false" class="bg-gray3 hover:bg-gray5 px-4 py-5 border border-transparent rounded-md mr-6 w-48 relative cursor-pointer">
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
          <p class="text-white text-2xl font-bold mb-2">More of what you like</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Hear a little bit of everything you love</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
           
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image5.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Pop Right Now</p>
            <p class="text-gray-400 text-sm ">The most interesting tracks in the current...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image6.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mega Hit Mix</p>
            <p class="text-gray-400 text-sm ">A mega mix of 75 favorites from the last...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image7.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad Songs</p>
            <p class="text-gray-400 text-sm ">Beautiful songs to break your heart...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image8.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill Hits</p>
            <p class="text-gray-400 text-sm ">Kick back to the best new and recent chill hits.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image9.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Hits</p>
            <p class="text-gray-400 text-sm ">Get in the zone with these current jams!</p>
           </div>
          </div>
        </div>
        <div class="Basedonyourrecentlistening mt-12">
          <p class="text-white text-2xl font-bold mb-2">Based on your recent listening</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Inspired by your recent activity</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image7.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad Songs</p>
            <p class="text-gray-400 text-sm ">Beautiful songs to break your heart...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image8.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill Hits</p>
            <p class="text-gray-400 text-sm ">Kick back to the best new and recent chill hits.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image9.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Daily Hits</p>
            <p class="text-gray-400 text-sm ">Get in the zone with these current jams!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mood Booster</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image32.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Homework vibes</p>
            <p class="text-gray-400 text-sm ">Some bops to take the pain of homework away.</p>
            </div>
          </div>
        </div>
        <div class="thetoppodcstsof2020 mt-12">
          <p class="text-white text-2xl font-bold mb-2">The Top Podcasts of 2020</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Revisit our favorite shows from 2020</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image14.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Best Episodes of 20...</p>
            <p class="text-gray-400 text-sm ">Our favorite podcast episodes thet made us...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image15.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Supernatural with...</p>
            <p class="text-gray-400 text-sm ">Parcast</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image16.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">The Michelle Obam...</p>
            <p class="text-gray-400 text-sm ">Higher Ground</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image17.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Unlocking Us with ...</p>
            <p class="text-gray-400 text-sm ">Parcast</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image18.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">My Year in Mensa</p>
            <p class="text-gray-400 text-sm ">iHeartPodcasts and Jamie Loftus</p>
            </div>
          </div>
        </div>
        <div class="justthehits mt-12">
          <p class="text-white text-2xl font-bold mb-2">Just the Hits</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image19.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Just hits</p>
            <p class="text-gray-400 text-sm ">Current favorites and exciting new music...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image20.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chilled Hits</p>
            <p class="text-gray-400 text-sm ">Kick back to these chilled out essentisals.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mood Booster</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image21.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Soft Pop Hits</p>
            <p class="text-gray-400 text-sm ">Listen to easy songs from your facorite artists!...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image45.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Today's Top Hits</p>
            <p class="text-gray-400 text-sm ">BTS are on top of the Hottest 50!</p>
            </div>
          </div>
        </div>
        <div class="Editorspicks mt-12">
          <p class="text-white text-2xl font-bold mb-2">  Editor's Picks</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image22.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">African Heat</p>
            <p class="text-gray-400 text-sm ">The tracks heating up the continent right now!...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image23.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Traffic Jams Naija </p>
            <p class="text-gray-400 text-sm ">Turn traffic stops into jam sessions.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image24.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Equal Afro</p>
            <p class="text-gray-400 text-sm ">Some of the most influential and innovati...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image25.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Hot Hits Naija</p>
            <p class="text-gray-400 text-sm ">Nigerias's hottest tracks. Cover: Ladipoe</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image26.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Rap Caviar</p>
            <p class="text-gray-400 text-sm ">Tap Caviar featuring Pharell!...</p>
            </div>
          </div>
        </div>
        <div class="driverslicenseenergy mt-12">
          <p class="text-white text-2xl font-bold mb-2">Driver's license energy</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image27.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Songs to scream in...</p>
            <p class="text-gray-400 text-sm ">the mood is to scream into your...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image28.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Broken Heart</p>
            <p class="text-gray-400 text-sm ">Nurse your emotional wounds with these...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image29.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sad Bops</p>
            <p class="text-gray-400 text-sm ">For all of us dancing on our own</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image30.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">sad song club</p>
            <p class="text-gray-400 text-sm ">you're not the only one</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image31.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Pop Sauce</p>
            <p class="text-gray-400 text-sm ">next gen pop featuring Alexal Cappell</p>
            </div>
          </div>
        </div>
        <div class="happy mt-12">
          <p class="text-white text-2xl font-bold mb-2">Happy</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Music that makes you feel good.</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image10.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Confidence Boost</p>
            <p class="text-gray-400 text-sm ">You're on top of the world. Don't forget it.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image57.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">A perfect Day</p>
            <p class="text-gray-400 text-sm ">Timeless melodies from your favorite artists,...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image58.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Country Kind of Love</p>
            <p class="text-gray-400 text-sm ">Nothing but beautiful country love songs.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image13.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Good Vibes</p>
            <p class="text-gray-400 text-sm ">Set it off with these epic anthems. Only good...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image59.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Songs to sing in t...</p>
            <p class="text-gray-400 text-sm ">Make your shower more uplifting by singing...</p>
            </div>
          </div>
        </div>
        <div class="Bestof artists mt-12">
          <p class="text-white text-2xl font-bold mb-2">Best of artists</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Bringing together the top songs from an artist </p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image35.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is BTS</p>
            <p class="text-gray-400 text-sm ">This is proof of BTS' history. A.R.M.Y is ...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image36.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is Justin Bieber</p>
            <p class="text-gray-400 text-sm ">This isthe essential Justin Bieber.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image37.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is James Arthur</p>
            <p class="text-gray-400 text-sm ">All his biggest hits, all in one place.</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image38.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is Stray Kids</p>
            <p class="text-gray-400 text-sm ">Stray Kids everywhere all around the world. You...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image39.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">This is Eric Nam</p>
            <p class="text-gray-400 text-sm ">Listen to Eric Nam's greatest hits. all in one...</p>
            </div>
          </div>
          
        </div>
        <div class="uniquelyyours mt-12">
          <p class="text-white text-2xl font-bold mb-2">Uniquely yours</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <p class="text-gray-400 text-base font-semibold ">  </p>
          </div>
          <div class="flex ">
            
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image40.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Your Time Capsule</p>
            <p class="text-gray-400 text-sm ">We made you a personalized playlist...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image41.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">On Repeat</p>
            <p class="text-gray-400 text-sm ">Songs you love right now</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image42.png" alt="">
            <p class="text-white text-base font-semibold mt-2">Liked Songs</p>
            <p class="text-gray-400 text-sm "></p>
            </div>
          </div>
        </div>
        <div class="mood mt-12">
          <p class="text-white text-2xl font-bold mb-2">Mood</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">playlists to match your mood</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image10.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Confidence Boost</p>
            <p class="text-gray-400 text-sm ">You're on top of the world. Don't forget it...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image11.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Mood Booster</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image12.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Life Sucks</p>
            <p class="text-gray-400 text-sm ">Having a bad day? we know how it feels!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image13.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Good vibes</p>
            <p class="text-gray-400 text-sm ">Get happy with today's dose of feel-good songs!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image56.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chilled R&B</p>
            <p class="text-gray-400 text-sm ">Chilled R&B jams for your most relaxed moods.</p>
            </div>
          </div>
        </div>
        <div class="kpopmood mt-12">
          <p class="text-white text-2xl font-bold mb-2">K-pop Moods and Moments</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image48.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Morning K-Pop!</p>
            <p class="text-gray-400 text-sm ">Everyday should be a happy day when...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image49.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Summer K-pop Hits...</p>
            <p class="text-gray-400 text-sm ">Be cool with refreshing tropical K-pop</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image50.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">I'M FINE, SOLO. AN...</p>
            <p class="text-gray-400 text-sm ">korean language thingy!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image51.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">So Kool Driving</p>
            <p class="text-gray-400 text-sm ">Tap your feet to the K-pop beats on your...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image52.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">WOR K OUT</p>
            <p class="text-gray-400 text-sm ">Workout to K-Pop? Count me in!</p>
            </div>
          </div>
        </div>
        <div class="chill mt-12">
          <p class="text-white text-2xl font-bold mb-2">Chill</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base ">Unwind with these calming playlists</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image53.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Comfort Zone</p>
            <p class="text-gray-400 text-sm ">Chilled songs that you are familiar with-no...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image21.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Soft Pop Hits</p>
            <p class="text-gray-400 text-sm ">Listen to any songs from your favorite artists!</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image54.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Piano Ballads</p>
            <p class="text-gray-400 text-sm ">Vocals and keys, front and center. Cover:Adele</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image55.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chill  Vibes</p>
            <p class="text-gray-400 text-sm ">Just chill...</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image56.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Chilled R&B</p>
            <p class="text-gray-400 text-sm ">Chilled R&B jams for your most relaxed moods.</p>
            </div>
          </div>
        </div>
        <div class="yourfavoriteartists mt-12">
          <p class="text-white text-2xl font-bold mb-2">Your favorite artists</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <router-link to="favorite-artists"><p class="text-gray-400 text-base font-semibold "> SEE ALL </p></router-link>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image61.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Tate McRae</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image62.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Ed Sheeran</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image63.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Lewis Capaldi</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image64.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">BTS</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image65.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">BTS</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
          </div>
        </div>
          <div class="recommendedradio mt-12">
          <p class="text-white text-2xl font-bold mb-2">Recommended radio</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "> Non-stop music based on your favorite songs and artists</p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image66.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Bruno Mars Radio</p>
            <p class="text-gray-400 text-sm ">By spotifywhite</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image67.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Justin Beiber Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image68.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Charlie Puth Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image69.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">V Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image70.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Sam Smith Radio</p>
            <p class="text-gray-400 text-sm ">By Spotify</p>
            </div>
          </div>
        </div>
        <div class="suggestedartists mt-12">
          <p class="text-white text-2xl font-bold mb-2">Suggested artists</p>
          <div class="flex justify-between mb-2">
          <p class="text-gray-400 text-base "></p>
          <p class="text-gray-400 text-base font-semibold "> SEE ALL </p>
          </div>
          <div class="flex ">
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image71.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">TOlivia Rodrigp</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image72.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Camila Cabello</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image73.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Faouzia</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-full h-40" src="image74.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Billie Eilish</p>
            <p class="text-gray-400 text-sm ">Artist</p>
            </div>
            <div class="bg-gray3 px-4 py-5 border border-transparent rounded-md mr-6 w-48">
            <img class="border border-transparent rounded-md h-40" src="image75.jpg" alt="">
            <p class="text-white text-base font-semibold mt-2">Ariana Grande</p>
            <p class="text-gray-400 text-sm ">Artist</p>
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