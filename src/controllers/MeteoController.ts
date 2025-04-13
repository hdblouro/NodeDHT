import { Request, Response } from "express";
import query from "./db";
class MeteoController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { temp, hum } = req.body;
        const r: any = await query(
            "INSERT INTO meteo(temp,hum) VALUES ($1,$2) RETURNING id",
            [temp, hum]
        );
        return res.json(r);
    }
    public async list(_: Request, res: Response): Promise<Response> {
        const r: any = await query(
            "SELECT temp, hum, timestamp FROM meteo ORDER BY timestamp"
        );
        return res.json(r);
    }
}
export default new MeteoController();