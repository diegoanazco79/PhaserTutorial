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
    this.load.atlas('tomato_atlas', './assets/evil_tomato.png','./assets/evil_tomato.json')
    this.load.json('evil_tomato_anim', './assets/evil_tomato_anim.json')
}

function create(){
    console.log("Create")
    this.tomato = this.add.sprite(100,100,'tomato_atlas')
    this.dataAnim = this.cache.json.get('evil_tomato_anim')

    this.anims.fromJSON(this.dataAnim)

    this.tomato.anims.play('tomato_atlas_walk')
}