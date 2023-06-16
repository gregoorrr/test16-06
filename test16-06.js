{
    let set1 = new Set (["undici","spiderman","quindici","lumaca","parola"])
    let  set2 = new Set (["parola","lusso","lumaca","spiderman","nonna"])

function differenza(set1,set2){
   let parolePari = 0
   let parole_a = 0

  for(let parola of set1){
    if(parola[parola.length -1] === "a"){
        parole_a++
    }
  }
  for(let parola of set2){
    if(parola.length % 2 === 0){
        parolePari++
    }
  }
  
  return {parolePari,parole_a}
}

console.log(differenza(set1,set2))
}

{
    const peopleObj = [
        {
            nome : "Marco",
            cognome : "Lingard",
            età : 32
        },
        {
            nome : "Desire",
            cognome : "Mancani",
            età : 25
        },
        {
            nome : "Zorro",
            cognome : "Alleluja",
            età : 51
        }
    ]

    function ordinaPerEtà(peopleObj){
        return peopleObj.sort((a,b) => a.età - b.età)
    }
    
    let newArr = ordinaPerEtà(peopleObj)
    
    for(let persona of newArr){
        console.log(`${persona.nome} ha ${persona.età} anni`)
    }
}  

{
    let newArr = ["string1a","string2aa","string3aa","string4a","string5aaa","string6aaaaa"]
    const mappaWords = new Map()

    for(let parola of newArr){
        mappaWords.set(parola, parola.length)
        console.log(`La parola ${parola} contiene ${parola.length} caratteri`)
    }
}

{
    const date = 
    {
        "date1": "1990-10-10",
        "date2": "1980-10-10",
        "date3": "1970-10-10",
        "date4": "1960-10-10",
    }

    const currDate = new Date()
    const dateArr = Object.values(date).map(data => new Date(data))
    let minDate = new Date(dateArr[0])
    let maxDate = new Date(dateArr[0])
    
    dateArr.forEach(el =>{
        if(minDate > new Date(el)){
            return 
        }
        else {minDate = el}
        }
    )
    dateArr.forEach(el =>{
        if(maxDate < new Date(el)){
            return 
        }
        else {maxDate = el}
        }
    )
   console.log(minDate)
   console.log(maxDate)
}

{
    let s = "abbaio"
    let charArr = []

    for(let i = 0; i < s.length; i++){
        if(!charArr.includes(s[i])){
            charArr.push(s[i])
        }
    }
}

{
    let numArray =  [-1,24,23,41,-7,-6,18,8,-9,10,11,-3]

    function differenza(array){
        let maxNumbers = 0
        let minNumbers = 0
            array.forEach(number => {
                if(number > 10){
                    maxNumbers++
                }
                if(number < 1){
                    minNumbers++
                }
                
            }
        )
        const differenza = maxNumbers - minNumbers
        
        if(differenza === 0){
            for(let i = array.length -1; i > 0; i--){
                console.log(array[i])
            }
        }
        else{console.log(differenza)}
    }
    differenza(numArray)
}


{
    let set1 =  new Set([-1,-2,3,4,5])
    let set2 = new Set([-9,10,14,19,21])

    function comparaSet(set1,set2){
       const obj = {
        winner : 0,
        morePositive : 0
       }

       if(set1.size > set2.size){
        obj.winner = 1
       }
       else if(set2.size > set1.size){
        obj.winner = 2
       }
       else if(set2.size = set1.size){
        obj.winner = 0
       }

       let counter = 0
       let counter2 = 0
       set1.forEach(number =>{
        
        if(number > 0){
            counter ++
        }

        }
       )
       set2.forEach(number =>{
        
        if(number > 0){
            counter2++
        }
        }
       )

       if(counter > counter2){
        obj.morePositive = 1
       }
       else if(counter < counter2){
        obj.morePositive = 2
       }
       else if(counter = counter2){
        obj.morePositive = 0
       }
       return obj
    }

    console.log(comparaSet(set1,set2))

}

{
    const rettangolo1 = {
        x : 10,
        y : 20
    }

    const rettangolo2 = {
        x : 20,
        y : 25
    }

    function AreaPerimetro(rettangolo1,rettangolo2,string){
        let perimetro1 = (rettangolo1.x + rettangolo1.y) *2
        let perimetro2 = (rettangolo2.x + rettangolo2.y) *2
        let area1 = (rettangolo1.x * rettangolo1.y)
        let area2 = (rettangolo2.x * rettangolo2.y)
        if(string === "perimetro"){
            return perimetro1 - perimetro2
        }
        if(string === "area"){
            return area1 + area2
        }

        
    }
    console.log(AreaPerimetro(rettangolo1,rettangolo2,"area"))


}

{
    function opeStringa(strg,fn){
       let newString = fn(strg)
       return newString
    }

    function toUpperCase(strg){
        return strg.toUpperCase()
    }

    function getDispari(strg){
        let newString = ""
        for(let i = 1; i < strg.length; i+=2){
            newString += strg[i]
        }
        return newString
    }

    function getInverted(strg){
        let newString = ""
        for(let i = strg.length -1; i > -1; i--){
            newString += strg[i]
        }
        return newString
    }


    console.log("javascript",getDispari("javascript"))
}

{
    const autori = [{
        "autore": "mario rossi",
        "titolo": "jerry potter",
        "data": "1990-10-10"
        },
        {
        "autore": "luigi verdi",
        "titolo": "la storia finita",
        "data": "1960-10-10"
        },
        {
        "autore": "peach rosi",
        "titolo": "metti la cera",
        "data": "1970-10-10"
        },
        {
        "autore": "mario rossi",
        "titolo": "togli la cerca",
        "data": "1980-10-10"
        },
        {
        "autore": "luigi verdi",
        "titolo": "mma kid",
        "data": "1950-10-10"
        },
        {
        "autore": "lucia bianchi",
        "titolo": "javascript non è java",
        "data": "1940-10-10"
        },
        {
        "autore": "anna neri",
        "titolo": "java non è javascript",
        "data": "1930-10-10"
        }
        ]
        const libriDiversi = [];
        function getLibriDiversi(autori) {
            const autoriSet = new Set();
            
          
            for (const libro of autori) {
              const autore = libro.autore.toLowerCase();
              if (!autoriSet.has(autore)) {
                autoriSet.add(autore);
                libriDiversi.push(libro);
              }
            }
           
            return libriDiversi
        }

        let libroRecente = libriDiversi.sort((b,a)=> (new Date(b.data) - new Date(a.data)))
        console.log(libroRecente)
        console.log(getLibriDiversi(autori))

}