import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	OneToMany,
	CreateDateColumn,
	UpdateDateColumn,
  } from 'typeorm';
  import { File } from './file.entitiy';
  import { Folder } from './folder.entity';
  import { Subscription } from './sunscription.entity';
import { Gallery } from './Gallery.entity';
  
  @Entity('users')
  export class User {
	@PrimaryGeneratedColumn()
	id: number;
  
	@Column({ type: 'varchar', length: 100, unique: true })
	username: string;
  
	@Column({ type: 'varchar', length: 255, unique: true })
	email: string;
  
	@Column({ type: 'varchar', length: 255 })
	password: string;
  
	@Column({ type: 'enum', enum: ['free', 'premium', 'pro'], default: 'free' })
	subscriptionPlan: 'free' | 'premium' | 'pro';
  
	@Column({ type: 'int', default: 500 }) // Default storage in MB for free users
	storageLimit: number;
  
	@CreateDateColumn()
	createdAt: Date;
  
	@UpdateDateColumn()
	updatedAt: Date;
  
	@OneToMany(() => File, (file) => file.user)
	files: File[];
  
	@OneToMany(() => Folder, (folder) => folder.user)
	folders: Folder[];

	@OneToMany(() => Gallery, (gallery) => gallery.folder)
  galleries: Gallery[]; 
  
	@OneToMany(() => Subscription, (subscription) => subscription.user)
	subscriptions: Subscription[];
  }
  