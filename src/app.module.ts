import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { UserModule } from './user/user.module'
import { UserService } from './user/user.service'
import { SandBoxService } from './sandbox/sandbox.service'
import { SandBoxModule } from './sandbox/sandbox.module'

@Module({
	imports: [UserModule, SandBoxModule],
	controllers: [AppController],
	providers: [AppService, UserService, SandBoxService],
})
export class AppModule {}
