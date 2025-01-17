import { User } from '@/infra/database/entities/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddUserRepository } from '@/modules/user/repositories/add-user/add-user-repository';
import { LoadAllUsersRepository } from '@/modules/user/repositories/load-all-users/load-all-users.repository';
import { LoadUserByEmailRepository } from '@/modules/user/repositories/load-user-by-email/load-user-by-email.repository';
import { LoadUserByNameRepository } from '@/modules/user/repositories/load-user-by-name/load-yser-by-name-repository';
import { DeleteUserRepository } from '@/modules/user/repositories/delete-user/delete-user.repository';
import { UpdateUserRepository } from '@/modules/user/repositories/update-user/update-user.repository';
import { LoadUserByIdRepository } from '@/modules/user/repositories/load-user-by-id/load-user-by-id.repository';
import { Hasher } from '@/infra/cryptography/hasher/hasher';
import { HashComparer } from '@/infra/cryptography/hash-comparer/hash-comparer';
import { AddUserService } from '@/modules/user/services/add-user/add-user.service';
import { UserController } from '@/modules/user/controllers/user.controller';
import { LoadUserByIdService } from '@/modules/user/services/load-user-by-id/load-user-by-id.service';
import { DeleteUserService } from '@/modules/user/services/delete-user/delete-user.service';
import { UpdateUserService } from '@/modules/user/services/update-user/update-user.service';
import { LoadAllUsersService } from '@/modules/user/services/load-all-users/load-all-users.service';
import { LoadUserIdToAuthService } from '@/modules/user/services/load-user-auth-by-id/load-user-auth-by-id.service';
import { LoadUserProfileService } from '@/modules/user/services/load-user-profile/load-user-profile.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      LoadAllUsersRepository,
      LoadUserByEmailRepository,
      LoadUserByNameRepository,
      LoadUserByIdRepository,
      DeleteUserRepository,
      UpdateUserRepository,
    ]),
  ],
  providers: [
    AddUserRepository,
    Hasher,
    HashComparer,
    AddUserService,
    UpdateUserService,
    LoadUserByIdService,
    LoadAllUsersService,
    DeleteUserService,
    LoadUserIdToAuthService,
    LoadUserProfileService,
  ],
  controllers: [UserController],
})
export class UserModule {}
