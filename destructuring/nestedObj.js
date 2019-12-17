let obj = {
 
    "id": 5782,
    "minimumMastery": 3,
    "mastered": false,
    "masteryLevel": 1.575,
    "overallMasteryLevel": 1.575,
    "exploredMasteryLevel": 1.575,
    "hasReachedFullCoverage": true,
    "knowledgeCardUnread": true,
    "summary": {
        "explored": 2,
        "mastered": 0,
         "valuable": 2,
        "valuableNonMastered": 2,
        "knowledgeCards": 3,
        "activities": 2,
        "concepts": 2
    },
  "education": {
      "school": {
          "name": "ABC"
                }
              }
      
}

//console.log(obj.masteryLevel)

//with default
//let {masteryLevel, summary: {valuable} = {}} = obj


let { masteryLevel, 
        summary: 
            {valuable
            } }= obj
console.log(masteryLevel)

console.log(valuable)

let  {education: {school: {name}} = {school: {name: 'Dunno'}}} = obj

console.log(name)
