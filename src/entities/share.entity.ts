import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
  } from 'typeorm';
  import { File } from './file.entitiy';
  import { Folder } from './folder.entity';
  
  @Entity('shares')
  export class Share {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'varchar', length: 255 })
    shareLink: string;
  
    @Column({ type: 'boolean', default: true })
    isPublic: boolean;
  
    @Column({ type: 'varchar', nullable: true })
    password: string;
  
    @Column({ type: 'timestamp', nullable: true })
    expiresAt: Date;
  
    @ManyToOne(() => File, { nullable: true })
    file: File;
  
    @ManyToOne(() => Folder, { nullable: true })
    folder: Folder;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  