import { Router, Request, Response } from "express";
import meteo from "./meteo";
const routes = Router();
routes.use("/meteo", meteo);
//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );
export default routes;