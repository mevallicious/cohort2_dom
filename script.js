const reels = [
  {
    isMuted:true,
    username: "thetravelguy",
    likeCount: 45234,
    isLiked: false,
    commentCount: 1389,
    caption: "Sunset vibes at Bali 🌅✨",
    video: "https://www.pexels.com/download/video/34808770/",
    userProfile: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    shareCount: 309,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "fitnesswithria",
    likeCount: 98212,
    isLiked: true,
    commentCount: 5120,
    caption: "No excuses today 💪🔥 #workout",
    video: "https://www.pexels.com/download/video/3109516/",
    userProfile: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
    shareCount: 941,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "chef.rahul",
    likeCount: 32109,
    isLiked: false,
    commentCount: 872,
    caption: "Creamy Alfredo pasta 🍝❤️",
    video: "https://www.pexels.com/download/video/5076790/",
    userProfile: "https://images.unsplash.com/photo-1603415526960-f7e0328e3daa",
    shareCount: 210,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "gamingarena",
    likeCount: 123489,
    isLiked: true,
    commentCount: 6543,
    caption: "New PC build reveal💻⚡",
    video: "https://www.pexels.com/download/video/5386411/",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 2071,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "style.by.niya",
    likeCount: 73210,
    isLiked: false,
    commentCount: 2190,
    caption: "Streetwear look of the day 🖤",
    video: "https://www.pexels.com/download/video/29978359/",
    userProfile: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    shareCount: 872,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "codingwizard",
    likeCount: 28500,
    isLiked: false,
    commentCount: 640,
    caption: "JavaScript fixes everything 😌✨",
    video: "https://www.pexels.com/download/video/33950530/",
    userProfile: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
    shareCount: 190,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "wildlife_stories",
    likeCount: 199430,
    isLiked: true,
    commentCount: 10389,
    caption: "Moments from the jungle 🦁🌿",
    video: "https://www.pexels.com/download/video/28828141/",
    userProfile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    shareCount: 5039,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "musicbeats",
    likeCount: 67432,
    isLiked: false,
    commentCount: 1432,
    caption: "New track dropping soon 🎧🔥",
    video: "https://www.pexels.com/download/video/15884994/",
    userProfile: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8",
    shareCount: 602,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "techworldx",
    likeCount: 87453,
    isLiked: true,
    commentCount: 3412,
    caption: "Foldable phones are the future 🔮📱",
    video: "https://www.pexels.com/download/video/29978360/",
    userProfile: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    shareCount: 1290,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "carshots",
    likeCount: 111943,
    isLiked: false,
    commentCount: 4320,
    caption: "BMW M4 competition 🏁🔥",
    video: "https://www.pexels.com/download/video/34894927/",
    userProfile: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    shareCount: 3501,
    isFollowed: false,
  },
];

let allReels = document.querySelector(".allReels");

//joh bhi calling and data show karna hai web pe toh hum uko ek function me daaldege and kyu hume event bubbling karna hai toh if me like pe click karta h and like ki value badegi toh mere object me voh value change hogi toh usko rerender bhi karna oadega toh we wil add it in fuction taki easily hoajaye

function addData() {
  let sum = "";
  reels.forEach(function (elem, idx) {
    sum += ` <div class="reel">
                <video autoplay ${elem.isMuted ? 'muted': ''} loop src="${elem.video}"></video>
                <div id=${idx} class="mute">
                  ${elem.isMuted ?'<i class="ri-volume-mute-fill"></i>' : '<i class="ri-volume-up-line"></i>'} 
                </div>
                <div class="bottom">
                  <div class="user">
                    <img src="${elem.userProfile}" alt="">
                    <h4>${elem.username}</h4>
                    <button id=${idx} class="button">${elem.isFollowed ? "Unfollow" : "Follow"}</button>     
                </div>
                <h3>${elem.caption}</h3 >
                </div>
                <div class="right">
                    <div id=${idx} class="like">
                      <h4 class="like-icon">${
                        elem.isLiked
                          ? ' <i class="love ri-heart-fill">'
                          : ' <i class="ri-heart-line">'
                      }</i></h4>
                      <h6>${elem.likeCount}</h6>
                    </div>
                    <div class="comment">
                      <h4 class="comment-icon"> <i class="ri-chat-3-line"></i></h4>
                      <h6>${elem.commentCount}</h6>
                    </div>
                    <div class="share">
                      <h4 class="share-icon"> <i class="ri-share-forward-line"></i></h4>
                      <h6>${elem.shareCount}</h6>
                    </div>
                    <div class="menu">
                      <h4><i class="ri-more-2-fill"></i></h4>
                    </div>
                </div>
            </div>`;
  });
  allReels.innerHTML = sum;
}
addData();

allReels.addEventListener("click", function (dets) {
  // console.log(reels[dets.target.id])  //dets.target.id same hota hai array ke indexes jaisa na toh we used it to capture objects ab isse apan ko pura reels ke joh index chal raha hoga voh index ka object milaga when we click on like

  //ab apaan ko like pe click kare toh like badhna chahiye toh isliye we selected likecounts and ++
  if (dets.target.className == "like") {
    if (reels[dets.target.id].isLiked === true) {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    } else if (reels[dets.target.id].isLiked === false) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    }
    addData();
  }

  if (dets.target.className == "button") {
    if (reels[dets.target.id].isFollowed === true) {
      reels[dets.target.id].isFollowed = false;
    } else if (reels[dets.target.id].isFollowed === false) {
      reels[dets.target.id].isFollowed = true;
    }
    addData();
  }

   if (dets.target.className == "mute") {
    if (reels[dets.target.id].isMuted === true) {
      reels[dets.target.id].isMuted = false;
    } else if (reels[dets.target.id].isMuted === false) {
      reels[dets.target.id].isMuted = true;
    }
    addData();
  }

  //isse sirf like ak count reels me change hoga aur show karnew ke liye hume wapis ek sum banana pade ga usko all reel me daalna padega toh ab baar baar na karna papdege thats why we created funcction aandv we'll call it
  
});
