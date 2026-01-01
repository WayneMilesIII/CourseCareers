function countUpTo(){
    const min = 1;
    const max = 2;

    if (max < min){
        console.log('Max must be greater than min');
        return;
    }

    for (let i = min; i <= max; i++){
        console.log(i);
    }
    
}

countUpTo();