class Bootloader extends Phaser.Scene {
    constructor () {
        super ({key: "Bootloader"})
    }
    preload(){
        this.load.on("complete", () => {
            this.scene.start("Scene_play") //Llamamos a la escena que queremos.
        })

        this.load.image("ball", "./assets/ball.png")
        this.load.image("izquierda", "./assets/left_pallete.png")
        this.load.image("derecha", "./assets/right_pallete.png")
        this.load.image("separador", "./assets/separator.png")
        
    }
    
}

export default Bootloader
//Bootloader sirve para cargar todo lo necesario