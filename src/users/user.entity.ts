import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ApiModelProperty } from '@nestjs/swagger';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: string;

  @ApiModelProperty({
    example: 'john@doe.com',
  })
  @Column({unique: true})
  email: string;

  @ApiModelProperty()
  @Column({unique: true})
  username: string;

  @ApiModelProperty({
    example: 'Gabriel',
  })
  @Column({nullable: true})
  displayName: string;

  @ApiModelProperty({
    example: 'Gabriel',
  })
  @Column()
  password!: string;
}