package com.iamneo.security.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.iamneo.security.entity.Course;


public interface courseRepo extends JpaRepository<Course,Integer> {

}