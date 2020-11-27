const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const GoalFollow = goals.GoalFollow
const GoalBlock = goals.GoalBlock
const autoeat = require('mineflayer-auto-eat')

const bot = mineflayer.createBot({
    host: 'SERVER IP HERE',
    port: SERVER PORT HERE,
    username: 'TestBot'
})

