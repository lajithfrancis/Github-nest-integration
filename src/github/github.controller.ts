import { Controller, Get, Query } from '@nestjs/common';
import { UserEventQuery } from './dto/query.dto';
import { GithubService } from './github.service';

@Controller('github')
export class GithubController {
    constructor(
        private readonly githubService: GithubService
    ) { }

    @Get('user/events')
    async getGithubUserEvents(@Query() query: UserEventQuery) {
        return await this.githubService.getGithubUserEvents(query);
    }
}
