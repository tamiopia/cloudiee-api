import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany
  } from 'typeorm';
  import { User } from './user.entitiy';
  
import { File } from './file.entitiy';
import { Folder } from './folder.entity';
  
  @Entity('galleries')
export class Gallery {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  galleryName: string;

  @Column({ type: 'text', nullable: true })
  description: string; // Optional description for the gallery

  @Column({ type: 'enum', enum: ['image', 'video'], default: 'image' })
  type: 'image' | 'video'; // Type of gallery

  @Column({ type: 'boolean', default: true })
  isPublic: boolean; // Public or private gallery

  @Column({ type: 'varchar', nullable: true })
  password: string; // Password for private galleries (nullable)

  @Column({ type: 'timestamp', nullable: true })
  expiresAt: Date; // Expiration date for unregistered users or time-limited galleries

  @ManyToOne(() => User, (user) => user.galleries, { nullable: true })
  user: User; // Nullable for public or unregistered users

  @ManyToOne(() => Folder, (folder) => folder.galleries, { nullable: true })
  folder: Folder; // Gallery belongs to a folder

  @OneToMany(() => File, (file) => file.gallery)
  files: File[]; // Files (images/videos) belonging to the gallery

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

  