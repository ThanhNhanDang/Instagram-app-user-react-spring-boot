package com.thanhnhandev.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.thanhnhandev.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Integer>{

}
