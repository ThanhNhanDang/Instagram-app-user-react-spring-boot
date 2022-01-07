package com.thanhnhandev.service;

import org.springframework.stereotype.Service;

import com.thanhnhandev.entity.Users;
import com.thanhnhandev.repository.UserRepository;

@Service
public class UserService {

	private UserRepository userRepository;
	
	public UserService(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	public Users submitMetaDataOfUser(Users user) {
		return userRepository.save(user);
	}
	
	public Users displayUserMetaData(String userId) {
		Users user = userRepository.findByUserId(userId);
		return user;
	}
}
