import { Controller, Get, Param, Query } from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { FileUpload } from './dto/file-upload.dto';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  uploadImageSigned(@Query() fileParams: FileUpload) {
    try {
      return this.imageService.uploadImageSiged(fileParams);
    } catch (error) {
      throw new HttpException(
        'Failed to generate the URL for upload.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':fileName')
  imageUrl(@Param('fileName') fileName: string) {
    try {
      return this.imageService.getImageUrl(fileName);
    } catch (error) {
      throw new HttpException(
        'Failed to get image URL',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
