import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import excelJS from 'exceljs'
import { SandBoxService } from './sandbox.service'

@Controller('sandbox')
export class SandBoxController {
	constructor(private readonly userService: SandBoxService) {}

	@Get('/test')
	sandBoxOn() {
		return this.userService.sandBoxOn()
	}

	@Get('/excel/compare')
	async excelCompare() {
		return this.userService.compareExcel()
	}
}
