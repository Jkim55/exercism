class SpaceAge {
    constructor(seconds) {
        this.seconds = seconds
    }
    
    onEarth() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.earth)
    }

    onMercury() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.mercury)
    }

    onVenus() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.venus)
    }

    onMars() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.mars)
    }

    onJupiter() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.jupiter)
    }

    onSaturn() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.saturn)
    }

    onUranus() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.uranus)
    }

    onNeptune() {
        return this.calculatePlanetSpecificYears(terraOrbitConversion.neptune)
    }

    calculatePlanetSpecificYears(orbitInTerraYears){
        return parseFloat(((this.seconds/31557600)/orbitInTerraYears).toFixed(2))
    }
}

const terraOrbitConversion = {
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


// ********************************************************** COOLER SOLUTION
// const terraOrbitConversion = {
// 	Earth: 1,
// 	Mercury: 0.2408467,
// 	Venus: 0.61519726,
// 	Mars: 1.8808158,
// 	Jupiter: 11.862615,
// 	Saturn: 29.447498,
// 	Uranus: 84.016846,
// 	Neptune: 164.79132
// }

// class SpaceAge {
// 	constructor(seconds) {
// 		this.seconds = seconds
//         this.calculatePlanetSpecificYears = orbitInTerraYears => parseFloat(((this.seconds/31557600)/orbitInTerraYears).toFixed(2))
// 		for(const planet in terraOrbitConversion) {
// 			return this[`on${planet}`] = () => this.calculatePlanetSpecificYears(terraOrbitConversion[planet])
// 		}
// 	}
// }

// export default SpaceAge