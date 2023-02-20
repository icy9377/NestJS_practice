import { SandBoxService } from './sandbox.service';
export declare class SandBoxController {
    private readonly userService;
    constructor(userService: SandBoxService);
    sandBoxOn(): string;
    excelCompare(): Promise<string>;
}
