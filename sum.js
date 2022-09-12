function sum(a, b){

    if(!(typeof a == "number" && typeof b == "number")){
        return console.log("Informe valores válidos");
    }
    return a + b;
}

module.exports = sum;
