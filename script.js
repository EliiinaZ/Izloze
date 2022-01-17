const vardi=['Ieva Cīrule', 'Laura Ziede', 'Jānis Ozols', 'Normunds Kļava', 'Maija Karane'];
const balvas=['Dators', 'Veļasmašīna', 'Viedtalrunis', 'Automašīna', 'Trauku mašīna'];
const naudaKopa=1000000;//kopēja summa izlozei
let uzvaretajuSkaits=5;
let rand= Math.random()*5;
rand= Math.floor(rand);//noapaļo skaitļus uz leju
console.log(vardi[rand]);//izvada kosole, nejauši izvēlētus vārdus
