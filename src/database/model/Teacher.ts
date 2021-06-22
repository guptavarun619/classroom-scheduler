import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Lecutre from "./Lecture";

@Entity("teachers")
class Teacher {
	@PrimaryGeneratedColumn()
	teacher_id : number;

	@Column()
	teacher_name: string;

	@Column({ unique: true })
	color: string;

	@OneToMany(() => Lecutre, lecutre => lecutre.teacher)
	lecture: Lecutre[];
}

export default Teacher;
