const player = require('play-sound')();

player.play('E:\\Java2024\\firework\\fireworks.mp3', (err) => {
    if (err) {
        console.error('Lỗi khi phát file MP3:', err);
    } else {
        console.log('Đang phát file MP3!');
    }
});
