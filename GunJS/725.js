function s725(){
    var numAttachments = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    var totalCount = 9;
    var ran = Math.floor(Math.random() * 5) + 0;
    var attArr = [];
    for (var i = 0; i <= ran; i++) {
    var rand = numAttachments[Math.floor(Math.random() * totalCount)];
    attArr.push(rand);
    numAttachments.splice(rand,1);
    totalCount--;
    }
    // console.log(attArr);
    var underbarrel = false;

    //Muzzles

    var muzzles = [
        { name: 'Breacher Device', image: 'attachments/shotguns/725/breacherdevice.png' },
        { name: 'Flash Guard', image: 'attachments/shotguns/725/flashguard.png' },
        { name: 'Monolithic Suppressor', image: 'attachments/shotguns/725/monolithicsuppressor.png' },
        { name: 'Muzzle Brake', image: 'attachments/shotguns/725/muzzlebrake.png' },
        { name: 'Compensator', image: 'attachments/shotguns/725/compensator.png' },
        { name: 'Choke', image: 'attachments/shotguns/725/choke.png' },
        { name: 'Lightweight Suppressor', image: 'attachments/shotguns/725/lightweightsuppressor.png' },
        { name: 'Tactical Suppressor', image: 'attachments/shotguns/725/tacticalsuppressor.png' },

      ];


    var muzzle = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt1").innerHTML = "";

    if (attArr.includes(0)){
        muzzle = true;
        // console.log("Muzzle is true");
    }

    if (muzzle != false){
        var ranMuzzle = Math.floor(Math.random() * 8) + 0;
    
        var muzzlePick = muzzles[ranMuzzle];
        // console.log(muzzlePick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt1").innerHTML = '<b>'+ "Muzzle -  " + '</b>' + muzzlePick.name + '<br>' + '<img src="'+muzzlePick.image+'">';
    }

     //Barrel

     var barrels = [
        { name: 'Tempus Smooth Bore', image: 'attachments/shotguns/725/tmpussmoothbore.png' }, 
        { name: 'Sawed-off Barrel', image: 'attachments/shotguns/725/sawedoffbarrel.png' },  
        { name: 'Tempus 32 Competition', image: 'attachments/shotguns/725/tempus32competition.png' },
      ];


    var barrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt2").innerHTML = "";

    if (attArr.includes(1)){
        barrel = true;
        // console.log("Barrel is true");
    }

    if (barrel != false){
        var ranBarrel = Math.floor(Math.random() * 3) + 0;
    
        var barrelPick = barrels[ranBarrel];
        // console.log(barrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt2").innerHTML = '<b>'+ "Barrel -  " + '</b>' + barrelPick.name + '<br>' + '<img src="'+barrelPick.image+'">';
    }




    //Laser

    var lasers = [
        { name: '1mW Laser', image: 'attachments/shotguns/725/1mwlaser.png' }, 
        { name: '5mW Laser', image: 'attachments/shotguns/725/5mwlaser.png' }, 
        { name: 'Tac Laser', image: 'attachments/shotguns/725/taclaser.png' }, 
      ];


    var laser = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt3").innerHTML = "";

    if (attArr.includes(2)){
        laser = true;
        // console.log("laser is true");
    }

    if (laser != false){
        var ranLaser = Math.floor(Math.random() * 3) + 0;
    
        var laserPick = lasers[ranLaser];
        // console.log(laserPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt3").innerHTML = '<b>'+ "Laser -  " + '</b>' + laserPick.name + '<br>' + '<img src="'+laserPick.image+'">';
    }



    //Optic
    var optics = [
        { name: 'Operator Reflex Sight', image: 'attachments/shotguns/optics/operatorrelfexsight.png' },
        { name: 'Corp Combat Holo Sight', image: 'attachments/shotguns/optics/corpcombatholosight.png' },
        { name: 'Aim-Op Reflex Sight', image: 'attachments/shotguns/optics/aimopreflexsight.png' },
        { name: 'Cronen LP945 Mini Reflex', image: 'attachments/shotguns/optics/cronenlp945minireflex.png' },
        { name: 'APX5 Holographic Sight', image: 'attachments/shotguns/optics/apx5holographicsight.png' },
        { name: 'Scout Combat Optic', image: 'attachments/shotguns/optics/scoutcombatoptic.png' },
        { name: 'Viper Reflex Sight', image: 'attachments/shotguns/optics/viperreflexsight.png' },
        { name: 'VLK 3.0x Optic', image: 'attachments/shotguns/optics/vlk30xoptic.png' },
        { name: 'G.I. Mini Reflex', image: 'attachments/shotguns/optics/giminireflex.png' },
        { name: 'Solozero NVG Enhanced', image: 'attachments/shotguns/optics/solozeronvgenhanced.png' },
        { name: 'PBX Holo 7 Sight', image: 'attachments/shotguns/optics/pbxholo7sight.png' },
        { name: 'Monocle Reflex Sight', image: 'attachments/shotguns/optics/monoclereflexsight.png' },
        { name: 'Cronen C480 Pro Optic', image: 'attachments/shotguns/optics/cronenc480prooptic.png' },
        { name: 'Brownlee 32mm Scope', image: 'attachments/shotguns/optics/brownlee32mmscope.png' },
        { name: 'Solozero Optics Mini Reflex', image: 'attachments/shotguns/optics/solozeroopticsminireflex.png' },
      ];


    var optic = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt4").innerHTML = "";

    if (attArr.includes(3)){
        optic = true;
        // console.log("optic is true");
    }

    if (optic != false){
        var ranOptic = Math.floor(Math.random() * 15) + 0;
    
        var opticPick = optics[ranOptic];
        // console.log(opticPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt4").innerHTML = '<b>'+ "Optic -  " + '</b>' + opticPick.name + '<br>' + '<img src="'+opticPick.image+'">';
    }



    //Stock

    var stocks = [
        { name: 'FTAC Equilibrium', image: 'attachments/shotguns/725/ftacequilibrium.png' },
        { name: 'Chronen Pro Light', image: 'attachments/shotguns/725/chronenprolight.png' },
        { name: 'Sawed-off Stock', image: 'attachments/shotguns/725/sawedoffstock.png' },
        { name: 'Tempus Sport', image: 'attachments/shotguns/725/tempussport.png' },
      ];


    var stock = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt5").innerHTML = "";

    if (attArr.includes(4)){
        stock = true;
        // console.log("stock is true");
    }

    if (stock != false){
        var ranStock = Math.floor(Math.random() * 4) + 0;
    
        var stockPick = stocks[ranStock];
        // console.log(stockPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt5").innerHTML = '<b>'+ "Stock -  " + '</b>' + stockPick.name + '<br>' + '<img src="'+stockPick.image+'">';
    }


    

    //Underbarrel

    var underbarrels = [
        { name: 'Merc Foregrip', image: 'attachments/shotguns/725/mercforegrip.png' },
        { name: 'Ranger Foregrip', image: 'attachments/shotguns/725/rangerforegrip.png' },
        { name: 'Commando Foregrip', image: 'attachments/shotguns/725/commandoforegrip.png' },
        { name: 'Tactical Foregrip', image: 'attachments/shotguns/725/tacticalforegrip.png' },
        { name: 'Operator Foregrip', image: 'attachments/shotguns/725/operatorforegrip.png' },
      ];


    var underbarrel = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt6").innerHTML = "";

    if (attArr.includes(5)){
        underbarrel = true;
        // console.log("underbarrel is true");
    }

    if (underbarrel != false){
        var ranUnderbarrel = Math.floor(Math.random() * 5) + 0;
    
        var underbarrelPick = underbarrels[ranUnderbarrel];
        // console.log(underbarrelPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt6").innerHTML = '<b>'+ "Underbarrel -  " + '</b>' + underbarrelPick.name + '<br>' + '<img src="'+underbarrelPick.image+'">';
    }







     //Ammunation

     var ammunations = [
        { name: 'Slug Rounds', image: 'attachments/shotguns/model680/slugrounds.png' },
      ];


    var ammunation = false;
    document.getElementById("primaryAttH2").innerHTML = "";
    document.getElementById("primaryAtt7").innerHTML = "";

    if (attArr.includes(6)){
        ammunation = true;
        // console.log("ammunation is true");
    }

    if (ammunation != false){
        var ranAmmunation = Math.floor(Math.random() * 1) + 0;
    
        var ammunationPick = ammunations[ranAmmunation];
        // console.log(ammunationPick.name);
        document.getElementById("primaryAttH2").innerHTML = "";
        document.getElementById("primaryAtt7").innerHTML = '<b>'+ "Ammunation -  " + '</b>' + ammunationPick.name + '<br>' + '<img src="'+ammunationPick.image+'">';
    }

//Guard

var reargrips = [
    { name: 'Tempus SlimGrip', image: 'attachments/shotguns/725/tempusslimgrip.png' },
    { name: 'FORGE TAC Steady Grip', image: 'attachments/shotguns/725/forgetacsteadygrip.png' },
    { name: 'FORGE TAC Commander', image: 'attachments/shotguns/725/forgetaccommander.png' },
];


var reargrip = false;
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt8").innerHTML = "";

if (attArr.includes(7)){
reargrip = true;
// console.log("rear grip is true");
}

if (reargrip != false){
var ranRearGrip = Math.floor(Math.random() * 3) + 0;

var rearGripPick = reargrips[ranRearGrip];
// console.log(rearGripPick.name);
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt8").innerHTML = '<b>'+ "Guard -  " + '</b>' + rearGripPick.name + '<br>' + '<img src="'+rearGripPick.image+'">';
}

//Perks

var perks = [
{ name: 'FMJ', image: 'attachments/perks/fmj.png' },
{ name: 'Sleight of Hand', image: 'attachments/perks/sleight.png' }, 
{ name: 'Frangible - Wounding', image: 'attachments/perks/wounding.png' },
{ name: 'Heavy Hitter', image: 'attachments/perks/heavyhitter.png' },
{ name: 'Fully Loaded', image: 'attachments/perks/fullyloaded.png' },
{ name: 'Recon', image: 'attachments/perks/recon.png' },
{ name: 'Mo Money', image: 'attachments/perks/money.png' },
{ name: 'Fast Melee', image: 'attachments/perks/fastmelee.png' },
{ name: 'Frangible - Disabling', image: 'attachments/perks/disabling.png' },
];


var perk = false;
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = "";

if (attArr.includes(8)){
perk = true;
// console.log("perk is true");
}

if (perk != false){
var ranPerk= Math.floor(Math.random() * 9) + 0;

var perkPick = perks[ranPerk];
// console.log(perkPick.name);
document.getElementById("primaryAttH2").innerHTML = "";
document.getElementById("primaryAtt9").innerHTML = '<b>'+ "Perk -  " + '</b>' + perkPick.name + '<br>' + ' <img src="'+perkPick.image+ '" "' + '">';
}





    }
    