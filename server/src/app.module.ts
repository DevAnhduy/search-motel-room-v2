import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://devanhduy:Khang123@search-motel-room.ugl9z.mongodb.net/search-motel-test?retryWrites=true&w=majority`,
    ),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
