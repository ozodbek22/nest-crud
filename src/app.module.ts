import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    BookmarkModule,
    MongooseModule.forRoot(
      'mongodb://user:pass@127.0.0.1:37017',
    ),
    UsersModule,
  ],
})
export class AppModule {}
