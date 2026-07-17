function byeHerbyrb(){
    var ee = document.getElementById("herbyrbDiv");
    var e2 = document.getElementById("spinningCanadian");
    if(ee.style.visibility == 'hidden'){
        ee.style.visibility = 'visible';
        e2.style.visibility = 'visible';
        document.getElementById("cosinmowo").style.visibility = 'visible';
        document.getElementById("grass").style.visibility = 'visible';
        document.getElementById("foot1").style.visibility = 'visible';
        document.getElementById("foot2").style.visibility = 'visible';


    }
    else{
        ee.style.visibility = 'hidden';
        e2.style.visibility ='hidden';  
        document.getElementById("cosinmowo").style.visibility = 'collapse';
        document.getElementById("grass").style.visibility = 'hidden';
        document.getElementById("foot1").style.visibility = 'hidden';
        document.getElementById("foot2").style.visibility = 'hidden';

    }
}


window.addEventListener("scroll",function(){
    if(window.scrollY > 300){
        document.getElementById("foot1").style.opacity=(window.scrollY - 300) /100 ;

        document.getElementById("foot2").style.opacity=(window.scrollY - 300) / 100 ;

    }
    else{
        document.getElementById("foot1").style.opacity=0;
        document.getElementById("foot2").style.opacity=0;

    }
},false);

// function tooSpinny(){
//     var ee = document.getElementById("herbyrbDiv");
//     var e2 = document.getElementById("spinningCanadian");
//     if(ee.style.animation != 'none'){
//         ee.style.animation = 'none';
//         e2.style.animation = 'none';
//         document.getElementById("cosinmowo").style.animation = 'none';
//         document.getElementById("grass").style.animation = 'none';

//     }
//     else{
//         ee.style.animation = 'floating';
//         e2.style.animation ='spinning';  
//         document.getElementById("cosinmowo").style.animation = 'swishing';
//         document.getElementById("grass").style.animation = 'hidden';
// // oops will add this eventually
//     }
// }


// function help(){
//     var help = document.getElementById("helpDiv");
//     if(help.style.visibility == 'visible'){
//         help.style.visibility = 'hidden';
//     }
//     else{
//         help.style.visibility = 'visible';
//     }
// }