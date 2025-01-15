import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  import { User } from './user.entitiy';
  
  @Entity('subscriptions')
  export class Subscription {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, (user) => user.subscriptions)
    user: User;
  
    @Column({ type: 'enum', enum: ['free', 'premium', 'pro'], default: 'free' })
    planName: 'free' | 'premium' | 'pro';
  
    @Column({ type: 'int' })
    storageLimit: number;
  
    @Column({ type: 'int' })
    maxFileSize: number;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @Column({ type: 'timestamp', nullable: true })
    expiresAt: Date;
  }
  