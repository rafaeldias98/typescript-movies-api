import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum MovieStatus {
  WillReleased = 'WILL_RELEASED',
  Released = 'RELEASED',
  Inactive = 'INACTIVE',
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  public id: number;

  @Index({ unique: true })
  @Column({
    length: 100,
  })
  public name: string;

  @Column({
    length: 255,
  })
  public description: string;

  @Column('enum', {
    enum: ['WILL_RELEASED', 'RELEASED', 'INACTIVE'],
  })
  public status: string;

  @Column({
    length: 100,
    name: 'author_name',
  })
  public authorName: string;

  @CreateDateColumn({
    name: 'created_at',
  })
  public createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  public updatedAt: Date;

  public isReleased(): boolean {
    return this.status.toUpperCase() === MovieStatus.Released;
  }
}
