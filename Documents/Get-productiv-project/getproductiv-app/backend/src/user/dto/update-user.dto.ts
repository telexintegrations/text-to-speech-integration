import { IsString, IsEmail, IsOptional, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Doe',
    required: false,
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@example.com',
    required: false,
  })
  @IsEmail()
  @IsOptional()
  email?: string;

  @ApiProperty({
    description: 'The password of the user',
    example: 'password123',
    required: false,
    minLength: 6,
  })
  @IsString()
  @MinLength(6)
  @IsOptional()
  password?: string;

  @ApiProperty({
    description: 'The Google ID of the user',
    example: '123456789',
    required: false,
  })
  @IsString()
  @IsOptional()
  googleId?: string;

  @ApiProperty({
    description: 'The profile picture URL of the user',
    example: 'https://example.com/picture.jpg',
    required: false,
  })
  @IsString()
  @IsOptional()
  picture?: string;

  @ApiProperty({
    description: 'The reset password token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    required: false,
  })
  @IsString()
  @IsOptional()
  resetPasswordToken?: string | null;

  @ApiProperty({
    description: 'The reset password token expiration date',
    example: '2024-01-01T00:00:00.000Z',
    required: false,
  })
  @IsOptional()
  resetPasswordExpires?: Date | null;
} 