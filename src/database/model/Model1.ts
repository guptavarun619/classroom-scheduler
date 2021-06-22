import { Column, Entity } from "typeorm";
import BaseModel from "./BaseModel";

@Entity("firstModels")
class Model1 extends BaseModel {
	@Column()
	c1: string; // define any type here;

	@Column({ unique: true })
	c2: string;
}

export default Model1;
