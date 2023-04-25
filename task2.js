function convert (){
  return Object.values(arguments).join("/")
}

function convert_(...rest){
  return rest.join("/")
}

console.log(convert("nihat","fuad"))
console.log(convert("senan","zaur"))