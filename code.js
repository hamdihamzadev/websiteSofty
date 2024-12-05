
const headerBg=document.getElementById('header-bg');

function toggleMenuPhone(){
  if(headerBg.style.maxHeight==='60px'){
    headerBg.style.maxHeight=`${headerBg.scrollHeight}px`
  }else{
    headerBg.style.maxHeight=`60px`
  }

}

