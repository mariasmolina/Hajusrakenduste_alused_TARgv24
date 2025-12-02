// === Harjutused: Massivid, Array ===


// 1. Harjutus: Massiivi Modifitseerimine ja Lõikamine (push, pop, slice)

let linnad = ["Tallinn", "Tartu", "Pärnu", "Narva"];
linnad.push("Kuressaare");

let eemaldatudLinn = linnad.pop();
console.log("eemaldatudLinn:", eemaldatudLinn);

let esimesedKaks = linnad.slice(0, 2);
console.log("esimesedKaks:", esimesedKaks);


// 2. Harjutus: Massiivi Otsimine (indexOf ja includes)

const värvid = ["punane", "roheline", "sinine", "kollane", "roheline"];

const kasMustOn = värvid.includes("must");
console.log("kasMustOn:", kasMustOn);

const roheliseAsukoht = värvid.indexOf("roheline");
console.log("roheliseAsukoht:", roheliseAsukoht);

const valgeAsukoht = värvid.indexOf("valge");
console.log("valgeAsukoht:", valgeAsukoht);

const viimaneRoheline = värvid.lastIndexOf("roheline");
console.log("viimaneRoheline:", viimaneRoheline);


// 3. Harjutus: Massiivi Liitmine ja Jagamine (join ja split)

const ostukorv = ["piim", "leib", "juust", "munad"]; 
const toodeteKoodidStr = "A10-B25-C30-D45";

let ostunumekiri = ostukorv.join(', ');
console.log("ostunumekiri:", ostunumekiri);

let koodideMassiiv = toodeteKoodidStr.split('-');
console.log("koodideMassiiv:", koodideMassiiv);

let csvFormat = ostukorv.join(',');
console.log("csvFormat:", csvFormat);


// 4. Harjutus: Massiivi Kontrollijad (some ja every)

const temperatuurid = [5, 12, 18, 2, 7, 10];

const kasKülmetab = temp => temp < 0
let isKülmetab = temperatuurid.some(kasKülmetab);
console.log("isKülmetab:", isKülmetab);

const kasJääbAlla20 = temp => temp < 20
let isJääbAlla20 = temperatuurid.every(kasJääbAlla20);
console.log("isJääbAlla20:", isJääbAlla20);

const kasOnPäevaneTemperatuur = temp => temp > 0
let isOnPäevaneTemperatuur = temperatuurid.every(kasOnPäevaneTemperatuur);
console.log("isOnPäevaneTemperatuur:", isOnPäevaneTemperatuur);


// 5. Harjutus: Massiivi Keeruline Kombineerimine (concat ja spread operaator)

const juurviljad = ["porgand", "kartul"]; 
const puuviljad = ["õun", "pirn", "banaan"]; 
const marjad = ["maasikas", "mustikas"];

let koikTooted_concat = juurviljad.concat(puuviljad);
console.log("koikTooted_concat:", koikTooted_concat);

let koikTooted_spread = [...juurviljad, ...puuviljad, ...marjad];
console.log("koikTooted_spread:", koikTooted_spread);

let segatud = ["Sega-Sega", ...juurviljad, 100, ...puuviljad];
console.log("segatud:", segatud);



// === Harjutused: JSON objekt ja JSON andmestruktuur, Rekursioon ===

// 1. Harjutus: JavaScripti Objektide Kirjutamine (Süntaksiharjutus)

const kasutajaProfiil = {
    kasutajaNimi: "Jane Doe",    
    vanus: 28,                          
    isOnline: true,           
    tervitusmeetod1: () => "Tere!",   
    tervitusmeetod2: function() { return "Tere " + this.kasutajaNimi }
};

// 1 variant
const kasutajaProfiilFinished = {
    kasutajaNimi: kasutajaProfiil.kasutajaNimi,    
    vanus: kasutajaProfiil.vanus,                          
    isOnline: kasutajaProfiil.isOnline,           
    tervitusmeetod1: kasutajaProfiil.tervitusmeetod1,   
    tervitusmeetod2: kasutajaProfiil.tervitusmeetod2
};

// 2 variant - funktsioon
function customParse(data) {
    const clonedData = {...data};
    Object.keys(data).forEach(key => {
        if (typeof data[key] == 'function')
        {
            // 1 variant
            let _fn = data[key].bind(kasutajaProfiil)
            clonedData[key] = _fn()
            // 2 variant
            //clonedData[key] = clonedData[key]()
        } else {
            clonedData[key] = data[key]
        }
    })
    console.log(clonedData);
};

customParse(kasutajaProfiil);

console.log(JSON.stringify(kasutajaProfiil));
console.log(JSON.stringify(kasutajaProfiilFinished));


// 2. Harjutus: Funktsioonide Eemaldamine (JSON-i eeltöötlus)

const projektiSeisund = { 
    projektiNimi: "Fusion Core", 
    versioon: 3.1, 
    // Funktsioon, mis tagastab stringi 
    valmimiseAeg: () => "Q3 2026", 
    // Funktsioon, mis tagastab tõeväärtuse 
    onEelarvestÜle: () => false, 
    // Funktsioon, mis tagastab numbri 
    arvutaKulu: () => 150000 
};

function valmistaJSONiks(obj) {
    let uusObjekt = {}; 

    for (let võti in obj) {
        let väärtus = obj[võti];
        
        if (typeof väärtus === 'function') {
            uusObjekt[võti] = väärtus();
        } else {
            uusObjekt[võti] = väärtus;
        }           
    }
    
    return uusObjekt;
}

console.log("JSON-i jaoks valmis objekt:", valmistaJSONiks(projektiSeisund));


// 3. Harjutus: Pesastatud Andmete Puhastaja (Sissejuhatus Rekursiooni)
const kasutajaAndmed = { 
    kasutajaNimi: "dinanath50",
    // Funktsioon 1
    saaRoll: () => "Administraator", 
    seaded: { 
        teema: "tume", 
        eelistused: [ 
        { 
            id: 1, 
            // Funktsioon 2 
            väärtus: () => true 
        }, 
        { 
            id: 2, 
            väärtus: "teavitused_sees" 
        } 
    ]
 }, 
 // Funktsioon 3 
 saaSisselogimiseAjalugu: () => [{ aeg: "10:00" }, { aeg: "14:00" }]
};

function sügavPuhastus(element) {
    if (element === null || element === undefined || typeof element !== 'object') {
        if (typeof element === 'function') {
            return element();
        }
        return element;
    }
         
    if (Array.isArray(element)) {
        return element.map(item => sügavPuhastus(item));
    }
    
    let uusObjekt = {};
    
    for (let võti in element) {
        uusObjekt[võti] = sügavPuhastus(element[võti]);
    }
    
    return uusObjekt;
}

console.log("Puhastatud kasutajaAndmed:", sügavPuhastus(kasutajaAndmed));


// 4. Harjutus: Kontekstuaalne Arvutaja (Käsitle this ja Konteksti)

const investeeringuAndmed = { 
    tähis: "GOOGL", 
    aktsiaid: 100, 
    hind: 150.50, 
    // See funktsioon sõltub 'this.aktsiaid' ja 'this.hind' omadustest 
    arvutaVäärtus: function() { 
        return this.aktsiaid * this.hind;
    }, 
    pesastatud: { 
        maksuMäär: 0.10, 
        // See funktsioon sõltub 'this.maksuMäär' omadusest 
        saaMaks: function() { 
            return this.maksuMäär;
        } 
    }
};

function sügavPuhastus(element) {
    
    if (typeof element === 'function') {
        return element.call(this);
    }
    
    if (element === null || element === undefined || typeof element !== 'object') {
        return element;
    }

    // Kui element on massiiv
    if (Array.isArray(element)) {
        return element.map(item => sügavPuhastus(item));
    }

    // Kui element on objekt
    let uusObjekt = {};

    for (let võti in element) {
        let väärtus = element[võti];

        // Kui element[võti] on funktsioon, kutsu see välja kasutades .call(element)
        if (typeof väärtus === 'function') {
            uusObjekt[võti] = väärtus.call(element);
        } else {
            uusObjekt[võti] = sügavPuhastus(väärtus);
        }
    }

    return uusObjekt;
}

console.log("Puhastatud investeeringuAndmed:", sügavPuhastus(investeeringuAndmed));


// 5. Harjutus: Andmete Ekstraheerimine (Object.keys(), .values(), .entries())

const toode = { 
    kood: "PRD-2025", 
    nimi: "Ergonoomiline Tool", 
    hind: 299.99,
    laoseis: 15 
};

const tooteOmadused = toode.keys(kood, nimi, hind, laoseis);
console.log("tooteOmadused:", tooteOmadused);

