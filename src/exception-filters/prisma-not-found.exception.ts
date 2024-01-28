import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { Response } from "express";

@Catch(Prisma.PrismaClientKnownRequestError)
export class PrismaNotFoundException implements ExceptionFilter {
    catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost) {
        const context = host.switchToHttp()

        const response = context.getResponse<Response>()

        let message = exception.meta?.cause ?? exception.message

        if (exception.code === 'P2025') {
            response.status(404).json({
                statusCode: 404,
                message
            })
        } else {
            response.status(500).json({
                statusCode: 500,
                message
            })
        }
    }

}