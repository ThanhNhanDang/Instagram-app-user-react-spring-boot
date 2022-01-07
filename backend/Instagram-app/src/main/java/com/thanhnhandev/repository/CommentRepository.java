package com.thanhnhandev.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.thanhnhandev.entity.Comments;

@Repository
public interface CommentRepository extends JpaRepository<Comments, Long>{
	@Query("select comment FROM Comments comment WHERE comment.postId = :postId")
	List<Comments> findByPostId(String postId);
}
