const config = {
    width: 300,
    height: 200,
    parent: 'container',
    pixelArt: true,
    scene: {
        preload,
        create
    }
}

new Phaser.Game(config)

function preload(){
    console.log("Preload")
    this.load.atlas('evil_tomato', './assets/evil_tomato.png','./assets/evil_tomato.json')
}

function create(){
    console.log("Create")
    this.tomato = this.add.sprite(100,100,'evil_tomato')

    this.anims.create({
        key: 'tomato_walk',
        frames: this.anims.generateFrameNames('evil_tomato', {
            prefix: 'evil_tomato_',
            suffix: '.png',
            start: 1,
            end: 8
        }),
        repeat: -1,
        frameRate: 10
    })

    this.tomato.anims.play('tomato_walk')
}