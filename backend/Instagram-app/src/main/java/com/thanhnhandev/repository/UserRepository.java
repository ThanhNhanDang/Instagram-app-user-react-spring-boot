package com.thanhnhandev.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.thanhnhandev.entity.Users;

@Repository
public interface UserRepository extends CrudRepository<Users, Long>{
	@Query("select user FROM Users user WHERE user.userId = :userId")
	Users findByUserId(String userId);
}
