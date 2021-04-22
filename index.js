const textarea = document.querySelector("#textarea");
const cond1 = document.querySelector("#cond1");
const cond2 = document.querySelector("#cond2");
const btn = document.querySelector("#btn");
const show = document.querySelector("#show");

const cap = (string) =>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
const small = (string) =>{
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

btn.addEventListener("click" , ()=>{
    const arr1 = cond1.value.split("\n");
    const arr2 = cond2.value.split("\n");
    show.innerHTML = textarea.value.replace(/\n\r?/g, '<br />');
    if(textarea.value){
        if(arr1[0]){
            arr1.forEach(e => {
                let eCap = cap(e);
                let eSmall = small(e);
                let reg = new RegExp("\\b" + e + "\\b","g");
                let reg2 = new RegExp("\\b" + eCap + "\\b","g");
                let reg3 = new RegExp("\\b" + eSmall + "\\b","g");
                show.innerHTML = show.innerHTML.replaceAll(reg,"<span style=\"background-color:yellow;\">"+e+"</span>");
                show.innerHTML = show.innerHTML.replaceAll(reg2,"<span style=\"background-color:yellow;\">"+eCap+"</span>");
                show.innerHTML = show.innerHTML.replaceAll(reg3,"<span style=\"background-color:yellow;\">"+eSmall+"</span>");
            });
        }
        if(arr2[0]){
            arr2.forEach(e => {
                let eCap = cap(e);
                let eSmall = small(e);
                let reg = new RegExp("\\b" + e + "\\b","g");
                let reg2 = new RegExp("\\b" + eCap + "\\b","g");
                let reg3 = new RegExp("\\b" + eSmall + "\\b","g");
                show.innerHTML = show.innerHTML.replaceAll(reg,"<span style=\"background-color:cyan;\">"+e+"</span>");
                show.innerHTML = show.innerHTML.replaceAll(reg2,"<span style=\"background-color:cyan;\">"+eCap+"</span>");
                show.innerHTML = show.innerHTML.replaceAll(reg3,"<span style=\"background-color:cyan;\">"+eSmall+"</span>");
            });
        }
    }
})
