

function main(){
    const contenu=document.getElementById("contenu");
    let imgisremoved=false;
    $("#Matrices-Multiplication").click('click',function(){
        // execute une des fct form2() pour afficher le contenu dans div #contenu,
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form2("Multiplication AxB: ","multiplyMatrices");
    })
    $("#Matrice-inverse").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form1("Inverse :","inverser");
    })
    $("#Matrices-add").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form2("Addition A+B:","add");
    })
    $("#Matrice-Subtract").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form2("Substraction A-B:","substract");
    })
    $("#Matrice-Transpose").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form1("Transpose tA:","Transpose");
    })
    $("#Decomp-QR").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form1("QR Decomposition :","qr");
    })
    $("#Solve").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form3("Solve AX=b :","Solve");
    })
}
main();