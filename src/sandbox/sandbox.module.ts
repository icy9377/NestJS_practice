import { Module } from '@nestjs/common'
import { SandBoxController } from './sandbox.controller'
import { SandBoxService } from './sandbox.service'

@Module({
	controllers: [SandBoxController],
	providers: [SandBoxService],
})
export class SandBoxModule {}
