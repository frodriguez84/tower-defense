class Projectile {
    constructor({ position = { x: 0, y: 0 }, enemy }) {
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
        this.enemy = enemy
        this.radius = 10
        this.power = 5
    }
    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'orange'
        c.fill()
    }
    update() {
        this.draw()
        this.shootProjectile()
    }

    shootProjectile() {
        const angle = Math.atan2(
            this.enemy.center.y - this.position.y,
            this.enemy.center.x - this.position.x
        )

        this.velocity.x = Math.cos(angle) * this.power
        this.velocity.y = Math.sin(angle) * this.power

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}