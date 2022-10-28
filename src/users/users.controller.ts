import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { CreateUserDto } from './dto/create-user.dto'
import { UserLoginDto } from './dto/user-login.dto'
import { VerifyEmailDto } from './dto/verify-email.dto'
import { UserInfo } from './UserInfo'

@Controller('users')
export class UsersController {
  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<void> {
    console.log(dto)
  }

  @Post('/email-verify')
  async verifyEmail(@Query() dto: VerifyEmailDto): Promise<string> {
    console.log(dto)
    return
  }

  @Post('/login')
  async login(@Body() dto: UserLoginDto): Promise<string> {
    console.log(dto)
    return
  }

  @Get('/:id')
  async getUserInfo(@Param('id') userId: string): Promise<UserInfo> {
    console.log(userId)
    return
  }
  // constructor(private readonly usersService: UsersService) {}
  //
  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.usersService.create(createUserDto)
  // }
  //
  // @Get()
  // findAll() {
  //   return this.usersService.findAll()
  // }
  //
  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id)
  // }
  //
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto)
  // }
  //
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id)
  // }
}
