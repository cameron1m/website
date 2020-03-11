function MM_jumpMenu(targ,selObj,restore){ //v3.0
    eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
    //parent.location="x";
    if (restore) selObj.selectedIndex=0;
}