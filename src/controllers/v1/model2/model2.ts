import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SuccessResponse } from "../../../core/ApiResponse";
import TeacherRepo from "../../../database/repository/Teacher";
import asyncHandler from "../../../utils/asyncHandler";

export const getModelByUuid = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const uuid = req.params.uuid;
		const tRepo = getCustomRepository(TeacherRepo);
		const teacher = tRepo.getModelByTeacherId(uuid);
		new SuccessResponse("success", teacher).send(res);
	}
);

// In the above manner you can define your own controllers
