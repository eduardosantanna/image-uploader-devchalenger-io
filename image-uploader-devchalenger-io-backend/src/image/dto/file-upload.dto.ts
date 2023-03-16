import { Transform } from 'class-transformer';
import { IsNumber, IsNotEmpty, IsString, Matches, Max } from 'class-validator';

export class FileUpload {
  @IsString()
  @IsNotEmpty()
  @Matches(/image\/(png|jpeg|gif)$/)
  contentType: string;

  @Transform(({ value }) => Number(value))
  @IsNumber()
  @IsNotEmpty()
  @Max(5242880, { message: 'fileSize must not be greater than 5242880 bytes' })
  fileSize: number;
}
