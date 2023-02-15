import { dbContext } from "../db/DbContext"

class GalaxysService{
  async createGalaxy(newGalaxy) {
    const galaxy = await dbContext.Galaxys.create(newGalaxy)
    return galaxy
  }
  async getGalaxys() {
    const galaxys = await dbContext.Galaxys.find()
    return galaxys
  }

}

export const galaxysService = new GalaxysService()