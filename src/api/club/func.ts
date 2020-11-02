// import match from './match'


// if (match.matches[0].score) {
//   console.log(match.matches[0].score)
// }
// const club = [];
// const score = [];

// match.matches.forEach((item, index) => {
//   if (club.indexOf(item.team1) === -1) {
//     club.push(item.team1)
//     score.push(0)
//   }

//   if (club.indexOf(item.team2) === -1) {
//     club.push(item.team2)
//     score.push(0)
//   }
// })

// match.matches.forEach((item, index) => {
//   if (item.score) {

//     if (item.score.ft[0] > item.score.ft[1]) {
//       // console.log(score.indexOf(item.team1))
//       score[club.indexOf(item.team1)] = score[club.indexOf(item.team1)] + 3
//     } else if (item.score.ft[0] < item.score.ft[1]) {

//       score[club.indexOf(item.team2)] = score[club.indexOf(item.team2)] + 3
//     } else {
//       score[club.indexOf(item.team1)] = score[club.indexOf(item.team1)] + 1;
//       score[club.indexOf(item.team2)] = score[club.indexOf(item.team2)] + 1
//     }
//   }
// })

// console.log(club)

// console.log(test)


    // console.log(this.domainListService.findAll())
    // try {
    //   const test = club.map((item, index) => {
    //     return { name: item, score: score[index] }
    //   });
    //   await test.forEach((item) => {
    //     this.clubService.create({ name: item.name, score: item.score })
    //   })
    // } catch (err) {
    //   console.log('some error')
    // }