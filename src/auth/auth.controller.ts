import { Controller, Get, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response, Request } from 'express'

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Get('/github')
    async githubAuthenticate(@Res() res: Response) {
        return this.authService.githubAuthenticate(res);
    }

    @Get('github/login/return')
    async githubAuthLogin(@Req() req: Request, @Res() res: Response) {
        return await this.authService.githubAuthLogin(req);
    }
}
