package com.iamneo.security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.iamneo.security.entity.*;
import com.iamneo.security.repository.courseRepo;
import com.iamneo.security.repository.employeeRepo;
import com.iamneo.security.repository.leaveRepo;
import com.iamneo.security.repository.projectRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/emp")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class EmployeeController {
	@Autowired(required=true)
	private employeeRepo erepo;
	@PostMapping("/addemp")
    public Employee addemp(@RequestBody Employee p) {
    	return erepo.save(p);
    }
   
    @GetMapping("/findemp")
    public List<Employee> findemp(){
    	return erepo.findAll();
    }
    @GetMapping("/findemp/{id}")
    public Optional<Employee> findid(@PathVariable("id") int id) {
    	return erepo.findById(id);
    }
    @PutMapping("/updateemp")
    public void update(@RequestBody Employee p) {
    	erepo.saveAndFlush(p);
    }
    @DeleteMapping("/del/{id}")
    public void delete(@PathVariable("id") int id) {
    	erepo.deleteById(id);
    }
}
	
