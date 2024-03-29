package me.pljr.users

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.cloud.netflix.eureka.EnableEurekaClient

@SpringBootApplication
@EnableEurekaClient
class UsersApplication

fun main(args: Array<String>) {
    runApplication<UsersApplication>(*args)
}
