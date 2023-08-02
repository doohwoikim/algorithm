package com.kim.project.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kim.project.models.User;

public interface UserRepository extends CrudRepository<User, Long> {
	List<User> findAll();
}
