package me.pljr.users.service

import me.pljr.users.model.User
import me.pljr.users.repository.UserRepository
import org.springframework.stereotype.Service

@Service
class UserService(private val repository: UserRepository) {

    fun saveUser(user: User) = repository.save(user)

    fun getAllUsers() = repository.findAll()

    fun findUserById(id: Long) = repository.getById(id)

    fun updateUser(id: Long, updatedUser: User) : User {
        val user = this.findUserById(id)
        user.firstName = updatedUser.firstName
        user.lastName = updatedUser.lastName
        user.emailAddress = updatedUser.emailAddress
        return this.saveUser(user)
    }

    fun deleteUserById(id: Long) = repository.deleteById(id)
}