function separate(){
    var dataArr = [[],[]];
    var i = 0;
    while(i>5){
    for(var j=0; j<=4; j++){
        dataArr[i][j] = document.getElementById("input"+j).value;
    }
    // for(i=0; i<=4; i++){
    //     alert(dataArr[i]);
    // }
    i++;
    }
}


    