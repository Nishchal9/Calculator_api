import { Controller, Get, Query } from '@nestjs/common';

@Controller('calculator')
export class CalculatorController {
    @Get('add')
    add(@Query('a') a: number, @Query('b') b: number): number {
        return a + b;
    }

    @Get('subtract')
    subtract(@Query('a') a: number, @Query('b') b: number): number {
        return a - b;
    }

    @Get('multiply')
    multiply(@Query('a') a: number, @Query('b') b: number): number {
        return a * b;
    }

    @Get('divide')
    divide(@Query('a') a: number, @Query('b') b: number): number {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
}