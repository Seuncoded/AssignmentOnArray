

    let imageList = document.getElementById('image');
    let imgs = ['img1.jpeg', 'img2.jpeg', 'img3.jpeg','img4.jpeg', 'img5.jpeg', 'img6.jpeg', 'img7.jpeg', 'img8.jpeg'];
    let index = 0

    imageList.src = imgs[index];
    function nextImage() {
        if (index == imgs.length -1) {
            index = 1
        } else {
            index++
        }
        imageList.src = imgs[index];
    }

    function prevImage(){
        if (index==0){
            index = 2
        }else{
            index --
        }
        imageList.src = imgs[index];
    }



    // function changeColor(){ beep == ceep? document.body.style.backgroundColor = "black": document.body.style.backgroundColor = "white"; }

    let color = document.getElementById('bodyColor')
    let colorlist = ['#f7a400', '#3a9efd', '#3e4491', '#292a73', '#1a1b4b', '#f9b4ab', '#fdebd3', '#679186', '#bbd4ce'];
    let colordex = 0
    console.log(colorlist.length);
    color.style.backgroundColor = colorlist[colordex]

    function nextColor(){
        if (colordex == colorlist.length -1){
           colordex =0
        }else{
            colordex ++
        }

        color.style.backgroundColor = colorlist[colordex]

    }


    function prevColor(){
        if (colordex == 0){
            colordex = colorlist.length -1
        }else{
           colordex --
        }

       
        color.style.backgroundColor = colorlist[colordex]

    }




let names = ['Daniel', 'Samuel', 'victor', 'Steven', 'Segun', 'sqi'];  
let nameScreen = document.getElementById('usersData');
let nameDex = 0;
nameScreen.value = names[nameDex];

function nextName(){
 
    if(nameDex == names.length -1){
        nameDex = 0
    }else{
        nameDex ++
    }
    nameScreen.value = names[nameDex];
}

function prevName(){
    if (nameDex == 0){
        nameDex = names.length -1
    }else{
        nameDex--
    }
    nameScreen.value = names[nameDex];
}
