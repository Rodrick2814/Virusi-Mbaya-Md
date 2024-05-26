const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "virusimbaya@gmail.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.devs = "254748721079,254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "254748721079";
global.owner = process.env.OWNER_NUMBER || "256782956464";
global.style = process.env.STYLE || "5";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2547xxx";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2547xxxx";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://virusi-2615bdac6a00.herokuapp.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0NLK2hySXQvMmJlb3U4STk0YzJyRVZWZ1psZjlicW9DdlFVZ3dMdmVYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTdpZ2xQM2J4T3Z3UXJOeUNmRmRYSGRHVmY2YnEvOVVtMmpIekdEZDdSYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQjlMTHBFSFJ6RmxsTTk5U1c3a0lZQTFXb3VyaUM0ZzZQZDYrWlFUcDE4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsbUdwY2JiaGtZZGpFZTNqdFgrZXNNanJJYVRsTkRmcVpFaS82eE5ka0IwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPUE9BYlBlUUN5OHNPYWwwVEx6UkJ2V0JaYnh1M0orZHpnWGIrNWNQblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV1MEhlbmVyL0M0K01QcFhSSFFwYnN2WnpHbStOTEMzcS9EU1piZ1BBeTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib1Bjbk5sbkNMeXBvc1pLQUJVUnFrYWsrU1BHQmxraWQ5eTdVblR0UlcwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieDF1Y0lvUTRwbW9OZ1pyN2VqZ0dieW9NQUZTSUdCV2dvaWVkS0tuNm1tND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJkc2JUMUR4Q3pGNCtsZHRNZm1MaTAyc1dqOHh5UGY1YWpwd0xzTklwRjNEbHhZUWZzUS85bkQySmREQmY5bFZYNkdkQmVMc3ZvVUFsalJXUWNJdkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU5LCJhZHZTZWNyZXRLZXkiOiIyMXJGcGRIcjRRQ1dlOWFmOHoyeHczWjRjVCtMV2tjV1VRWW9YcHJ4MzhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1Njc4Mjk1NjQ2NEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJGQjdGMjk1MDBEQzIxODAzMzM1MjdBNEM1MDQwMkU5NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE2NjkwOTEyfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUYWlwVEhXdFRJcVVZWHNEMFdYa0R3IiwicGhvbmVJZCI6IjRmZWJkNjRlLWQxZDgtNDJkNi1iMTJmLTMyMDM2MDcwODg3ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJMTF6djB0Q1J3V1NmM1JTUld0M1MrQnBLK0k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnVVaXk5UWJTd203MTcxcE8weWwvdU9jQnRJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlI0OUcxMlo3IiwibWUiOnsiaWQiOiIyNTY3ODI5NTY0NjQ6N0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3JnbDhnREVNNi95cklHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNUU4cnNTYmplb0NocDFwT2JHMlQ5bm8yMVptdjJ4NDFnUlRaY2liRFYxMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiNzQ5c3ltMjdiZ0swOSszcnhIUWRPd3QwdmppTjhaem5lK01SWG9lRm1CaGUvK3RuWmp1YjFZS3c3dkl1MnF5WnFyVDYzL1VsZjBDTWt1Smpqb0UzQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InJUWE8vOUVwOS8wYjl1R2loWC9hYkZ2M0VEdnJMTHora2NQV0pHRjhvc2hXR2NoWGt6dWZhbHF0QkpCSDJHSHFEWHE3bTlobHZPMitqTlY0ekpnT0N3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzgyOTU2NDY0OjdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZVJQSzdFbTQzcUFvYWRhVG14dGsvWjZOdFdacjlzZU5ZRVUyWEltdzFkZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxNjY5MDkwNywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLTGsifQ=="
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠𝗩𝗜𝗥𝗨𝗦🦠",
  author: process.env.PACK_AUTHER || "Virusi-Md",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝗩𝗜𝗥𝗨𝗦-𝗠𝗗",
  ownername: process.env.OWNER_NAME || "Vurusian",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
