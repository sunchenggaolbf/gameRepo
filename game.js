const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('platform', 'assets/platform.png');
  this.load.image('player', './assets/player.png');
}

function create() {
  this.platforms = this.physics.add.staticGroup();
  this.platforms.create(400, 568, 'platform').setScale(0.2).refreshBody();
  this.platforms.create(600, 400, 'platform').setScale(0.1).refreshBody();
  this.platforms.create(50, 250, 'platform').setScale(0.1).refreshBody();
  this.platforms.create(750, 220, 'platform').setScale(0.2).refreshBody();

  this.player = this.physics.add.sprite(100, 300, 'player');
  this.player.setScale(0.2).refreshBody();
  this.player.setBounce(0.2);
  this.player.setCollideWorldBounds(true);


  this.physics.add.collider(this.player, this.platforms);

  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  if (this.cursors.left.isDown) {
    this.player.setVelocityX(-160);
  } else if (this.cursors.right.isDown) {
    this.player.setVelocityX(160);
  } else {
    this.player.setVelocityX(0);
  }

  if (this.cursors.up.isDown) {
    this.player.setVelocityY(-330);
  }
}