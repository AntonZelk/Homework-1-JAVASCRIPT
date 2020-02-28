var term = {
    Albania: -6,
    Belarus: -16,
    Italy: -8,
    Germany: -8,
    USA: 24,
    Canada: 10,
    Russia: 18
}
let max = 0;
let sum = 0;
let num = 0;
for (let key in term) {
    sum += term[key];
    ++num;
        if(term[key] > max){
            max = term[key];
        }
    document.body.appendChild(document.createElement("br"));
    document.write(key + " : " + term[key]);
}
let  medium = sum/num;
document.body.appendChild(document.createElement("br"));
document.body.appendChild(document.createElement("br"));
document.write("MID temperature : " + medium);
document.body.appendChild(document.createElement("br"));
document.write("MAX temperature : " + max);
document.body.appendChild(document.createElement("br"));
    
 function maxTemp(){
        let max = 0;
        for(let key in maxTemp){
            if(maxTemp[key] > max){
                max = maxTemp[key]
            }
        }
        return max;
    }

    
