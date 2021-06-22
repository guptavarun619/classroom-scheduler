import { EntityRepository, Repository } from "typeorm";
import Model1 from "../model/Model1";

@EntityRepository(Model1)
export default class Model1Repo extends Repository<Model1> {
	getModels(): Promise<Model1[]> {
		return this.find();
	}

	getModelByUuid(uuid: string): Promise<Model1 | undefined> {
		return this.findOne({ where: { uuid: uuid } });
	}
}
