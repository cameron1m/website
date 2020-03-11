function separate(){
    var dataArr = [];
   
    for(var i=0; i<=4; i++){
        dataArr[i] = document.getElementById("input"+i).value;
    }
    // for(i=0; i<=4; i++){
    //     alert(dataArr[i]);
    // }
    return dataArr;
    }
    