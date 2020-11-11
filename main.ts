sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (projectile.overlapsWith(mars)) {
        game.over(true)
    }
    if (projectile.overlapsWith(non_mars)) {
        game.over(false)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (angle < 90) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, terre, Math.map(angle, 0, 180, 20, -20), Math.map(angle, 0, 90, 0, -20))
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 3 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, terre, Math.map(angle, 0, 180, 20, -20), Math.map(angle, 90, 180, -20, 0))
    }
})
let projectile: Sprite = null
let angle = 0
let mars: Sprite = null
let terre: Sprite = null
let non_mars: Sprite = null
non_mars = sprites.create(img`
    f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
non_mars.setPosition(0, 0)
terre = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ...........8888f8888............
    ..........88888888888...........
    .........8888888888888..........
    ........888888888888888.........
    .......88888888888888888........
    .......88888888888888888........
    .......88888888888888888........
    .......88888888888888888........
    .......f8888888f8888888f........
    .......88888888888888888........
    .......88888888888888888........
    .......88888888888888888........
    .......88888888888888888........
    ........888888888888888.........
    .........8888888888888..........
    ..........88888888888...........
    ...........888888888............
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
terre.setPosition(randint(10, 160), 108)
mars = sprites.create(img`
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mars.setPosition(randint(10, 150), 10)
game.splash("Donner l'angle de la fusée pour aller de la terre sur mars")
angle = game.askForNumber("")
