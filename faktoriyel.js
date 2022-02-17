function myFunction(){
    var x =document.getElementById('que').value;
    var a=1;
    for(i =1; i <= x; i++){
        a *=i;
    }
    document.getElementById('cevap').innerHTML="Cevabınız" +" "+ a;
}