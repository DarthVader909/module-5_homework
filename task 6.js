let arr=['a','b',null];
let result=false;
    for(let i=0;i<arr.length-1;i++){
        for(let k=i+1;k<arr.length;k++){
            if(typeof(arr[i])!= typeof(arr[k])){
                let result=true;
            }
        }
    }
    if(result){
        console.log('элементы одинаковые');
    }else{
        console.log('элементы разные');
    }