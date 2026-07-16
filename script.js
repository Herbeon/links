function byeHerbyrb(){
    var ee = document.getElementById("herbyrbDiv");
    var e2 = document.getElementById("spinningCanadian");
    if(ee.style.visibility == 'hidden'){
        ee.style.visibility = 'visible';
        e2.style.visibility = 'visible';
        document.getElementById("cosinmowo").style.visibility = 'visible';
        document.getElementById("grass").style.visibility = 'visible';

    }
    else{
        ee.style.visibility = 'hidden';
        e2.style.visibility ='hidden';  
        document.getElementById("cosinmowo").style.visibility = 'hidden';
        document.getElementById("grass").style.visibility = 'hidden';

    }
}

// function help(){
//     var help = document.getElementById("helpDiv");
//     if(help.style.visibility == 'visible'){
//         help.style.visibility = 'hidden';
//     }
//     else{
//         help.style.visibility = 'visible';
//     }
// }