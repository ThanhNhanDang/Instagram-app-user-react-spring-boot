package com.thanhnhandev.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.thanhnhandev.entity.Comments;
import com.thanhnhandev.repository.CommentRepository;

@Service
public class CommentService {

	private CommentRepository commentRepository;
	private UserService userService;

	public CommentService(CommentRepository commentRepository, UserService userService) {
		super();
		this.commentRepository = commentRepository;
		this.userService = userService;
	}
	
	public Comments submitComment(Comments comments) {
		return this.commentRepository.save(comments);
	}
	
	public List<Comments> getAllCommentsByPostId(String postId){
		List<Comments> comments = this.commentRepository.findByPostId(postId);
		
		for(Comments entity : comments) {
			entity.setUserName(this.userService.displayUserMetaData(entity.getUserId()).getUserName());
		}
		
		return  comments;
	}
}
