// import { Request } from 'express'
import { Controller, Delete, Get, Param, Query, Redirect } from '@nestjs/common'
import { AppService } from './app.service'
// import { UsersService } from './users/users.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Delete(':userId/memo/:memoId')
  deleteUserMemo(@Param() params: { [key: string]: string }) {
    return `userId: ${params.userId}, memoId: ${params.memoId}`
  }

  // @Get('redirect/docs')
  // @Redirect('https://docs.nestjs.com', 302)
  // getDocs(@Query('version') version) {
  //   if (version && version === '5') {
  //     return { url: 'https://docs.nestjs.com/v5/' }
  //   }
  // }

  // @Redirect('https://nestjs.com', 301)
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.appService.findOne(+id)
  // }

  // @Header('Custom', 'Test Header')
  // @Get(':id')
  // findOneWithHeader(@Param('id') id: string) {
  //   return this.usersService.findOne(+id)
  // }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello()
  // }

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
