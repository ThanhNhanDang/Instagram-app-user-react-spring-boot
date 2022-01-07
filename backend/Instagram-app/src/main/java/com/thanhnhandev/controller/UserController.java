package com.thanhnhandev.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanhnhandev.entity.Users;
import com.thanhnhandev.service.UserService;

@RestController
@RequestMapping("/api/users")
public class UserController {
	
	private UserService userService;
	
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}

	@PostMapping
	private boolean submitUser(@RequestBody Users user) {
		userService.submitMetaDataOfUser(user);
		return true;
	}
	
	@GetMapping("/{userId}")
	private Users getUserDetails(@PathVariable("userId") String userId) {
		Users user = userService.displayUserMetaData(userId);
		return user;
	}
}
