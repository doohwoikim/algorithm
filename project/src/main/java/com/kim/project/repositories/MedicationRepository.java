package com.kim.project.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.kim.project.models.Medication;

public interface MedicationRepository extends CrudRepository<Medication, Long> {
	List<Medication> findAll();
}
