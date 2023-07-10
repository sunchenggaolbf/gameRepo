export function createStaticPlatforms(scene) {
    const platforms = scene.physics.add.staticGroup();
  
    platforms.create(400, 568, 'platform').setScale(0.2).refreshBody();
    platforms.create(600, 400, 'platform').setScale(0.1).refreshBody();
    platforms.create(50, 250, 'platform').setScale(0.1).refreshBody();
    platforms.create(750, 220, 'platform').setScale(0.2).refreshBody();
  
    return platforms;
  }