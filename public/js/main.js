loader = document.getElementById("loading");
document.querySelector('#btn').addEventListener('click',(e)=>{
    e.preventDefault();

    document.querySelector('#res').innerHTML ='';
    const prompt = document.getElementById('keyword').value.toString();
    const size = document.getElementById('sel').value.toString();

    if(prompt === ""){
        alert("Write something first");
        return;
    }else{
        generate(prompt, size);
    }
})

async function generate(p, s){
    loader.style.display="block";
    try{
        const response = await fetch('/openai/generateImage',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({prompt:p,size:s})
        });
        if (!response.ok){
            loader.style.display="none";
            throw new Error("cannot generate image");
        }
        const data = await response.json();
        loader.style.display="none";
        console.log(data);
        showimg(data.image);
    }catch(error){
        document.querySelector('#res').innerHTML = error;
    }
}

function showimg(url){

    document.querySelector('#res').innerHTML = `<img id="resImg" src="${url}" />`;
    document.querySelector('#res').style.display = 'block';
}