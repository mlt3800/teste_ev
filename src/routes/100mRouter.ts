import express from "express"
import { CemMDatabase } from "../data/100mRasosDatabase"
import { CemMBusiness } from "../Business/100mRasosBusiness"
import { IdGenerator } from "../services/IdGenerator"
import { CemMcontroller } from "../controller/100mRasosController"
export const cemMRouter = express.Router()


const cemMDatabase = new CemMDatabase()
const cemMBusiness = new CemMBusiness(cemMDatabase,new IdGenerator())
const cemMController = new CemMcontroller(cemMBusiness)

cemMRouter.post("/create", (req, res) => cemMController.createAthlete(req, res))
cemMRouter.get("/info/cem", (req, res) => cemMController.getAthleteBy(req, res))
cemMRouter.get("/all/cem", (req, res) => cemMController.getAllAthlete(req, res))
cemMRouter.get("/all/ranking", (req, res) => cemMController.ranking(req, res))
cemMRouter.post("/end",(req,res)=> cemMController.deleteModality(req, res))