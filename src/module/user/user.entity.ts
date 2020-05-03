import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
//decorador para que esta clase se convierta en una tabla
@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  in: number;

  @Column({type: 'varchar', unique: true, length: 25, nullable: false })
  username: string;

  @Column({type: 'varchar', nullable: false})
  email: string;

  @Column({type: 'varchar', nullable: false})
  password: string;
  
  @Column({type: 'varchar', default: 'ACTIVE' ,length: 8})
  status: string;
  
  @Column({type: 'timestamp', name: 'created_at'})
  createdAt: Date;

  @Column({type: 'timestamp', name: 'updated_at'})
  updatedAt: Date;
}