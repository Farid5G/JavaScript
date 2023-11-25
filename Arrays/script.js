console.log("Arrays are muttable - changable")

let marks = [34,92,84]
let players = ["Virat","Rohit","Kishan"]
console.log(players)
for (let player in players)
{
    console.log(player) // index postion
    console.log(players[player])
}
for (let player of players)
{
    console.log(player) //indivdual elements            
}
console.log(players.length)