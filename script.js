let btn = document.querySelector(".cBtn");
let btn2 = document.querySelector(".dBtn");

let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";


btn2.addEventListener("click",async ()=>{
    let src = await getImages();
    console.log(src);

    let img = document.querySelector(".img");
    img.src = src;
});

btn.addEventListener("click", async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let para = document.querySelector(".res");
    para.innerHTML = fact;
});

async function getFacts(){
    try{
        let r1 = await fetch(url);
        let data1 = await r1.json();
        return data1.fact;
    }catch(e){
        console.log("Error : ",e);
        return 0;
    }
    
}

async function getImages(){
    let r2 = await fetch(url2);
    let data2 = await r2.json();
    return data2.message;
}