import { planetsService } from "../services/PlanetsServices";
import BaseController from "../utils/BaseController";

export class PlanetsController extends BaseController{

  constructor(){
    super('/api/planets')
    this.router
      .get('/:galaxyId', this.getPlanetsByGalaxyId)
      .get('', this.getPlanets)
      .post('/:galaxyId', this.createPlanet)
  }
  async getPlanets(req, res, next) {
    try {
      const planets = await planetsService.getPlanets()
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async getPlanetsByGalaxyId(req, res, next){
    try {
      const galaxyId = req.params.galaxyId
      const planets = await planetsService.getPlanetsByGalaxyId(galaxyId)
      return res.send(planets)
    } catch (error) {
      next(error)
    }
  }

  async createPlanet(req, res, next){
    try {
      const planetData = req.body
      const galaxyId = req.params.galaxyId
      const newPlanet = await planetsService.createPlanet(planetData, galaxyId)
      return res.send(newPlanet)
    } catch (error) {
      next(error)
    }
  }

}