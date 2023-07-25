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
import com.iamneo.security.service.AuthenticationService;



import com.iamneo.security.dto.request.UserRequest;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/demo")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class DemoController {
	@Autowired(required=true)
	private employeeRepo erepo;
	
	@Autowired(required=true)
	private courseRepo crepo;
	@Autowired(required=true)
	private projectRepo prepo;
	@Autowired(required=true)
	private leaveRepo lrepo;
	private final AuthenticationService userService;
	@PostMapping("/addUserFeedback")
	public ResponseEntity<String> addUserFeedback(@RequestBody UserRequest userRequest){
		userService.addUserFeedback(userRequest);
		return ResponseEntity.status(HttpStatus.OK).body("Feedback added!");
	}
	

    @GetMapping("/hello")
    public ResponseEntity<String> saymHello() {
        return ResponseEntity.ok("Hello! biot");
    }
    @GetMapping("/hello1")
    public ResponseEntity<String> saymeHello() {
        return ResponseEntity.ok("Hello! biot");
    }
    
    @PostMapping("/addemp")
    public Employee addemp(@RequestBody Employee p) {
    	return erepo.save(p);
    }
    @PostMapping("/addleave")
    public Leave addleave(@RequestBody Leave p) {
    	return lrepo.save(p);
    }
    @GetMapping("/findemp")
    public List<Employee> findemp(){
    	return erepo.findAll();
    }
    @PostMapping("/addcrs")
    public Course addcrs(@RequestBody Course p) {
    	return crepo.save(p);
    }
    @GetMapping("/findcrs")
    public List<Course> findcrs(){
    	return crepo.findAll();
    }
    @PostMapping("/addproj")
    public Project addproj(@RequestBody Project p) {
    	return prepo.save(p);
    }
    @GetMapping("/findproj")
    public List<Project> findproj(){
    	return prepo.findAll();
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
