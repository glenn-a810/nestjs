// import { Request } from 'express'
import { Controller, Get } from '@nestjs/common'
import { AppService } from './app.service'
// import { UsersService } from './users/users.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Header('Custom', 'Test Header')
  // @Get(':id')
  // findOneWithHeader(@Param('id') id: string) {
  //   return this.usersService.findOne(+id)
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  // @Get()
  // getHello(@Req() req: Request): string {
  //   console.log(req)
  //   return this.appService.getHello()
  // }

  // @Get('/he*lo')
  // getHello2(): string {
  //   return this.appService.getHello()
  // }
  // findAll(@Res() res) {
  //   const users = this.usersService.findAll()
  //
  //   return res.status(200).send(users)
  // }
}
