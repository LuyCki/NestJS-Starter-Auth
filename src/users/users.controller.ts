import { Crud } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiUseTags } from '@nestjs/swagger';

@Crud({
    model: {
        type: User,
    },
})
@ApiUseTags('users')
@Controller('users')
export class UsersController {
    constructor(public service: UsersService) {}
}