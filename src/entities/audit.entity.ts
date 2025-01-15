import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
  } from 'typeorm';
  import { User } from './user.entitiy';
  import { File } from './file.entitiy';
  
  @Entity('audit_logs')
  export class AuditLog {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User)
    user: User;
  
    @Column({ type: 'varchar', length: 255 })
    action: string;
  
    @ManyToOne(() => File, { nullable: true })
    file: File;
  
    @CreateDateColumn()
    timestamp: Date;
  }
  