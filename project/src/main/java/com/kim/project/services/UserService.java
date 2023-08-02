package com.kim.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.kim.project.models.User;
import com.kim.project.repositories.UserRepository;

public class UserService {
	@Autowired
	private UserRepository userRepo;

	public List<User> allUsers() {
		return userRepo.findAll();
	}

	public User createUser(User newUser) {
		return userRepo.save(newUser);
	}

	public User findUser(Long id) {
		Optional<User> optionalUser = userRepo.findById(id);
		if (optionalUser.isPresent()) {
			return optionalUser.get();
		} else {
			return null;
		}
	}

	public User updateUser(User oneUser) {
		return userRepo.save(oneUser);
	}

	public void removeUser(Long id) {
		userRepo.deleteById(id);
	}

}
