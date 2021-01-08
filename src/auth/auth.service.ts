import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response, Request } from 'express'

@Injectable()
export class AuthService {
    constructor(
        private readonly configService: ConfigService,
        private readonly httpService: HttpService
    ) { }

    async githubAuthenticate(res: Response) {
        res.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo`);
    }

    async githubAuthLogin(req: Request) {
        const body = {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET,
            code: req.query.code
        };
        const opts = { headers: { accept: 'application/json' } };
        const metaData = await this.httpService
            .post(`https://github.com/login/oauth/access_token`, body, opts)
            .toPromise();
        return metaData.data;
    }
}
