export function createPlayer(scene) {
    const player = scene.physics.add.sprite(100, 300, 'player');
    player.setScale(0.2).refreshBody();
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
  
    return player;
  }