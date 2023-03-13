const Rebours = document.getElementById('Rebours');
const jour = document.getElementById('day');
const heure = document.getElementById('hour');
const minute = document.getElementById('minute');
const seconde = document.getElementById('second');



function compteRebours() 
{
        const date1 = new Date();
        const date2 = new Date('December 31, 2023 23:59:59');
        const Total__secondes = (date2 - date1) / 1000;

        // let n = 60  * 60 * 24;
        // let n2 = 3600;

        let nombre_jours ;
        let nombre_heures ;
        let nombre_minutes ;
        let nombre_secondes ;

        nombre_jours = Math.floor(Total__secondes / (86400));
        nombre_heures = Math.floor((Total__secondes - ( nombre_jours * 86400)) / (3600));
        nombre_minutes = Math.floor((Total__secondes - (( nombre_jours * 86400 + nombre_heures * 3600))) / 60);
        nombre_secondes  = Math.floor(Total__secondes - (( nombre_jours * 86400 + nombre_heures * 3600 + nombre_minutes * 60)));

        jour.innerHTML = nombre_jours;
        heure.innerHTML = nombre_heures;
        minute.innerHTML = nombre_minutes;
        seconde.innerHTML = nombre_secondes;  

        let minuteur = setTimeout("compteRebours();", 1000);
}

compteRebours();