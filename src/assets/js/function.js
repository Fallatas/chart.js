import $ from 'jquery';
 
$(document).ready(function(){


        var listitems = document.querySelectorAll('li');
        var i = 0;

        var aktive = document.getElementById('aktive');
        var next_aktive = aktive.nextElementSibling;

        var idTest = document.getElementById('test');
        var test = document.getElementsByTagName('span');
        var newTest = document.getElementsByClassName('test');

        console.log(idTest.innerHTML);
        /*
        var interVal = setInterval(function(){
            if(listitems[i].classList.contains('image')){
                listitems[i].nextElementSibling.classList.add('aktive');
                i++;
                console.log('Es geht');
            }else{
                console.log('dsfsdfds');
            }
        },1000);
        */
        
        next_aktive.setAttribute('id','aktive');
        aktive.removeAttribute('id','aktive');

    
    /* https://www.mediaevent.de/javascript/simple-lightbox.html */





});











