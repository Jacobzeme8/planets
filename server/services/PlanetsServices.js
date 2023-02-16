import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"

class PlanetsService{
  async getPlanets() {
    const planets = await dbContext.Planets.find()
      .populate('galaxy', 'name')
    return planets
  }
  
  async getPlanetsByGalaxyId(galaxyId) {
    const galaxy = await dbContext.Galaxys.findById(galaxyId)
    if(!galaxy){throw new BadRequest('Bad galaxy id')}

    const planets = await dbContext.Planets.find({galaxyId})
      .populate('galaxy', 'name stars')
    return planets
  }

  async createPlanet(planetData, galaxyId) {
    const galaxy = await dbContext.Galaxys.findById(galaxyId)
    if(!galaxy){throw new BadRequest('Bad galaxy id')}
  
    
  
    const planet = await dbContext.Planets.create(planetData)
    planet.galaxyId = galaxyId || null
    await planet.save()
    return planet
  }

}


export const planetsService = new PlanetsService()