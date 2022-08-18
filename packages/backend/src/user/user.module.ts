import { Module } from '@nestjs/common';
import {PrismaService} from "@src/prisma/prisma.service";
import {UserService} from "@src/user/user.service";

@Module({
  providers: [UserService, PrismaService]
})
export class UserModule {}
