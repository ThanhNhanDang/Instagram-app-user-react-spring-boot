package com.thanhnhandev.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thanhnhandev.entity.Comments;
import com.thanhnhandev.service.CommentService;

@RestController
@RequestMapping("/api/comment")
public class CommentController {
	private CommentService commentService;

	public CommentController(CommentService commentService) {
		super();
		this.commentService = commentService;
	}
	
	@PostMapping("")
	public Comments submitComments(@RequestBody Comments comments) {
		return this.commentService.submitComment(comments);
	}
	
	@GetMapping("/{postId}")
	public List<Comments> getAllCommentsByPostId(@PathVariable("postId") String postId){
		return commentService.getAllCommentsByPostId(postId);
	}

}
