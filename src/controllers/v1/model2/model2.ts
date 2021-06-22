import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SuccessResponse } from "../../../core/ApiResponse";
import Model1Repo from "../../../database/repository/Model2";
import asyncHandler from "../../../utils/asyncHandler";

export const getModelByUuid = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const uuid = req.params.uuid;
		const m1Repo = getCustomRepository(Model1Repo);
		const model1 = m1Repo.getModelByUuid(uuid);
		new SuccessResponse("success", model1).send(res);
	}
);

// In the above manner you can define your own controllers
