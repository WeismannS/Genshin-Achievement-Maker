﻿# Genshin-Achievement-Maker
Use genshin achievement Maker to get a custom achievement based on your input, takes a string of 50 characters max

![file](https://user-images.githubusercontent.com/60429301/193130253-fed41eed-a50d-45d0-9924-5da24508c713.png)


```js
 const {genshinAchievement} = require("genshinachievement")
 const stream = await genshinAchievement(text))
```
Returns a Stream in Promise, will be rejected if text is empty/undefined or has more than 50 characters

**DiscordJS**
```js
const {genshinAchievement} = require("genshinachievement")
       const imagestream = await genshinAchievement(args.join(" ")).catch(e=> {
           message.channel.send(e)
           return;
       })
       if (!imagestream) return;
       const newStream = new MessageAttachment(imagestream)
       message.reply(newStream)
        return
        
```
