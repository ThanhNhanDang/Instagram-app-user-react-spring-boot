package com.thanhnhandev.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanhnhandev.entity.Status;
import com.thanhnhandev.service.StatusService;

@RestController
@RequestMapping("/api/status")
public class StatusController {
	private StatusService statusService;

	public StatusController(StatusService statusService) {
		super();
		this.statusService = statusService;
	}
	
	@PostMapping("")
	private Status SubmitStatus(@RequestBody Status status) {
		return statusService.submitStatus(status);
	}
	
	@GetMapping("")
	private List<Status> getAllStatus(){
		return statusService.getAllStatus();
	}
}
