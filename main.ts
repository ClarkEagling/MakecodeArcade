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
function SpawnBaddie () {
    enemies = randint(0, 2)
    if (enemies == 0) {
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
            `, randint(-20, 20), randint(50, 70))
    } else if (enemies == 1) {
        myEnemy = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 . . . . . . 6 6 6 . . 
            . 6 . . . 6 . . . . 6 . . . 6 . 
            . 6 . . . 6 . . . . 6 . . . 6 . 
            . 6 6 6 . . . . . . . . 6 6 6 . 
            . . . 6 6 . a a a a . 6 6 . . . 
            . . . . 6 7 7 7 7 7 a 6 . . . . 
            6 6 6 . a 7 c c c c c a . 6 6 6 
            . . 6 . a 7 c 5 5 7 c a . 6 . . 
            . . . 6 a 7 c 6 f 7 c a 6 . . . 
            6 6 . . a 7 c 7 7 7 c a . . 6 6 
            6 . . . a a c c c c c a . . . 6 
            6 . . 6 . . 2 . 2 . 2 . 6 . . 6 
            . 6 6 6 . . . . . . . . 6 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-20, 20), randint(60, 90))
    } else if (enemies == 2) {
        myEnemy = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . a a a a . . . . . . 
            . . . . . 4 4 4 4 4 a . . . . . 
            7 7 7 . a 4 c c c c c a . 7 7 7 
            . . 7 . a 4 c f f 4 c a . 7 . . 
            7 7 . 7 a 4 c 2 f 4 c a 7 . 7 7 
            . . . . a 4 c 4 4 4 c a . . . . 
            . . . . a a c c c c c a . . . . 
            . . . 7 . . 2 . 2 . 2 . 7 . . . 
            . 7 7 7 . . . . . . . . 7 7 7 . 
            7 . . . . . . . . . . . . . . 7 
            7 . . . . . . . . . . . . . . 7 
            `, randint(-20, 20), randint(30, 50))
    } else {
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
            `, randint(-20, 20), randint(50, 70))
        myEnemy = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . 6 6 6 . . . . . . 6 6 6 . . 
            . 6 . . . 6 . . . . 6 . . . 6 . 
            . 6 . . . 6 . . . . 6 . . . 6 . 
            . 6 6 6 . . . . . . . . 6 6 6 . 
            . . . 6 6 . a a a a . 6 6 . . . 
            . . . . 6 7 7 7 7 7 a 6 . . . . 
            6 6 6 . a 7 c c c c c a . 6 6 6 
            . . 6 . a 7 c 5 5 7 c a . 6 . . 
            . . . 6 a 7 c 6 f 7 c a 6 . . . 
            6 6 . . a 7 c 7 7 7 c a . . 6 6 
            6 . . . a a c c c c c a . . . 6 
            6 . . 6 . . 2 . 2 . 2 . 6 . . 6 
            . 6 6 6 . . . . . . . . 6 6 6 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, randint(-20, 20), randint(50, 70))
    }
    myEnemy.x = randint(5, 155)
    myEnemy.setKind(SpriteKind.Enemy)
}
function SpawnHeart () {
    lifeHeart = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 2 2 2 . . . 2 2 2 . . . 
        . . . 2 2 2 2 2 . 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-20, 20), 100)
    lifeHeart.x = randint(5, 155)
    lifeHeart.setKind(SpriteKind.Food)
    lifeSpawnTime += 500
    info.changeScoreBy(5)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Gas, function (sprite, otherSprite) {
    statusbar.value = 100
    otherSprite.destroy()
    music.bigCrash.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    otherSprite.destroy()
    music.knock.play()
    info.changeScoreBy(20)
})
info.player1.onLifeZero(function () {
    music.bigCrash.play()
    if (fistCount == 0) {
        game.splash("PACIFIST RUN")
    } else if (fistCount >= 50) {
        game.splash("MASSIVE FIST RUN")
    }
    game.over(false, effects.splatter)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    music.bigCrash.play()
    game.splash("YOU RAN OUT OF GAS!")
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    music.smallCrash.play()
    info.changeScoreBy(5)
    fistCount += 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    music.zapped.play()
})
let myFuel: Sprite = null
let lifeHeart: Sprite = null
let myEnemy: Sprite = null
let enemies = 0
let projectile: Sprite = null
let fistCount = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
info.setLife(1)
music.beamUp.play()
game.setGameOverSound(false, music.bigCrash)
info.setScore(0)
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
statusbar.positionDirection(CollisionDirection.Top)
statusbar.setLabel("GAS")
let enemySpawnTime = 3000
let lifeSpawnTime = 25000
fistCount = 0
game.onUpdateInterval(210, function () {
    statusbar.value += -1
})
game.onUpdateInterval(2000, function () {
    music.spooky.loop()
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (lifeSpawnTime <= game.runtime()) {
        SpawnHeart()
    }
    pause(lifeSpawnTime)
})
forever(function () {
    if (enemySpawnTime <= game.runtime()) {
        SpawnBaddie()
    }
    pause(enemySpawnTime)
})
game.onUpdateInterval(3000, function () {
    if (enemySpawnTime > 30) {
        enemySpawnTime += -30
    }
})
game.onUpdateInterval(10000, function () {
    myFuel = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . 6 6 6 5 5 6 6 6 . . . . 
        . . . 7 7 7 7 6 6 6 6 6 6 . . . 
        . . 6 7 7 7 7 8 8 8 1 1 6 6 . . 
        . . 7 7 7 7 7 8 8 8 1 1 5 6 . . 
        . 6 7 7 7 7 8 8 8 8 8 5 5 6 6 . 
        . 6 7 7 7 8 8 8 6 5 6 6 5 6 6 . 
        . 6 6 7 7 8 8 6 6 5 6 6 6 6 6 . 
        . 6 8 7 7 8 8 5 5 5 5 5 6 6 6 . 
        . . 6 8 7 7 8 6 6 5 6 6 8 6 . . 
        . . 6 8 8 7 8 8 6 5 6 8 6 6 . . 
        . . . 6 8 8 8 8 8 8 8 8 6 . . . 
        . . . . 6 6 8 8 8 8 6 6 . . . . 
        . . . . . . 6 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 0, 60)
    myFuel.x = randint(20, 140)
    myFuel.setKind(SpriteKind.Gas)
})
