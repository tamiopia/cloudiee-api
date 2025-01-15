import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entitiy';
import { File } from './file.entitiy';
import { Gallery } from './Gallery.entity';

@Entity('folders')
export class Folder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  folderName: string;

  @Column({ type: 'boolean', default: true })
  isPublic: boolean; // Public or private access

  @Column({ type: 'varchar', nullable: true })
  password: string; // Password for private folders (nullable)

  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date; // Expiration date for folders

  @ManyToOne(() => User, (user) => user.folders, { nullable: true })
  user: User; // Nullable for public or unregistered users

  @OneToMany(() => File, (file) => file.folder)
  files: File[]; // Files within the folder

  @OneToMany(() => Gallery, (gallery) => gallery.folder)
  galleries: Gallery[]; // Galleries within the folder

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
