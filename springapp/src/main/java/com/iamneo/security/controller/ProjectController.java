package com.iamneo.security.controller;

import java.util.List;

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
@RequestMapping("/api/v1/proj")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class ProjectController {
	
	@Autowired(required=true)
	private projectRepo prepo;
	@GetMapping("/findproj")
    public List<Project> findproj(){
    	return prepo.findAll();
    }
	@GetMapping("/findactiveproj")
    public Integer findactiveproj(){
    	return prepo.findAllActive();
    }
	@GetMapping("/findassignproj")
    public Integer findaproj(){
    	return prepo.findAllassigned();
    }
	@GetMapping("/findcancelproj")
    public Integer findpproj(){
    	return prepo.findAllcancelled();
    }
	@GetMapping("/findallproj")
    public Integer findpproja(){
    	return prepo.findAllproj();
    }
    
    @PostMapping("/addproj")
    public Project addproj(@RequestBody Project p) {
    	return prepo.save(p);
    }
}
