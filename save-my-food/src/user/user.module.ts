import { Module } from "@nestjs/common";
import { userController } from "./user.controller";
import { userService } from "./user.service";

@Module({
    controllers: [userController],
    providers: [userService],
    exports: [],
})
export class userModule {

}