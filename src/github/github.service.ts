import { HttpService, Injectable } from '@nestjs/common';
import { UserEventQuery } from './dto/query.dto';

@Injectable()
export class GithubService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    async getGithubUserEvents(query: UserEventQuery) {
        let { githubAccessToken } = query;
        const opts = { headers: { accept: 'application/vnd.github.v3+json', Authorization: `token ${githubAccessToken}` } };
        const user = await this.httpService
            .get(`https://api.github.com/user`, opts)
            .toPromise();
        const metaData = await this.httpService
            .get(`https://api.github.com/users/${user.data.login}/events`, opts)
            .toPromise();
        return metaData.data;
    }
}
