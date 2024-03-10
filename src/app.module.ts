import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './services/user.service';
import { User } from './entities/user.entity';
import { UsersController } from './controller/users/users.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username:  'root',
        password: 'root',
        database: 'postgres',
        autoLoadEntities: true,
        synchronize: true,
        
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [
    AppController,
    UsersController
    
  ],
  providers: [
    AppService,
    UserService,
    
  ],
})
export class AppModule {}

//Configuration ORM, and database
