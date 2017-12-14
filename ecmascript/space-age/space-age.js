class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds
    }
    
    onEarth() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.earth)
    }

    onMercury() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.mercury)
    }

    onVenus() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.venus)
    }

    onMars() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.mars)
    }

    onJupiter() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.jupiter)
    }

    onSaturn() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.saturn)
    }

    onUranus() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.uranus)
    }

    onNeptune() {
        return this.ageInPlanetCentricYears(terrestrialOrbitConversion.neptune)
    }

    ageInPlanetCentricYears(orbitInEarthYears){
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