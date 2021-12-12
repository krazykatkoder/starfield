namespace SpriteKind {
    export const proc = SpriteKind.create()
}
let projectile: Sprite = null
forever(function () {
    projectile = sprites.createProjectileFromSide(img`
        2 . 2 . . 2 . 2 
        . 4 4 4 4 4 4 . 
        2 4 5 5 5 5 4 2 
        . 4 5 1 1 5 4 . 
        . 4 5 1 1 5 4 . 
        2 4 5 5 5 5 4 2 
        . 4 4 4 4 4 4 . 
        2 . 2 . . 2 . 2 
        `, randint(-25, -75), 0)
    projectile.y = randint(10, 120)
    pause(2000)
})
