let heart = document.querySelector('.heart')
let card = document.querySelector('.card')
let box = document.querySelector('#box')
heart.addEventListener('click',function(){
    card.setAttribute("style","opacity:0");
    let x = document.createElement("audio");
     x.setAttribute("src", "qlx.mp3");
     x.setAttribute("autoplay","autoplay");

// 打字效果
let i =0
let str = 'Hey Misa! Its me,Mehraab. I am writing this to express my feelings. It may seem out of sudden and so early for this but I thought its better to let you know how i feel about you. You came into my life unexpected, the time where I had mostly given up on my life except the gym. And after we started talking, I dont know why but it felt good, I started feeling alive again. The way you used to tell me to study and motivate me, it did work, I felt like trying again. You have been a great influence for me since then. I used to spend 12+ hours on insta, addicted to reels but I have improved a lot cuz of you. You actually bring the good out of me. I enjoy spending my time with you, I feel so much at peace. The way you talk and show interest in me, It actually makes me feel special. Theres also some common things between us that connects us more. I like the fact how mature you are and works very hard to chase your dreams. I wanna be there to help/support you in chasing your dream. I also find it so cute when you act so childish with me. And your voice- well thats like very alluring and seductive(sometimes), makes my mind at ease whenever I listen to you. I wanna keep hearing you 24/7. You are also very pretty and I like how cute your face looks with your short hair. I WANNA HUG YOU AND KISS YOU SO BAD. I want to get in a serious relationship with you and by that I mean I wanna get married to you in future. I know you have told me multiple times that you hate long-distance relationships and I also understand your reasons for it. But I still wanna try to convince you to give it a try, give me a chance. I unsderstand your fear of waiting and it becomes true but I wanna be the one that makes your fear go away. I want this to work between us. And no matter the situation, anything can be solved as long as efforts are made from both sides. I know its a big decision to take and all but lets try. Take your time to think about it, no need to rush. I can tell you that all the times I have told you that I would come meet you, I meant it every time. I can also promise you that I will come meet you in June if you want me to. Even though I may go abroad, it wont change anything, I would still love you and wanna be with you. I could still come visit you after every few months. And in like two years or so,we could get married when I am atleast 21. Im very scared while writing this, fear of rejection and fear of losing the hope of having a future with you. But Im trying to muster up the courage and confess it to you. I know I cant be there with you physically right now but still wanna be with you emotinally. Also Im sorry if I said anything mean or it seemed rude to you. Your jee exam is also in like a week so you should probably focus on that more. There are a lot more things I wanna say to you but just couldnt find the words to say. Im ready to put in all efforts for this. Just know that I LOVE YOU'
let strp = ''
function print()
{
 if(str[i]=='<')
 {
     document.getElementById("box").innerHTML=strp+"<br><br>+'|'";
     strp+="<br><br>";
 }
 else
 {
     strp+=str[i];
     box.innerHTML=strp + '|';
 }
 i++;
}
setTimeout(() => {
    let printid=setInterval(() => {
        print();
        if(i==str.length)
        clearInterval(printid);
        },30);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 100);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},150)
}
appearBackground()

})