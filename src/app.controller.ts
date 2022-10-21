import { Controller, Get, Req } from '@nestjs/common'
import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() req: Request): string {
    console.log(req)
    return this.appService.getHello()
  }

  // @Get('/he*lo')
  // getHello2(): string {
  //   return this.appService.getHello()
  // }
}
