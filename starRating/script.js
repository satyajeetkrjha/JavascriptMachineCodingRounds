const starsContainer = document.getElementById("starsdisplay");
let active = -1;
for(let i =0 ;i<5;i++){
    let starImage = document.createElement("img");
    starImage.src="./whitestar.svg";
    starImage.className ="star-style";
    starsContainer.appendChild(starImage);
    starImage.addEventListener('mouseover',()=> onStarHover(i));
    starImage.addEventListener('mouseleave',onStarOut);
    starImage.addEventListener('click',()=>onStarClick(i));
}

let stars = document.querySelectorAll('.star-style'); // gives Node list
console.log("stars .... ",stars);
function onStarHover(i){
   console.log("i is ",i); 
   fill(i);
}
function onStarOut(i){
    fill(active);
}
function onStarClick(i){
    active = i;
    document.getElementById("stars-value").innerHTML = i+1;
    fill(active);
}

function fill (ratingValue){
   for(let i =0 ;i<5;i++){
    if(i <= ratingValue){
        stars[i].src ="./coloredstar.svg";
    }
    else{
        stars[i].src="./whitestar.svg";
    }
   }
}
