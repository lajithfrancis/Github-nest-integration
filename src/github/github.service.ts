import { HttpService, Injectable } from '@nestjs/common';
import { UserEventQuery } from './dto/query.dto';

@Injectable()
export class GithubService {
    constructor(
        private readonly httpService: HttpService
    ) { }

    async getGithubUserEvents(query: UserEventQuery) {
        let { username, githubAccessToken } = query;
        const opts = { headers: { accept: 'application/vnd.github.v3+json', Authorization: `token ${githubAccessToken}` } };
        const metaData = await this.httpService
            .get(`https://api.github.com/users/${username}/events`, opts)
            .toPromise();
        return metaData.data;
    }
}
