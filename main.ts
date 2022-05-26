namespace SpriteKind {
    export const Gas = SpriteKind.create()
    export const shield = SpriteKind.create()
    export const FriendPickup = SpriteKind.create()
    export const slowRay = SpriteKind.create()
}
function SpawnBaddies () {
    enemies = randint(0, 3)
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
        myEnemy.setKind(SpriteKind.Enemy)
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
        myEnemy.setKind(SpriteKind.Enemy)
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
        myEnemy.setKind(SpriteKind.Enemy)
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
        myEnemy.setKind(SpriteKind.Enemy)
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
        myEnemy.setKind(SpriteKind.Enemy)
    }
    myEnemy.x = randint(5, 155)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 4 2 4 . . . . . . . 
        . . . . . . 3 2 3 . . . . . . . 
        . . . . . . 3 5 3 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        `, mySprite, 0, -200)
    music.pewPew.play()
    projectile.startEffect(effects.fire, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . 2 . . . . . . . . 
        . . . . . . 4 2 4 . . . . . . . 
        . . . . . . 3 2 3 . . . . . . . 
        . . . . . . 3 5 3 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        `, mySprite, 0, -200)
    music.pewPew.play()
    projectile.startEffect(effects.fire, 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.FriendPickup, function (sprite, otherSprite) {
    FriendPickupGot = 1
    otherSprite.destroy()
    music.buzzer.play()
})
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
    music.buzzer.play()
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
    }
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.slowRay, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, 2)
    sprite.destroy()
    info.changeScoreBy(3)
})
statusbars.onZero(StatusBarKind.Energy, function (status) {
    music.bigCrash.play()
    game.splash("YOU RAN OUT OF GAS!")
    game.over(false, effects.splatter)
})
sprites.onOverlap(SpriteKind.shield, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy(effects.fire, 100)
    friendEvent = 0
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    sprite.destroy()
    fistCount += 1
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1 * damageMultiplyer)
    otherSprite.destroy()
    music.zapped.play()
})
let myFuel: Sprite = null
let friendShot: Sprite = null
let FriendPickup: Sprite = null
let friend: Sprite = null
let lifeHeart: Sprite = null
let projectile: Sprite = null
let myEnemy: Sprite = null
let enemies = 0
let FriendPickupGot = 0
let friendEvent = 0
let damageMultiplyer = 0
let fistCount = 0
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
info.setLife(1)
music.beamUp.play()
game.setGameOverSound(false, music.bigCrash)
info.setScore(0)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff5ffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffff
    fffffffffefffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffff2ffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffcfffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4fffffffffffffffffffffffffff2fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5ffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffff5fffffffffffffffffffffffff5ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffff
    fffffffffffff4ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(0, 5)
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
damageMultiplyer = 1
friendEvent = 0
FriendPickupGot = 0
let friendAngle = 0
game.onUpdate(function () {
    if (FriendPickupGot == 1 && friendEvent == 0) {
        friend = sprites.create(assets.image`stealth0`, SpriteKind.shield)
        FriendPickupGot = 0
        friendEvent = 1
    }
    if (friendEvent == 1) {
        spriteutils.placeAngleFrom(
        friend,
        friendAngle,
        24,
        mySprite
        )
        friendAngle += 0.05
    }
})
game.onUpdateInterval(210, function () {
    statusbar.value += -1
})
game.onUpdateInterval(2000, function () {
    music.spooky.loop()
})
game.onUpdateInterval(2000, function () {
    if (enemySpawnTime > 30) {
        enemySpawnTime += -30
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
game.onUpdateInterval(13000, function () {
    if (game.runtime() >= 3000) {
        FriendPickup = sprites.createProjectileFromSide(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . 4 4 4 5 5 4 4 4 . . . . 
            . . . 3 3 3 3 4 4 4 4 4 4 . . . 
            . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
            . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
            . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
            . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
            . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
            . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
            . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
            . . . 4 2 2 2 2 2 2 2 2 4 . . . 
            . . . . 4 4 2 2 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, 0, 99)
        FriendPickup.x = randint(20, 140)
        FriendPickup.setKind(SpriteKind.FriendPickup)
    }
})
forever(function () {
    if (lifeSpawnTime <= game.runtime()) {
        SpawnHeart()
    }
    pause(lifeSpawnTime)
})
forever(function () {
    if (enemySpawnTime <= game.runtime()) {
        SpawnBaddies()
    }
    pause(enemySpawnTime)
})
game.onUpdateInterval(500, function () {
    if (friendEvent == 1) {
        friendShot = sprites.createProjectileFromSprite(img`
            . . 5 . 
            . 5 5 . 
            . 5 3 . 
            5 5 5 5 
            . 3 5 3 
            . 5 5 . 
            . 5 . . 
            `, friend, 0, -200)
        friendShot.setKind(SpriteKind.slowRay)
        friendShot = sprites.createProjectileFromSprite(img`
            . . 5 . 
            . 5 5 . 
            . 5 3 . 
            5 5 5 5 
            . 3 5 3 
            . 5 5 . 
            . 5 . . 
            `, friend, 0, 200)
        friendShot.setKind(SpriteKind.slowRay)
    }
})
game.onUpdateInterval(10000, function () {
    if (game.runtime() >= 3000) {
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
    }
})
