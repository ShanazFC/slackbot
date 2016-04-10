var inspirational_quotes = ["You can do it!","Keep going!", "You got this!"]

module.exports = function(bot) {
  bot.hear(/fun/, function(msg){
    return msg.reply("party")
  })

  bot.hear(/Jon/, function(msg){
    return msg.reply("Jon is the best, but Shanaz is better.")
  })

  bot.hear(/jon/, function(msg){
    return msg.reply("Jon is the best, but Shanaz is better.")
  })

  bot.hear(/shut up/, function(msg){
    return msg.send("Shut up is a bad word.")
  })

  bot.hear(/GA DC/, function(msg){
    return msg.reply("GA DC is the best team ever!")
  })

  bot.hear(/.*!.*/, function(msg){
    return msg.reply("A for Enthusiasm!!")
  })

  bot.hear(/tired|too hard|whatever|bored/, function(msg){
    return msg.reply(msg.random(inspirational_quotes));
  })




}
