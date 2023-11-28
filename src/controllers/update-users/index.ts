import { MongoUpdateUsersRepository } from '../../repositories/update-user/mongo-update-user'
import { UpdateUsersController } from './update-user'

const mongoUpdateUsersRepository = new MongoUpdateUsersRepository()

export const updateUsersController = new UpdateUsersController(
  mongoUpdateUsersRepository
)
