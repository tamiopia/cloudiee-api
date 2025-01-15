import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entitiy';
import { Folder } from './folder.entity';
import { Gallery } from './Gallery.entity';

@Entity('files')
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  fileName: string;

  @Column({ type: 'varchar', length: 255 })
  customName: string; 

  @Column({ type: 'text', nullable: true })
  description: string; 

  @Column({ type: 'varchar', length: 255 })
  filePath: string;

  @Column({ type: 'varchar', length: 50 })
  fileType: string; 

  @Column({ type: 'int' })
  fileSize: number; 

  @Column({ type: 'boolean', default: true })
  isPublic: boolean; 

  @Column({ type: 'varchar', nullable: true })
  password: string; 

  @Column({ type: 'boolean', default: true })
  allowDownload: boolean; 

  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date; 

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.files, { nullable: true })
  user: User; // Nullable for unregistered users

  @ManyToOne(() => Folder, (folder) => folder.files, { nullable: true })
  folder: Folder; // File may belong to a folder

  @ManyToOne(() => Gallery, (gallery) => gallery.files, { nullable: true })
  gallery: Gallery; // File may belong to a gallery
}
