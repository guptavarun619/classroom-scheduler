import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SuccessResponse } from "../../../core/ApiResponse";
import Model2Repo from "../../../database/repository/Model2";
import asyncHandler from "../../../utils/asyncHandler";

export const getModelByUuid = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const uuid = req.params.uuid;
		const m2Repo = getCustomRepository(Model2Repo);
		const model2 = m2Repo.getModelByUuid(uuid);
		new SuccessResponse("success", model2).send(res);
	}
);

// In the above manner you can define your own controllers
