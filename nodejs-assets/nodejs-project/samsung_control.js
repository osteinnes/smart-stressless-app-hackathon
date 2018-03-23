var rn_bridge = require('rn-bridge');

const SamsungTvRemote = require('samsung-tv-remote');

let remote = new SamsungTvRemote({
  ip: '10.101.115.249'
});

// Echo every message received from react-native.
rn_bridge.channel.on('message', (msg) => {

if(msg == 'menu'){
	remote.isTvAlive(() => {
  	remote.sendKey('KEY_MENU');
});
}else if(msg == 'mute') {
	
  	remote.sendKey('KEY_MUTE');

} else if(msg == 'up'){
	remote.isTvAlive(() => {
  	remote.sendKey('KEY_UP');
});
} else if(msg == 'down'){
	remote.isTvAlive(() => {
  	remote.sendKey('KEY_DOWN');
});
} else if(msg == 'power') {
  remote.isTvAlive(() => {
    remote.sendKey('KEY_POWER');
});
}

  rn_bridge.channel.send(msg);
} );

// Inform react-native node is initialized.
rn_bridge.channel.send("The Samsung remote node script was deployed!");







