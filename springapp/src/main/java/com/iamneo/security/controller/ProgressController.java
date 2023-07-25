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
import com.iamneo.security.repository.employeeRepo;
import com.iamneo.security.repository.progressRepo;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/prog")
@RequiredArgsConstructor
@CrossOrigin(origins="*")
public class ProgressController {
	@Autowired(required=true)
	private progressRepo erepo;
	@PostMapping("/addprog")
    public Progress addprog(@RequestBody Progress p) {
    	return erepo.save(p);
    }
   
    @GetMapping("/findprog/{id}")
    public Optional<Progress> findemp(@PathVariable("id") int id){
    	return erepo.findById(id);
    }

}
