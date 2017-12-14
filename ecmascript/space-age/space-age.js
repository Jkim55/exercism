class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds
    }
    
    onEarth() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.earth)
    }

    onMercury() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.mercury)
    }

    onVenus() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.venus)
    }

    onMars() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.mars)
    }

    onJupiter() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.jupiter)
    }

    onSaturn() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.saturn)
    }

    onUranus() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.uranus)
    }

    onNeptune() {
        return this.calculateinEarthYears(terrestrialOrbitConversion.neptune)
    }

    calculateinEarthYears(orbitInEarthYears){
        return parseFloat(((this.seconds/31557600)/orbitInEarthYears).toFixed(2))
    }
}

const terrestrialOrbitConversion = {
    earth: 1,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
}

export default SpaceAge