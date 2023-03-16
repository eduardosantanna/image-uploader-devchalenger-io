import { Controller, Get, Body, Param, Query } from '@nestjs/common';
import { FileUpload } from './dto/file-upload.dto';
import { ImageService } from './image.service';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}

  @Get()
  uploadImageSigned(@Query() fileParams: FileUpload) {
    return this.imageService.uploadImageSiged(fileParams);
  }

  @Get(':fileName')
  imageUrl(@Param('fileName') fileName: string) {
    return this.imageService.getImageUrl(fileName);
  }
}
