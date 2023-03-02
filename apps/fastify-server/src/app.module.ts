import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HomeModule } from './app/home/home.module';
import { PokerGateway } from './app/poker/poker.gateway';

@Module({
	imports: [
		HomeModule,
		ConfigModule.forRoot({
			cache: true,
		}),
	],
	controllers: [],
	providers: [PokerGateway],
})
export class AppModule {}
