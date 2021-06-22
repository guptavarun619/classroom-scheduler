import { EntityRepository, Repository } from "typeorm";
import Batch from "../model/Batch";

@EntityRepository(Batch)
export default class Model1Repo extends Repository<Batch> {
	getBatches(): Promise<Batch[]> {
		return this.find();
	}

	getBatchById(batch_id: string): Promise<Batch | undefined> {
		return this.findOne({ where: { batch_id: batch_id } });
	}
}
