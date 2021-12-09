package me.pljr.users.repository

import me.pljr.users.model.User
import org.springframework.data.jpa.repository.JpaRepository

interface UserRepository : JpaRepository<User, Long>