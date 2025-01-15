import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity('google_ads_revenue')
  export class GoogleAdsRevenue {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ type: 'int', default: 0 })
    adImpressions: number;
  
    @Column({ type: 'int', default: 0 })
    adClicks: number;
  
    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
    earnings: number;
  
    @Column({ type: 'date' })
    recordDate: Date;
  
    @CreateDateColumn()
    createdAt: Date;
  }
  