import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap() {
  // interface user {
  //   name: string
  //   age: number
  // }
  //
  // const user = {
  //   name: 'Dexter',
  //   age: 21,
  // }

  const app = await NestFactory.create(AppModule)
  await app.listen(3000)
}
bootstrap()
