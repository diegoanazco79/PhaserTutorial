const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    backgroundColor: '#392542',
    //El orden de las escenas importa mucho.
    scene: [SceneA, SceneB]
}

new Phaser.Game(config);

