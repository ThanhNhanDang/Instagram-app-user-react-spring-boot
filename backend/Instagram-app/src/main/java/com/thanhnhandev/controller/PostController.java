package com.thanhnhandev.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanhnhandev.entity.Post;
import com.thanhnhandev.service.PostService;

@RestController
@RequestMapping("/api/post")
public class PostController {
	private PostService postService;

	public PostController(PostService postService) {
		super();
		this.postService = postService;
	}
	
	@PostMapping("")
	public Post submitPost(@RequestBody Post post) {
		return postService.submitPost(post);
	}
	@GetMapping("")
	public List<Post> getAllPost() {
		return postService.getAllPost();
	}
	
}
