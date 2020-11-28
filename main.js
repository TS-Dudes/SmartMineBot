const mineflayer = require('mineflayer')
const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const GoalFollow = goals.GoalFollow
const GoalBlock = goals.GoalBlock
const autoeat = require('mineflayer-auto-eat')

const bot = mineflayer.createBot({
    host: '2.tcp.ngrok.io',
    port: 18799,
    username: 'TestBot'
})

bot.loadPlugin(pathfinder)
bot.loadPlugin(autoeat)
bot.once('spawn', () => {
bot.chat("Всем привет пацаны! Я ИИ по имени TestBot")
bot.autoEat.options = {
    priority: 'foodPoints',
    startAt: 10,
    bannedFood: []
  }
setInterval(() => {
		const mobFilter = e => e.type === 'mob'
		сonst mob = bot.nearestEntity(mobFilter)
		сonst mobb = bot.players['Poyarik'].entity

		if (!mob) {
			return
		}
		if (!mobb) {
			return
		}

		const mcData = require('minecraft-data')(bot.version)
		const movements = new Movements(bot, mcData)
		movements.scafoldingBlocks = []

		bot.pathfinder.setMovements(movements)

		const goal = new GoalFollow(mobb, 1)
		bot.pathfinder.setGoal(goal, true)
		
		const pos = mob.position;
		bot.lookAt(pos, true, () => {
			bot.attack(mob);
        });

    }, 400);
});
