import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const globalPrefix = 'api';
  const PORT = process.env.PORT || 3001;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  await app.listen(PORT, () => {
    console.log(
      `App listening at port http://localhost:${PORT}/${globalPrefix}`,
    );
  });
}
bootstrap();
