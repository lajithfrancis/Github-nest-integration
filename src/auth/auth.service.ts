import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express'

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService
    ) { }

    async githubAuthenticate(res: Response) {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${this.configService.get<string>('github.clientId')}&scope=repo`);
    }
}
