import { Injectable } from '@nestjs/common';
import { storage } from 'firebase-admin';
import { Storage } from 'firebase-admin/storage';
import { randomUUID } from 'crypto';
import {
  HttpException,
  InternalServerErrorException,
} from '@nestjs/common/exceptions';
import { FileUpload } from './dto/file-upload.dto';

@Injectable()
export class ImageService {
  async uploadImageSiged(fileParams: FileUpload) {
    const fileName = randomUUID();
    const [url] = await storage()
      .bucket()
      .file(fileName)
      .getSignedUrl({
        version: 'v4',
        action: 'write',
        expires: Date.now() + 15 * 60 * 1000, // 15 minutes
        contentType: fileParams.contentType,
        extensionHeaders: { 'Content-Length': fileParams.fileSize },
      });

    return { url, fileName };
  }

  async getImageUrl(fileName: string) {
    const [chickFileExist] = await storage().bucket().file(fileName).exists();
    const url = storage().bucket().file(fileName).publicUrl();
    if (chickFileExist) return { url };
    throw new HttpException('File not found.', 404);
  }
}
