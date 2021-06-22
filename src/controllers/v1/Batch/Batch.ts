import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SuccessResponse } from "../../../core/ApiResponse";
import BatchRepo from "../../../database/repository/Batch";
import asyncHandler from "../../../utils/asyncHandler";

export const getBatchById = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const batch_id = req.params.batch_id;
		const bRepo = getCustomRepository(BatchRepo);
		const batch = await bRepo.getBatchById(batch_id);
		new SuccessResponse("success", batch).send(res);
	}
);

// In the above manner you can define your own controllers
