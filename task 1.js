const result=+prompt('Введите число')
    if(typeof+result !='number'){
        alert('Упс, кажется, вы ошиблись')
    }else if(isNaN(result %2)){
        alert('Упс, кажется, вы ошиблись')
    }else if(result %2===0){
        alert('Четное число')
    }else{
        alert('Нечетное число')
    }