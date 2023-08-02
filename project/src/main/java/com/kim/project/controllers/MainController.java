package com.kim.project.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kim.project.models.Medication;
import com.kim.project.repositories.MedicationRepository;

@RestController
public class MainController {

	@Autowired
	private MedicationRepository medicationRepo;

	@GetMapping("/users/medications")
	public List<Medication> retrieveMedications() {
		return medicationRepo.findAll();
	}

	@GetMapping("/users/medications/{id}")
	public Medication retrieveMedication(@PathVariable("id") Long id) {
		return medicationRepo.findById(id).get();
	}

	@PostMapping("/users/medications")
	public Medication createMedication(@RequestBody Medication medication) {
		medication.setId(null);
		return medicationRepo.save(medication);
	}

	@PutMapping("/users/medications/{id}")
	public Medication updateMedication(@PathVariable Long id, @RequestBody Medication medication) {
		medicationRepo.save(medication);
		return medication;
	}

	@DeleteMapping("/users/medications/{id}")
	public ResponseEntity<Void> deleteMedication(@PathVariable Long id) {
		medicationRepo.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
