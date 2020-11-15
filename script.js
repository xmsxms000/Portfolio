window.addEventListener('load', function(){
    document.querySelector('.circle-wrap').classList.add('opacity-0');
    setTimeout(function(){
        document.querySelector('.circle-wrap').style.display='none';
    },5000)
})

//Portfolio item Filter

const filterContainer = document.querySelector('.portfolio-filter'),
      filterBtns = filterContainer.children,
      totalFilterBtn = filterBtns.length,
      portfolioItems = document.querySelectorAll('.portfolio-item'),
      totalPortfolioItem = portfolioItems.length;

      for(let i = 0; i < totalFilterBtn; i++){
        filterBtns[i].addEventListener('click', function(){
            filterContainer.querySelector('.active').classList.remove('active');
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            for(let k = 0; k < totalPortfolioItem; k++){
                if(filterValue === portfolioItems[k].getAttribute('data-category')){
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
                else {
                    portfolioItems[k].classList.remove('show');
                    portfolioItems[k].classList.add('hide');
                }
                if(filterValue === 'all'){
                    portfolioItems[k].classList.remove('hide');
                    portfolioItems[k].classList.add('show');
                }
            }
        });
      }
        

//Portfolio Lightbox

const lightbox = document.querySelector('.lightbox'),
      lightboxImg = document.querySelector('.lightbox-img'),
      lightboxClose = lightbox.querySelector('.lightbox-close'),
      lightboxText = document.querySelector('.caption-text'),
      lightboxCounter = document.querySelector('.caption-counter'),
      lightboxLink = document.querySelector('.portfolio-link a');
      
      
      
let itemIndex = 0;

function chageLink(){
    if(itemIndex = itemIndex + 1){
        lightboxLink.href = 'potrfolios/portfolio'+itemIndex+'/portfolio'+itemIndex+'.html'
    }
}

for(let i =0; i < totalPortfolioItem; i++){
    portfolioItems[i].addEventListener('click', function(){
        itemIndex = i;
        chageItem();
        toggleLightbox();
        chageLink();
    })
}
// function nextItem(){
//     if(itemIndex == totalPortfolioItem-1){
//         itemIndex=0;
//     }
//     else{
//         itemIndex++
//     }
//     chageItem();
    
// }

// function prevItem(){
//     if(itemIndex == 0){
//         itemIndex = totalPortfolioItem-1;
//     }
//     else{
//         itemIndex--
//     }
//     chageItem();
    
    
// }

function toggleLightbox(){
    lightbox.classList.toggle('open');
}
function chageItem(){
    imgSrc =  portfolioItems[itemIndex].querySelector('.portfolio-img img').getAttribute('src');
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML = portfolioItems[itemIndex].querySelector('h4').innerHTML;
    lightboxCounter.innerHTML = (itemIndex + 1) + ' of ' + totalPortfolioItem; 
}
//close Lightbox 
lightbox.addEventListener('click', function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})

//Aside Navbar
const nav = document.querySelector('.nav'),
      navList = nav.querySelectorAll('li'),
      totalNavList = navList.length,
      allSection = document.querySelectorAll('.section'),
      totalSection = allSection.length;

for(let i = 0; i < totalNavList; i++){

    const a = navList[i].querySelector('a');

    a.addEventListener('click', function(){
        // remove back section class
        removeBackSectionClass();

        for(let j = 0; j < totalNavList; j++){
            if(navList[j].querySelector('a').classList.contains('active')){
                // add back section class
                addBackSectionClass(j);
                
            }
            navList[j].querySelector('a').classList.remove('active');
        }
        this.classList.add('active');
        showSection(this);

        if(window.innerWidth < 1200){
            asideSectionTogglerBtn();
        }
    })
}
function removeBackSectionClass (){
    for(let i = 0; i < totalSection; i++){
        allSection[i].classList.remove("back-section");
    }
}

function addBackSectionClass (num){
    allSection[num].classList.add('back-section');
}

function showSection(element){
    for(let i = 0; i < totalSection; i++ ){
        allSection[i].classList.remove('active');
    }
   
    const target = element.getAttribute('href').split('#')[1];
    
    document.querySelector('#' + target).classList.add('active')
    
}

function uptateNav(element){
    for(let i = 0; i < totalNavList; i++){
        navList[i].querySelector('a').classList.remove('active');
        const target = element.getAttribute('href').split('#')[1];
        if(target === navList[i].querySelector('a').getAttribute('href').split('#')[1]){
            navList[i].querySelector('a').classList.add('active');
        }
    }
    
}

document.querySelector('.hire-me').addEventListener('click',function(){
    const sectionIndex = this.getAttribute('data-section-index');
    //console.log(sectionIndex)
    showSection(this);
    uptateNav(this);
    removeBackSectionClass();
    addBackSectionClass (sectionIndex);
})

const navTogglerBtn = document.querySelector('.nav-toggler'),
      aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', asideSectionTogglerBtn)

function asideSectionTogglerBtn(){
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
    for(let i = 0; i < totalSection; i++ ){
        allSection[i].classList.toggle('open');
    }
}


