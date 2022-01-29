function Result(arr1,toplam) {
    for (let i = 0; i < arr1.length; i++) {
        
        for (let j = i+1; j < arr1.length; j++) {
            
            if((arr1[i]+arr1[j])===toplam){
                arr1 = [i,j]
                return arr1;
            }
        }
        
    }
}
console.log(Result([2,5,15,9,24,,3,4],20));