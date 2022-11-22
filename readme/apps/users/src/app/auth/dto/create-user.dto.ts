import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @ApiProperty({                                 // описание createuserdto
    description: 'The uniq email of user',
    required: true,
    example: 'user@example.com'
  })
  @ApiProperty()
  public email: string;
  @ApiProperty()
  public firstName: string;
  @ApiProperty()
  public lastName: string;
  @ApiProperty()
  public password: string;
}
