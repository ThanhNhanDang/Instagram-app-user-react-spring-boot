package com.thanhnhandev.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thanhnhandev.entity.Status;
import com.thanhnhandev.repository.StatusRepository;

@Service
public class StatusService {
	private StatusRepository statusRepository;
	private UserService userService;

	public StatusService(StatusRepository statusRepository, UserService userService) {
		super();
		this.statusRepository = statusRepository;
		this.userService = userService;
	}

	public Status submitStatus(Status status) {
		return statusRepository.save(status);
	}

	public List<Status> getAllStatus() {
		List<Status> list = statusRepository.findAll();
		for (Status status : list) {
			status.setUserName(userService.displayUserMetaData(status.getUserId()).getUserName());
		}
		return statusRepository.findAll();
	}
}
