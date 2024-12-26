const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 4
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_56_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU0LFxuICAgICAgICAzNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAzMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDY5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODQsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3NixcbiAgICAgICAgMTE1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODEsXG4gICAgICAgIDY3LFxuICAgICAgICAyNDksXG4gICAgICAgIDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTg4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDgzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDM0LFxuICAgICAgICA2NSxcbiAgICAgICAgODksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDkzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDExOCxcbiAgICAgICAgODUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJmSk9hOGFJczhkdVZXRVFHTTNDczRpL0hzN1pnbkpSTzJDNGN4NVQrOXJjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzIsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzIsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmVXFaZGdsb1NJdXZnQ0taQVBndjVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYyZDc2OTBkLWRmNjEtNGRkMS05ZDFhLTkwMGExMWY2NGJmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MCxcbiAgICAgIDI0MSxcbiAgICAgIDE5NyxcbiAgICAgIDEyMyxcbiAgICAgIDE1NyxcbiAgICAgIDE2OCxcbiAgICAgIDIxMixcbiAgICAgIDU3LFxuICAgICAgMTc4LFxuICAgICAgMTAsXG4gICAgICAxMTUsXG4gICAgICAzOCxcbiAgICAgIDE1LFxuICAgICAgMTY1LFxuICAgICAgMSxcbiAgICAgIDIxLFxuICAgICAgMjM2LFxuICAgICAgMTIxLFxuICAgICAgMTU2LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMyxcbiAgICAgIDI0OCxcbiAgICAgIDI0MSxcbiAgICAgIDEwLFxuICAgICAgMTE0LFxuICAgICAgMTQ3LFxuICAgICAgMTQ1LFxuICAgICAgMTE2LFxuICAgICAgMjI2LFxuICAgICAgMTg1LFxuICAgICAgMTc2LFxuICAgICAgNzEsXG4gICAgICAyMTgsXG4gICAgICAxNjYsXG4gICAgICA0MixcbiAgICAgIDIzNSxcbiAgICAgIDIyMSxcbiAgICAgIDUwLFxuICAgICAgMTMzLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWExIRjFTSkZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMDkyNDM2MTg6ODNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjYyNjg5ODc5NTY0NDg4OjgzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05LeTE4OEVFTlhOdHJzR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV0wyUjU5RXFCMTlIU3hYUXp6dlJFbTVrck1UUW9VSGdhMk9qQ1BOWHFqZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHQW9JbVMxb0hSbjI2aFk1dzYzZ0taS2JJdGJWbnNRYVJnWEhaMUVWWVhob0p3U3dhc0FuNWx5OXFGdXZ3UnVSL3NRSU1pNWoybUJxam91d0RuQnpDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFa2ZLN2E2NE1TWTkwQjZXL2J2S1NJS1Z0dU5IVVhZL3V5aXpZZDNVaHhnSzBESURyTmdpcDJYM1AxQzY5dXcwdkxJVjZyazhwZmtVcUw5ck81NHZqQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTA5MjQzNjE4OjgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyMzkzODRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "𝕯𝖆𝖛𝖎𝖉",
  packname: process.env.PACK_NAME || "𝕵𝖊 𝖛𝖔𝖎𝖘 𝖘𝖙𝖎𝖈𝖐𝖊𝖗 𝖕𝖆𝖈𝖐
    ",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "DAVID",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
