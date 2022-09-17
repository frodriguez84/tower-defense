class PlacementTile {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position
        this.size = 64
        this.color = 'rgba(255, 255, 255, 0.15)'
        this.occupied = false
    }
    draw() {
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.size, this.size)
    }
    update(mouse) {
        this.draw()

        if (mouse.x > this.position.x &&
            mouse.x < this.position.x + this.size &&
            mouse.y > this.position.y &&
            mouse.y < this.position.y + this.size) {

            this.color = 'rgba(255, 255, 255, 0.55)'
        } else this.color = 'rgba(255, 255, 255, 0.15)'

    }
}

class Enemy {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position
        this.width = 100
        this.height = 100
        this.waypointIndex = 0
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()

        const waypoint = waypoints[this.waypointIndex]
        const yDistance = waypoint.y - this.center.y
        const xDistance = waypoint.x - this.center.x

        const angle = Math.atan2(yDistance, xDistance)
        this.position.x += Math.cos(angle)
        this.position.y += Math.sin(angle)
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        if (
            Math.round(this.center.x) === Math.round(waypoint.x) &&
            Math.round(this.center.y) === Math.round(waypoint.y) &&
            this.waypointIndex < waypoints.length - 1) {
            this.waypointIndex++
        }
    }
}

class Projectile {
    constructor({position = {x: 0, y: 0}}){
        this.position = position
        this.velocity = {
            x: 0,
            y: 0
        }
    }
    draw(){
        c.beginPath()
        c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2)
        c.fillStyle = 'orange'
    }
}

class Building {
    constructor({position = {x:0, y:0}}) {
        this.position = position
        this.width = 64 * 2
    }
 
    draw() {
        c.fillStyle = 'blue'
        c.fillRect(this.position.x, this.position.y, this.width, 64)
    }
}
