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
let str = 'Happy 19th birthday Misa!  May all your wishes come true and may you have an awesome year ahead. Despite whatever the ending, I really enjoyed all my time I spent with you. You are an amazing person to have around oneself. I really improved a lot after meeting you. You have been so strong to come so far regardless of all the challenges you faced in your life. Keep on being like that and you’ll be very successful in your life. I’m proud of you and happy that I came to know you. I hope you clear the jee exam and get into your dream college, after all you deserve the very best. And if you ever needed help, I’m always here to help you in best possible way I can. Enjoy your day. Happy birthday once again. Take care!'
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
        },60);  // 190毫秒打一个字，其实细心发现的话，这个项目还是有个小小的bug，无法用语言描述这个bug，如果你想优化的话 有一种简单的方法就是调快打字的速度，这样那个bug看起来就不会很明显,我太菜了 不会改那个bug
}, 100);  //5500毫秒开始打字
// 背景出现
function appearBackground(){
setTimeout(()=>{
box.style.opacity=1
},150)
}
appearBackground()

})
