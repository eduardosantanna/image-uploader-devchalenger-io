import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from './image/image.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ImageModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
