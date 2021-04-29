namespace SpriteKind {
    export const Gas = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 5 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 4 2 4 . . . . . . 
        . . . . . . . 4 2 4 . . . . . . 
        `, mySprite, 0, -200)
    music.pewPew.play()
    projectile.startEffect(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
    music.buzzer.play()
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    music.smallCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
let myEnemy: Sprite = null
let myFuel: Sprite = null
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
music.beamUp.play()
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 4 . . . . . . . 
    . . . . 5 . . f f . . 5 . . . . 
    . . . . 8 . . e 4 . . 8 . . . . 
    . 5 . . 8 . e e 5 2 . 8 . . 5 . 
    . 8 . . 8 . e 4 5 2 . 8 . . 8 . 
    . 8 . . 8 c c c 2 2 2 8 . . 8 . 
    . 8 . . e e 4 4 4 5 2 2 . . 8 . 
    . 8 e f f f c c 2 2 f f 2 2 8 . 
    . e e e e 2 2 4 4 4 4 5 4 2 2 . 
    e e e . . . 2 2 4 4 . . . 4 2 2 
    e e . . . . . . . . . . . . 2 2 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, -25, 0)
let enemySpawnTime = 3000
game.onUpdateInterval(5000, function () {
    myFuel = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 6 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . 6 8 7 7 8 8 6 6 6 6 6 6 6 6 . 
        . . 6 8 7 7 8 6 6 6 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 6 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    myFuel.x = randint(5, 155)
    myFuel.setKind(SpriteKind.Gas)
})
game.onUpdateInterval(enemySpawnTime, function () {
    myEnemy = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 4 . . . . . . . . . . . . 4 . 
        . 4 . . . . . . . . . . . . 4 . 
        . 4 4 4 . . . . . . . . 4 4 4 . 
        . . . 4 . . . . . . . . 4 . . . 
        . . . . 5 a a a a a 5 5 . . . . 
        4 4 4 . 5 a c c c c c 5 . 4 4 4 
        . . 4 . 5 a c 5 5 a c 5 . 4 . . 
        . . . 4 5 a c 4 f a c 5 4 . . . 
        . . . . 5 a c a a a c 5 . . . . 
        . . . . 5 5 c c c c c 5 . . . . 
        4 . . 4 . . 2 . 2 . 2 . 4 . . 4 
        . 4 4 4 . . . . . . . . 4 4 4 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 50)
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
    enemySpawnTime += -1
})
game.onUpdateInterval(300, function () {
    statusbar.value += -1
})
