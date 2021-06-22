import { Column, Entity, JoinTable, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Lecutre from "./Lecture";

@Entity("batches")
class Batch {
	@PrimaryGeneratedColumn()
	batch_id: number; 

	@Column()
	size: number;

	@Column({ unique: true })
	batch_name: string;

	@OneToMany(() => Lecutre, lecutre => lecutre.batch)
	lecture: Lecutre[];
}

export default Batch;
