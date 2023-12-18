let cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
  cats.push(name);
}
function destructivelyPrependCat(name){
     cats.unshift(name);
}
function destructivelyRemoveFirstCat(){
     cats.shift();
    
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function prependCat(name){
    return ["Arnold", ...cats];
}
function appendCat(name){
    return[...cats, "Broom"]
}
function removeLastCat(){
    return cats.slice(0,cats.length-1);
}
function removeFirstCat(){
    return cats.slice(1);
    return cats;
}
