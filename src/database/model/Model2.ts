import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import BaseModel from "./BaseModel";

@Entity("secondModels")
class Model2 extends BaseModel {
	@Column()
	c1: string; // define any type here;

	@Column({ unique: true })
	c2: string;
}

export default Model2;
