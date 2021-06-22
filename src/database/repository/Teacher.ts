import { EntityRepository, Repository } from "typeorm";
import Teacher from "../model/Teacher";

@EntityRepository(Teacher)
export default class TeacherRepo extends Repository<Teacher> {
	getTeachers(): Promise<Teacher[]> {
		return this.find();
	}

	getTeacherById(teacher_id: string): Promise<Teacher | undefined> {
		return this.findOne({ where: { teacher_id: teacher_id } });
	}
}
