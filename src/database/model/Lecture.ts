import {
	Column,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn
} from "typeorm";
import Teacher from "./Teacher";
import Batch from "./Batch";

@Entity()
class Lecutre {
	@PrimaryGeneratedColumn()
	lecture_id: number;

	@Column()
	topic: string;

	@Column("timestamp")
	start_date_time: Date; // gives whole date and time

	@Column("timestamp")
	end_date_time: Date;

	@ManyToOne(() => Teacher, (teacher) => teacher.lecture)
	teacher: Teacher;

	@ManyToOne(() => Batch, (batch) => batch.lecture)
	batch: Batch;
}

export default Lecutre;
