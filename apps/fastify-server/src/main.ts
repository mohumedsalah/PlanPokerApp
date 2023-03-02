import { NestFactory } from '@nestjs/core';
import {
	FastifyAdapter,
	NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { ServerOptions } from 'http';
import pino from 'pino';
import pretty from 'pino-pretty';
import { AppModule } from './app.module';

export class SocketAdapter extends IoAdapter {
	createIOServer(
		port: number,
		options?: ServerOptions & {
			namespace?: string;
			server?: any;
		}
	) {
		const server = super.createIOServer(port, {
			...options,
			cors: {
				origin: 'http://localhost:3000', // TODO add the link for front end side
				methods: ['GET', 'POST'],
			},
		});
		return server;
	}
}
async function bootstrap() {
	const app = await NestFactory.create<NestFastifyApplication>(
		AppModule,
		new FastifyAdapter({
			logger: pino(pretty()), // remove in prod
			/* https://github.com/pinojs/pino-pretty#integration */
			ignoreTrailingSlash: true,
			caseSensitive: false,
		}),
		{
			logger: ['error', 'warn'],
		}
	);

	/**
	 * Unfortunately NestJs prod build with fastify, works on local machine,
	 * but is not working on docker...
	 *
	 * Soln link -
	 * https://stackoverflow.com/questions/66086427/docker-container-with-nodejs-appnestjs-is-not-accessible-from-both-other-conta
	 *
	 * To use the express version -
	 * const app = await NestFactory.create(AppModule);
	 */
	app.enableCors({
		origin: 'http://localhost:3000', // TODO add the link for front end side
	});
	app.useWebSocketAdapter(new SocketAdapter(app));
	await app.listen(4000, '0.0.0.0');
}

bootstrap();
