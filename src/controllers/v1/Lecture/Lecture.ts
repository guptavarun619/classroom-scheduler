import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SuccessResponse } from "../../../core/ApiResponse";
import LectureRepo from "../../../database/repository/Lecture";
import asyncHandler from "../../../utils/asyncHandler";

export const getLectureById = asyncHandler(
	async (req: Request, res: Response, next: NextFunction) => {
		const lecture_id = req.params.lecture_id;
		const lRepo = getCustomRepository(LectureRepo);
		const lecture = await lRepo.getLectureById(lecture_id);
		new SuccessResponse("success", lecture).send(res);
	}
);