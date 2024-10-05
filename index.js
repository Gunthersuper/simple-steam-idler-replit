const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [730, 570, 440, 1222670, 578080, 1049590, 1928420, 109600, 1172470,
               714010, 291550, 766570, 236390, 230410, 933110, 397900, 386180, 702320,
               238960, 1286830, 1677740, 2073850, 1085660, 335240, 304930, 1782210, 1997040,
               1714320, 438100, 1599340, 8500];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});
