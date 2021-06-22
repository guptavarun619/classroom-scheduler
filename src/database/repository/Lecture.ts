import { EntityRepository, Repository } from "typeorm";
import Lecture from "../model/Lecture";

@EntityRepository(Lecture)
export default class Model1Repo extends Repository<Lecture> {
	getModels(): Promise<Lecture[]> {
		return this.find();
	}

	getModelByBatchId(lecture_id: string): Promise<Lecture | undefined> {
		return this.findOne({ where: { lecture_id: lecture_id } });
	}
}
