
var maVoiture = document.querySelector('.voiture');
var degre = [0, 90, 180, 270];
var i = 0;
var rotation = degre[i];
var opp = 0; // valeur opposé de x : définition sens contraire horizontale
var oppo = 0; // valeur opposé de x : définition sens contraire verticale
var position1 = 0; // déplacement horizontale  
var position2 = 0; // déplacement verticale


// y : prend deux valeurs -1 (gauche) et +1 (droite)
function action(x, y)
{
    //test de direction tout d'abord si on tourne à gauche ou à droite 
    // si y  est positive ============>>>>>> tourner à droite
    if (y >= 0) {
        console.log('position actuel', rotation);
        i = +y +i;
        rotation = degre[i];
        console.log('position après click', rotation);
            if ( rotation === 90) {
                // rotation
                maVoiture.style.transform = 'rotate(90deg)';
                console.log('afficher la nouvelle position', rotation);
                //  Direction
                position2 += x;
                console.log ('Déplacement horizontale =====>>>>',position1);
                maVoiture.style.top = +position2 + 'px';
                }
                else if(rotation === 180){
                    // rotation 
                    maVoiture.style.transform = 'rotate(180deg)';
                    console.log('afficher la nouvelle position', rotation);
                    // déplacement
                    opp = +x * (-1);
                    position1 += opp;
                    console.log ('Déplacement horizontale =====>>>>',position1);
                    maVoiture.style.left = +position1 + 'px';
                    }
                    else if (rotation === 270) {
                        // déplacement
                        maVoiture.style.transform = 'rotate(270deg)';
                        console.log('afficher la nouvelle position', rotation);
                        //  Direction
                        oppo = +x * (-1);
                        position2 += oppo;
                        console.log ('Déplacement horizontale =====>>>>',position1);
                        maVoiture.style.top = +position2 + 'px';
                        }
                        else{
                            //Rotation
                            i = 0;
                            rotation = degre[i];    
                            maVoiture.style.transform = 'rotate(360deg)';
                            console.log('afficher la nouvelle position', rotation);
                            //déplacement
                            position1 += x;
                            console.log ('Déplacement horizontale =====>>>>',position1);
                            maVoiture.style.left = +position1 + 'px';
                            }
        
                } 
    // y est négative ====>>>>> tourner à gauche
    else{
        console.log('position actuel', rotation);
        i = +y +i;
        console.log('affichage i', i);  
            if (i === -1) {
                    // rotation
                   i = 3;
                   rotation = degre[i];
                   maVoiture.style.transform = 'rotate(-90deg)';
                   console.log('afficher la nouvelle position', rotation);
                   //  Direction
                    oppo = +x * (-1);
                    position2 += oppo;
                    console.log ('Déplacement horizontale =====>>>>',position1);
                    maVoiture.style.top = +position2 + 'px';
                   }
                    else if( i === 2){
                        //rotation
                        rotation = degre[i];
                        maVoiture.style.transform = 'rotate(-180deg)';
                        console.log('afficher la nouvelle position', rotation);
                        //déplacement
                        opp = +x * (-1);
                        position1 += opp;
                        console.log ('Déplacement horizontale =====>>>>',position1);
                        maVoiture.style.left = +position1 + 'px';
                        }
                        else if(i === 1){
                            //rotation
                            rotation = degre[i];
                            maVoiture.style.transform = 'rotate(-270deg)';
                            console.log('afficher la nouvelle position', rotation);
                            //déplacement
                            position2 += x;
                            console.log ('Déplacement horizontale =====>>>>',position1);
                            maVoiture.style.top = +position2 + 'px';
                            }
                            else{
                                // rotation
                                rotation = degre[i];
                                maVoiture.style.transform = 'rotate(0deg)';
                                console.log('afficher la nouvelle position', rotation);
                                //déplacement
                                position1 += x;
                                console.log ('Déplacement horizontale =====>>>>',position1);
                                maVoiture.style.left = +position1 + 'px';
                                }

        } 
}
