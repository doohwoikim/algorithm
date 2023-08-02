package com.kim.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.kim.project.models.Medication;
import com.kim.project.repositories.MedicationRepository;

public class MedicationService {
	@Autowired
	private MedicationRepository medicationRepo;

	public List<Medication> allMedications() {
		return medicationRepo.findAll();
	}

	public Medication createMedication(Medication newMedication) {
		return medicationRepo.save(newMedication);
	}

	public Medication findMedication(Long id) {
		Optional<Medication> optionalMedication = medicationRepo.findById(id);
		if (optionalMedication.isPresent()) {
			return optionalMedication.get();
		} else {
			return null;
		}
	}

	public Medication updateMedication(Medication oneMedication) {
		return medicationRepo.save(oneMedication);
	}

	public void removeMedication(Long id) {
		medicationRepo.deleteById(id);
	}
}
