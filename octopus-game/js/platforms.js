class Platforms {
    constructor(gameSize, gameScreen, platform, player) {
        this.gameSize = gameSize
        this.gameScreen = gameScreen
        this.playerReference = player
        this.position = { horizontalPos: platform.x, verticalPos: platform.y }
        this.platformSize = { width: platform.w, heigth: platform.h }
        this.speed = 8
        this.init()
    }
    init() {

        this.platformElement = document.createElement("figure")
        this.platformElement.style.backgroundImage = "url('./img/Pad_1_3.png')"
        this.platformElement.style.backgroundSize = "100%"

        this.platformElement.style.backgroundRepeat = "no-repeat"
        this.platformElement.style.position = "absolute"
        this.platformElement.style.width = `${this.platformSize.width}px`
        this.platformElement.style.height = `${this.platformSize.heigth}px`
        this.platformElement.style.top = `${this.position.verticalPos}px`
        this.platformElement.style.left = `${this.position.horizontalPos}px`

        this.gameScreen.appendChild(this.platformElement)
    }

    moveRight() {
        if (this.playerReference.playerPos.left >= this.gameSize.w * .3) {
            this.position.horizontalPos -= this.speed
            this.updatePos()
        }
    }
    moveLeft() {
        if (this.playerReference.playerPos.left <= this.gameSize.w * .2) {
            this.position.horizontalPos += this.speed
            this.updatePos()
        }
    }
    move(keys) {
        keys.RIGHT.pressed && this.moveRight()
        keys.LEFT.pressed && this.moveLeft()
    }
    updatePos() {
        this.platformElement.style.left = `${this.position.horizontalPos}px`
        this.platformElement.style.top = `${this.position.verticalPos}px`
    }


}

