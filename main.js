

function main(){
    const contenu=document.getElementById("contenu");
    let imgisremoved=false;
    $("#Matrices-Multiplication").click('click',function(){
        // execute une des fct form2() pour afficher le contenu dans div #contenu,
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form2("Matrice Multiplication : ","multiplyMatrices");
    })
    $("#Matrice-inverse").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form1("Matrice inverse :","inverser");
    })
    $("#Matrices-add").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form2("Matrices Addition :","add");
    })
    $("#Matrice-Subtract").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form2("Matrices substration :","substract");
    })
    $("#Matrice-Transpose").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form1("Matrice Transpose :","Transpose");
    })
    $("#Decomp-QR").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form1("Décomposition QR :","qr");
    })
    $("#Solve").click('click',function(){
        removeimg(imgisremoved);
        contenu.innerHTML="";
        Form3("Solution de AX=b :","Solve");
    })
}
main();