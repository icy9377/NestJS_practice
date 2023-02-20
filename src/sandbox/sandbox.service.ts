import { Injectable } from '@nestjs/common'
const excelJS = require('exceljs')

@Injectable()
export class SandBoxService {
	sandBoxOn() {
		return `SandBox Service is working`
	}

	async compareExcel() {
		const workbook = new excelJS.Workbook()
		await workbook.xlsx.readFile('/src/sandbox/excela.xlsx')
		const worksheet = workbook.getWorksheet('결제내역')
		const data = worksheet.getSheetValues()
		console.log(data)
		return 'success'
	}
}
