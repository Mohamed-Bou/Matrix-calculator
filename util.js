function Form2(optionName,actionD){
    // creation de contenu (2 matrices input et une comme resultat +3button);
    $("#contenu").append("<div id='form2'></div>");
    $("#form2").append("<div id='titre'>"+optionName+"</div>");
    $("#form2").append("<div id='btnA-container'></div>");
    $("#btnA-container").append("<button class='btn' id='btnA'>dim of A </button>");  // pour saisir dim de A
    $("#form2").append("<div id='btnB-container'></div>");
    $("#btnB-container").append("<button class='btn' id='btnB'> dim of B</button>");  //                  de B
    $("#form2").append("<div id='A-container'></div>"); // 
    $("#form2").append("<div id='B-container'></div>");
    $("#form2").append("<div id='btnCalculer-container'></div>");
    $("#btnCalculer-container").append("<button class='btn' id='Calculer'>Solve</button>")
    $("#form2").append("<div id='Resultat-container'></div>");
    // 
    $("#btnA").click('click',function(){
        let z=prompt("dimensions of A ","n*p").toString();
        let l=z.split("*");
        let n=l[0]-"0";
        let p=l[1]-"0";
        creatematrice("A-container","A",n,p);
    })
    $("#btnB").click('click',function(){     
        let z=prompt("dimensions of A ","n*p").toString();
        let l=z.split("*");
        let n=l[0]-"0";
        let p=l[1]-"0";
        creatematrice("B-container","B",n,p);
    })
    $("#Calculer").click('click',function(){
        const resultatContainer=document.getElementById("Resultat-container");
        resultatContainer.innerHTML="";
        // A et B 
        const A=document.getElementById("A");
        let Ap=Math.floor(A.offsetWidth/32);
        let An=A.offsetHeight/32;
        let MatA=getA(An,Ap);
        const B=document.getElementById("B");
        let Bp=Math.floor(B.offsetWidth/32);
        let Bn=B.offsetHeight/32;
        let MatB=getB(Bn,Bp);
        switch (actionD){        
            case "multiplyMatrices":
                afficher("Resultat-container","AxB",Multiplication(MatA,MatB));
                break;
            case "add":
                afficher("Resultat-container","resultat",add(MatA,MatB));
                break;
            case "substract":
                afficher("Resultat-container","A-B",Subtract(MatA,MatB));
                break;
        }
       
    })
}
function Form1(optionName,actionD){
    // creation de contenu (1 matrice input et une comme resultat +2button);
    $("#contenu").append("<div id='form2'></div>");
    $("#form2").append("<div id='titre'>"+optionName+"</div>");
    $("#form2").append("<div id='btnA-container'></div>");
    $("#btnA-container").append("<button class='btn' id='btnA'>dim of A </button>");
    $("#form2").append("<div id='A-container'></div>"); 
    $("#form2").append("<div id='btnCalculer-container'></div>");
    $("#btnCalculer-container").append("<button class='btn' id='Calculer'>Solve</button>")
    $("#form2").append("<div id='Resultat-container'></div>");

    //
    $("#btnA").click('click',function(){
        let z=prompt("dimensions of A ","n*p").toString();
        let l=z.split("*");
        let n=l[0]-"0";
        let p=l[1]-"0";
        creatematrice("A-container","A",n,p);
    })
    let dejacree=false;
    let resultatisremoved=false;
    $("#Calculer").click('click',function(){
        if (!resultatisremoved){
            const resultatContainer=document.getElementById("Resultat-container");
            resultatContainer.innerHTML="";
        }
        const A=document.getElementById("A");
        let Ap=Math.floor(A.offsetWidth/32);
        let An=A.offsetHeight/32;
        let MatA=getA(An,Ap);
        switch (actionD){
            case "inverser":
                afficher("Resultat-container","inverse_A",inverse(MatA));
                break;
            case "Transpose":
                afficher("Resultat-container","A-Ttranspose",Transpose(MatA));
                break;
            case "qr":
                $("#Resultat-container").remove();
                resultatisremoved=true;
                if(!dejacree){
                    $("#form2").append("<div id='Q-container'></div>");
                    $("#form2").append("<div id='R-container'></div>");
                    dejacree=true;
                }
                const Qcon=document.getElementById("Q-container");
                Qcon.innerHTML="";
                const Rcon=document.getElementById("R-container");
                Rcon.innerHTML="";
                
                let reslutat=math.qr(MatA);
                afficher("Q-container","Q",reslutat.Q);
                afficher("R-container","R",reslutat.R)
                break;
        }
    })
}
// si dim de B ext fixe ou depend de A alors on utilise form3
function Form3(optionName,actionD){
    // creation de contenu (2 matrices input et une comme resultat +2button);
    $("#contenu").append("<div id='form2'></div>");
    $("#form2").append("<div id='titre'>"+optionName+"</div>");
    $("#form2").append("<div id='btnA-container'></div>");
    $("#btnA-container").append("<button class='btn' id='btnA'>dim of A </button>");  // pour saisir dim de A
    $("#form2").append("<div id='btnB-container'></div>");
    $("#form2").append("<div id='A-container'></div>"); // 
    $("#form2").append("<div id='B-container'></div>");
    $("#form2").append("<div id='btnCalculer-container'></div>");
    $("#btnCalculer-container").append("<button class='btn' id='Calculer'>Solve</button>")
    $("#form2").append("<div id='Resultat-container'></div>");
    // 
    $("#btnA").click('click',function(){
        let z=prompt("dimensions of A ","n*p").toString();
        let l=z.split("*");
        let n=l[0]-"0";
        let p=l[1]-"0";
        creatematrice("A-container","A",n,p);
        switch (actionD){
            case "Solve":
                // cree une vecteur b n*1 dans B-container
                creatematrice("B-container","b",n,1);
                break;
            case "puissance":
                // cree une seule case dans B-container pour saisir la puissance 
                creatematrice("B-container","n",1,1);
                break;
        }
    })
    $("#Calculer").click('click',function(){
        const resultatContainer=document.getElementById("Resultat-container");
        resultatContainer.innerHTML="";
        // A et B 
        const A=document.getElementById("A");
        let Ap=Math.floor(A.offsetWidth/32);
        let An=A.offsetHeight/32;
        let MatA=getA(An,Ap);
        const b=document.getElementById("b");
        let bp=Math.floor(b.offsetWidth/32);
        let bn=b.offsetHeight/32;
        let vectb=getb(bn,bp);
        switch (actionD){        
            case "Solve":
                afficher("Resultat-container","X",math.lusolve(MatA,vectb));
                break;
            
        }
       
    })
}
//matrice_id c'est le nom du matrice qu'on veut cree
function creatematrice(parent,matrice_id,nligne,ncolomn){
    const pr=document.getElementById(parent);
    pr.innerHTML="";
    $("#"+parent).append("<span style='text-align: center;'><strong> "+matrice_id+" </strong> =  </span>","<div class='matrice' id='"+matrice_id+"'></div>");
    const matrice=document.getElementById(matrice_id);
    matrice.style.width=ncolomn*34+"px";
    matrice.style.height=nligne*32+"px";
    // cree cette matrice dans l'interface,
    for (var i = 0; i< nligne;i++) {
        for (var j= 0; j < ncolomn; j++) {
             $("#"+matrice_id).append("<input class='input' type='text' id='"+matrice_id+"["+i+","+j+"]'>");
        }            
    } 
}
//fonction qui afficher une matrice nom du valeurs  M  dans nom-container de id id_div      
function afficher(id_div,nom,M){
    const ncolomn=M[0].length;
    const nligne=M.length;
    $("#"+id_div).innerHTML="";
    $("#"+id_div).append("<div style='text-align: center;'><strong>"+nom+"</strong> =  </div>","<div class='matrice' id='"+nom+"'></div>");
    let matrice =document.getElementById(nom);
    matrice.style.width=ncolomn*60+"px";
    matrice.style.height=nligne*25+"px";
    for (var i = 0; i< nligne;i++) {
        for (var j= 0; j < ncolomn; j++) {
             $("#"+nom).append("<div class='output' type='text' id='"+nom+"["+i+","+j+"]'></div>");
        }            
    } 
    for (var i = 0; i< nligne;i++) {
        for (var j= 0; j < ncolomn; j++) {
            const id=nom+"["+i+","+j+"]";
            const ele=document.getElementById(id);
            // afficher les 3premiers digits
            let ch=M[i][j].toString();
            if (ch.length>4){
                let s="";
                for(let k=0;k<4;k++){
                    s+=ch.charAt(k);
                }
                ele.innerHTML=s;
            }
            else{
                ele.innerHTML=ch;
            }
        }   
           
    } 
}
function getA(n,p){
    let A=[];
    for (let i=0;i<n;i++){
        let l=[];
        for (let j=0;j<p;j++){
            let id="A["+i+","+j+"]";
            let  ele=document.getElementById(id);
            l.push(ele.value-"0");
        }
        A.push(l);
    }
    return(A);
}
function getB(n,p){
    let B=[];
    for (let i=0;i<n;i++){
        let l=[];
        for (let j=0;j<p;j++){
            let  id="B["+i+","+j+"]";
            let  ele=document.getElementById(id);
            l.push(ele.value-"0");
        }
        B.push(l);
    }
    return(B);
}
function getb(n,p){
    let b=[];
    for (let i=0;i<n;i++){
        let l=[];
        for (let j=0;j<p;j++){
            let  id="b["+i+","+j+"]";
            let  ele=document.getElementById(id);
            l.push(ele.value-"0");
        }
        b.push(l);
    }
    return(b);
}
function removeimg(imgisremoved){
    if(!imgisremoved){
        $("#img").remove();
        imgisremoved=true;
    }
}
