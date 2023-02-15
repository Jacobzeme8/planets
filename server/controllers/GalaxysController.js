import { galaxysService } from "../services/GalaxysService";
import BaseController from "../utils/BaseController";

export class GalaxysController extends BaseController{

  constructor(){
    super('/api/galaxys')
    this.router
      .get('', this.getGalaxys )
      .post('', this.createGalaxy)
  }


  async getGalaxys(req, res, next){
    try {
      const galaxys = await galaxysService.getGalaxys()
      return res.send(galaxys)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next){
    try {
      const newGalaxy = req.body
      const galaxy = await galaxysService.createGalaxy(newGalaxy)
      return res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}