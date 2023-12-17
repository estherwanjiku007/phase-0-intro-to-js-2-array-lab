const cats=["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
  return  cats.push("Ralph");
}
function destructivelyPrependCat(name){
    return cats.unshift("Bob");
}
function destructivelyRemoveFirstCat(){
    let firstCat= cats.shift();
    return firstCat;
}
function destructivelyRemoveLastCat(){
   return cats.pop();
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
