import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SuccessResponse } from "../../../core/ApiResponse";
import TeacherRepo from "../../../database/repository/Teacher";
import asyncHandler from "../../../utils/asyncHandler";

export const getTeacherById = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const teacher_id = req.params.teacher_id;
		const tRepo = getCustomRepository(TeacherRepo);
		const teacher = await tRepo.getTeacherById(teacher_id);
		new SuccessResponse("success", teacher).send(res);
	}
);

