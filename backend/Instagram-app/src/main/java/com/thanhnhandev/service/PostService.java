package com.thanhnhandev.service;

import java.util.Collections;
import java.util.List;

import org.springframework.stereotype.Service;

import com.thanhnhandev.entity.Post;
import com.thanhnhandev.repository.PostRepository;

@Service
public class PostService {
	private PostRepository postRepository;
	private UserService userService;
	
	public PostService(PostRepository postRepository, UserService userService) {
		super();
		this.postRepository = postRepository;
		this.userService = userService;
	}
	
	public Post submitPost(Post post) {
		return postRepository.save(post);
	}
	
	public List<Post> getAllPost(){
		List<Post> list = postRepository.findAll();
		for(Post post : list) {
			post.setUserName(userService.displayUserMetaData(post.getUserId()).getUserName());
		}
		Collections.sort(list,(a,b)->b.getId()-a.getId());
		return  list;
	}
	
}
