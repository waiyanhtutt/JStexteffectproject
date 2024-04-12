// Get UI
const languages = ["Nodejs","Reactjs","Vuejs","Laravel"];
const colors = ["red","skyblue","violet","yellow"];
const gettxtani = document.querySelector('.txtani');
const gettxtlights = document.querySelectorAll('.text-light');

//console.log(languages);
// console.log(languages[0]); // give index take value

//console.log(languages.indexOf("Reactjs")); //give value take index
// console.log(languages.indexOf("Laravel"));


 //console.log(colors[languages.indexOf("Reactjs")]); //skyblue
// console.log(colors[languages.indexOf("Vuejs")]); //violet


//return 0 to 3 

function* generator(){
    var idx = 0;

    while(true){
        yield idx++;

        if(idx>3){
            idx = 0;
        }
    }
}

const genfun = generator();
//console.log(testnumber.next()); //{value: 0, done: false}
 //console.log(genfun.next().value); // 1 1
//console.log(genfun.next().value); // 1    1
// console.log(genfun.next().value); // 2    2
// console.log(genfun.next().value); // 3     3
// console.log(genfun.next().value);// 0    0

//console.log(languages[genfun.next().value]); // Reactjs
//console.log(languages[genfun.next().value]); // Vuejs
// console.log(languages[genfun.next().value]);// Laravel
// console.log(languages[genfun.next().value]); //Nodejs
// console.log(languages[genfun.next().value]);// Reactjs
// console.log(languages[genfun.next().value]); // Vuejs

function showwords(word){
    //console.log(word); // Node Js
    // console.log(word[0]); // N

    let x = 0;

    gettxtani.innerHTML = '';
    gettxtani.classList.add(colors[languages.indexOf(word)]);

    // gettxtani.innerHTML = word;
    // gettxtani.innerHTML = word[0]; //N
    // gettxtani.innerHTML += word[1]; //N0
    // gettxtani.innerHTML += word[2]; //Nod

    let showinterval =  setInterval(function(){
        if(x >= word.length){
            clearInterval(showinterval);
            deletewords();
        }else{
            gettxtani.innerHTML += word[x];
            x++;
        }
    },500);

}

function deletewords(){
  
    let getword = gettxtani.innerHTML;
    //console.log(getword); // Node js
    
    let getlastidx = getword.length-1
    //console.log(getlastidx);

    // Nodejs 012345
    // Nodejs 01234
    // Nodejs 0123
    // Nodejs 012
    // Nodejs 01
    // Nodejs 0

    let delinterval =  setInterval(function(){
        if(getlastidx >= 0){
            gettxtani.innerHTML = gettxtani.innerHTML.substring(0,gettxtani.innerHTML.length-1);
            getlastidx--;
            
        }else{
            // remove old color
            gettxtani.classList.remove(colors[languages.indexOf(getword)]);
            
            //get new languages
            showwords(languages[genfun.next().value]);
            clearInterval(delinterval);
        }
    },500);

}

showwords(languages[genfun.next().value]); //showwords ("Nodejs");

gettxtlights.forEach(function(gettxtlight){
   //console.log(gettxtlight);

  let arrtexts = gettxtlight.textContent.split("");
   //console.log(arrtexts);

   gettxtlight.textContent ="";

   arrtexts.forEach(function(arrtext,idx){
    //console.log(arrtext);
    //console.log(idx);
    let newem = document.createElement('em');

    newem.textContent = arrtext;
    //console.log(newem);
    newem.style.animationDelay = `${idx * 0.5}s`;
    gettxtlight.append(newem);
   });
});