window.addEventListener("load",function(){
    const links =[...document.querySelectorAll(".menu-item")]
    links.forEach(item => item.addEventListener("mouseenter",handLinkHovevr));

    const lineDiv = document.createElement("div");
    lineDiv.className = 'menu-line';
    document.body.appendChild(lineDiv);

    function handLinkHovevr(e){
        const {left,top,height,width}=e.target.getBoundingClientRect();
        const pading = 60;
        lineDiv.style.width = `${width - pading}px`;
        lineDiv.style.left = `${left+pading/2}px`;
        lineDiv.style.top = `${top+height+5}px`;
    }
    const menu =document.querySelector(".menu");
    menu.addEventListener("mouseleave",function(){
        lineDiv.style.width=0;
    });

    //slider
    
    const slider =document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".sli-img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    sliderMain.style.width = `${sliderLength * sliderItemWidth}px`
    
    
    prevBtn.addEventListener("click",function(){
        
        handleChangeSlide(-1);
    })
    nextBtn.addEventListener("click",function(){
        handleChangeSlide(1);
    })
    let postionX = 0;
    let index = 0;
    function handleChangeSlide(direction){
        if(direction===1){
            index++;
            console.log(index);
            if(index>=sliderLength){
                index=sliderLength
                return;
            }
            postionX = postionX - sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
            
        }else if(direction === -1){
            index--;
            if(index<0){
                index=0;
                return;
            }
            postionX = postionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${postionX}px)`;
        }
    }

    const afternews = document.querySelector(".after-news");
    const itemnews = document.querySelector(".item-news");

    document.body.addEventListener("mousemove",function(e){
        
        if(e.target.matches(".after-news")){
            afternews.classList.add("active");
        }
        
        if(e.target.matches(".item-news")){
            afternews.classList.add("active");

        }
        
    })
    itemnews.addEventListener("mouseleave",function(e){
        afternews.classList.remove("active");
   })


   const item1 = document.querySelector(".item1");
   item1.addEventListener("mouseenter",function(e){
        item1.classList.remove("item1::after")
   })
   
})