import { EntityRepository, Repository } from "typeorm";
import Model2 from "../model/Model2";

@EntityRepository(Model2)
export default class Model1Repo extends Repository<Model2> {
	getModels(): Promise<Model2[]> {
		return this.find();
	}

	getModelByUuid(uuid: string): Promise<Model2 | undefined> {
		return this.findOne({ where: { uuid: uuid } });
	}
}
