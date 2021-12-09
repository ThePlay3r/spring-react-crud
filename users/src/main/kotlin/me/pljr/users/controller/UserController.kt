package me.pljr.users.controller

import me.pljr.users.model.User
import me.pljr.users.service.UserService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/users")
class UserController(private val service: UserService) {

    @PostMapping("/")
    fun saveUser(@RequestBody user: User) : User {
        return service.saveUser(user)
    }

    @GetMapping("/")
    fun getAllUsers(): List<User> = service.getAllUsers()

    @GetMapping("/{id}")
    fun findUserById(@PathVariable id: Long) : User {
        return service.findUserById(id)
    }

    @PutMapping("/{id}")
    fun updateUser(@PathVariable id: Long, @RequestBody user: User) : User {
        return service.updateUser(id, user)
    }

    @DeleteMapping("/{id}")
    fun deleteUserById(@PathVariable id: Long) : ResponseEntity<Any> {
        service.deleteUserById(id)
        return ResponseEntity.ok().build()
    }
}