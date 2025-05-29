import { IsString, IsEmail, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    minLength: 2,
  })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    minLength: 6,
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;

  @ApiProperty({
    description: 'Google ID of the user',
    example: '123456789',
    required: false,
  })
  @IsString()
  @IsOptional()
  googleId?: string;

  @ApiProperty({
    description: 'Profile picture URL',
    example: 'https://example.com/picture.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  picture?: string;
} 